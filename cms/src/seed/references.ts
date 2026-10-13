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
  imageIsLogo?: boolean
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
          // Allebei zolang het oude veld nog verplicht in het schema staat.
          // `status` gaat eruit zodra de migratie bevestigd is.
          status: entry.status ?? 'Gerealiseerd',
          projectStatus: entry.status ?? 'Gerealiseerd',
          description: entry.description,
          featured: Boolean(entry.featured),
          imageIsLogo: Boolean(entry.imageIsLogo),
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

// `imageIsLogo` was added after a batch had already been imported, so flag the
// entries the seed data marks as logos. Runs once; after that it is the
// editor's field to change.
async function markLogos(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'logos-marked' })
  if (await store.get()) return

  const slugs = new Set<string>()
  for (const batch of BATCHES) {
    const seedFile = path.join(SEED_DIR, batch.file)
    if (!fs.existsSync(seedFile)) continue
    const entries: SeedReference[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
    entries.filter(e => e.imageIsLogo).forEach(e => slugs.add(e.slug))
  }

  const docs = strapi.documents('api::reference.reference')
  let updated = 0

  for (const slug of slugs) {
    const [entry] = await docs.findMany({ filters: { slug }, limit: 1 })
    if (!entry || entry.imageIsLogo) continue
    await docs.update({
      documentId: entry.documentId,
      data: { imageIsLogo: true },
      status: 'published',
    })
    updated++
  }

  if (updated) strapi.log.info(`[seed] marked ${updated} references as logo`)
  await store.set({ value: true })
}

// Re-uploads a seed image for entries whose picture was corrected after import
// (De Methorst was upside down). Bump the store key when another correction
// needs to go out; the old file stays in the media library.
const IMAGE_REFRESH = {
  storeKey: 'image-refresh-1',
  slugs: ['de-methorst'],
}

async function refreshImages(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: IMAGE_REFRESH.storeKey })
  if (await store.get()) return

  const byslug = new Map<string, SeedReference>()
  for (const batch of BATCHES) {
    const seedFile = path.join(SEED_DIR, batch.file)
    if (!fs.existsSync(seedFile)) continue
    const entries: SeedReference[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
    entries.forEach(e => byslug.set(e.slug, e))
  }

  const docs = strapi.documents('api::reference.reference')

  for (const slug of IMAGE_REFRESH.slugs) {
    const seed = byslug.get(slug)
    const [entry] = await docs.findMany({ filters: { slug }, limit: 1 })
    if (!seed || !entry) {
      strapi.log.warn(`[seed] cannot refresh image for "${slug}"`)
      continue
    }

    const image = await uploadImage(strapi, seed.image)
    if (!image) continue

    await docs.update({
      documentId: entry.documentId,
      data: { image: image.id },
      status: 'published',
    })
    strapi.log.info(`[seed] refreshed image for "${slug}"`)
  }

  await store.set({ value: true })
}

// `status` bleek een gereserveerde veldnaam in Strapi 5, naast documentId,
// locale en publishedAt. Via de document-service was hij nog te schrijven
// (de waarde zit daar genest in `data`), maar in het adminpaneel en over de
// REST-API wordt `status` onderschept als concept/gepubliceerd. Gevolg: elke
// referentie was wel te lezen en niet meer op te slaan — het paneel gaf
// "Invalid status". Daarom heet het veld nu `projectStatus`.
//
// Deze migratie zet de bestaande waarden over.
//
// De sleutel heeft een -v2: de eerste poging schreef alleen naar de
// concepten. `update` raakt in Strapi 5 namelijk altijd het concept, ook als
// je er `status: 'published'` bij meegeeft — dat is een filter, geen opdracht
// om te publiceren. De site leest de gepubliceerde versie en zag dus niets.
// Daarom publiceren we hier expliciet na het bijwerken.
async function migrateStatusNaarProjectStatus(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'projectstatus-gemigreerd-v2' })
  if (await store.get()) return

  const docs = strapi.documents('api::reference.reference')
  let overgezet = 0
  let opnieuwGepubliceerd = 0

  // Via de concepten, want elk document heeft er een; gepubliceerde versies
  // zijn een afgeleide daarvan.
  const alle = await docs.findMany({ status: 'draft', limit: 500 })

  for (const entry of alle) {
    const { documentId } = entry

    // Was dit document gepubliceerd? Dan moet de nieuwe waarde daar ook heen.
    const gepubliceerd = await docs.findOne({ documentId, status: 'published' })

    const bron = (gepubliceerd ?? entry) as Record<string, unknown>
    const oud = bron.status
    // Een record dat nooit een geldige waarde had telt als opgeleverd werk.
    const waarde = oud === 'In ontwikkeling' || oud === 'Gerealiseerd' ? oud : 'Gerealiseerd'

    await docs.update({ documentId, data: { projectStatus: waarde } })
    overgezet++

    if (gepubliceerd) {
      await docs.publish({ documentId })
      opnieuwGepubliceerd++
    }
  }

  strapi.log.info(
    `[seed] projectStatus gevuld op ${overgezet} referenties, waarvan ${opnieuwGepubliceerd} opnieuw gepubliceerd`,
  )
  await store.set({ value: true })
}

export async function seedReferences(strapi: Core.Strapi) {
  for (const batch of BATCHES) {
    await runBatch(strapi, batch)
  }
  await backfillStatus(strapi)
  await migrateStatusNaarProjectStatus(strapi)
  await markLogos(strapi)
  await refreshImages(strapi)
}
