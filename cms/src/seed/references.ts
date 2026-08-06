import fs from 'node:fs'
import path from 'node:path'
import type { Core } from '@strapi/strapi'

// One-off import of the 17 projects that used to live in the website's
// app/data/references.ts. Runs on boot against an empty database so a fresh
// deploy fills itself; a flag in the core store keeps it from re-importing
// content an editor has since changed or deleted.

const SEED_DIR = path.join(__dirname, '..', '..', '..', 'data', 'seed')
const IMAGE_DIR = path.join(SEED_DIR, 'images')

const MIME_BY_EXT: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

interface SeedReference {
  slug: string
  title: string
  location: string
  capacity: string
  category: string
  description: string
  featured: boolean
  image: string
}

function seedStore(strapi: Core.Strapi) {
  return strapi.store({ type: 'plugin', name: 'greendee', key: 'references-seeded' })
}

async function uploadImage(strapi: Core.Strapi, filename: string) {
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

export async function seedReferences(strapi: Core.Strapi) {
  if (await seedStore(strapi).get()) return

  const seedFile = path.join(SEED_DIR, 'references.json')
  if (!fs.existsSync(seedFile)) {
    strapi.log.warn('[seed] references.json not found, skipping')
    return
  }

  // Never overwrite a database that already holds content.
  const existing = await strapi.documents('api::reference.reference').count({})
  if (existing > 0) {
    strapi.log.info(`[seed] ${existing} references already present, skipping import`)
    await seedStore(strapi).set({ value: true })
    return
  }

  const entries: SeedReference[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
  let imported = 0

  for (const entry of entries) {
    try {
      const image = await uploadImage(strapi, entry.image)

      await strapi.documents('api::reference.reference').create({
        data: {
          title: entry.title,
          slug: entry.slug,
          location: entry.location,
          capacity: entry.capacity,
          category: entry.category,
          description: entry.description,
          featured: entry.featured,
          ...(image ? { image: image.id } : {}),
        },
        status: 'published',
      })

      imported++
    } catch (err) {
      strapi.log.error(`[seed] failed to import "${entry.slug}": ${err}`)
    }
  }

  strapi.log.info(`[seed] imported ${imported}/${entries.length} references`)

  // Only latch when everything landed, so a partial run retries next boot.
  if (imported === entries.length) {
    await seedStore(strapi).set({ value: true })
  }
}
