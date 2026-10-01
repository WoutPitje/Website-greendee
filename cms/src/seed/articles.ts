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

// De bronnen onder elk bericht stonden eerst als platte tekst in de seed; de
// URL's zaten als hyperlink in het Word-bestand en zijn er later uit gehaald.
// Deze migratie zet het bronnenblok om naar markdown-links, maar alleen als het
// nog letterlijk gelijk is aan wat de seed heeft geplaatst. Heeft een redacteur
// de tekst aangepast, dan blijft die staan.
async function linkSources(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'articles-sources-linked' })
  if (await store.get()) return

  const kaartPad = path.join(SEED_DIR, 'articles-bronnen-links.json')
  if (!fs.existsSync(kaartPad)) return

  const kaart: Record<string, { oud: string, nieuw: string }> = JSON.parse(fs.readFileSync(kaartPad, 'utf8'))
  const docs = strapi.documents('api::article.article')
  let bijgewerkt = 0
  let overgeslagen = 0

  for (const [slug, blok] of Object.entries(kaart)) {
    const [entry] = await docs.findMany({ filters: { slug }, limit: 1, status: 'draft' })
    if (!entry) continue

    const body = String(entry.body ?? '')
    if (body.includes(blok.nieuw)) continue
    if (!body.includes(blok.oud)) { overgeslagen++; continue }

    const nieuweBody = body.replace(blok.oud, blok.nieuw)
    await docs.update({ documentId: entry.documentId, data: { body: nieuweBody }, status: 'draft' })
    bijgewerkt++
  }

  strapi.log.info(`[seed] bronnen gelinkt in ${bijgewerkt} berichten, ${overgeslagen} handmatig aangepast en overgeslagen`)
  await store.set({ value: true })
}

// De vorige stap schrijft naar het concept. Een bericht dat al gepubliceerd is
// houdt daarnaast een eigen gepubliceerde versie, en díe serveert de publieke
// API. Hier wordt zo'n bericht opnieuw gepubliceerd zodat de gelinkte bronnen
// ook echt op de site staan. Een bericht dat nog concept is, blijft concept.
async function republishLinked(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'articles-sources-republished' })
  if (await store.get()) return

  const kaartPad = path.join(SEED_DIR, 'articles-bronnen-links.json')
  if (!fs.existsSync(kaartPad)) return

  const kaart: Record<string, { oud: string, nieuw: string }> = JSON.parse(fs.readFileSync(kaartPad, 'utf8'))
  const docs = strapi.documents('api::article.article')
  let opnieuw = 0

  for (const [slug, blok] of Object.entries(kaart)) {
    const [live] = await docs.findMany({ filters: { slug }, limit: 1, status: 'published' })
    if (!live) continue
    if (String(live.body ?? '').includes(blok.nieuw)) continue

    const [concept] = await docs.findMany({ filters: { slug }, limit: 1, status: 'draft' })
    if (!concept || !String(concept.body ?? '').includes(blok.nieuw)) continue

    await docs.publish({ documentId: concept.documentId })
    opnieuw++
  }

  if (opnieuw) strapi.log.info(`[seed] ${opnieuw} gepubliceerde berichten bijgewerkt met de gelinkte bronnen`)
  await store.set({ value: true })
}

const IMAGE_DIR = path.join(SEED_DIR, 'images')

const MIME_BY_EXT: Record<string, string> = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
}

interface HeroImage {
  bestand: string
  alt: string
  /** Waar de foto vandaan komt, zodat de herkomst naleesbaar blijft. */
  herkomst: string
  licentie: string
}

async function uploadImage(strapi: Core.Strapi, hero: HeroImage) {
  const filepath = path.join(IMAGE_DIR, hero.bestand)
  if (!fs.existsSync(filepath)) {
    strapi.log.warn(`[seed] foto niet gevonden, bericht krijgt er geen: ${hero.bestand}`)
    return null
  }

  const stats = fs.statSync(filepath)
  const ext = path.extname(hero.bestand).toLowerCase()

  const uploaded = await strapi.plugin('upload').service('upload').upload({
    data: {
      fileInfo: {
        name: hero.bestand,
        alternativeText: hero.alt,
        caption: `${hero.licentie} — ${hero.herkomst}`,
      },
    },
    files: {
      filepath,
      originalFilename: hero.bestand,
      mimetype: MIME_BY_EXT[ext] ?? 'application/octet-stream',
      size: stats.size,
    },
  })

  return Array.isArray(uploaded) ? uploaded[0] : uploaded
}

// Zet een sfeerbeeld boven elk nieuwsbericht. De foto's zijn CC0 of publiek
// domein, dus ze vragen geen naamsvermelding; de herkomst staat in het bijschrift
// in de mediabibliotheek zodat die naleesbaar blijft.
//
// Een bericht dat al een eigen foto heeft blijft ongemoeid: zodra een redacteur
// er zelf een kiest, is dat het laatste woord.
async function attachHeroImages(strapi: Core.Strapi) {
  const store = strapi.store({ type: 'plugin', name: 'greendee', key: 'articles-heroimages-attached' })
  if (await store.get()) return

  const kaartPad = path.join(SEED_DIR, 'articles-heroimages.json')
  if (!fs.existsSync(kaartPad)) return

  const kaart: Record<string, HeroImage> = JSON.parse(fs.readFileSync(kaartPad, 'utf8'))
  const docs = strapi.documents('api::article.article')
  let gezet = 0
  let overgeslagen = 0
  let mislukt = 0

  for (const [slug, hero] of Object.entries(kaart)) {
    const [concept] = await docs.findMany({
      filters: { slug }, limit: 1, status: 'draft', populate: ['heroImage'],
    })
    if (!concept) continue
    if (concept.heroImage) { overgeslagen++; continue }

    const image = await uploadImage(strapi, hero)
    if (!image) { mislukt++; continue }

    await docs.update({ documentId: concept.documentId, data: { heroImage: image.id }, status: 'draft' })

    // Net als bij de bronnen: het concept is bijgewerkt, maar de site leest de
    // gepubliceerde versie. Alleen opnieuw publiceren wat al gepubliceerd was.
    const [live] = await docs.findMany({ filters: { slug }, limit: 1, status: 'published' })
    if (live) await docs.publish({ documentId: concept.documentId })

    gezet++
  }

  strapi.log.info(
    `[seed] foto gezet bij ${gezet} berichten, ${overgeslagen} hadden er al een, ${mislukt} mislukt`,
  )

  // Alleen latchen als er niets is blijven liggen, zodat een ontbrekend bestand
  // bij de volgende boot opnieuw wordt geprobeerd.
  if (mislukt === 0) await store.set({ value: true })
}

export async function seedArticles(strapi: Core.Strapi) {
  for (const batch of BATCHES) {
    await runBatch(strapi, batch)
  }
  await linkSources(strapi)
  await republishLinked(strapi)
  await attachHeroImages(strapi)
}
