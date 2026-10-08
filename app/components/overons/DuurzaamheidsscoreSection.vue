<template>
  <section class="flex flex-col items-start bg-white px-5 pb-16 pt-16 lg:px-36 lg:pt-[88px]">
    <div class="flex w-full max-w-container flex-col items-start gap-10 lg:flex-row lg:gap-12">
      <div class="flex flex-col items-start gap-5 lg:w-[360px] lg:shrink-0">
        <h2 class="w-full text-[28px] font-bold leading-[36px] text-greendee-ink lg:text-h2 lg:leading-[46px]">
          Wij geven duurzaamheid een eigen label.
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-[17px] lg:leading-[29px]">
          GreenDee vergelijkt een offerte niet enkel op totale kostprijs en
          terugverdientijd, maar ook op onze eigen duurzaamheidsscore.
        </p>
      </div>

      <div class="flex w-full flex-col items-start gap-[18px] rounded-3xl bg-white lg:flex-1 lg:px-9">
        <div class="flex flex-wrap items-center gap-3.5">
          <h3 class="text-[20px] font-extrabold leading-7 text-greendee-ink">GreenDee-duurzaamheidsscore</h3>
          <p class="text-[14px] font-semibold leading-5 text-gray-500">zes criteria</p>
        </div>

        <ol class="flex w-full flex-col items-start gap-[9px]">
          <li v-for="(criterion, index) in criteria" :key="criterion.label" class="flex w-full flex-col gap-2 lg:flex-row lg:items-center lg:gap-[18px]">
            <!-- The chevron is the design's shape: a bar with a 22px point.
                 clip-path reproduces it without shipping six near-identical SVGs. -->
            <div
              class="flex h-14 shrink-0 items-center px-5"
              :class="widthClasses[index]"
              :style="{
                backgroundColor: criterion.color,
                clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)',
              }"
            >
              <span class="text-[15px] font-bold leading-[21px]" :style="{ color: criterion.textColor }">
                {{ criterion.label }}
              </span>
            </div>
            <p class="flex-1 text-[14px] font-medium leading-[21px] text-gray-600">{{ criterion.body }}</p>
          </li>
        </ol>

        <p class="w-full border-t border-gray-200 pt-3.5 text-[13px] font-medium leading-[21px] text-gray-500">
          Onze eigen meetlat, geen officieel keurmerk. De zes criteria wegen samen mee
          in elke offertevergelijking die wij voor je maken.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// The design gives each chevron a fixed width from 230 to 410px. Those would run
// off a phone screen, so below lg they use the same staircase as a percentage.
const widthClasses = [
  'w-[56%] lg:w-[230px]',
  'w-[65%] lg:w-[266px]',
  'w-[74%] lg:w-[302px]',
  'w-[82%] lg:w-[338px]',
  'w-[91%] lg:w-[374px]',
  'w-full lg:w-[410px]',
]

// Colours follow the six chevrons in the design, light to dark.
const criteria = [
  {
    label: 'Zoutwater- en kobaltvrije opslag',
    body: 'Naast lithium-NMC brengen wij ook kobaltvrije oplossingen in beeld, zoals LFP of zoutwater.',
    color: '#C6E3B5',
    textColor: '#024100',
  },
  {
    label: 'Herkomst aantoonbaar',
    body: 'Polysilicium traceerbaar en vrij van dwangarbeid.',
    color: '#A7D88D',
    textColor: '#024100',
  },
  {
    label: 'Circulaire producten',
    body: 'Ontworpen voor hergebruik, met terugnamegarantie.',
    color: '#7FBF63',
    textColor: '#0A2E06',
  },
  {
    label: 'Kleinste CO₂-voetafdruk',
    body: 'Bij gelijke prestaties wint de laagste voetafdruk.',
    color: '#3F8F2A',
    textColor: '#FFFFFF',
  },
  {
    label: 'Einde levensduur geregeld',
    body: 'Vóór oplevering vastgelegd wie terugneemt en recyclet.',
    color: '#0F650C',
    textColor: '#FFFFFF',
  },
  {
    label: 'Europees waar het kan',
    body: 'Is het Europese product maximaal 10% duurder dan het alternatief, dan adviseren wij Europees. Europese fabrikanten zijn een pré.',
    color: '#024100',
    textColor: '#FFFFFF',
  },
]
</script>
