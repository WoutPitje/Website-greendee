// Eén plek voor alles wat een pagina aan zoekmachines en sociale media vertelt.
//
// Zonder dit zette elke pagina alleen een titel en een description, en viel de
// rest terug op de algemene tags uit nuxt.config. Gevolg: elke gedeelde link
// liet dezelfde tekst zien en helemaal geen afbeelding, en er was nergens een
// canonical. Deze composable zet dat per pagina goed.

interface SeoOpties {
  /** Zonder " | GreenDee"; dat plakt deze composable eraan. */
  titel: string
  beschrijving: string
  /**
   * Deelafbeelding. Een pad onder /og (zonder extensie) wordt aangevuld, een
   * pad dat met / begint wordt absoluut gemaakt, en een volledige URL blijft
   * zoals hij is. Leeg laten valt terug op het standaardbeeld.
   */
  afbeelding?: string
  type?: 'website' | 'article'
  /** Alleen voor artikelen: publicatiedatum als ISO-string. */
  gepubliceerd?: string
  auteur?: string
}

export function useSeo(opties: MaybeRefOrGetter<SeoOpties>) {
  const route = useRoute()
  const { siteUrl } = useRuntimeConfig().public

  const basis = String(siteUrl).replace(/\/+$/, '')

  // Querystrings horen niet in een canonical: ze maken van één pagina
  // onnodig veel adressen die allemaal hetzelfde tonen.
  const canonical = computed(() => `${basis}${route.path === '/' ? '' : route.path}`)

  const gegevens = computed(() => toValue(opties))

  const afbeelding = computed(() => {
    const bron = gegevens.value.afbeelding
    if (!bron) return `${basis}/og/standaard.jpg`
    if (/^https?:\/\//i.test(bron)) return bron
    if (bron.startsWith('/')) return `${basis}${bron}`
    return `${basis}/og/${bron}.jpg`
  })

  // Alleen de zelf uitgesneden beelden in /og zijn gegarandeerd 1200x630. Een
  // foto uit het CMS heeft een eigen formaat, en dan is het beter om de maat
  // helemaal niet op te geven dan een verkeerde.
  const eigenFormaat = computed(() => afbeelding.value.startsWith(`${basis}/og/`))

  useHead(() => {
    const { titel, beschrijving, type = 'website', gepubliceerd, auteur } = gegevens.value
    const volledigeTitel = `${titel} | GreenDee`

    return {
      title: volledigeTitel,
      link: [{ rel: 'canonical', href: canonical.value }],
      meta: [
        { name: 'description', content: beschrijving },

        { property: 'og:title', content: volledigeTitel },
        { property: 'og:description', content: beschrijving },
        { property: 'og:url', content: canonical.value },
        { property: 'og:type', content: type },
        { property: 'og:image', content: afbeelding.value },
        ...(eigenFormaat.value
          ? [
              { property: 'og:image:width', content: '1200' },
              { property: 'og:image:height', content: '630' },
            ]
          : []),

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: volledigeTitel },
        { name: 'twitter:description', content: beschrijving },
        { name: 'twitter:image', content: afbeelding.value },

        ...(type === 'article' && gepubliceerd
          ? [{ property: 'article:published_time', content: gepubliceerd }]
          : []),
        ...(type === 'article' && auteur
          ? [{ property: 'article:author', content: auteur }]
          : []),
      ],
    }
  })

  return { canonical, afbeelding }
}
