// Toestemming voor statistiekcookies.
//
// Google Analytics zet cookies, en die mogen in Nederland pas worden geplaatst
// nadat de bezoeker daar ja op heeft gezegd. Daarom wordt er niets van Google
// geladen tot die keuze er is: niet het script, niet de cookie, geen enkel
// verzoek. Weigeren betekent dus echt dat er nooit contact met Google is.
//
// De keuze zelf staat in localStorage. Dat is de uitzondering die wel mag
// zonder toestemming, omdat je anders bij elke pagina opnieuw moet vragen.

export type Keuze = 'onbekend' | 'geaccepteerd' | 'geweigerd'

const SLEUTEL = 'greendee-cookiekeuze'

/** Domeinen waarop daadwerkelijk gemeten wordt. */
const LIVE_HOSTS = /^(www\.)?greendee\.nl$/

/**
 * Of er uberhaupt iets te kiezen valt. Alleen op de live domeinnaam met een
 * ingesteld meet-ID draait Google Analytics; lokaal en op staging gebeurt er
 * niets en hoort er dus ook geen cookiebalk te staan.
 *
 * De toets kijkt naar de hostnaam in de browser en niet naar siteUrl uit de
 * configuratie: die staat lokaal ook op greendee.nl, en dan zou een ontwikkelaar
 * echte bezoeken in de statistieken schieten.
 */
export function useAnalyticsBeschikbaar() {
  if (!useRuntimeConfig().public.gaId) return false
  if (import.meta.server) return false
  return LIVE_HOSTS.test(window.location.hostname)
}

export function useCookieConsent() {
  const keuze = useState<Keuze>('cookiekeuze', () => 'onbekend')

  // Pas na het mounten lezen: op de server bestaat localStorage niet, en als de
  // server iets anders zou renderen dan de browser klopt de hydratie niet meer.
  const gelezen = useState<boolean>('cookiekeuze-gelezen', () => false)

  function lees() {
    if (import.meta.server || gelezen.value) return
    try {
      const opgeslagen = localStorage.getItem(SLEUTEL)
      if (opgeslagen === 'geaccepteerd' || opgeslagen === 'geweigerd') {
        keuze.value = opgeslagen
      }
    }
    catch {
      // Privémodus of geblokkeerde opslag: dan blijft de keuze onbekend en
      // vragen we het opnieuw. Niets laden is hier het veilige gedrag.
    }
    gelezen.value = true
  }

  function bewaar(nieuw: Exclude<Keuze, 'onbekend'>) {
    keuze.value = nieuw
    try {
      localStorage.setItem(SLEUTEL, nieuw)
    }
    catch { /* zie hierboven */ }
  }

  // Toestemming intrekken moet net zo eenvoudig zijn als geven. Dit wist de
  // opgeslagen keuze, waarna de balk opnieuw verschijnt. Google Analytics is op
  // dat moment al geladen; dat stopt pas bij de volgende paginalading, dus de
  // bezoeker krijgt dat ook te zien.
  function wis() {
    keuze.value = 'onbekend'
    try {
      localStorage.removeItem(SLEUTEL)
    }
    catch { /* zie hierboven */ }
  }

  return {
    keuze,
    gelezen,
    lees,
    wis,
    accepteer: () => bewaar('geaccepteerd'),
    weiger: () => bewaar('geweigerd'),
  }
}
