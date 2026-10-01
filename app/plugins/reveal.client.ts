// Laat secties rustig invaren zodra ze in beeld komen.
//
// Als plugin in plaats van per component, zodat elke pagina het vanzelf krijgt.
// De stand zit in een data-attribuut en niet in een class: class en style
// worden door Vue vergeleken bij hydration, een eigen data-attribuut niet.
// Anders levert elke sectie een hydration-mismatch op.
//
// De eerste sectie van een pagina is de hero en staat al in beeld; die krijgt
// meteen de eindstand, anders knippert hij bij het laden.

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  function koppel() {
    observer?.disconnect()

    const secties = document.querySelectorAll<HTMLElement>('main section')
    const stil = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (stil) {
      secties.forEach(el => el.setAttribute('data-onthul', 'klaar'))
      return
    }

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          el.setAttribute('data-onthul', 'klaar')
          // Transform weghalen zodra hij klaar is: een blijvende transform maakt
          // van de sectie een containing block, wat sticky en fixed erin breekt.
          el.addEventListener('transitionend', () => el.removeAttribute('data-onthul'), { once: true })
          observer?.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    secties.forEach((el, index) => {
      if (index === 0) return
      el.setAttribute('data-onthul', 'wacht')
      observer!.observe(el)
    })
  }

  // Pas na hydration, anders schrijft dit in de DOM waar Vue nog mee bezig is.
  function naHydration() {
    requestAnimationFrame(() => requestAnimationFrame(koppel))
  }

  nuxtApp.hook('app:suspense:resolve', naHydration)
  nuxtApp.hook('page:finish', naHydration)
})
