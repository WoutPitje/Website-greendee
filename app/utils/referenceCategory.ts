// One place for the category colours, so the cards and the filter buttons on
// the references page can never drift apart.

const CATEGORY_CLASSES: Record<string, { badge: string; filter: string }> = {
  Energiehandel: {
    badge: 'bg-greendee-green text-white',
    filter: 'bg-greendee-green text-white shadow-md',
  },
  Netcongestie: {
    badge: 'bg-greendee-yellow text-gray-900',
    filter: 'bg-greendee-yellow text-gray-900 shadow-md',
  },
  'Energie-optimalisatie': {
    badge: 'bg-blue-600 text-white',
    filter: 'bg-blue-600 text-white shadow-md',
  },
  Elektrificatie: {
    badge: 'bg-indigo-600 text-white',
    filter: 'bg-indigo-600 text-white shadow-md',
  },
}

const FALLBACK = { badge: 'bg-gray-700 text-white', filter: 'bg-gray-700 text-white shadow-md' }

export const REFERENCE_CATEGORIES = Object.keys(CATEGORY_CLASSES)

export function referenceCategoryClass(category: string): string {
  return (CATEGORY_CLASSES[category] ?? FALLBACK).badge
}

export function referenceFilterClass(category: string | null, active: boolean): string {
  if (!active) return 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  if (!category) return 'bg-greendee-green text-white shadow-md'
  return (CATEGORY_CLASSES[category] ?? FALLBACK).filter
}
