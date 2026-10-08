<template>
  <section class="bg-white pt-16 lg:pt-[88px]">
    <div class="mx-auto flex w-full max-w-container flex-col gap-10 px-5 pb-14 lg:gap-14 lg:px-0 lg:pb-[72px]">
      <div class="flex flex-col gap-7">
        <h2 class="text-[28px] font-bold leading-9 tracking-[-0.54px] text-greendee-ink lg:text-[36px] lg:leading-[50px]">
          GreenDee groeit hard. Jij kunt de volgende zijn.
        </h2>

        <!-- Zeventien poppetjes: het team van nu, de plek die open staat, en waar
             het naartoe groeit. Eén beeld doet hier meer dan een zin. -->
        <div class="flex flex-wrap items-start gap-x-3 gap-y-3.5" role="img" :aria-label="SAMENVATTING">
          <div v-for="(plek, index) in plekken" :key="index" class="flex flex-col items-center gap-1.5">
            <img :src="plek.icoon" alt="" width="48" height="64" class="block h-12 w-9 lg:h-16 lg:w-12">
            <span v-if="plek.label" class="text-[12px] font-bold leading-none text-greendee-green-deep">
              {{ plek.label }}
            </span>
          </div>
        </div>

        <p class="max-w-[640px] text-[16px] font-medium leading-7 text-[#26332b] lg:text-[17px]">
          Groei is pas geslaagd als het team het volhoudt en er plezier in heeft. Daarom
          meten we dit net zo serieus als omzet en sturen we er elk kwartaal op.
        </p>
      </div>

      <dl class="flex w-full flex-col border-b border-[#c5d4c3]">
        <div
          v-for="doel in doelen"
          :key="doel.titel"
          class="flex flex-col gap-4 border-t border-[#c5d4c3] py-6 lg:flex-row lg:gap-10"
        >
          <div class="flex flex-col gap-2 lg:flex-1">
            <dt class="text-[22px] font-extrabold leading-8 text-greendee-ink lg:text-[26px] lg:leading-[31px]">
              {{ doel.titel }}
            </dt>
            <p class="text-[14px] font-medium leading-[22px] text-gray-600">{{ doel.uitleg }}</p>
          </div>
          <dd class="flex flex-col gap-1.5 lg:flex-1">
            <p class="text-[20px] font-bold leading-7 text-greendee-green lg:text-[22px] lg:leading-7">
              {{ doel.waarde }}
            </p>
            <p class="text-[14px] font-medium leading-[22px] text-gray-600">{{ doel.toelichting }}</p>
          </dd>
        </div>
      </dl>
    </div>

    <div class="bg-greendee-yellow px-5 py-6 lg:px-36">
      <p class="mx-auto w-full max-w-container text-[16px] font-medium leading-[26px] text-greendee-ink">
        <span class="font-extrabold">Daarnaast vieren we elke opgeleverde installatie.</span>
        En twee keer per jaar hebben we een echte teamdag.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const SAMENVATTING = 'Het team telt nu een vaste kern, er staat een plek open, en groeit door naar zeventien'

// Eén poppetje voor het team van nu, één voor de openstaande plek, en de rest
// voor de ruimte die er nog is. Alleen de eerste, de tweede en de laatste
// krijgen een label, zoals in het ontwerp.
const plekken = [
  { icoon: '/v2/team/poppetje-nu.svg', label: 'nu' },
  { icoon: '/v2/team/poppetje-jij.svg', label: 'jij?' },
  ...Array.from({ length: 14 }, () => ({ icoon: '/v2/team/poppetje-open.svg', label: '' })),
  { icoon: '/v2/team/poppetje-open.svg', label: '17' },
]

const doelen = [
  {
    titel: 'Medewerkerstevredenheid',
    uitleg: 'Elk kwartaal een korte enquête met vijf vragen, anoniem.',
    waarde: '8 of hoger',
    toelichting: 'Niemand onder de 6.',
  },
  {
    titel: 'Verloop',
    uitleg: 'We tellen het vrijwillige vertrek per jaar.',
    waarde: 'Max. 10%',
    toelichting: 'Per jaar.',
  },
  {
    titel: 'Autonomie en ontwikkeling',
    uitleg: 'Eigen projectverantwoordelijkheid, opleidingsbudget en opleidingsuren.',
    waarde: '€ 2.500',
    toelichting: 'Plus vijf opleidingsdagen per jaar. Binnen een jaar ben je verantwoordelijk voor een eigen project.',
  },
  {
    titel: 'Ziekteverzuim en werkdruk',
    uitleg: 'We meten verzuim in procenten, werkdruk als vraag in de enquête en overuren.',
    waarde: 'Onder 3%',
    toelichting: 'Verzuim onder 3%; werkdruk gemiddeld lager dan een 7.',
  },
  {
    titel: 'Plezier',
    uitleg: 'Elke maand doen we iets leuks met het team en vragen we: hebben we nog plezier in wat we doen?',
    waarde: 'Elke maand',
    toelichting: 'Een gezellig uitje.',
  },
]
</script>
