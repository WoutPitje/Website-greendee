<template>
  <div>
    <InnerPageHero
      eyebrow="Werken bij GreenDee"
      title="Werk mee aan de energietransitie."
      intro="Bij GreenDee helpt u MKB-bedrijven en agrariërs met duurzame energieoplossingen. Bekijk onze vacatures of stuur een open sollicitatie."
      image="/v2/hero-vacatures"
      image-alt="Het team van GreenDee in gesprek"
      cta-label=""
    />

    <section class="flex flex-col items-center gap-10 overflow-hidden rounded-t-[32px] bg-[#f3f3f3] px-5 pb-24 pt-16 lg:px-0 lg:pt-[88px]">
      <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[760px]">
        <p class="text-[15px] font-bold leading-6 text-greendee-green lg:text-body lg:tracking-[-0.36px]">Vacatures</p>
        <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          Openstaande vacatures
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-black lg:text-body lg:tracking-[-0.36px]">
          Er {{ vacatures.length === 1 ? 'staat' : 'staan' }} op dit moment
          {{ vacatures.length }} {{ vacatures.length === 1 ? 'vacature' : 'vacatures' }} open.
          Klik op een vacature voor de volledige omschrijving.
        </p>
      </div>

      <div class="flex w-full max-w-container flex-col items-start gap-4">
        <div
          v-for="(vacature, index) in vacatures"
          :key="vacature.title"
          class="w-full overflow-hidden rounded-[20px] border border-gray-200 bg-white"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-6 px-6 py-6 text-left lg:px-8 lg:py-7"
            :aria-expanded="open === index"
            @click="open = open === index ? null : index"
          >
            <span class="flex flex-col items-start gap-3">
              <span class="text-[22px] font-bold text-greendee-ink lg:text-[26px]">{{ vacature.title }}</span>
              <span class="flex flex-wrap items-start gap-2">
                <span
                  v-for="tag in vacature.tags"
                  :key="tag.label"
                  class="rounded-full px-3 py-1.5 text-[13px] font-semibold"
                  :class="tag.highlight ? 'bg-[#ecf4eb] text-greendee-green' : 'bg-[#f3f3f3] text-gray-700'"
                >
                  {{ tag.label }}
                </span>
              </span>
            </span>

            <span class="flex shrink-0 items-center gap-2.5">
              <span class="hidden text-[15px] font-semibold text-greendee-green sm:inline">
                {{ open === index ? 'Verberg vacature' : 'Bekijk vacature' }}
              </span>
              <span class="flex size-10 items-center justify-center rounded-full bg-[#ecf4eb]">
                <!-- De geëxporteerde chevron wijst omhoog; dicht draait hem omlaag. -->
                <img
                  src="/v2/chevron-down.svg"
                  alt=""
                  class="size-5 transition-transform"
                  :class="open === index ? '' : 'rotate-180'"
                >
              </span>
            </span>
          </button>

          <div v-if="open === index" class="flex flex-col gap-8 border-t border-gray-200 px-6 py-8 lg:flex-row lg:px-8">
            <div v-for="column in vacature.columns" :key="column.title" class="flex flex-1 flex-col items-start gap-3">
              <p class="text-[13px] font-bold uppercase tracking-[1.4px] text-greendee-green">{{ column.title }}</p>
              <ul class="flex list-disc flex-col gap-2 pl-5 text-[15px] font-medium leading-6 text-gray-600">
                <li v-for="point in column.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaSection
      title="Geen passende vacature?"
      body="We maken graag kennis met mensen die willen bijdragen aan onze missie. Stuur uw cv en een korte motivatie."
      cta-label="Stuur een open sollicitatie"
      cta-to="mailto:offerte@greendee.nl?subject=Open%20sollicitatie"
      background="white"
      :rounded-top="false"
      body-size="base"
      cta-size="lg"
      spacious
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Vacatures',
  beschrijving:
    'GreenDee zoekt een energieadviseur die klanten door het hele traject begeleidt.',
  afbeelding: 'vacatures',
})

const open = ref<number | null>(null)

// Eén vaste vacature, zoals afgesproken. Komen er meer, dan is dit het moment om
// er een Strapi-collectie van te maken.
const vacatures = [
  {
    title: 'Energieadviseur',
    tags: [
      { label: 'Fulltime · 40 uur' },
      { label: 'Alkmaar & thuis' },
      { label: '€ 2.000 – € 4.000 bruto p/m' },
      { label: 'Eerste medewerker', highlight: true },
    ],
    columns: [
      {
        title: 'WAT JE DOET',
        points: [
          'Je begeleidt klanten van technische schouw tot onderbouwd investeringsbesluit.',
          'Je voert capaciteitsanalyses en energiesimulaties uit op kwartierdata.',
          'Je zet marktuitvragen uit en vergelijkt offertes van installateurs.',
          'Je onderhoudt contact met netbeheerders, gemeenten en leveranciers.',
        ],
      },
      {
        title: 'WAT JE MEEBRENGT',
        points: [
          'Affiniteit met techniek en energie; een elektrotechnische achtergrond is een pré.',
          'Je werkt gestructureerd en kunt een analyse omzetten in een helder advies.',
          'Je bent communicatief sterk en voelt je thuis bij ondernemers.',
          'Rijbewijs B, want je komt regelmatig bij klanten op locatie.',
        ],
      },
      {
        title: 'WAT WIJ BIEDEN',
        points: [
          'Een salaris van € 2.000 tot € 4.000 bruto per maand, afhankelijk van ervaring.',
          'Veel ruimte om het vak en je eigen rol vorm te geven als eerste medewerker.',
          'Werken vanuit Alkmaar en thuis, met klanten door heel Nederland.',
          'Een bedrijf dat zijn afspraken nakomt, ook naar het eigen team.',
        ],
      },
    ],
  },
]
</script>
