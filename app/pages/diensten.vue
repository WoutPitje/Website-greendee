<template>
  <div>
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Zes diensten, één aanpak voor je energievraagstuk."
      intro="Van de eerste simulatie tot aanhoudende rendementsbewaking: dit is het volledige aanbod van GreenDee. Bekijk hieronder welke dienst aansluit bij waar jij nu staat."
      image="/v2/hero-onze-doelen"
      image-alt="Twee collega's van GreenDee in overleg achter een laptop"
    />

    <section class="flex flex-col items-center bg-white px-5 py-16 lg:px-0 lg:py-24">
      <div class="flex w-full max-w-container flex-col items-center gap-10 lg:gap-12">
        <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[700px]">
          <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
            Het aanbod
          </p>
          <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
            Kies de dienst die bij je past.
          </h2>
          <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.0648px] lg:text-black">
            Klik op een dienst voor de volledige uitleg, de aanpak en het resultaat.
          </p>
        </div>

        <!-- Zelfde kaartopmaak als OplossingenSection op de homepage, maar dat
             component is hardcoded op drie kaarten en homepage-specifiek, dus
             hier opnieuw opgebouwd voor alle zes diensten. -->
        <div class="grid w-full grid-cols-1 gap-7 lg:grid-cols-3">
          <NuxtLink
            v-for="dienst in diensten"
            :key="dienst.href"
            :to="dienst.href"
            class="group relative block h-[420px] w-full overflow-hidden rounded-2xl bg-white lg:h-[480px]"
          >
            <picture>
              <source :srcset="`${dienst.image}-1280.webp 1280w, ${dienst.image}-2400.webp 2400w`" type="image/webp">
              <img
                :src="`${dienst.image}-1280.jpg`"
                :alt="dienst.imageAlt"
                class="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
              >
            </picture>

            <!-- Verduistert de onderste helft net genoeg om de tekst leesbaar te houden. -->
            <div
              aria-hidden="true"
              class="absolute inset-0 rounded-2xl"
              style="background-image: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.03) 38%, rgba(0,0,0,0.138) 62%, rgba(0,0,0,0.205) 100%)"
            />

            <div class="absolute inset-x-0 bottom-0 flex flex-col items-start px-2.5 py-[30px]">
              <div class="flex w-full flex-col items-start justify-center gap-2 px-2.5">
                <p class="w-full text-left text-h3 font-semibold text-greendee-surface">
                  {{ dienst.title }}
                </p>
                <p class="w-full text-left text-[14px] font-medium leading-[26px] tracking-[-0.28px] text-white">
                  {{ dienst.body }}
                </p>
                <span class="flex items-center gap-2.5 text-[12px] font-medium leading-[26px] tracking-[-0.24px] text-white">
                  Lees meer
                  <ArrowRight class="transition-transform duration-150 group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <CtaSection
      title="Weet je nog niet welke dienst bij je past?"
      body="Plan een vrijblijvend gesprek in. Samen bepalen we welke dienst het beste aansluit bij jouw situatie en je netaansluiting."
      background="mint"
      :rounded-top="false"
    />
  </div>
</template>

<script setup lang="ts">
// Titel en omschrijving per dienst komen letterlijk uit de useSeo-beschrijving
// van de bijbehorende pagina, zodat deze kaarten nooit afwijken van wat er op
// de dienstenpagina zelf staat.
const diensten = [
  {
    title: 'Energiesimulaties',
    body: 'GreenDee rekent met eigen software door wat er op je aansluiting gebeurt, nog voordat er geïnvesteerd wordt.',
    href: '/energiesimulaties',
    image: '/v2/hero-energiesimulaties',
    imageAlt: 'Energiesimulatie op een scherm',
  },
  {
    title: 'Offertetrajecten',
    body: 'GreenDee voert namens jou de uitvraag naar de markt uit en begeleidt de keuze van installateur of leverancier.',
    href: '/offertetrajecten',
    image: '/v2/hero-offertetrajecten',
    imageAlt: 'Gesprek aan tafel over een offertetraject',
  },
  {
    title: 'Businesscases',
    body: 'Van energievraag naar onderbouwd investeringsbesluit, gebaseerd op echte data.',
    href: '/business-cases',
    image: '/v2/hero-business-cases',
    imageAlt: 'Overleg over een businesscase',
  },
  {
    title: 'Energiecontracten',
    body: 'GreenDee brengt in kaart welke contractvorm past bij je verbruiksprofiel en begeleidt de overstap.',
    href: '/energiecontracten',
    image: '/v2/hero-energiecontracten',
    imageAlt: 'Het team van GreenDee in gesprek met een ondernemer',
  },
  {
    title: 'Monitoring en rendementsbewaking',
    body: 'GreenDee bewaakt of je energie-installatie doet wat de businesscase beloofde.',
    href: '/monitoring',
    image: '/v2/hero-monitoring',
    imageAlt: 'Grafieken op een scherm waarop prestaties worden gevolgd',
  },
  {
    title: 'Energyhubs',
    body: 'Van energiesimulatie per bedrijf tot een gezamenlijke energyhub. GreenDee helpt gemeenten en bedrijventerreinen ondernemers verder ondanks netcongestie.',
    href: '/energyhubs',
    image: '/v2/hero-energyhubs',
    imageAlt: 'Bedrijventerrein vanuit de lucht',
  },
]

// Geen eigen og-beeld in /og voor deze pagina, dus geen `afbeelding` meegeven:
// useSeo valt dan terug op het standaardbeeld in plaats van een kapotte link.
useSeo({
  titel: 'Onze diensten',
  beschrijving:
    'Alle diensten van GreenDee op één pagina: energiesimulaties, offertetrajecten, businesscases, energiecontracten, monitoring en energyhubs.',
})
</script>
