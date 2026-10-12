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
  projectStatus?: string
  /** Oude veldnaam. Zie de opmerking bij `status` hieronder. */
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
    // Het CMS-veld heette `status`, maar die naam is in Strapi 5 gereserveerd:
    // de waarde was wel te lezen en niet meer op te slaan. Nu heet het
    // `projectStatus`. De terugval op de oude naam blijft staan tot het oude
    // veld uit het schema is; daarna valt hij vanzelf droog.
    // Records van vóór dit veld tellen als opgeleverd werk.
    status: entry.projectStatus ?? entry.status ?? 'Gerealiseerd',
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
