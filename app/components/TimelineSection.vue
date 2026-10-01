<template>
  <section class="flex flex-col items-center justify-center gap-12 bg-[#f3f3f3] px-5 py-16 lg:px-36 lg:py-[100px]">
    <div class="flex w-full flex-col items-center gap-2 text-center lg:w-[760px]">
      <p class="text-[15px] font-bold leading-6 text-greendee-green">{{ eyebrow }}</p>
      <h2 class="w-full text-[28px] font-extrabold leading-[36px] text-greendee-ink lg:text-h2 lg:leading-[44px]">
        {{ title }}
      </h2>
    </div>

    <div ref="rail" class="relative w-full max-w-container">
      <!-- De groene lijn volgt de scrollpositie: hij vult mee terwijl de
           stappenbalk door het beeld beweegt. De cijfers kleuren mee zodra de
           lijn er voorbij is. -->
      <div aria-hidden="true" class="absolute left-0 top-[22px] hidden h-0.5 w-full bg-[#cfd8cd] lg:block">
        <div class="h-full bg-greendee-green" :style="{ width: `${voortgang * 100}%` }" />
      </div>

      <ol class="flex flex-col gap-8 lg:flex-row lg:gap-6">
        <li v-for="(step, index) in steps" :key="step.title" class="relative flex flex-1 flex-col items-start gap-2.5">
          <span
            class="bg-[#f3f3f3] pr-3.5 text-[38px] font-extrabold leading-[46px] tracking-[-1.2px] transition-colors duration-200"
            :class="bereikt(index) ? 'text-greendee-green' : 'text-[#b9c7b5]'"
          >
            {{ index + 1 }}
          </span>
          <p class="w-full text-[16px] font-bold leading-[23px] text-greendee-ink">{{ step.title }}</p>
          <p class="w-full text-[13.5px] font-medium leading-[21px] text-gray-600">{{ step.body }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  eyebrow: string
  title: string
  steps: { title: string, body: string }[]
}>()

const rail = ref<HTMLElement | null>(null)
const voortgang = ref(0)

// Een cijfer kleurt groen zodra de lijn zijn positie heeft bereikt. Het eerste
// staat op 0, dus dat is meteen groen als de balk in beeld komt.
function bereikt(index: number) {
  const stappen = Math.max(1, props.steps.length - 1)
  return voortgang.value >= index / stappen - 0.001
}

let bezig = false

function meten() {
  const el = rail.value
  if (!el) return

  const r = el.getBoundingClientRect()
  const hoogte = window.innerHeight

  // Vullen begint als de balk op driekwart van het scherm staat en is klaar
  // wanneer hij een derde van boven is. Dat valt samen met normaal doorlezen.
  const start = hoogte * 0.75
  const eind = hoogte * 0.35
  const ruw = (start - r.top) / (start - eind)

  voortgang.value = Math.min(1, Math.max(0, ruw))
}

function opScroll() {
  if (bezig) return
  bezig = true
  requestAnimationFrame(() => { meten(); bezig = false })
}

onMounted(() => {
  // Beweging uitgezet: meteen volledig, zonder mee te scrollen.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    voortgang.value = 1
    return
  }

  meten()
  window.addEventListener('scroll', opScroll, { passive: true })
  window.addEventListener('resize', opScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', opScroll)
  window.removeEventListener('resize', opScroll)
})
</script>
