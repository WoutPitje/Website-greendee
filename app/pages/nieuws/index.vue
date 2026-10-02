<template>
  <div>
    <InnerPageHero
      eyebrow="Kennisbank"
      title="Antwoord op uw vragen over energie."
      intro="Uitleg over netcongestie, batterijen, subsidies en wetgeving. Plus het laatste nieuws van GreenDee."
      image="/v2/hero-nieuws"
      image-alt="GreenDee aan het werk"
      cta-label=""
    />

    <section v-if="featured" class="flex flex-col items-center gap-8 bg-white px-5 pb-20 pt-16 lg:px-36 lg:pt-[88px]">
      <p class="w-full max-w-container text-[15px] font-bold leading-[26px] text-greendee-green">Uitgelicht</p>

      <NuxtLink
        :to="`/nieuws/${featured.slug}`"
        class="flex w-full max-w-container flex-col items-stretch overflow-hidden rounded-[20px] border-[1.5px] border-gray-200 bg-white lg:flex-row lg:items-center"
      >
        <div class="h-[240px] shrink-0 bg-[#d9dde3] lg:h-auto lg:w-[520px] lg:self-stretch">
          <img v-if="featured.image" :src="featured.image" :alt="featured.title" class="size-full object-cover">
        </div>
        <div class="flex flex-1 flex-col items-start gap-4 p-6 lg:p-12">
          <div class="flex items-center gap-2.5">
            <span class="rounded-full bg-greendee-yellow px-3 py-1.5 text-[12px] font-bold leading-4 text-[#412402]">
              {{ featured.category }}
            </span>
            <span class="text-[13px] font-medium leading-[18px] text-gray-500">
              {{ featured.readingMinutes }} min lezen
            </span>
          </div>
          <h2 class="w-full text-[26px] font-extrabold leading-[34px] text-greendee-ink lg:text-[34px] lg:leading-[42px]">
            {{ featured.title }}
          </h2>
          <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-[17px] lg:leading-7">
            {{ featured.summary }}
          </p>
          <span class="flex items-center justify-center rounded-full bg-greendee-yellow px-4 py-3 text-[14px] font-bold text-greendee-ink">
            Lees het artikel
          </span>
        </div>
      </NuxtLink>
    </section>

    <section class="flex flex-col items-center gap-10 rounded-t-[40px] bg-[#f3f3f3] px-5 pb-24 pt-16 lg:px-36 lg:pt-[88px]">
      <div class="flex w-full max-w-container flex-col items-start gap-[5px]">
        <p class="text-[15px] font-bold leading-[26px] text-greendee-green">Kennisbank</p>
        <h2 class="w-full text-[28px] font-extrabold leading-9 text-greendee-ink lg:text-h2 lg:leading-[44px]">
          Alles over energie, uitgelegd.
        </h2>
        <p class="w-full text-[15px] font-medium leading-[26px] text-gray-600 lg:text-[17px]">
          Artikelen over netcongestie, techniek, subsidies en wetgeving. En het laatste
          nieuws van GreenDee.
        </p>
      </div>

      <div v-if="articles.length" class="flex w-full max-w-container flex-col items-center gap-10">
        <div class="flex w-full flex-wrap items-start gap-9">
          <button
            v-for="option in filters"
            :key="option.value"
            type="button"
            class="flex flex-col items-start gap-2"
            @click="active = option.value"
          >
            <span class="flex items-start gap-1.5">
              <span class="text-[16px] font-bold leading-[22px]" :class="active === option.value ? 'text-greendee-green' : 'text-gray-600'">
                {{ option.label }}
              </span>
              <span class="text-[12px] font-semibold leading-4" :class="active === option.value ? 'text-greendee-green' : 'text-gray-400'">
                {{ option.count }}
              </span>
            </span>
            <span class="h-0.5 w-full rounded-sm" :class="active === option.value ? 'bg-greendee-green' : 'bg-transparent'" />
          </button>
        </div>

        <div class="flex w-full flex-wrap items-start gap-6">
          <NieuwsArticleCard v-for="article in visible" :key="article.id" :article="article" />

          <!-- De kaarten groeien mee zodat een rij altijd volloopt, maar dan rekt
               een halfvolle laatste rij zijn kaarten breder uit dan de rijen
               erboven. Deze onzichtbare opvullers dragen dezelfde basisbreedte en
               vangen die ruimte op, zodat elke kaart even breed blijft. Onder de
               768px staat er toch maar een kaart per rij en zijn ze overbodig. -->
          <i
            v-for="n in 2"
            :key="`opvuller-${n}`"
            aria-hidden="true"
            class="hidden h-0 grow basis-[330px] md:block"
          />
        </div>

        <button
          v-if="filtered.length > shown"
          type="button"
          class="flex items-center justify-center rounded-2xl bg-greendee-yellow px-5 py-4 text-[18px] font-bold text-greendee-ink"
          @click="shown += 6"
        >
          Meer artikelen
        </button>
      </div>

      <p v-else class="w-full max-w-container py-10 text-[15px] font-medium text-gray-500">
        Er zijn nog geen artikelen gepubliceerd. Zodra GreenDee in Strapi het eerste
        artikel plaatst, verschijnt het hier.
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Nieuws en kennisbank | GreenDee',
  meta: [{
    name: 'description',
    content: 'Artikelen over netcongestie, techniek, subsidies en wetgeving, plus het laatste nieuws van GreenDee.',
  }],
})

const { data } = await useArticles()
const articles = computed(() => data.value ?? [])
const featured = computed(() => articles.value.find(item => item.featured) ?? null)

// The knowledge base lists everything except the article already highlighted above.
const rest = computed(() => articles.value.filter(item => item.id !== featured.value?.id))

const active = ref('alles')
const shown = ref(6)

const filters = computed(() => {
  const categories = [...new Set(rest.value.map(item => item.category).filter(Boolean))].sort()

  return [
    { label: 'Alles', value: 'alles', count: rest.value.length },
    ...categories.map(category => ({
      label: category,
      value: category,
      count: rest.value.filter(item => item.category === category).length,
    })),
  ]
})

const filtered = computed(() =>
  active.value === 'alles' ? rest.value : rest.value.filter(item => item.category === active.value),
)

const visible = computed(() => filtered.value.slice(0, shown.value))

watch(active, () => { shown.value = 6 })
</script>
