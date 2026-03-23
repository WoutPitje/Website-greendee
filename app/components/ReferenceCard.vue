<template>
  <div
    class="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition-all duration-300 hover:shadow-xl hover:ring-greendee-green/50 cursor-pointer"
    @click="$emit('click')"
    role="button"
    tabindex="0"
    @keydown.enter="$emit('click')"
    @keydown.space.prevent="$emit('click')"
  >
    <!-- Image Container -->
    <div class="relative h-64 w-full overflow-hidden bg-gray-100">
      <img
        :src="reference.image"
        :alt="`${reference.title} - ${reference.location}`"
        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      >
      <!-- Category Badge Overlay -->
      <div class="absolute top-4 right-4">
        <span
          :class="[
            'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-md',
            reference.category === 'Energiehandel'
              ? 'bg-greendee-green text-white'
              : 'bg-greendee-yellow text-gray-900'
          ]"
        >
          {{ reference.category }}
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-6">
      <div class="flex-1">
        <h3 class="text-xl font-bold text-gray-900 group-hover:text-greendee-green transition-colors">
          {{ reference.title }}
        </h3>

        <div class="mt-2 flex items-center gap-2 text-sm text-gray-600">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
          <span>{{ reference.location }}</span>
        </div>

        <div class="mt-3 flex items-center gap-2">
          <div class="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3 py-1.5">
            <svg class="h-4 w-4 text-greendee-green" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span class="text-sm font-semibold text-gray-900">{{ reference.capacity }}</span>
          </div>
        </div>

        <p class="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
          {{ reference.description }}
        </p>
      </div>

      <!-- Read More Link -->
      <div class="mt-4 flex items-center text-sm font-semibold text-greendee-green group-hover:text-green-700">
        Lees meer
        <svg class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  reference: {
    type: Object,
    required: true
  }
})

defineEmits(['click'])
</script>
