<template>
  <div>
    <InnerPageHero
      eyebrow="Projecten"
      title="Bewezen oplossingen in de praktijk."
      intro="Van agrarische bedrijven tot bedrijventerreinen. GreenDee realiseert batterijopslag, zonnestroom en laadinfrastructuur door heel Nederland. GreenDee streeft ernaar dat elk project wordt gerealiseerd."
      image="/v2/hero-projecten"
      image-alt="Overleg over een project"
      cta-label=""
    />

    <section class="flex flex-col items-center gap-12 bg-white px-5 py-16 lg:px-0 lg:py-24">
      <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[760px]">
        <p class="text-[15px] font-bold leading-6 text-greendee-green lg:text-body">Uitgelichte projecten.</p>
        <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          Projecten waar we trots op zijn.
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-black lg:text-body">
          Zo ziet ons resultaat er in de praktijk uit.
        </p>
      </div>

      <div class="flex w-full max-w-container flex-wrap items-stretch justify-center gap-6">
        <FeaturedProjectCard
          v-for="reference in featured"
          :key="reference.id"
          :reference="reference"
          @open="selected = $event"
        />
      </div>
    </section>

    <section class="flex flex-col items-center gap-10 overflow-hidden rounded-t-[32px] bg-white px-5 pb-24 pt-[88px] lg:px-0">
      <div class="flex w-full flex-col items-center gap-[5px] text-center lg:w-[760px]">
        <p class="text-[15px] font-bold leading-6 text-greendee-green lg:text-body">Alle projecten</p>
        <h2 class="w-full text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          {{ references.length }} projecten door heel Nederland.
        </h2>
        <p class="w-full text-[15px] font-medium leading-6 text-black lg:text-body">
          Van melkgeitenbedrijf tot logistiek centrum. Bekijk hier al onze projecten.
        </p>
      </div>

      <ProjectTable :references="references" />
    </section>

    <CtaSection
      title="Wordt uw bedrijf het volgende project?"
      body="Elk project begint met dezelfde vraag, maar eindigt niet met hetzelfde antwoord. Benieuwd wat we voor u kunnen betekenen?"
      background="mint"
      :rounded-top="false"
    />

    <ProjectDetailModal :reference="selected" @close="close" />
  </div>
</template>

<script setup lang="ts">
import type { Reference } from '~/composables/useReferences'

useHead({
  title: 'Projecten | GreenDee',
  meta: [{
    name: 'description',
    content: 'Van agrarische bedrijven tot bedrijventerreinen: batterijopslag, zonnestroom en laadinfrastructuur door heel Nederland.',
  }],
})

const { data } = await useReferences()
const references = computed(() => data.value ?? [])
const featured = computed(() => references.value.filter(item => item.featured).slice(0, 4))

const selected = ref<Reference | null>(null)

// De projectenrail op de homepage linkt naar /projecten#<slug>, dus open het
// bijbehorende venster meteen als er een hash meekomt.
const route = useRoute()

function openFromHash() {
  const slug = route.hash.replace('#', '')
  if (!slug) return
  selected.value = references.value.find(item => item.id === slug) ?? null
}

onMounted(openFromHash)
watch(references, openFromHash)

function close() {
  selected.value = null
  if (route.hash) navigateTo({ path: route.path }, { replace: true })
}
</script>
