// Testimonials live in Strapi alongside the reference projects and are reached
// through the same /cms proxy (see server/routes/cms/[...path].ts).

export interface Testimonial {
  id: string
  quote: string
  authorName: string
  authorCompany: string
  avatar: string
}

interface StrapiTestimonial {
  documentId?: string
  quote?: string
  authorName?: string
  authorCompany?: string
  avatar?: { url?: string } | null
}

function toTestimonial(entry: StrapiTestimonial): Testimonial {
  const url = entry.avatar?.url ?? ''

  return {
    id: entry.documentId || entry.authorName || '',
    quote: entry.quote ?? '',
    authorName: entry.authorName ?? '',
    authorCompany: entry.authorCompany ?? '',
    avatar: url.startsWith('/') ? `/cms${url}` : url,
  }
}

// The design ships with made-up names ("Peter Pannenkoek", "Mark Rutte"). Those
// must never reach visitors, so they only render while running `nuxt dev`, to
// keep the section visible until GreenDee has entered real quotes in Strapi.

export function useTestimonials(limit = 3) {
  return useAsyncData<Testimonial[]>(
    `testimonials-${limit}`,
    async () => {
      try {
        const res = await $fetch<{ data?: StrapiTestimonial[] }>('/cms/api/testimonials', {
          query: {
            populate: 'avatar',
            'filters[featured][$eq]': true,
            'pagination[pageSize]': limit,
            'sort[0]': 'order:asc',
          },
        })

        const items = (res?.data ?? []).map(toTestimonial)
        if (items.length) return items
      }
      catch {
        // Strapi not reachable, or the collection does not exist yet.
      }

      // Geen testimonials betekent geen sectie. Zolang er niets in het CMS
      // staat hoort er ook geen voorbeeldcitaat op de site te verschijnen.
      return []
    },
    { default: () => [] },
  )
}
