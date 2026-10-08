<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Gestructureerde gegevens over het bedrijf zelf, op elke pagina. Hiermee kan
// een zoekmachine naam, vestigingen en contactgegevens als één geheel lezen in
// plaats van ze uit de losse tekst te moeten raden.
//
// De adressen komen uit de contactpagina; wijzigt daar iets, pas het hier ook aan.
const { siteUrl } = useRuntimeConfig().public
const basis = String(siteUrl).replace(/\/+$/, '')

const vestiging = (straat: string, postcode: string, plaats: string) => ({
  '@type': 'Place',
  address: {
    '@type': 'PostalAddress',
    streetAddress: straat,
    postalCode: postcode,
    addressLocality: plaats,
    addressCountry: 'NL',
  },
})

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'GreenDee',
      url: basis,
      logo: `${basis}/v2/logo-white.png`,
      description:
        'GreenDee helpt mkb-bedrijven, agrariërs en bedrijventerreinen verder ondanks netcongestie, van energiesimulatie en businesscase tot realisatie en bewaking.',
      telephone: '+31634466611',
      email: 'offerte@greendee.nl',
      vatID: 'NL005283192B66',
      identifier: { '@type': 'PropertyValue', propertyID: 'KvK', value: '97695564' },
      areaServed: { '@type': 'Country', name: 'Nederland' },
      address: vestiging('Saneringsweg 3', '4053 JK', 'IJzendoorn').address,
      location: [
        vestiging('Saneringsweg 3', '4053 JK', 'IJzendoorn'),
        vestiging('Bergerweg 200', '1817 MN', 'Alkmaar'),
      ],
      sameAs: ['https://www.linkedin.com/in/larsvandee/'],
    }),
  }],
})
</script>
