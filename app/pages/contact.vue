<template>
  <div>
    <InnerPageHero
      eyebrow="Contact"
      title="Plan een vrijblijvend gesprek."
      intro="In 30 minuten weet je wat GreenDee voor je kan betekenen. Kies hieronder een moment dat jou uitkomt."
      image="/v2/hero-contact"
      image-alt="Lars van Dee van GreenDee"
      cta-label=""
    />

    <ContactVerwachtingenSection />

    <ContactCalendlySection />

    <ContactFaqSection />

    <ContactFallbackSection />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Contact',
  beschrijving:
    'Plan een vrijblijvend gesprek van 30 minuten met GreenDee over je energievraagstuk.',
  afbeelding: 'contact',
})
</script>
