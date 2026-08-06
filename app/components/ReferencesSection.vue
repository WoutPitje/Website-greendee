<template>
  <div>
    <!-- Section Header -->
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-base font-semibold leading-7 text-greendee-green">
        {{ featured ? 'Uitgelichte Projecten' : 'Referenties' }}
      </h2>
      <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ featured ? 'Bewezen oplossingen in de praktijk' : 'Onze projecten' }}
      </p>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        {{
          featured
            ? 'Een selectie van onze succesvol afgeronde energieprojecten'
            : 'Van netcongestie tot elektrificatie: ontdek hoe we bedrijven en organisaties helpen met praktische energieoplossingen. Projecten die nog lopen zijn gemarkeerd als in ontwikkeling.'
        }}
      </p>
    </div>

    <!-- Filter Buttons (only on full references page) -->
    <div v-if="!featured" class="mt-12 flex flex-wrap justify-center gap-3">
      <button
        v-for="option in filterOptions"
        :key="option.label"
        @click="updateFilter(option.value)"
        :class="[
          'rounded-full px-6 py-2.5 text-sm font-semibold transition-all',
          referenceFilterClass(option.value, categoryFilter === option.value)
        ]"
      >
        {{ option.label }}
      </button>
    </div>

    <!-- References Grid -->
    <div :class="[
      'mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3',
      featured ? 'mt-16 sm:mt-20' : 'mt-12'
    ]">
      <ReferenceCard
        v-for="reference in displayedReferences"
        :key="reference.id"
        :reference="reference"
        @click="openModal(reference)"
      />
    </div>

    <!-- View All Button (only for featured mode) -->
    <div v-if="featured && displayedReferences.length < allReferences.length" class="mt-12 text-center">
      <NuxtLink
        to="/referenties"
        class="inline-flex items-center gap-x-2 rounded-md bg-greendee-green px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-greendee-green transition-colors"
      >
        Bekijk alle referenties
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Modal -->
    <ReferenceModal
      :is-open="isModalOpen"
      :reference="selectedReference"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  featured: {
    type: Boolean,
    default: false
  },
  categoryFilter: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:categoryFilter'])

const { data: allReferences } = useReferences()
const isModalOpen = ref(false)
const selectedReference = ref(null)

// Only offer a filter for categories that actually have projects, so an empty
// category never shows up as a button that yields nothing.
const filterOptions = computed(() => {
  const present = new Set((allReferences.value ?? []).map(r => r.category))
  return [
    { label: 'Alle projecten', value: null },
    ...REFERENCE_CATEGORIES.filter(c => present.has(c)).map(c => ({ label: c, value: c })),
  ]
})

// Update filter
const updateFilter = (category) => {
  emit('update:categoryFilter', category)
}

// Filter references based on featured prop and category filter
const displayedReferences = computed(() => {
  let filtered = allReferences.value ?? []

  // Filter by featured status
  if (props.featured) {
    filtered = filtered.filter(ref => ref.featured)
  }

  // Filter by category
  if (props.categoryFilter) {
    filtered = filtered.filter(ref => ref.category === props.categoryFilter)
  }

  return filtered
})

// Modal handlers
const openModal = (reference) => {
  selectedReference.value = reference
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  // Delay clearing the reference to allow transition to complete
  setTimeout(() => {
    selectedReference.value = null
  }, 300)
}
</script>
