<template>
  <div class="flex min-h-screen flex-col">
    <!-- The header is part of each page's hero (see PageHero), because the design
         pins it inside the hero frame rather than over the whole page. -->
    <main class="flex-grow">
      <slot />
    </main>

    <SiteFooter />

    <CookieBanner />
  </div>
</template>
