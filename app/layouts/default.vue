<template>
  <div class="flex min-h-screen flex-col">
    <!-- The header is part of each page's hero (see PageHero), because the design
         pins it inside the hero frame rather than over the whole page. -->
    <main class="flex-grow">
      <slot />
    </main>

    <SiteFooter />

    <!-- De balk bestaat alleen in de browser: of hij nodig is hangt af van de
         hostnaam en van een keuze in localStorage, en die kent de server geen
         van beide. Zonder ClientOnly verschijnt hij midden in de hydratie en
         klaagt Vue terecht dat server en browser niet overeenkomen. -->
    <ClientOnly>
      <CookieBanner />
    </ClientOnly>
  </div>
</template>
