<template>
  <div>
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Energiesimulaties"
      intro="GreenDee rekent met eigen software (NetcongestieOpgelost.nl) door wat er op uw aansluiting gebeurt, nog voordat er geïnvesteerd wordt."
      image="/v2/hero-energiesimulaties"
      image-alt="Energiesimulatie op een scherm"
    />

    <NumberedListSection
      eyebrow="Het probleem"
      title="Uw netaansluiting is een harde grens."
      intro="Uitbreiding, elektrificatie en verduurzaming passen daar niet vanzelfsprekend binnen."
      :items="problemen"
    />

    <SimulationShowcaseSection />

    <TimelineSection
      eyebrow="Onze aanpak"
      title="In vijf stappen van data naar advies."
      :steps="stappen"
    />

    <ResultsSection
      title="Een advies op basis van uw eigen data,"
      title-accent="niet op aannames."
      :rows="resultaten"
      rounded-top
    />

    <RoleSection
      title="Geen verkooppraatje."
      body="GreenDee rekent met eigen software door wat er op uw aansluiting gebeurt. Wij leggen de aannames vast, rekenen de scenario's door en leveren een advies dat dient als basis voor uw businesscase, het elektrotechnisch ontwerp en het gesprek met de netbeheerder."
      image="/v2/rol-energiesimulaties"
      image-alt="Adviseur van GreenDee bij een zonnepark"
      reverse
      background="grey"
    />

    <CtaSection
      title="Benieuwd wat er op uw aansluiting past?"
      body="Wij rekenen uw situatie door voordat u investeert. Zo weet u wat er mogelijk is binnen uw huidige aansluiting."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Energiesimulaties | GreenDee',
  meta: [{
    name: 'description',
    content: 'GreenDee rekent met eigen software door wat er op uw aansluiting gebeurt, nog voordat er geïnvesteerd wordt.',
  }],
})

const problemen = [
  {
    title: 'Een harde grens op de aansluiting',
    body: 'Uitbreiding, elektrificatie van uw wagenpark en uw verduurzamingsplannen passen niet vanzelfsprekend binnen uw netaansluiting.',
  },
  {
    title: 'Over- of onderdimensionering',
    body: 'Zonder simulatie vooraf is er kans op een te grote batterij of te veel zonnepanelen, of juist op onderdimensionering waardoor plannen alsnog niet door kunnen gaan.',
  },
  {
    title: 'Besluiten op onderbuikgevoel',
    body: 'Zonder onderbouwing worden investeringsbeslissingen genomen op gevoel in plaats van op data.',
  },
]

// Step descriptions follow the v2 feedback round, which expanded steps 2 to 5.
const stappen = [
  {
    title: 'Data en uitgangspunten',
    body: 'Kwartierdata, aansluitgegevens, verbruiksgegevens, tekeningen en uitbreidingsplannen.',
  },
  {
    title: 'Huidige situatie modelleren',
    body: 'Analyse van afnamepieken, teruglevering, basislast en gelijktijdigheid. Toetsing van het werkelijke gebruik aan de gecontracteerde capaciteit.',
  },
  {
    title: 'Assets simulatief toevoegen',
    body: 'Conceptueel toevoegen van zon, energieopslag, laadinfrastructuur, koeling, ventilatie of elektrificatie van warmte.',
  },
  {
    title: "Scenario's vergelijken",
    body: "Alle scenario's worden vergeleken. Wat zijn de voor- en nadelen van de verschillende keuzes.",
  },
  {
    title: 'Rapportage en advies',
    body: 'Basis voor de businesscase, het ontwerp en het gesprek met de netbeheerder.',
  },
]

const resultaten = [
  { term: 'Inzicht', description: 'De werkelijke vermogensvraag, basislast en gelijktijdigheid van uw locatie.' },
  { term: 'Dimensionering', description: 'Onderbouwd advies voor batterij, zon en laadinfrastructuur, passend bij uw uitbreidingsplannen.' },
  { term: "Scenario's", description: "Een vergelijking van energiescenario's op gelijke uitgangspunten." },
  { term: 'Onderbouwing', description: 'Een datagedreven basis voor de investeringsbeslissing en voor het gesprek met de netbeheerder.' },
]
</script>
