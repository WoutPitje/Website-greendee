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
        :class="sleept ? 'cursor-grabbing select-none snap-none' : 'cursor-grab'"
        @scroll="onScroll"
        @pointerdown="startSlepen"
        @pointermove="sleep"
        @pointerup="stopSlepen"
        @pointercancel="stopSlepen"
        @pointerleave="stopSlepen"
        @click.capture="onderdrukKlikNaSlepen"
        @dragstart.prevent
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
                Ben je al overtuigd van de expertise van GreenDee, of wil je meer zien?
              </p>
              <p class="w-full text-[14px] font-bold text-greendee-yellow">
                Bekijk alle projecten →
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- De bolletjes stonden er als decoratie, maar ze zien eruit als knoppen.
           Daarom zijn het er nu ook: wie erop klikt verwacht te verspringen. -->
      <div class="flex w-full justify-center gap-3 py-4">
        <button
          v-for="index in slideCount"
          :key="index"
          type="button"
          class="h-1.5 rounded-[3px] transition-all"
          :class="index - 1 === activeSlide ? 'w-[18px] bg-greendee-green' : 'w-1.5 bg-[#e5e7eb] hover:bg-[#c9cdd3]'"
          :aria-label="`Ga naar project ${index} van ${slideCount}`"
          :aria-current="index - 1 === activeSlide"
          @click="gaNaar(index - 1)"
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

// 320px kaart + 35px tussenruimte.
const KAARTSTAP = 355

function onScroll() {
  const el = rail.value
  if (!el) return
  // Op een breed scherm staan er meerdere kaarten tegelijk in beeld, dus is de
  // rail eerder uitgescrold dan dat alle bolletjes aan de beurt zijn geweest.
  // Aan het eind lichten we daarom het laatste bolletje op: dat is wat je ziet.
  const maximum = el.scrollWidth - el.clientWidth
  activeSlide.value = el.scrollLeft >= maximum - 4
    ? slideCount.value - 1
    : Math.round(el.scrollLeft / KAARTSTAP)
}

function gaNaar(index: number) {
  rail.value?.scrollTo({ left: index * KAARTSTAP, behavior: 'smooth' })
}

// Op een touchscreen kun je de rail al vegen, maar met een muis niet: dan blijft
// hij stilstaan omdat de scrollbalk verborgen is. Daarom slepen met de aanwijzer.
const sleept = ref(false)
let startX = 0
let startScroll = 0
let afstand = 0

function startSlepen(e: PointerEvent) {
  // Touch en pen scrollen zelf al; alleen de muis heeft hulp nodig.
  if (e.pointerType !== 'mouse' || !rail.value) return
  sleept.value = true
  afstand = 0
  startX = e.clientX
  startScroll = rail.value.scrollLeft
  // Rechtstreeks op het element en niet via een klasse: Vue tekent pas bij de
  // volgende tick opnieuw, en tot die tijd trekt het verplichte snappen elke
  // sleepstap terug naar de kaart waar je vandaan kwam. Dan lijkt de rail stuk.
  rail.value.style.scrollSnapType = 'none'
}

function sleep(e: PointerEvent) {
  if (!sleept.value || !rail.value) return
  const verplaatsing = e.clientX - startX
  afstand = Math.max(afstand, Math.abs(verplaatsing))
  rail.value.scrollLeft = startScroll - verplaatsing
}

function stopSlepen() {
  if (!sleept.value) return
  sleept.value = false
  // Snappen weer aan de stylesheet overlaten, zodat de rail netjes op een
  // kaart uitkomt zodra je loslaat.
  if (rail.value) rail.value.style.scrollSnapType = ''
}

// Sleep je een kaart opzij, dan hoort hij niet ook nog te openen.
function onderdrukKlikNaSlepen(e: MouseEvent) {
  if (afstand > 5) {
    e.preventDefault()
    e.stopPropagation()
    afstand = 0
  }
}
</script>
