<template>
  <section class="flex flex-col items-center justify-center overflow-hidden rounded-[32px] bg-[#ecf4eb] px-5 py-16 lg:px-36 lg:py-[100px]">
    <div class="flex w-full max-w-container flex-col items-start gap-8 lg:flex-row lg:gap-14">
      <!-- Sticky rail: the highlighted step follows whichever panel is in view. -->
      <div class="flex w-full flex-col items-start gap-[22px] lg:sticky lg:top-24 lg:w-[316px] lg:shrink-0">
        <div class="flex w-full flex-col items-start gap-1.5">
          <p class="text-[15px] font-bold leading-6 text-greendee-green">{{ eyebrow }}</p>
          <h2 class="w-full text-[26px] font-extrabold leading-[34px] text-greendee-ink lg:text-[30px] lg:leading-[38px]">
            {{ title }}
          </h2>
          <p class="w-full text-[15px] font-medium leading-6 text-gray-600">{{ intro }}</p>
        </div>

        <ol class="hidden w-full flex-col items-start lg:flex">
          <li v-for="(step, index) in steps" :key="step.title" class="flex w-full items-center gap-3.5 py-[11px]">
            <span
              class="flex size-7 items-center justify-center rounded-full border-[1.5px] text-[12px] font-bold leading-4"
              :class="index === activeStep
                ? 'border-greendee-green bg-greendee-green text-white'
                : 'border-[#cfd8cd] bg-white text-gray-500'"
            >
              {{ index + 1 }}
            </span>
            <span
              class="flex-1 text-[15px] leading-[22px]"
              :class="index === activeStep ? 'font-bold text-greendee-ink' : 'font-semibold text-[#8b9691]'"
            >
              {{ step.title }}
            </span>
          </li>
        </ol>
      </div>

      <div class="flex w-full flex-col items-start gap-4 lg:flex-1">
        <article
          v-for="(step, index) in steps"
          :key="step.title"
          :ref="el => setPanel(el as HTMLElement | null, index)"
          class="flex w-full flex-col items-start gap-3 overflow-hidden rounded-2xl bg-white px-6 py-7 transition-colors lg:px-[34px] lg:py-[30px]"
          :class="index === activeStep
            ? 'border-2 border-greendee-green shadow-[0px_4px_18px_0px_rgba(15,101,12,0.14)]'
            : 'border-[1.5px] border-gray-200'"
        >
          <span
            class="flex items-start rounded-full px-[11px] py-[5px] text-[11px] font-bold leading-[15px]"
            :class="index === activeStep ? 'bg-[#ecf4eb] text-greendee-green' : 'bg-[#f3f3f3] text-gray-500'"
          >
            Stap {{ index + 1 }} van {{ steps.length }}
          </span>
          <h3 class="w-full text-[20px] font-bold leading-[27px] text-greendee-ink lg:text-[22px] lg:leading-[29px]">
            {{ step.title }}
          </h3>
          <p class="w-full text-[15px] font-medium leading-[25px] text-gray-600">{{ step.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  intro: string
  steps: { title: string, body: string }[]
}>()

const panels: HTMLElement[] = []
const activeStep = ref(0)

function setPanel(el: HTMLElement | null, index: number) {
  if (el) panels[index] = el
}

let observer: IntersectionObserver | null = null

onMounted(() => {
  // The panel closest to the upper third of the viewport is the active one,
  // which keeps the rail in step with what the reader is looking at.
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const index = panels.indexOf(entry.target as HTMLElement)
        if (index !== -1) activeStep.value = index
      }
    },
    { rootMargin: '-30% 0px -60% 0px' },
  )

  for (const panel of panels) observer.observe(panel)
})

onBeforeUnmount(() => observer?.disconnect())
</script>
