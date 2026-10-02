// Sitemap met de vaste pagina's plus elk gepubliceerd nieuwsbericht uit Strapi.
//
// Met de hand bijhouden gaat een keer mis zodra er een bericht bij komt, dus de
// nieuwsberichten worden bij elke aanvraag opgehaald. Is het CMS even niet
// bereikbaar, dan komt de sitemap met alleen de vaste pagina's terug: liever
// een incomplete sitemap dan een foutpagina waar een crawler op stukloopt.

const VASTE_PAGINAS: { pad: string, prioriteit: string, frequentie: string }[] = [
  { pad: '/', prioriteit: '1.0', frequentie: 'weekly' },
  { pad: '/offertetrajecten', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/energiesimulaties', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/business-cases', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/energiecontracten', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/monitoring', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/energyhubs', prioriteit: '0.8', frequentie: 'monthly' },
  { pad: '/projecten', prioriteit: '0.7', frequentie: 'monthly' },
  { pad: '/over-ons', prioriteit: '0.6', frequentie: 'yearly' },
  { pad: '/nieuws', prioriteit: '0.7', frequentie: 'weekly' },
  { pad: '/vacatures', prioriteit: '0.5', frequentie: 'monthly' },
  { pad: '/contact', prioriteit: '0.6', frequentie: 'yearly' },
  { pad: '/algemene-voorwaarden', prioriteit: '0.3', frequentie: 'yearly' },
  { pad: '/privacyverklaring', prioriteit: '0.3', frequentie: 'yearly' },
]

interface StrapiArticle {
  slug?: string
  publishedDate?: string
  updatedAt?: string
}

function escape(waarde: string) {
  return waarde.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const basis = String(config.public.siteUrl).replace(/\/+$/, '')

  let artikelen: StrapiArticle[] = []
  try {
    const res = await $fetch<{ data?: StrapiArticle[] }>(`${config.strapiUrl}/api/articles`, {
      query: {
        'fields[0]': 'slug',
        'fields[1]': 'publishedDate',
        'fields[2]': 'updatedAt',
        'pagination[pageSize]': 500,
      },
    })
    artikelen = res?.data ?? []
  }
  catch (err) {
    console.error('[sitemap] nieuwsberichten niet opgehaald:', err)
  }

  const regels = [
    ...VASTE_PAGINAS.map(({ pad, prioriteit, frequentie }) =>
      `  <url>\n    <loc>${basis}${pad === '/' ? '' : pad}</loc>\n`
      + `    <changefreq>${frequentie}</changefreq>\n    <priority>${prioriteit}</priority>\n  </url>`,
    ),
    ...artikelen
      .filter(a => a.slug)
      .map((a) => {
        const datum = (a.updatedAt ?? a.publishedDate ?? '').slice(0, 10)
        return `  <url>\n    <loc>${basis}/nieuws/${escape(a.slug!)}</loc>\n`
          + (datum ? `    <lastmod>${datum}</lastmod>\n` : '')
          + `    <changefreq>yearly</changefreq>\n    <priority>0.6</priority>\n  </url>`
      }),
  ]

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')
  setHeader(event, 'cache-control', 'public, max-age=3600')

  return `<?xml version="1.0" encoding="UTF-8"?>\n`
    + `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${regels.join('\n')}\n</urlset>\n`
})
