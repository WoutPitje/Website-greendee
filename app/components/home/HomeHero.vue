<template>
  <!-- De hero stond eerder gecentreerd met tekst op een schaduwrandje. Witte
       tekst op een lichte lucht las slecht, en het groene accent viel helemaal
       weg. Nu ligt er een groen verloop van links over de foto: de tekst staat
       op een echte ondergrond, de foto blijft schermbreed in beeld, en de
       cijfers eronder onderbouwen de belofte. -->
  <section class="relative min-h-[680px] overflow-hidden lg:h-[760px]">
    <picture>
      <source :srcset="`${image}-1280.webp 1280w, ${image}-2400.webp 2400w`" type="image/webp">
      <img
        :src="`${image}-2400.jpg`"
        :srcset="`${image}-1280.jpg 1280w, ${image}-2400.jpg 2400w`"
        alt=""
        class="absolute inset-0 size-full object-cover"
      >
    </picture>

    <div
      aria-hidden="true"
      class="absolute inset-0"
      style="background-image: linear-gradient(90deg, rgba(2,65,0,0.92) 0%, rgba(2,65,0,0.72) 38%, rgba(2,65,0,0.25) 70%, rgba(2,65,0,0) 100%)"
    />

    <AppHeader />

    <!-- Op mobiel past de inhoud niet gecentreerd binnen de hoogte: dan schuift
         hij omhoog tot achter de header. Daarom daar bovenlangs ruimte voor de
         header en laat de sectie meegroeien; vanaf lg centreert hij weer. -->
    <div class="relative mx-auto flex w-full max-w-container flex-col justify-center gap-6 px-5 pb-14 pt-[104px] lg:h-full lg:px-0 lg:py-0">
      <!-- Benoemt de breedte van het werk. Niet nog eens "partner": dat staat al
           in de kop eronder. -->
      <p class="text-[15px] font-bold leading-[26px] text-greendee-yellow">
        Zon, opslag, laadinfra en netcongestie
      </p>

      <h1 class="max-w-[680px] text-[32px] font-extrabold leading-[40px] text-white lg:text-[54px] lg:leading-[62px]">
        Jouw partner in
        <!-- Geel in plaats van groen: het merkgroen verdwijnt tegen het groene
             verloop, geel houdt het accent leesbaar. -->
        <span class="italic text-greendee-yellow">duurzame energieoplossingen.</span>
      </h1>

      <p class="max-w-[520px] text-[16px] font-medium leading-7 text-white/85 lg:text-[18px] lg:leading-8">
        GreenDee helpt bedrijventerreinen, mkb'ers en agrariërs bij het opzetten,
        monitoren en onderhouden van toekomstbestendige energieoplossingen.
      </p>

      <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        <NuxtLink
          to="/offertetrajecten"
          class="flex items-center justify-center rounded-full bg-greendee-yellow px-6 py-4 text-[16px] font-bold leading-[22px] text-greendee-ink transition-transform hover:-translate-y-0.5 lg:text-body"
        >
          Ontdek onze oplossingen
        </NuxtLink>
        <NuxtLink
          to="/projecten"
          class="flex items-center justify-center rounded-full border-2 border-white px-6 py-4 text-[16px] font-bold leading-[22px] text-white transition-colors hover:bg-white/10 lg:text-body"
        >
          Bekijk onze projecten
        </NuxtLink>
      </div>

      <div class="mt-2 flex flex-wrap gap-x-10 gap-y-4">
        <div v-for="cijfer in cijfers" :key="cijfer.label" class="border-l-2 border-greendee-yellow pl-4">
          <p class="text-[22px] font-extrabold leading-7 text-white lg:text-[24px]">{{ cijfer.waarde }}</p>
          <p class="text-[13px] font-medium text-white/70">{{ cijfer.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ image?: string }>(), { image: '/v2/hero-foto-molens' })

const { data: references } = await useReferences()

// Het projectaantal komt uit het CMS, zodat de hero niet achterloopt zodra er
// een project bij komt. De andere twee cijfers staan elders op de site al.
const cijfers = computed(() => [
  { waarde: `${(references.value ?? []).length}`, label: 'projecten gerealiseerd' },
  { waarde: '4,5', label: 'van 5 sterren' },
  { waarde: '5+', label: 'jaar ervaring' },
])
</script>
