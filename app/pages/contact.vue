<template>
  <div>
    <InnerPageHero
      eyebrow="Contact"
      title="Plan een vrijblijvend gesprek."
      intro="In 30 minuten weet u wat GreenDee voor u kan betekenen. Kies hieronder een moment dat u uitkomt."
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
useHead({
  title: 'Contact | GreenDee',
  meta: [{
    name: 'description',
    content: 'Plan een vrijblijvend gesprek van 30 minuten met GreenDee over uw energievraagstuk.',
  }],
})
</script>
