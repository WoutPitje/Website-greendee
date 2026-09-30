<template>
  <section class="flex items-center justify-center bg-[#f3f3f3] px-5 py-14 lg:px-2.5 lg:py-16">
    <div class="flex w-full max-w-container flex-col items-start gap-2.5">
      <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
        Onze projecten
      </p>
      <h2 class="text-[28px] font-bold leading-[35px] text-greendee-ink lg:w-[500px] lg:text-h2 lg:text-black">
        Onze oplossingen in de praktijk.
      </h2>

      <!-- Horizontal rail, exactly as designed: the cards keep their 320px width
           and scroll sideways rather than wrapping. -->
      <div
        ref="rail"
        class="-mx-5 flex w-[calc(100%+40px)] snap-x snap-mandatory items-center gap-[35px] overflow-x-auto px-5 pb-2 pt-4 lg:mx-0 lg:w-full lg:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        @scroll="onScroll"
      >
        <ProjectCard v-for="reference in featured" :key="reference.id" :reference="reference" />

        <NuxtLink
          to="/projecten"
          class="relative block h-[420px] w-[320px] shrink-0 snap-start overflow-hidden rounded-2xl bg-greendee-green"
        >
          <div
            aria-hidden="true"
            class="absolute inset-x-0 bottom-0 h-[220px] bg-gradient-to-b from-transparent via-black/10 to-black/50"
          />
          <div class="absolute inset-x-5 bottom-5 flex flex-col items-start gap-[7px] text-center">
            <p class="w-full text-[20px] font-bold text-white">Nieuwsgierig geworden?</p>
            <div class="flex w-full flex-col items-start gap-5">
              <p class="w-full text-[13px] font-medium text-white/90">
                Bent u al overtuigd van de expertise van GreenDee, of wilt u meer zien?
              </p>
              <p class="w-full text-[14px] font-bold text-greendee-yellow">
                Bekijk alle projecten →
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <div class="flex w-full justify-center gap-3 py-4">
        <span
          v-for="index in slideCount"
          :key="index"
          class="h-1.5 rounded-[3px] transition-all"
          :class="index - 1 === activeSlide ? 'w-[18px] bg-greendee-green' : 'w-1.5 bg-[#e5e7eb]'"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: references } = await useReferences()

// The homepage rail shows the projects flagged as featured in Strapi, capped at
// four so the "all projects" card stays in view like it does in the design.
const featured = computed(() => (references.value ?? []).filter(item => item.featured).slice(0, 4))

// +1 for the closing "alle projecten" card.
const slideCount = computed(() => featured.value.length + 1)

const rail = ref<HTMLElement | null>(null)
const activeSlide = ref(0)

function onScroll() {
  const el = rail.value
  if (!el) return
  // 320px card + 35px gap.
  activeSlide.value = Math.round(el.scrollLeft / 355)
}
</script>
