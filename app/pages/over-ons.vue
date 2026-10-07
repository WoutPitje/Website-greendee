<template>
  <div>
    <InnerPageHero
      eyebrow="Over ons"
      title="Persoonlijke aanpak. Professioneel en duurzaam resultaat."
      intro="GreenDee ondersteunt u bij het realiseren van toekomstbestendige energieoplossingen, met focus op netcongestie, stijgende energiekosten en elektrificatie."
      image="/v2/hero-over-ons"
      image-alt="Het team van GreenDee in gesprek"
      cta-label=""
    />

    <section class="flex flex-col items-center bg-white px-5 py-16 lg:px-0 lg:py-24">
      <div class="flex w-full max-w-container flex-col items-center gap-10 lg:flex-row lg:gap-[72px]">
        <div class="h-[300px] w-full shrink-0 overflow-hidden rounded-2xl shadow-[0px_8px_4px_0px_rgba(0,0,0,0.25)] lg:h-[440px] lg:w-[560px]">
          <picture>
            <source srcset="/v2/over-ons-locatie-1280.webp 1280w, /v2/over-ons-locatie-2400.webp 2400w" type="image/webp">
            <img
              src="/v2/over-ons-locatie-1280.jpg"
              alt="GreenDee op locatie bij een klant"
              class="size-full object-cover"
              width="560"
              height="440"
            >
          </picture>
        </div>

        <!-- Kop, quote en onderste alinea zijn vervangen volgens de v2-feedback. -->
        <div class="flex flex-1 flex-col items-start gap-5">
          <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
            Wij verkopen geen los advies. Wij verkopen duurzame investeringsbesluiten.
          </h2>
          <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-[17px] lg:leading-[27px]">
            Steeds meer ondernemers lopen vast. Niet omdat ze geen offertes kunnen
            opvragen, maar omdat ze hun totale energievraagstuk niet overzien:
            netcongestie, subsidies, financiering, netbeheerder, energiecontracten,
            leveranciers, terugverdientijden en vergunningen.
          </p>
          <p class="text-[14px] font-bold text-greendee-green">Lars van Dee · oprichter GreenDee</p>
        </div>
      </div>
    </section>

    <OveronsDnaSection />

    <OveronsDuurzaamheidsscoreSection />

    <OveronsTeamSection />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Over ons',
  beschrijving:
    'GreenDee verkoopt geen los advies, maar duurzame investeringsbesluiten. Lees waar wij voor staan.',
  afbeelding: 'over-ons',
})
</script>
