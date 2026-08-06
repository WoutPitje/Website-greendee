import fs from 'node:fs'
import path from 'node:path'
import type { Core } from '@strapi/strapi'

// Imports reference projects that were delivered as Word documents. Each batch
// runs once against the live database and then latches, so content an editor
// changed afterwards is never overwritten.
//
// Add a new batch by dropping a JSON file in data/seed and appending it here.

const SEED_DIR = path.join(__dirname, '..', '..', '..', 'data', 'seed')
const IMAGE_DIR = path.join(SEED_DIR, 'images')

interface SeedBatch {
  file: string
  storeKey: string
  /** The first batch is the initial migration: it must not touch a database
   *  that already holds content. Later batches add to what is there. */
  onlyWhenEmpty?: boolean
}

const BATCHES: SeedBatch[] = [
  { file: 'references.json', storeKey: 'references-seeded', onlyWhenEmpty: true },
  { file: 'references-2026-08.json', storeKey: 'references-2026-08-seeded' },
]

const MIME_BY_EXT: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

type Category = 'Energiehandel' | 'Netcongestie' | 'Energie-optimalisatie' | 'Elektrificatie'
type Status = 'Gerealiseerd' | 'In ontwikkeling'

interface SeedReference {
  slug: string
  title: string
  location: string
  capacity?: string
  specs?: string
  category: Category
  status?: Status
  description: string
  featured?: boolean
  image?: string
}

async function uploadImage(strapi: Core.Strapi, filename?: string) {
  if (!filename) return null

  const filepath = path.join(IMAGE_DIR, filename)
  if (!fs.existsSync(filepath)) {
    strapi.log.warn(`[seed] image not found, entry gets no image: ${filename}`)
    return null
  }

  const stats = fs.statSync(filepath)
  const ext = path.extname(filename).toLowerCase()

  const uploaded = await strapi.plugin('upload').service('upload').upload({
    data: {},
    files: {
      filepath,
      originalFilename: filename,
      mimetype: MIME_BY_EXT[ext] ?? 'application/octet-stream',
      size: stats.size,
    },
  })

  return Array.isArray(uploaded) ? uploaded[0] : uploaded
}

async function runBatch(strapi: Core.Strapi, batch: SeedBatch) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: batch.storeKey })
  if (await store.get()) return

  const seedFile = path.join(SEED_DIR, batch.file)
  if (!fs.existsSync(seedFile)) {
    strapi.log.warn(`[seed] ${batch.file} not found, skipping`)
    return
  }

  const docs = strapi.documents('api::reference.reference')

  if (batch.onlyWhenEmpty) {
    const existing = await docs.count({})
    if (existing > 0) {
      strapi.log.info(`[seed] ${existing} references present, skipping ${batch.file}`)
      await store.set({ value: true })
      return
    }
  }

  const entries: SeedReference[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
  let imported = 0
  let skipped = 0

  for (const entry of entries) {
    try {
      // Slugs are unique, so this keeps a re-run from creating duplicates.
      const already = await docs.findMany({ filters: { slug: entry.slug }, limit: 1 })
      if (already.length) {
        skipped++
        continue
      }

      const image = await uploadImage(strapi, entry.image)

      await docs.create({
        data: {
          title: entry.title,
          slug: entry.slug,
          location: entry.location,
          capacity: entry.capacity ?? '',
          specs: entry.specs ?? '',
          category: entry.category,
          status: entry.status ?? 'Gerealiseerd',
          description: entry.description,
          featured: Boolean(entry.featured),
          ...(image ? { image: image.id } : {}),
        },
        status: 'published',
      })

      imported++
    } catch (err) {
      strapi.log.error(`[seed] failed to import "${entry.slug}": ${err}`)
    }
  }

  strapi.log.info(
    `[seed] ${batch.file}: imported ${imported}, already present ${skipped}, of ${entries.length}`,
  )

  // Only latch when nothing was left behind, so a partial run retries next boot.
  if (imported + skipped === entries.length) {
    await store.set({ value: true })
  }
}

// `status` was added after the first 17 were already imported, so those rows
// have no value. Fill them in once, otherwise the field shows up empty in the
// admin and an editor has to pick a value before they can save anything else.
async function backfillStatus(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'status-backfilled' })
  if (await store.get()) return

  const docs = strapi.documents('api::reference.reference')
  const missing = await docs.findMany({ filters: { status: { $null: true } }, limit: 500 })

  for (const entry of missing) {
    await docs.update({
      documentId: entry.documentId,
      data: { status: 'Gerealiseerd' },
      status: 'published',
    })
  }

  if (missing.length) {
    strapi.log.info(`[seed] backfilled status on ${missing.length} references`)
  }
  await store.set({ value: true })
}

export async function seedReferences(strapi: Core.Strapi) {
  for (const batch of BATCHES) {
    await runBatch(strapi, batch)
  }
  await backfillStatus(strapi)
}
