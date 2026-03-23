<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click="handleBackdropClick"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="reference ? `modal-title-${reference.id}` : undefined"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity" />

        <!-- Modal Container -->
        <div class="flex min-h-full items-center justify-center p-4 sm:p-6 lg:p-8">
          <Transition
            enter-active-class="transition ease-out duration-300"
            enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to-class="opacity-100 translate-y-0 sm:scale-100"
            leave-active-class="transition ease-in duration-200"
            leave-from-class="opacity-100 translate-y-0 sm:scale-100"
            leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              v-if="isOpen && reference"
              ref="modalContent"
              class="relative w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all"
              @click.stop
            >
              <!-- Close Button -->
              <button
                type="button"
                class="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-gray-700 shadow-lg hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-greendee-green focus:ring-offset-2 transition-colors"
                @click="$emit('close')"
                aria-label="Sluiten"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <!-- Image -->
              <div class="relative h-64 w-full overflow-hidden bg-gray-100 sm:h-80 lg:h-96">
                <img
                  :src="reference.image"
                  :alt="`${reference.title} - ${reference.location}`"
                  class="h-full w-full object-cover"
                >
                <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              <!-- Content -->
              <div class="p-6 sm:p-8 lg:p-10">
                <!-- Title & Meta -->
                <div class="mb-6">
                  <div class="mb-3 flex flex-wrap items-center gap-3">
                    <span
                      :class="[
                        'inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold',
                        reference.category === 'Energiehandel'
                          ? 'bg-greendee-green text-white'
                          : 'bg-greendee-yellow text-gray-900'
                      ]"
                    >
                      {{ reference.category }}
                    </span>
                    <div class="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-1.5">
                      <svg class="h-4 w-4 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                      </svg>
                      <span class="text-sm font-semibold text-gray-900">{{ reference.capacity }}</span>
                    </div>
                  </div>

                  <h2
                    :id="`modal-title-${reference.id}`"
                    class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  >
                    {{ reference.title }}
                  </h2>

                  <div class="mt-2 flex items-center gap-2 text-base text-gray-600">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                    <span>{{ reference.location }}</span>
                  </div>
                </div>

                <!-- Description -->
                <div class="prose prose-gray max-w-none">
                  <p class="text-base leading-7 text-gray-600">
                    {{ reference.description }}
                  </p>
                </div>

                <!-- CTA -->
                <div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-gray-200 pt-6">
                  <div class="text-sm text-gray-500">
                    Geïnteresseerd in een soortgelijk project?
                  </div>
                  <a
                    href="#contact"
                    class="inline-flex items-center justify-center rounded-md bg-greendee-green px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greendee-green transition-colors"
                    @click="$emit('close')"
                  >
                    Neem contact op
                  </a>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { watch, ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  reference: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const modalContent = ref(null)

// Handle backdrop click
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    emit('close')
  }
}

// Handle ESC key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Add/remove event listeners
onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  document.body.style.overflow = ''
})
</script>
