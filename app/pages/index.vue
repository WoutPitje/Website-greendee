<template>
  <div>
    <PageHero image="/v2/hero-home">
      <div class="flex w-full flex-col items-center justify-center gap-2.5 text-center text-white lg:w-[564px]">
        <h1
          class="text-[29px] font-extrabold leading-[37px] tracking-[0.87px] text-shadow-hero-mobile lg:text-display lg:tracking-[0.48px] lg:text-shadow-hero"
        >
          Uw partner in
          <span class="italic text-greendee-green">duurzame energieoplossingen.</span>
        </h1>
        <p class="text-[16px] font-medium leading-[26px] tracking-[0.48px] text-shadow-hero-sub lg:text-body lg:tracking-[0.54px]">
          GreenDee helpt bedrijventerreinen, MKB'ers en agrariërs bij het opzetten,
          monitoren en onderhouden van toekomstbestendige energieoplossingen.
        </p>
      </div>

      <div class="flex w-full flex-col items-center justify-center gap-3 lg:w-auto lg:flex-row lg:gap-24">
        <NuxtLink
          to="/offertetrajecten"
          class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-3.5 text-[16px] font-bold leading-[22px] text-greendee-ink lg:px-5 lg:py-4 lg:text-body"
        >
          Ontdek onze oplossingen
        </NuxtLink>
        <NuxtLink
          to="/projecten"
          class="flex w-[286px] items-center justify-center rounded-full border-2 border-white px-5 py-4 text-[16px] font-bold leading-[22px] text-white text-shadow-hero-sub lg:text-body lg:text-shadow-none"
        >
          Bekijk onze projecten
        </NuxtLink>
      </div>
    </PageHero>

    <HomeOverGreenDeeSection />

    <HomeOplossingenSection />

    <HomeDoelgroepSection />

    <HomeTrustedBySection />

    <TestimonialsSection />

    <HomeProjectenSection />

    <HomeWaaromSection />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Uw partner in duurzame energieoplossingen',
  beschrijving:
    'GreenDee helpt MKB-bedrijven, agrariers en bedrijventerreinen verder ondanks netcongestie: van energiesimulatie en businesscase tot realisatie en bewaking.',
  afbeelding: 'home',
})
</script>
