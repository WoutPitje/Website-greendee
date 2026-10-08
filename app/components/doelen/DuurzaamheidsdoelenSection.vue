<template>
  <section class="bg-white px-5 py-16 lg:px-36 lg:py-24">
    <div class="mx-auto w-full max-w-container">
      <div class="flex w-full flex-col gap-[18px] lg:w-[578px]">
        <h2 class="text-[28px] font-extrabold leading-9 tracking-[-0.54px] text-greendee-ink lg:text-[36px] lg:leading-[41px]">
          Vier meetbare duurzaamheidsdoelen voor 2031
        </h2>
        <p class="text-[16px] font-medium leading-7 text-gray-600 lg:text-[18px] lg:leading-[29px]">
          Wat we beloven, leggen we vast met een getal, een jaartal en een manier van
          meten. Per project registreren we wat het oplevert en rapporteren we dat elk jaar.
        </p>
      </div>

      <div class="mt-11 grid gap-5 lg:grid-cols-2">
        <article
          v-for="doel in doelen"
          :key="doel.label"
          class="flex flex-col gap-1.5 rounded-[18px] bg-[#ecf4eb] p-7 lg:p-8"
        >
          <p class="flex items-end gap-2 font-extrabold text-greendee-green">
            <span class="text-[48px] leading-[52px] tracking-[-1.2px] lg:text-[60px] lg:leading-[63px]">{{ doel.getal }}</span>
            <!-- Letterlijke spatie in de tekst zelf, niet alleen de flex-gap: anders
                 lopen getal en eenheid aan elkaar zodra CSS wegvalt of een
                 schermlezer de tekst voorleest. -->
            <span v-if="doel.eenheid" class="text-[24px] leading-[30px] lg:text-[30px] lg:leading-9">{{ ` ${doel.eenheid}` }}</span>
          </p>
          <p class="text-[18px] font-extrabold leading-6 text-greendee-ink">{{ doel.label }}</p>

          <dl class="mt-2.5 flex w-full flex-col">
            <div
              v-for="stap in doel.tussendoelen"
              :key="stap.wanneer"
              class="flex items-center justify-between gap-4 border-t border-[#c5d4c3] py-2.5 text-[14px] leading-5"
            >
              <dt class="font-medium text-gray-600">{{ stap.wanneer }}</dt>
              <dd class="text-right font-extrabold text-greendee-ink">{{ stap.waarde }}</dd>
            </div>
          </dl>

          <p class="mt-1.5 text-[14px] font-medium leading-[22px] text-gray-600">
            <span class="font-bold text-greendee-green">Hoe we meten:</span>
            {{ doel.meting }}
          </p>
        </article>
      </div>

      <!-- Onderbouwing van het CO₂-doel: waar de 10.000 ton per jaar vandaan moet komen.
           De tussendoelen zijn het jaarcijfer op dat moment, geen optelsom. -->
      <div class="mt-9 rounded-[18px] bg-white p-7 lg:p-8">
        <h3 class="text-[20px] font-extrabold leading-7 tracking-[-0.24px] text-greendee-ink lg:text-[24px] lg:leading-[29px]">
          Wat er nodig is voor 10.000 ton CO₂ per jaar vanaf 2031
        </h3>

        <div class="mt-5 flex h-[54px] w-full gap-[3px] overflow-hidden rounded-[10px]">
          <div
            v-for="deel in verdeling"
            :key="deel.naam"
            class="flex min-w-0 items-center px-3.5"
            :class="deel.klasse"
            :style="{ flex: `${deel.aandeel} 0 0` }"
          >
            <span class="text-[18px] font-extrabold leading-6">{{ deel.aandeel }}%</span>
          </div>
        </div>

        <div class="mt-6 grid gap-6 sm:grid-cols-3">
          <div v-for="deel in verdeling" :key="`uitleg-${deel.naam}`" class="flex flex-col gap-1.5">
            <p class="text-[17px] font-extrabold leading-6 text-greendee-ink">{{ deel.naam }}</p>
            <p class="text-[26px] font-extrabold leading-9 tracking-[-0.3px] text-greendee-green lg:text-[30px] lg:leading-[35px]">
              {{ deel.ton }}
            </p>
            <p class="text-[14px] font-medium leading-[22px] text-gray-600">{{ deel.uitleg }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const doelen = [
  {
    getal: '10.000',
    eenheid: 'ton',
    label: 'CO₂ per jaar vermeden',
    tussendoelen: [
      { wanneer: 'Eind 2028', waarde: '2.500 ton per jaar' },
      { wanneer: 'Eind 2030', waarde: '5.000 ton per jaar' },
      { wanneer: 'Eind 2031', waarde: '10.000 ton per jaar' },
    ],
    meting: 'per project leggen we in de energiesimulatie vast hoeveel kWh wordt opgewekt '
      + 'of verschoven; via monitoring meten we de werkelijke kWh en rekenen we om met de '
      + 'emissiefactor van de Nederlandse stroommix.',
  },
  {
    getal: '30',
    eenheid: '',
    label: 'Volledig circulaire installaties',
    tussendoelen: [
      { wanneer: '2027', waarde: 'Eerste zoutwateraccu' },
      { wanneer: 'Eind 2029', waarde: '15 installaties' },
      { wanneer: 'Eind 2031', waarde: '30 installaties' },
    ],
    meting: 'een installatie telt als circulair bij een terugname- en recyclingprogramma '
      + 'van de fabrikant plus ten minste 90% herbruikbaar materiaal, of bij zoutwater- of '
      + 'kobaltvrije opslag.',
  },
  {
    getal: '100%',
    eenheid: '',
    label: 'Slaafvrije zonnepanelen',
    tussendoelen: [
      { wanneer: 'Eind 2028', waarde: '80% slaafvrij' },
      { wanneer: 'Eind 2031', waarde: '100% slaafvrij' },
    ],
    meting: 'per offerte registreren we fabrikant, traceerbaarheidsbewijs en herkomst; '
      + 'jaarlijks tellen we het geadviseerde kWp per categorie. Daarnaast komt eind 2031 '
      + '50% van het geadviseerde kWp uit Europa.',
  },
  {
    getal: '25',
    eenheid: 'MW',
    label: 'Netverzwaring vermeden',
    tussendoelen: [
      { wanneer: 'Eind 2028', waarde: '5 MW' },
      { wanneer: 'Eind 2030', waarde: '15 MW' },
      { wanneer: 'Eind 2031', waarde: '25 MW' },
    ],
    meting: 'per project het verschil tussen het vermogen dat zonder oplossing aangevraagd '
      + 'had moeten worden en het werkelijk gecontracteerde vermogen na het GreenDee-project.',
  },
]

const verdeling = [
  {
    naam: 'Batterijen',
    aandeel: 50,
    ton: '5.000 ton',
    klasse: 'bg-greendee-green text-white',
    uitleg: 'Batterijen laden met zonnestroom die anders wordt afgeschakeld en ontladen als '
      + 'de klant de stroom weer nodig heeft.',
  },
  {
    naam: 'Laadinfrastructuur',
    aandeel: 35,
    ton: '3.500 ton',
    klasse: 'bg-[#3f9a38] text-white',
    uitleg: 'Ongeveer 1.100 elektrische bestelwagens of 60 e-trucks die bij onze klanten '
      + 'laden. Elke geladen kWh vervangt diesel of benzine.',
  },
  {
    naam: 'Zon-PV',
    aandeel: 15,
    ton: '1.500 ton',
    klasse: 'bg-greendee-yellow text-greendee-ink',
    uitleg: 'Ongeveer 10.000 panelen. Zonnestroom op eigen dak of land vervangt stroom uit het net.',
  },
]
</script>
