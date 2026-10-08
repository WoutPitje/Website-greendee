<template>
  <div>
    <InnerPageHero
      eyebrow="Onze doelen"
      title="Onze koers naar 2031."
      intro="Duurzaamheid en verantwoord ondernemen zijn voor GreenDee van groot belang. Bekijk hier onze duurzaamheidsdoelen en onze blik op cybersecurity."
      image="/v2/hero-onze-doelen"
      image-alt="Twee collega's van GreenDee in overleg achter een laptop"
      cta-label=""
    />

    <DoelenDuurzaamheidsdoelenSection />

    <DoelenCybersecuritySection />

    <DoelenNetcongestieSection />

    <CtaSection
      title="Benieuwd wat dit voor je bedrijf betekent?"
      body="Elk project telt mee in deze doelen. Wij rekenen graag voor je door wat er binnen je aansluiting mogelijk is."
      background="mint"
      :rounded-top="false"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Onze doelen',
  beschrijving:
    'Vier meetbare duurzaamheidsdoelen voor 2031, onze routekaart voor cybersecurity en wat GreenDee bijdraagt aan het verkleinen van netcongestie.',
  afbeelding: 'onze-doelen',
})
</script>
