import fs from 'node:fs'
import path from 'node:path'
import type { Core } from '@strapi/strapi'

// Importeert nieuwsberichten uit data/seed. Net als bij de referenties draait
// elke batch één keer en latcht daarna, zodat tekst die een redacteur in de
// admin heeft aangepast nooit door een herdeploy wordt overschreven.
//
// Berichten komen binnen als concept. De publicatievolgorde is redactioneel
// (deadlines eerst, daarna wekelijks) en sommige berichten vragen een controle
// op de publicatiedag, dus dat is een knop in de admin en niet iets wat deze
// seeder voor GreenDee beslist.

const SEED_DIR = path.join(__dirname, '..', '..', '..', 'data', 'seed')

interface ArticleBatch {
  file: string
  storeKey: string
}

const BATCHES: ArticleBatch[] = [
  { file: 'articles-2026-10.json', storeKey: 'articles-2026-10-seeded' },
]

// Moet overeenkomen met de enum in het content-type, anders klaagt de
// typegeneratie van Strapi over een gewone string.
type Categorie = 'Techniek' | 'Subsidies' | 'Wetgeving' | 'Netcongestie' | 'Nieuws'

interface SeedArticle {
  slug: string
  title: string
  summary: string
  category: Categorie
  author?: string
  publishedDate: string
  featured?: boolean
  body: string
}

async function runBatch(strapi: Core.Strapi, batch: ArticleBatch) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: batch.storeKey })
  if (await store.get()) return

  const seedFile = path.join(SEED_DIR, batch.file)
  if (!fs.existsSync(seedFile)) {
    strapi.log.warn(`[seed] ${batch.file} niet gevonden, overgeslagen`)
    return
  }

  const docs = strapi.documents('api::article.article')
  const entries: SeedArticle[] = JSON.parse(fs.readFileSync(seedFile, 'utf8'))
  let imported = 0
  let skipped = 0

  for (const entry of entries) {
    try {
      // Slug is uniek, dus een herhaalde run maakt geen dubbelen.
      const already = await docs.findMany({ filters: { slug: entry.slug }, limit: 1, status: 'draft' })
      if (already.length) {
        skipped++
        continue
      }

      await docs.create({
        data: {
          title: entry.title,
          slug: entry.slug,
          summary: entry.summary,
          category: entry.category,
          author: entry.author ?? 'Lars van Dee',
          publishedDate: entry.publishedDate,
          featured: Boolean(entry.featured),
          body: entry.body,
        },
        status: 'draft',
      })

      imported++
    } catch (err) {
      strapi.log.error(`[seed] "${entry.slug}" mislukt: ${err}`)
    }
  }

  strapi.log.info(
    `[seed] ${batch.file}: ${imported} geïmporteerd, ${skipped} bestonden al, van ${entries.length}`,
  )

  // Pas latchen als alles binnen is, zodat een halve run bij de volgende boot
  // opnieuw wordt geprobeerd.
  if (imported + skipped === entries.length) {
    await store.set({ value: true })
  }
}

export async function seedArticles(strapi: Core.Strapi) {
  for (const batch of BATCHES) {
    await runBatch(strapi, batch)
  }
}
