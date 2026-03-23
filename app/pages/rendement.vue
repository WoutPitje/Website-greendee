<template>
  <div>
    <RendementPageHero />
    <RendementRealiteitAanpakSection />
    <RendementResultatenSection />
    <RendementOnzeRolSection />
    <ContactFormSection variant="images" :images="['/netcongestie/image-hv.png', '/netcongestie/contact-2.jpg', '/netcongestie/image-hoofdpagina.png']" />
  </div>
</template>

<script setup>
useHead({
  title: 'Rendement | GreenDee',
  meta: [
    {
      name: 'description',
      content: 'Haal meer rendement uit uw duurzame energie. GreenDee helpt met energieopslag, slimme aansturing en een eerlijke businesscase voor agro en MKB.',
    },
  ],
})
</script>
