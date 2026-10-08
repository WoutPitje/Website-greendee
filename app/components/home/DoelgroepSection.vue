<template>
  <section class="flex flex-col items-center justify-center bg-white px-5 py-14 lg:px-2.5 lg:py-16">
    <div class="flex w-full max-w-container flex-col items-center gap-8 py-2.5 lg:flex-row lg:gap-[107px]">
      <div class="h-[260px] w-full shrink-0 overflow-hidden rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] sm:h-[410px] lg:w-[580px]">
        <picture>
          <source :srcset="`${active.image}-1280.webp`" type="image/webp">
          <img
            :src="`${active.image}-1280.jpg`"
            :alt="active.alt"
            class="size-full object-cover"
            width="580"
            height="410"
          >
        </picture>
      </div>

      <div class="flex w-full flex-col items-start justify-end gap-[5px] lg:w-[400px]">
        <p class="text-[15px] font-bold leading-6 tracking-[-0.3px] text-greendee-green lg:text-body lg:tracking-[-0.36px]">
          Voor wie
        </p>
        <h2 class="text-[28px] font-bold leading-[35px] text-greendee-ink lg:text-h2 lg:text-black">
          {{ active.title }}
        </h2>

        <div class="flex w-full flex-col items-start gap-6 lg:items-center lg:gap-[25px]">
          <p class="w-full text-[15px] font-medium leading-6 text-gray-600 lg:text-body lg:tracking-[-0.36px] lg:text-black">
            {{ active.body }}
          </p>

          <div class="flex items-center rounded-[40px] bg-[#f3f3f3] px-1 py-[3px]">
            <button
              v-for="segment in segments"
              :key="segment.key"
              type="button"
              class="flex items-center justify-center px-4 py-2 text-[14px] font-semibold leading-[26px] tracking-[-0.28px] transition-colors"
              :class="selected === segment.key
                ? 'rounded-[40px] bg-greendee-green text-white'
                : 'rounded-2xl text-greendee-green'"
              :aria-pressed="selected === segment.key"
              @click="selected = segment.key"
            >
              {{ segment.label }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// The section opens on a neutral pitch with no segment selected; picking one of
// the three chips swaps the photo, heading and paragraph.
type SegmentKey = 'mkb' | 'bedrijventerrein' | 'agrarisch'

const segments: { key: SegmentKey, label: string }[] = [
  { key: 'mkb', label: 'Mkb' },
  { key: 'bedrijventerrein', label: 'Bedrijventerrein' },
  { key: 'agrarisch', label: 'Agrarisch' },
]

const content = {
  neutraal: {
    title: 'Oplossingen voor elke sector.',
    body: 'Of je nu een bedrijventerrein beheert, een mkb-onderneming runt of een agrarisch bedrijf hebt: GreenDee helpt je grip te krijgen op netcongestie en energiekosten.',
    image: '/v2/doelgroep-neutraal',
    alt: 'Batterijsysteem in een weiland',
  },
  mkb: {
    title: 'Verduurzamen zonder gedoe.',
    body: 'Advies en subsidiebegeleiding, afgestemd op de schaal van je onderneming.',
    image: '/v2/doelgroep-mkb',
    alt: 'Mkb-ondernemer bij de eigen energie-installatie',
  },
  bedrijventerrein: {
    title: 'Grip op netcongestie voor je hele terrein.',
    body: 'Meerdere bedrijven, één aansluiting. GreenDee zorgt dat iedereen stroom houdt, ook bij piekbelasting.',
    image: '/v2/doelgroep-bedrijventerrein',
    alt: 'Bedrijventerrein vanuit de lucht',
  },
  agrarisch: {
    title: 'Energieopslag die meebeweegt met je bedrijfsvoering.',
    body: 'Van koeling tot stallen. Altijd voldoende capaciteit, ook op piekmomenten in het seizoen.',
    image: '/v2/doelgroep-agrarisch',
    alt: 'Agrarisch bedrijf met zonnepanelen',
  },
}

const selected = ref<SegmentKey | null>(null)
const active = computed(() => content[selected.value ?? 'neutraal'])
</script>
