// Laadt Google Analytics, maar alleen als aan drie voorwaarden is voldaan:
//
//   1. er is een meet-ID ingesteld;
//   2. we draaien op de live domeinnaam, zodat staging en lokaal ontwikkelen
//      de statistieken niet vervuilen (de GA4-stream staat op greendee.nl);
//   3. de bezoeker heeft toestemming gegeven.
//
// Tot dat moment wordt er niets van Google opgehaald. Dat is bewust strenger
// dan alleen de cookies uitzetten: zonder toestemming hoort er ook geen
// verzoek naar Google te gaan, want dan ziet Google alsnog het IP-adres.

export default defineNuxtPlugin(() => {
  const id = String(useRuntimeConfig().public.gaId || '')
  if (!useAnalyticsBeschikbaar()) return

  const { keuze, lees } = useCookieConsent()
  lees()

  let geladen = false

  function laad() {
    if (geladen) return
    geladen = true

    const w = window as unknown as { dataLayer?: unknown[], gtag?: (...args: unknown[]) => void }
    w.dataLayer = w.dataLayer || []
    // Hier moet een echt `arguments`-object in de dataLayer, geen gewone array.
    // Google leest de dataLayer letterlijk uit en herkent alleen die eerste
    // vorm als opdracht; een array wordt zonder enige foutmelding genegeerd.
    // Het verschil is onzichtbaar: het script van Google laadt dan keurig,
    // maar er wordt niets gemeten.
    const gtag: (...args: unknown[]) => void = function () {
      w.dataLayer!.push(arguments)
    }
    w.gtag = gtag

    gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    })
    gtag('consent', 'update', { analytics_storage: 'granted' })

    gtag('js', new Date())
    gtag('config', id, { anonymize_ip: true })

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
    document.head.appendChild(script)

    // Nuxt wisselt van pagina zonder de browser te laten navigeren, dus de
    // paginaweergaven daarna moeten we zelf doorgeven.
    const router = useRouter()
    router.afterEach((naar) => {
      gtag('event', 'page_view', {
        page_path: naar.fullPath,
        page_location: window.location.href,
        page_title: document.title,
      })
    })
  }

  watch(keuze, (nieuw) => {
    if (nieuw === 'geaccepteerd') laad()
  }, { immediate: true })
})
