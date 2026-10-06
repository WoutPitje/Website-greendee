<template>
  <div>
    <!-- Tijdelijke werkpagina om hero-ontwerpen naast elkaar te beoordelen.
         Noindex, niet in de sitemap, en gaat eruit zodra de keuze er is.

         De foto is in alle varianten dezelfde, zodat je de opzet vergelijkt en
         niet het beeld. Welke foto het wordt is een losse keuze. -->

    <!-- ── Zoals nu ──────────────────────────────────────────────────────── -->
    <PageHero v-if="actief === 'nu'" :image="FOTO">
      <div class="flex w-full flex-col items-center justify-center gap-2.5 text-center text-white lg:w-[564px]">
        <h1 class="text-[29px] font-extrabold leading-[37px] text-shadow-hero-mobile lg:text-display lg:text-shadow-hero">
          Uw partner in
          <span class="italic text-greendee-green">duurzame energieoplossingen.</span>
        </h1>
        <p class="text-[16px] font-medium leading-[26px] text-shadow-hero-sub lg:text-body">{{ INTRO }}</p>
      </div>
      <div class="flex flex-col items-center gap-3 sm:flex-row">
        <span :class="KNOP_GEEL">Ontdek onze oplossingen</span>
        <span :class="KNOP_RAND">Bekijk onze projecten</span>
      </div>
    </PageHero>

    <!-- ── A: gesplitst ──────────────────────────────────────────────────── -->
    <!-- De foto beslaat de rechterhelft van het scherm en loopt door tot de
         rand. De tekstkolom is precies de linkerhelft van de container, zodat
         hij op de logo's en het menu uitlijnt in plaats van 64px te vroeg te
         beginnen. -->
    <section v-else-if="actief === 'a'" class="relative overflow-hidden bg-greendee-green-darkest">
      <div class="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <img :src="`${FOTO}-2400.jpg`" alt="" class="size-full object-cover">
      </div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[120px]"
        style="background-image: linear-gradient(180deg, rgba(2,65,0,0.65) 0%, rgba(2,65,0,0) 100%)"
      />
      <AppHeader />

      <div class="relative mx-auto w-full max-w-container px-5 lg:px-0">
        <div class="flex flex-col gap-6 py-14 lg:w-[calc(50%-32px)] lg:py-24">
          <p :class="EYEBROW">{{ EYEBROW_TEKST }}</p>
          <h1 class="text-[34px] font-extrabold leading-[42px] text-white lg:text-[46px] lg:leading-[54px]">{{ KOP }}</h1>
          <p class="text-[16px] font-medium leading-7 text-white/80">{{ INTRO }}</p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <span :class="KNOP_GEEL">Plan een gesprek in</span>
            <span :class="KNOP_RAND">Bekijk onze projecten</span>
          </div>
          <div class="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div v-for="c in CIJFERS" :key="c.label">
              <p class="text-[26px] font-extrabold leading-8 text-greendee-yellow">{{ c.waarde }}</p>
              <p class="text-[13px] font-medium text-white/70">{{ c.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="relative h-[280px] lg:hidden">
        <img :src="`${FOTO}-1280.jpg`" alt="" class="size-full object-cover">
      </div>
    </section>

    <!-- ── A2: gesplitst met beeldraster ─────────────────────────────────── -->
    <!-- Zelfde opzet als A, maar rechts staan zon, wind en opslag naast elkaar.
         Daarmee laat de hero zien dat het om de hele energievoorziening gaat en
         niet alleen om windmolens. -->
    <section v-else-if="actief === 'a2'" class="relative overflow-hidden bg-greendee-green-darkest">
      <div class="absolute inset-y-0 right-0 hidden w-1/2 gap-1.5 lg:grid lg:grid-rows-2">
        <img :src="`${MOZAIEK[0]!.bestand}-2400.jpg`" :alt="MOZAIEK[0]!.alt" class="size-full object-cover">
        <div class="grid grid-cols-2 gap-1.5">
          <img :src="`${MOZAIEK[1]!.bestand}-1280.jpg`" :alt="MOZAIEK[1]!.alt" class="size-full object-cover">
          <img :src="`${MOZAIEK[2]!.bestand}-1280.jpg`" :alt="MOZAIEK[2]!.alt" class="size-full object-cover">
        </div>
      </div>
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[120px]"
        style="background-image: linear-gradient(180deg, rgba(2,65,0,0.65) 0%, rgba(2,65,0,0) 100%)"
      />
      <AppHeader />

      <div class="relative mx-auto w-full max-w-container px-5 lg:px-0">
        <div class="flex flex-col gap-6 py-14 lg:w-[calc(50%-32px)] lg:py-24">
          <p :class="EYEBROW">{{ EYEBROW_TEKST }}</p>
          <h1 class="text-[34px] font-extrabold leading-[42px] text-white lg:text-[46px] lg:leading-[54px]">{{ KOP }}</h1>
          <p class="text-[16px] font-medium leading-7 text-white/80">{{ INTRO }}</p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <span :class="KNOP_GEEL">Plan een gesprek in</span>
            <span :class="KNOP_RAND">Bekijk onze projecten</span>
          </div>
          <div class="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-6">
            <div v-for="c in CIJFERS" :key="c.label">
              <p class="text-[26px] font-extrabold leading-8 text-greendee-yellow">{{ c.waarde }}</p>
              <p class="text-[13px] font-medium text-white/70">{{ c.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid h-[220px] grid-cols-3 gap-1.5 lg:hidden">
        <img v-for="m in MOZAIEK" :key="m.bestand" :src="`${m.bestand}-1280.jpg`" :alt="m.alt" class="size-full object-cover">
      </div>
    </section>

    <!-- ── B: links met scrim ────────────────────────────────────────────── -->
    <section v-else-if="actief === 'b'" class="relative h-[640px] overflow-hidden lg:h-[760px]">
      <img :src="`${FOTO}-2400.jpg`" alt="" class="absolute inset-0 size-full object-cover">
      <div aria-hidden="true" class="absolute inset-0" :style="SCRIM_LINKS" />
      <AppHeader />
      <div class="relative mx-auto flex h-full w-full max-w-container flex-col justify-center gap-6 px-5 lg:px-0">
        <p :class="EYEBROW">{{ EYEBROW_TEKST }}</p>
        <h1 class="max-w-[660px] text-[34px] font-extrabold leading-[42px] text-white lg:text-[54px] lg:leading-[62px]">{{ KOP }}</h1>
        <p class="max-w-[520px] text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">{{ INTRO }}</p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <span :class="KNOP_GEEL">Plan een gesprek in</span>
          <span :class="KNOP_RAND">Bekijk onze projecten</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-x-10 gap-y-4">
          <div v-for="c in CIJFERS" :key="c.label" class="border-l-2 border-greendee-yellow pl-4">
            <p class="text-[24px] font-extrabold leading-7 text-white">{{ c.waarde }}</p>
            <p class="text-[13px] font-medium text-white/70">{{ c.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── C: gecentreerd met cijferbalk ─────────────────────────────────── -->
    <section v-else-if="actief === 'c'" class="relative h-[640px] overflow-hidden lg:h-[760px]">
      <img :src="`${FOTO}-2400.jpg`" alt="" class="absolute inset-0 size-full object-cover">
      <div aria-hidden="true" class="absolute inset-0 bg-greendee-green-darkest/55" />
      <AppHeader />
      <div class="relative mx-auto flex h-full w-full max-w-[760px] flex-col items-center justify-center gap-6 px-5 text-center">
        <p :class="EYEBROW">{{ EYEBROW_TEKST }}</p>
        <h1 class="text-[34px] font-extrabold leading-[42px] text-white lg:text-[54px] lg:leading-[62px]">{{ KOP }}</h1>
        <p class="text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">{{ INTRO }}</p>
        <div class="flex flex-col gap-3 sm:flex-row">
          <span :class="KNOP_GEEL">Plan een gesprek in</span>
          <span :class="KNOP_RAND">Bekijk onze projecten</span>
        </div>
      </div>
      <div class="absolute inset-x-0 bottom-0 border-t border-white/15 bg-greendee-green-darkest/70 backdrop-blur-sm">
        <div class="mx-auto flex max-w-container flex-wrap items-center justify-center gap-x-14 gap-y-3 px-5 py-5 lg:px-0">
          <div v-for="c in CIJFERS" :key="c.label" class="flex items-baseline gap-2">
            <span class="text-[20px] font-extrabold text-greendee-yellow">{{ c.waarde }}</span>
            <span class="text-[14px] font-medium text-white/80">{{ c.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── E: met klantlogo's ────────────────────────────────────────────── -->
    <!-- Zelfde opzet als B, maar het bewijs staat in logo's in plaats van
         cijfers. Wie de pagina opent ziet meteen voor wie je werkt. -->
    <section v-else class="relative overflow-hidden">
      <div class="relative h-[560px] lg:h-[660px]">
        <img :src="`${FOTO}-2400.jpg`" alt="" class="absolute inset-0 size-full object-cover">
        <div aria-hidden="true" class="absolute inset-0" :style="SCRIM_LINKS" />
        <AppHeader />
        <div class="relative mx-auto flex h-full w-full max-w-container flex-col justify-center gap-6 px-5 lg:px-0">
          <p :class="EYEBROW">{{ EYEBROW_TEKST }}</p>
          <h1 class="max-w-[660px] text-[34px] font-extrabold leading-[42px] text-white lg:text-[54px] lg:leading-[62px]">{{ KOP }}</h1>
          <p class="max-w-[520px] text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">{{ INTRO }}</p>
          <div class="flex flex-col gap-3 sm:flex-row">
            <span :class="KNOP_GEEL">Plan een gesprek in</span>
            <span :class="KNOP_RAND">Bekijk onze projecten</span>
          </div>
        </div>
      </div>
      <div class="bg-greendee-green py-6">
        <div class="mx-auto flex max-w-container flex-col gap-4 px-5 lg:px-0">
          <p class="text-[13px] font-bold uppercase tracking-wider text-white/60">Zij gingen u voor</p>
          <div class="flex items-center gap-12 overflow-x-auto [scrollbar-width:none] lg:justify-between [&::-webkit-scrollbar]:hidden">
            <img v-for="logo in LOGOS" :key="logo.src" :src="logo.src" :alt="logo.naam" class="h-8 w-auto shrink-0 object-contain">
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
          In alle varianten staat de tekst op een echte ondergrond in plaats van op een
          schaduwrandje, en benoemt de kop wat de bezoeker oplost.
        </p>

        <p class="mt-8 text-[13px] font-bold uppercase tracking-wider text-gray-400">Foto</p>
        <div class="mt-3 flex flex-wrap gap-3">
          <button
            v-for="f in FOTOS"
            :key="f.sleutel"
            type="button"
            class="overflow-hidden rounded-xl border-[1.5px] transition-colors"
            :class="f.sleutel === foto.sleutel ? 'border-greendee-green' : 'border-gray-200 hover:border-greendee-green'"
            @click="foto = f"
          >
            <img :src="`${f.bestand}-1280.jpg`" :alt="f.naam" class="h-[70px] w-[110px] object-cover">
            <span class="block px-3 py-2 text-[13px] font-bold text-greendee-ink">{{ f.naam }}</span>
          </button>
        </div>
        <p class="mt-2 text-[13px] font-medium text-gray-500">
          Geldt voor alle varianten behalve A2; die toont zon, wind en opslag altijd samen.
        </p>

        <p class="mt-8 text-[13px] font-bold uppercase tracking-wider text-gray-400">Opzet</p>
        <div class="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="optie in OPTIES"
            :key="optie.sleutel"
            type="button"
            class="rounded-2xl border-[1.5px] px-4 py-3 text-left transition-colors"
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
const FOTOS = [
  { sleutel: 'molens', naam: 'Windmolens', bestand: '/v2/hero-foto-molens' },
  { sleutel: 'zon', naam: 'Zonnepark', bestand: '/v2/hero-foto-zon' },
  { sleutel: 'accu', naam: 'Batterijopslag', bestand: '/v2/hero-foto-accu' },
  { sleutel: 'veld', naam: 'In het veld', bestand: '/v2/hero-foto-veld' },
] as const

const foto = ref(FOTOS[0]!)
const FOTO = computed(() => foto.value.bestand)

// Zon, wind en opslag naast elkaar, voor wie wil laten zien dat het niet alleen
// over windmolens gaat.
const MOZAIEK = [
  { bestand: '/v2/hero-foto-zon', alt: 'Zonnepark' },
  { bestand: '/v2/hero-foto-molens', alt: 'Windmolens' },
  { bestand: '/v2/hero-foto-opslag', alt: 'Batterijopslag op een bedrijventerrein' },
]

const EYEBROW_TEKST = 'Netcongestie opgelost'
const KOP = 'Uw ambitie past wél binnen uw aansluiting.'
const INTRO = 'GreenDee rekent met eigen software door wat er binnen uw aansluiting nog kan, '
  + 'en begeleidt u van businesscase tot realisatie en bewaking.'

// Allemaal cijfers die elders op de site al staan, zodat de hero niets belooft
// wat de rest van de site niet waarmaakt.
const CIJFERS = [
  { waarde: '28', label: 'projecten gerealiseerd' },
  { waarde: '4,5', label: 'van 5 sterren' },
  { waarde: '5+', label: 'jaar ervaring' },
]

const LOGOS = [
  { naam: 'Amsterdam Warehouse Company', src: '/v2/logos/amsterdam.png' },
  { naam: 'Fresh2you', src: '/v2/logos/fresh2you.png' },
  { naam: 'A. van Boekel', src: '/v2/logos/boekel.png' },
  { naam: 'Burgerboerderij Oosterwold', src: '/v2/logos/oosterwold.png' },
  { naam: 'Hoek Bouma', src: '/v2/logos/hoekbouma.png' },
  { naam: 'Aventurijn', src: '/v2/logos/aventurijn.png' },
]

const KNOP_GEEL = 'rounded-2xl bg-greendee-yellow px-6 py-4 text-center text-[16px] font-bold text-greendee-ink'
const KNOP_RAND = 'rounded-2xl border border-white/50 px-6 py-4 text-center text-[16px] font-bold text-white'
const EYEBROW = 'text-[15px] font-bold text-greendee-yellow'

const SCRIM_LINKS = 'background-image: linear-gradient(90deg, rgba(2,65,0,0.92) 0%, rgba(2,65,0,0.72) 38%, rgba(2,65,0,0.25) 70%, rgba(2,65,0,0) 100%)'

const OPTIES = [
  { sleutel: 'nu', naam: 'Zoals nu', toelichting: 'Gecentreerd, tekst met schaduw op de foto' },
  { sleutel: 'a', naam: 'A — gesplitst', toelichting: 'Tekst op groen vlak, foto op de rechterhelft' },
  { sleutel: 'a2', naam: 'A2 — gesplitst, drie beelden', toelichting: 'Zon, wind en opslag naast elkaar' },
  { sleutel: 'b', naam: 'B — links met scrim', toelichting: 'Schermbrede foto, groen verloop van links' },
  { sleutel: 'c', naam: 'C — cijferbalk', toelichting: 'Waas over de foto, cijfers onderaan' },
  { sleutel: 'e', naam: "E — klantlogo's", toelichting: 'Als B, met de logobalk direct eronder' },
] as const

const actief = ref<'nu' | 'a' | 'a2' | 'b' | 'c' | 'e'>('a2')

useSeo({
  titel: 'Hero vergelijken',
  beschrijving: 'Tijdelijke werkpagina om varianten van de homepage-hero naast elkaar te zetten.',
})
useHead({ meta: [{ name: 'robots', content: 'noindex, nofollow' }] })
</script>
