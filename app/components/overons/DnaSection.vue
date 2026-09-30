<template>
  <section class="flex flex-col items-start gap-6 bg-[#f3f3f3] px-5 pb-[72px] pt-16 lg:px-36 lg:pt-[88px]">
    <div class="flex w-full flex-col items-start gap-8 lg:gap-[54px]">
      <div class="flex w-full flex-col items-start gap-8 lg:gap-[34px]">
        <h2 class="flex flex-col items-start text-[26px] font-extrabold leading-[44px] tracking-[-0.8px] text-greendee-ink lg:text-h2 lg:leading-[70px]">
          <span>Niemand is ondernemer geworden</span>
          <span class="flex flex-wrap items-center gap-x-[15px]">
            om met
            <span class="inline-block -rotate-[1.2deg] rounded-lg bg-greendee-yellow px-4">energie</span>
            bezig te zijn.
          </span>
        </h2>

        <div class="flex w-full items-stretch gap-5 lg:gap-7">
          <div class="w-1.5 shrink-0 bg-greendee-yellow" />
          <p class="text-[20px] font-extrabold leading-[32px] text-greendee-ink lg:w-[900px] lg:text-[28px] lg:leading-[44px]">
            Wij nemen dat vraagstuk volledig over, en zijn pas klaar als het project draait.
          </p>
        </div>
      </div>

      <div class="flex w-full flex-col items-start gap-3.5">
        <p class="text-[13px] font-bold leading-[18px] tracking-[1.6px] text-greendee-green">
          WAT WIJ NIET ZIJN
        </p>
        <!-- The strikethrough is the design's own device: these are the things
             GreenDee is explicitly not. -->
        <p
          v-for="line in nietZijn"
          :key="line"
          class="relative text-[19px] font-bold leading-[32px] text-gray-500 lg:text-h3 lg:leading-10"
        >
          {{ line }}
          <span aria-hidden="true" class="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-greendee-yellow" />
        </p>
      </div>
    </div>

    <!-- The v2 feedback asked for these four pillars to carry more weight, so
         they sit a step up from the design's original 13/14px. -->
    <div class="flex w-full flex-col gap-8 border-t border-[#d8d8d8] pt-[30px] lg:flex-row lg:gap-8">
      <div v-for="pillar in pillars" :key="pillar.label" class="flex flex-1 flex-col items-start gap-2">
        <p class="text-[14px] font-bold leading-5 tracking-[1.4px] text-greendee-green">{{ pillar.label }}</p>
        <p class="w-full text-[16px] font-medium leading-[26px] text-gray-600">{{ pillar.body }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const nietZijn = [
  'Een adviseur die factureert op uren en klaar is bij het rapport.',
  'Een bureau dat elke opdracht aanneemt.',
  'Een bedrijf dat groeit ten koste van kwaliteit of plezier.',
]

const pillars = [
  {
    label: 'WAAR WE IN GELOVEN',
    body: 'Een goed investeringsbesluit is beter dan een goed product. Data boven onderbuikgevoel.',
  },
  {
    label: 'NIET ONDERHANDELBAAR',
    body: 'Open over elke vergoeding die wij ontvangen; wij zijn open over profitshare constructies. Een slechte businesscase noemen wij een slechte businesscase. Afspraak is afspraak.',
  },
  {
    label: 'VOOR KLANT EN PARTNER',
    body: 'Eén vast aanspreekpunt en geen verborgen kosten. Partners kiezen wij op certificering en gedrag.',
  },
  {
    label: 'WAAR ONS TEAM TROTS OP IS',
    body: 'Projecten die draaien en aantoonbaar financieel én duurzaam leveren. Een bedrijf dat zijn afspraken nakomt, ook naar het eigen team.',
  },
]
</script>
