<template>
  <div>
    <!-- Tijdelijke pagina om hero-varianten naast elkaar te beoordelen. Hoort
         niet in de sitemap en niet in het menu, en gaat eruit zodra de keuze
         gemaakt is. -->
    <PageHero :key="actief.bestand" :image="actief.bestand">
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

      <div class="flex flex-col items-center gap-3 sm:flex-row">
        <span class="flex items-center justify-center rounded-2xl bg-greendee-yellow px-5 py-4 text-[16px] font-bold text-greendee-ink">
          Ontdek onze oplossingen
        </span>
        <span class="flex items-center justify-center rounded-2xl border border-white px-5 py-4 text-[16px] font-bold text-white">
          Bekijk onze projecten
        </span>
      </div>
    </PageHero>

    <section class="bg-white px-5 py-12 lg:px-36">
      <div class="mx-auto w-full max-w-container">
        <p class="text-[15px] font-bold leading-[26px] text-greendee-green">Vergelijken</p>
        <h2 class="mt-1 text-[28px] font-extrabold leading-9 text-greendee-ink">
          Welke hero wordt het?
        </h2>
        <p class="mt-2 max-w-[640px] text-[15px] font-medium leading-[26px] text-gray-600">
          Klik een variant aan; de hero hierboven wisselt mee. De uitsnede is nu voor
          alle varianten gelijk en staat afgestemd op de windmolenfoto, dus bij de
          gekozen foto stel ik die nog apart af.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            v-for="optie in opties"
            :key="optie.bestand"
            type="button"
            class="rounded-2xl border-[1.5px] px-4 py-3 text-left transition-colors"
            :class="optie.bestand === actief.bestand
              ? 'border-greendee-green bg-[#ecf4eb]'
              : 'border-gray-200 bg-white hover:border-greendee-green'"
            @click="actief = optie"
          >
            <span class="block text-[15px] font-bold text-greendee-ink">{{ optie.naam }}</span>
            <span class="block text-[13px] font-medium text-gray-500">{{ optie.toelichting }}</span>
          </button>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="optie in opties"
            :key="`beeld-${optie.bestand}`"
            type="button"
            class="overflow-hidden rounded-2xl border-[1.5px] text-left transition-colors"
            :class="optie.bestand === actief.bestand ? 'border-greendee-green' : 'border-gray-200 hover:border-greendee-green'"
            @click="actief = optie"
          >
            <img :src="`${optie.bestand}-1280.jpg`" :alt="optie.naam" class="h-[170px] w-full object-cover">
            <span class="block px-4 py-3 text-[14px] font-bold text-greendee-ink">{{ optie.naam }}</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const opties = [
  { naam: 'Nu live', bestand: '/v2/hero-home', toelichting: 'Windmolens boven het maisveld' },
  { naam: 'A — batterijen', bestand: '/v2/hero-keuze-a', toelichting: 'Rij batterijkasten op locatie' },
  { naam: 'B — op locatie', bestand: '/v2/hero-keuze-b', toelichting: 'Aangeleverde homepagefoto 2' },
  { naam: 'C — molens, steviger', bestand: '/v2/hero-keuze-c', toelichting: 'Zelfde foto, meer contrast en kleur' },
  { naam: 'D — gesprek', bestand: '/v2/hero-keuze-d', toelichting: 'Overleg op de bank' },
  { naam: 'E — aan tafel', bestand: '/v2/hero-keuze-e', toelichting: 'Tafel met tablet en GreenDee op het scherm' },
]

const actief = ref(opties[0]!)

useSeo({
  titel: 'Hero vergelijken',
  beschrijving: 'Tijdelijke werkpagina om de varianten van de homepage-hero naast elkaar te zetten.',
})

// Werkpagina: hoort nooit in een zoekmachine terecht te komen.
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
