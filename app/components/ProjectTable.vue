<template>
  <div class="flex w-full max-w-container flex-col items-center gap-10">
    <div class="flex w-full flex-wrap items-start justify-center gap-6 lg:gap-9">
      <button
        v-for="option in filters"
        :key="option.label"
        type="button"
        class="flex flex-col items-center gap-2.5"
        @click="active = option.value"
      >
        <span class="flex items-start gap-1.5 font-bold">
          <span class="text-[16px]" :class="active === option.value ? 'text-greendee-green' : 'text-gray-600'">
            {{ option.label }}
          </span>
          <span class="text-[12px]" :class="active === option.value ? 'text-greendee-green' : 'text-gray-400'">
            {{ option.count }}
          </span>
        </span>
        <span class="h-0.5 w-full rounded-sm" :class="active === option.value ? 'bg-greendee-green' : 'bg-transparent'" />
      </button>
    </div>

    <div class="flex w-full flex-col items-start">
      <div
        v-for="reference in visible"
        :key="reference.id"
        class="flex w-full flex-col gap-1 rounded-xl border-b border-gray-200 py-5 pl-4 pr-5 sm:flex-row sm:items-center sm:gap-6"
      >
        <div class="flex flex-1 flex-wrap items-center gap-x-3.5 gap-y-0.5">
          <p class="text-[18px] font-bold text-greendee-ink">{{ reference.title }}</p>
          <p class="text-[15px] font-medium text-gray-500">{{ reference.location }}</p>
        </div>
        <p class="text-[14px] font-medium text-gray-600 sm:w-[170px] sm:text-right">{{ reference.category }}</p>
        <p class="text-[18px] font-bold text-greendee-green sm:w-[165px] sm:text-right">{{ reference.capacity }}</p>
      </div>
    </div>

    <button
      v-if="filtered.length > limit"
      type="button"
      class="flex items-center gap-2.5 rounded-full border-[1.5px] border-greendee-green bg-white px-7 py-[15px] text-[15px] font-bold text-greendee-green"
      @click="expanded = true"
    >
      Toon alle {{ filtered.length }} projecten
      <span aria-hidden="true">↓</span>
    </button>
  </div>
</template>

<script setup lang="ts">
import type { Reference } from '~/composables/useReferences'

const props = withDefaults(defineProps<{
  references: Reference[]
  /** Rows shown before the "show all" button is used. */
  limit?: number
}>(), { limit: 8 })

const active = ref<string>('alle')
const expanded = ref(false)

// Categories and their counts come from the data rather than a fixed list, so
// the filter bar stays correct when GreenDee adds a project in Strapi.
const filters = computed(() => {
  const categories = [...new Set(props.references.map(item => item.category).filter(Boolean))].sort()

  return [
    { label: 'Alle projecten', value: 'alle', count: props.references.length },
    ...categories.map(category => ({
      label: category,
      value: category,
      count: props.references.filter(item => item.category === category).length,
    })),
  ]
})

const filtered = computed(() =>
  active.value === 'alle'
    ? props.references
    : props.references.filter(item => item.category === active.value),
)

const visible = computed(() => (expanded.value ? filtered.value : filtered.value.slice(0, props.limit)))

// Collapse again when switching filters, so the button keeps making sense.
watch(active, () => { expanded.value = false })
</script>
