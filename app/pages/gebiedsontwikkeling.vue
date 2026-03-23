<template>
  <div>
    <GebiedsontwikkelingPageHero />
    <GebiedsontwikkelingRealiteitAanpakSection />
    <GebiedsontwikkelingVoorWieSection />
    <GebiedsontwikkelingContractrealiteitSection />
    <GebiedsontwikkelingOnzeRolSection />
    <ContactFormSection variant="images" :images="['/gebiedsontwikkeling-presentatie.jpg']" />
  </div>
</template>

<script setup>
useHead({
  title: 'Netbewuste Gebiedsontwikkeling | GreenDee',
  meta: [
    {
      name: 'description',
      content: 'GreenDee structureert energie, grondposities en infrastructuur tot een uitvoerbare businesscase. Netbewuste gebiedsontwikkeling voor energyhubs en bedrijventerreinen.',
    },
  ],
})
</script>
