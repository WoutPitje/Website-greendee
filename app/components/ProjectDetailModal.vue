<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <!-- De scroll zit op de buitenste laag en het centreren op een binnenlaag
           met min-h-full. Centreren op de scrollcontainer zelf snijdt de
           bovenkant af zodra de inhoud hoger is dan het scherm. -->
      <div
        v-if="reference"
        class="fixed inset-0 z-[60] overflow-y-auto bg-black/55"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`projectdetail-${reference.id}`"
        @click.self="$emit('close')"
      >
        <div class="flex min-h-full items-center justify-center p-4 py-10" @click.self="$emit('close')">
        <!-- Breedtes uit het ontwerp: 350 mobiel, 672 tablet, 960 desktop. -->
        <div
          ref="panel"
          class="relative w-full max-w-[350px] rounded-[24px] bg-white drop-shadow-[0px_24px_30px_rgba(0,0,0,0.22)] md:max-w-[672px] lg:max-w-[960px]"
        >
          <button
            ref="closeButton"
            type="button"
            class="absolute right-5 top-[18px] flex size-11 items-center justify-center rounded-full bg-[#f3f3f3] transition-colors hover:bg-gray-200"
            @click="$emit('close')"
          >
            <span class="sr-only">Sluiten</span>
            <img src="/v2/sluiten.svg" alt="" class="size-5" aria-hidden="true">
          </button>

          <div class="flex flex-col items-start gap-8 px-6 pb-8 pt-20 lg:flex-row lg:gap-14 lg:px-12 lg:pb-11 lg:pt-[76px]">
            <div class="flex w-full flex-col items-start gap-5 lg:flex-1">
              <h2 :id="`projectdetail-${reference.id}`" class="w-full text-[26px] font-bold leading-[34px] text-greendee-ink lg:text-[34px] lg:leading-[42px]">
                {{ reference.title }}
              </h2>

              <p v-if="lead" class="w-full text-[17px] font-medium leading-[28px] text-greendee-ink lg:text-[19px] lg:leading-[31px]">
                {{ lead }}
              </p>

              <p
                v-for="(paragraph, index) in bodyParagraphs"
                :key="index"
                class="w-full text-[15px] font-medium leading-[25px] text-gray-600 lg:text-[16px] lg:leading-[27px]"
              >
                {{ paragraph }}
              </p>
            </div>

            <!-- Feedback: het cijfervak mocht groter, en de foto hoort erbij —
                 zonder beeld bleef het venster een lap tekst. -->
            <div class="flex w-full flex-col gap-5 lg:w-[360px] lg:shrink-0">
              <div v-if="reference?.image" class="h-[200px] w-full overflow-hidden rounded-[20px] bg-gray-100 lg:h-[240px]">
                <img :src="reference.image" :alt="reference.title" class="size-full object-cover">
              </div>

              <div class="flex w-full flex-col items-start overflow-hidden rounded-[20px] bg-[#ecf4eb] p-8">
                <p class="text-[12px] font-bold tracking-[1.1px] text-greendee-green">CIJFERS</p>
                <div v-for="stat in stats" :key="stat.label" class="flex w-full flex-col items-start gap-1 pt-6">
                  <p class="w-full text-[14px] font-medium text-gray-600">{{ stat.label }}</p>
                  <p class="w-full text-[26px] font-bold leading-[34px] text-greendee-green">{{ stat.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Reference } from '~/composables/useReferences'

const props = defineProps<{ reference: Reference | null }>()
const emit = defineEmits<{ close: [] }>()

// Strapi holds one description field. The design opens with a larger lead
// paragraph, so the first block is lifted out and the rest follows as body.
const paragraphs = computed(() =>
  (props.reference?.description ?? '')
    .split(/\n{2,}/)
    .map(part => part.trim())
    .filter(Boolean),
)

// Bestaat de omschrijving uit één blok, dan is er geen lead: alles als body,
// anders wordt een lange alinea in zijn geheel op 19px gezet.
const lead = computed(() => (paragraphs.value.length > 1 ? paragraphs.value[0] : ''))
const bodyParagraphs = computed(() =>
  paragraphs.value.length > 1 ? paragraphs.value.slice(1) : paragraphs.value,
)

// Only the rows Strapi actually filled in, so a project without PV does not
// show an empty "Zonnepanelen".
const stats = computed(() => {
  const reference = props.reference
  if (!reference) return []

  return [
    { label: 'Batterijopslag', value: reference.capacity },
    { label: 'Extra systeem', value: reference.specs },
    { label: 'Oplossing', value: reference.category },
    { label: 'Status', value: reference.status },
  ].filter(row => row.value)
})

const closeButton = ref<HTMLElement | null>(null)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
}

// Lock the page behind the dialog and move focus into it when it opens.
watch(() => props.reference, async (value) => {
  if (import.meta.server) return

  if (value) {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeydown)
    await nextTick()
    closeButton.value?.focus()
  }
  else {
    document.body.style.overflow = ''
    document.removeEventListener('keydown', onKeydown)
  }
})

onBeforeUnmount(() => {
  if (import.meta.server) return
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>
