// Reference projects come from Strapi, proxied under /cms (see
// server/routes/cms/[...path].ts). Strapi's own field names are mapped to the
// shape the components already used, so ReferenceCard/ReferenceModal stay
// unchanged.

export interface Reference {
  id: string
  title: string
  location: string
  capacity: string
  specs: string
  category: string
  status: string
  description: string
  image: string
  imageIsLogo: boolean
  featured: boolean
}

interface StrapiReference {
  documentId?: string
  slug?: string
  title?: string
  location?: string
  capacity?: string
  specs?: string
  category?: string
  status?: string
  description?: string
  featured?: boolean
  imageIsLogo?: boolean
  image?: { url?: string } | null
}

function toReference(entry: StrapiReference): Reference {
  const url = entry.image?.url ?? ''

  return {
    id: entry.slug || entry.documentId || '',
    title: entry.title ?? '',
    location: entry.location ?? '',
    capacity: entry.capacity ?? '',
    specs: entry.specs ?? '',
    category: entry.category ?? '',
    // Entries from before the status field existed count as delivered work.
    status: entry.status ?? 'Gerealiseerd',
    description: entry.description ?? '',
    // Strapi returns /uploads/…; serve it through our own proxy.
    image: url.startsWith('/') ? `/cms${url}` : url,
    imageIsLogo: Boolean(entry.imageIsLogo),
    featured: Boolean(entry.featured),
  }
}

export function useReferences() {
  return useAsyncData<Reference[]>(
    'references',
    async () => {
      const res = await $fetch<{ data?: StrapiReference[] }>('/cms/api/references', {
        query: {
          populate: 'image',
          'pagination[pageSize]': 100,
          'sort[0]': 'title:asc',
        },
      })

      return (res?.data ?? []).map(toReference)
    },
    { default: () => [] },
  )
}
