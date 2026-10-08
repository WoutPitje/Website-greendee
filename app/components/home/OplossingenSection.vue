<template>
  <section class="flex flex-col items-center justify-center gap-12 overflow-hidden rounded-[32px] bg-[#f3f3f3] px-5 py-14 lg:px-0 lg:py-16">
    <div class="flex flex-col items-center justify-center gap-[5px] px-2.5 text-center">
      <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
        Wat wij kunnen
      </p>
      <h2 class="text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
        Onze oplossingen.
      </h2>
      <p class="text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.0648px] lg:text-black">
        Ontdek wat GreenDee voor jouw bedrijf kan betekenen.
      </p>
    </div>

    <div class="flex w-full flex-col items-center gap-7 lg:max-w-[1160px] lg:flex-row lg:justify-center">
      <NuxtLink
        v-for="card in cards"
        :key="card.href"
        :to="card.href"
        class="group relative block h-[480px] w-full shrink-0 overflow-hidden rounded-2xl bg-white lg:w-[368px]"
      >
        <picture>
          <source :srcset="`${card.image}-1280.webp 1280w, ${card.image}-2400.webp 2400w`" type="image/webp">
          <img
            :src="`${card.image}-1280.jpg`"
            alt=""
            class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            :class="card.crop"
          >
        </picture>

        <!-- Darkens the lower half just enough to carry the caption. -->
        <div
          aria-hidden="true"
          class="absolute inset-0 rounded-2xl"
          style="background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.03) 38%, rgba(0,0,0,0.138) 62%, rgba(0,0,0,0.205) 100%)"
        />

        <div class="absolute inset-x-0 bottom-0 flex flex-col items-start px-2.5 py-[30px]">
          <div class="flex w-full flex-col items-start justify-center gap-2 px-2.5">
            <p class="w-full text-left text-h3 font-semibold text-greendee-surface">
              {{ card.title }}
            </p>
            <p class="w-full text-left text-[14px] font-medium leading-[26px] tracking-[-0.28px] text-white">
              {{ card.body }}
            </p>
            <span class="flex items-center gap-2.5 text-[12px] font-medium leading-[26px] tracking-[-0.24px] text-white">
              Lees meer
              <ArrowRight class="transition-transform duration-150 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
// Body copy follows the v2 feedback round, which rewrote all three cards.
// `crop` mirrors the per-card image offsets in the Figma frame.
const cards = [
  {
    title: 'Energiesimulaties',
    body: 'Met een energiesimulatie weet je vooraf wat de optimale balans is tussen je netaansluiting, verbruik, opwek en opslag.',
    href: '/energiesimulaties',
    image: '/v2/kaart-energiesimulaties',
    crop: 'object-[39.5%_center]',
  },
  {
    title: 'Offertetrajecten',
    body: 'GreenDee voert namens jou een uitvraag naar de markt uit en begeleidt je bij de keuze tussen de uitwerkingen.',
    href: '/offertetrajecten',
    image: '/v2/kaart-offertetrajecten',
    crop: 'object-center',
  },
  {
    title: 'Businesscases',
    body: 'Een succesvolle investering begint met een betrouwbare businesscase. GreenDee rekent je ambities door.',
    href: '/business-cases',
    image: '/v2/kaart-business-cases',
    crop: 'object-[46.5%_center]',
  },
]
</script>
