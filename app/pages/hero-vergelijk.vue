<template>
  <div>
    <!-- Tijdelijke werkpagina om hero-ontwerpen naast elkaar te beoordelen.
         Noindex, niet in de sitemap, en gaat eruit zodra de keuze er is.

         De foto is in alle varianten dezelfde, zodat je de opzet vergelijkt en
         niet het beeld. Welke foto het wordt is een losse keuze. -->

    <!-- ── Variant: zoals nu ─────────────────────────────────────────────── -->
    <PageHero v-if="actief === 'nu'" image="/v2/hero-keuze-c">
      <div class="flex w-full flex-col items-center justify-center gap-2.5 text-center text-white lg:w-[564px]">
        <h1 class="text-[29px] font-extrabold leading-[37px] text-shadow-hero-mobile lg:text-display lg:text-shadow-hero">
          Uw partner in
          <span class="italic text-greendee-green">duurzame energieoplossingen.</span>
        </h1>
        <p class="text-[16px] font-medium leading-[26px] text-shadow-hero-sub lg:text-body">{{ INTRO }}</p>
      </div>
      <div class="flex flex-col items-center gap-3 sm:flex-row">
        <span class="rounded-2xl bg-greendee-yellow px-5 py-4 text-[16px] font-bold text-greendee-ink">Ontdek onze oplossingen</span>
        <span class="rounded-2xl border border-white px-5 py-4 text-[16px] font-bold text-white">Bekijk onze projecten</span>
      </div>
    </PageHero>

    <!-- ── Variant A: gesplitst ──────────────────────────────────────────── -->
    <section v-else-if="actief === 'a'" class="relative bg-greendee-green-darkest">
      <!-- Het menu loopt over beide helften; zonder waas valt het rechts weg
           tegen de lucht. -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[120px]"
        style="background-image: linear-gradient(180deg, rgba(2,65,0,0.65) 0%, rgba(2,65,0,0) 100%)"
      />
      <AppHeader />
      <div class="mx-auto grid w-full max-w-[1440px] lg:grid-cols-2">
        <div class="flex flex-col justify-center gap-6 px-5 py-16 lg:px-20 lg:py-24">
          <p class="text-[15px] font-bold text-greendee-yellow">Netcongestie opgelost</p>
          <h1 class="text-[34px] font-extrabold leading-[42px] text-white lg:text-[52px] lg:leading-[60px]">
            Uw ambitie past wél binnen uw aansluiting.
          </h1>
          <p class="max-w-[480px] text-[16px] font-medium leading-7 text-white/80">{{ INTRO }}</p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <span class="rounded-2xl bg-greendee-yellow px-5 py-4 text-center text-[16px] font-bold text-greendee-ink">Plan een gesprek in</span>
            <span class="rounded-2xl border border-white/40 px-5 py-4 text-center text-[16px] font-bold text-white">Bekijk onze projecten</span>
          </div>
          <div class="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div v-for="cijfer in CIJFERS" :key="cijfer.label">
              <p class="text-[26px] font-extrabold leading-8 text-greendee-yellow">{{ cijfer.waarde }}</p>
              <p class="text-[13px] font-medium text-white/70">{{ cijfer.label }}</p>
            </div>
          </div>
        </div>
        <div class="relative min-h-[320px] lg:min-h-[640px]">
          <img src="/v2/hero-keuze-c-2400.jpg" alt="" class="absolute inset-0 size-full object-cover">
        </div>
      </div>
    </section>

    <!-- ── Variant B: links uitgelijnd met scrim ─────────────────────────── -->
    <section v-else-if="actief === 'b'" class="relative h-[640px] overflow-hidden lg:h-[760px]">
      <img src="/v2/hero-keuze-c-2400.jpg" alt="" class="absolute inset-0 size-full object-cover">
      <div
        aria-hidden="true"
        class="absolute inset-0"
        style="background-image: linear-gradient(90deg, rgba(2,65,0,0.92) 0%, rgba(2,65,0,0.72) 38%, rgba(2,65,0,0.25) 70%, rgba(2,65,0,0) 100%)"
      />
      <AppHeader />
      <div class="relative mx-auto flex h-full w-full max-w-container flex-col justify-center gap-6 px-5 lg:px-0">
        <p class="text-[15px] font-bold text-greendee-yellow">Netcongestie opgelost</p>
        <h1 class="max-w-[660px] text-[34px] font-extrabold leading-[42px] text-white lg:text-[54px] lg:leading-[62px]">
          Uw ambitie past wél binnen uw aansluiting.
        </h1>
        <p class="max-w-[520px] text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">{{ INTRO }}</p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <span class="rounded-2xl bg-greendee-yellow px-6 py-4 text-center text-[16px] font-bold text-greendee-ink">Plan een gesprek in</span>
          <span class="rounded-2xl border border-white/50 px-6 py-4 text-center text-[16px] font-bold text-white">Bekijk onze projecten</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-x-10 gap-y-4">
          <div v-for="cijfer in CIJFERS" :key="cijfer.label" class="border-l-2 border-greendee-yellow pl-4">
            <p class="text-[24px] font-extrabold leading-7 text-white">{{ cijfer.waarde }}</p>
            <p class="text-[13px] font-medium text-white/70">{{ cijfer.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Variant C: gecentreerd met scrim en cijferbalk ────────────────── -->
    <section v-else class="relative h-[640px] overflow-hidden lg:h-[760px]">
      <img src="/v2/hero-keuze-c-2400.jpg" alt="" class="absolute inset-0 size-full object-cover">
      <div aria-hidden="true" class="absolute inset-0 bg-greendee-green-darkest/55" />
      <AppHeader />
      <div class="relative mx-auto flex h-full w-full max-w-[760px] flex-col items-center justify-center gap-6 px-5 text-center">
        <p class="text-[15px] font-bold text-greendee-yellow">Netcongestie opgelost</p>
        <h1 class="text-[34px] font-extrabold leading-[42px] text-white lg:text-[54px] lg:leading-[62px]">
          Uw ambitie past wél binnen uw aansluiting.
        </h1>
        <p class="text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">{{ INTRO }}</p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <span class="rounded-2xl bg-greendee-yellow px-6 py-4 text-[16px] font-bold text-greendee-ink">Plan een gesprek in</span>
          <span class="rounded-2xl border border-white/50 px-6 py-4 text-[16px] font-bold text-white">Bekijk onze projecten</span>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 border-t border-white/15 bg-greendee-green-darkest/70 backdrop-blur-sm">
        <div class="mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-14 gap-y-3 px-5 py-5 lg:px-0">
          <div v-for="cijfer in CIJFERS" :key="cijfer.label" class="flex items-baseline gap-2">
            <span class="text-[20px] font-extrabold text-greendee-yellow">{{ cijfer.waarde }}</span>
            <span class="text-[14px] font-medium text-white/80">{{ cijfer.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Keuzebalk ─────────────────────────────────────────────────────── -->
    <section class="bg-white px-5 py-12 lg:px-36">
      <div class="mx-auto w-full max-w-container">
        <p class="text-[15px] font-bold text-greendee-green">Vergelijken</p>
        <h2 class="mt-1 text-[28px] font-extrabold leading-9 text-greendee-ink">Welke hero wordt het?</h2>
        <p class="mt-2 max-w-[660px] text-[15px] font-medium leading-[26px] text-gray-600">
          De foto is overal dezelfde, zodat je de opzet beoordeelt en niet het beeld.
          Wat er verandert: de tekst staat op een echte donkere ondergrond in plaats van
          op een schaduwrandje, de kop zegt wat u oplost in plaats van wie wij zijn, en
          er staan cijfers bij die het claimen onderbouwen.
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <button
            v-for="optie in OPTIES"
            :key="optie.sleutel"
            type="button"
            class="max-w-[280px] rounded-2xl border-[1.5px] px-4 py-3 text-left transition-colors"
            :class="optie.sleutel === actief ? 'border-greendee-green bg-[#ecf4eb]' : 'border-gray-200 hover:border-greendee-green'"
            @click="actief = optie.sleutel"
          >
            <span class="block text-[15px] font-bold text-greendee-ink">{{ optie.naam }}</span>
            <span class="mt-0.5 block text-[13px] font-medium leading-5 text-gray-500">{{ optie.toelichting }}</span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const INTRO = 'GreenDee rekent met eigen software door wat er binnen uw aansluiting nog kan, '
  + 'en begeleidt u van businesscase tot realisatie en bewaking.'

// Allemaal cijfers die elders op de site al staan, zodat de hero niets belooft
// wat de rest van de site niet waarmaakt.
const CIJFERS = [
  { waarde: '28', label: 'projecten gerealiseerd' },
  { waarde: '4,5', label: 'van 5 sterren' },
  { waarde: '5+', label: 'jaar ervaring' },
]

const OPTIES = [
  { sleutel: 'nu', naam: 'Zoals nu', toelichting: 'Gecentreerd, tekst met schaduw op de foto' },
  { sleutel: 'a', naam: 'A — gesplitst', toelichting: 'Tekst op een groen vlak, foto ernaast' },
  { sleutel: 'b', naam: 'B — links met scrim', toelichting: 'Foto schermbreed, groen verloop van links' },
  { sleutel: 'c', naam: 'C — gecentreerd met cijferbalk', toelichting: 'Donkere waas over de foto, cijfers onderaan' },
] as const

const actief = ref<'nu' | 'a' | 'b' | 'c'>('b')

useSeo({
  titel: 'Hero vergelijken',
  beschrijving: 'Tijdelijke werkpagina om varianten van de homepage-hero naast elkaar te zetten.',
})
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
