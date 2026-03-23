<template>
  <div>
    <NetcongestiePageHero />
    <NetcongestieRealiteitAanpakSection />
    <NetcongestieVoorWieSection />
    <NetcongestieOnzeRolSection />
    <ContactFormSection variant="images" :images="['/netcongestie/image-hv.png', '/netcongestie/hero.jpg', '/netcongestie/image-hoofdpagina.png']" />
  </div>
</template>

<script setup>
useHead({
  title: 'Netcongestie | GreenDee',
  meta: [
    {
      name: 'description',
      content: 'GreenDee lost netcongestie op met data-gedreven energieoplossingen. Analyse, ontwerp en begeleiding voor agro en MKB-bedrijven.',
    },
  ],
})
</script>
