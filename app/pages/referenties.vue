<template>
  <div>
    <!-- References Section -->
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <ReferencesSection :featured="false" v-model:category-filter="selectedCategory" />
      </div>
    </section>

    <!-- Contact -->
    <ContactFormSection />
  </div>
</template>

<script setup>
const selectedCategory = ref(null)

useHead({
  title: 'Referenties - GreenDee Projecten | Energieopslag & Netcongestie',
  meta: [
    {
      name: 'description',
      content: 'Bekijk onze gerealiseerde projecten in energieopslag en netcongestie. Van Cellpower batterijen tot complete energiehandel oplossingen voor bedrijven en organisaties.'
    },
    {
      name: 'keywords',
      content: 'referenties, energieopslag projecten, netcongestie oplossingen, Cellpower batterij, energiehandel, casestudies, GreenDee projecten, batterijopslag, peakshaving'
    },
    // Open Graph tags
    {
      property: 'og:title',
      content: 'Referenties - GreenDee Energieprojecten'
    },
    {
      property: 'og:description',
      content: 'Ontdek onze gerealiseerde projecten: van energieopslag bij agrarische bedrijven tot netcongestie oplossingen voor scholen en vastgoed.'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      property: 'og:url',
      content: 'https://greendee.nl/referenties'
    },
    {
      property: 'og:locale',
      content: 'nl_NL'
    },
    {
      property: 'og:site_name',
      content: 'GreenDee'
    },
    // Twitter Card tags
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:title',
      content: 'Referenties - GreenDee Energieprojecten'
    },
    {
      name: 'twitter:description',
      content: 'Bekijk onze gerealiseerde projecten in energieopslag en netcongestie'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://greendee.nl/referenties'
    }
  ]
})
</script>
