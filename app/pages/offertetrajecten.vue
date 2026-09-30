<template>
  <div>
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Offertetrajecten"
      intro="GreenDee voert namens u de uitvraag naar de markt en begeleidt de keuze van installateur of leverancier."
      image="/v2/hero-offertetrajecten"
      image-alt="Gesprek aan tafel over een offertetraject"
    />

    <NumberedListSection
      eyebrow="Herkent u dit?"
      title="Vier offertes, vier verschillende uitgangspunten."
      intro="Zonder een gelijke uitvraag zijn offertes niet te vergelijken en ontstaan er meerwerk en kosten tijdens de uitvoering."
      :items="problemen"
    />

    <StepsSection
      eyebrow="Onze aanpak"
      title="In vijf stappen naar vergelijkbare offertes."
      intro="Het offertetraject volgt op het technisch ontwerp en het investeringsbesluit."
      :steps="stappen"
    />

    <ResultsSection
      title="Begrijpbare offertes"
      title-accent="die u naast elkaar kunt leggen."
      :rows="resultaten"
    />

    <FeaturedTestimonialSection />

    <RoleSection
      title="Wij voeren de uitvraag, u houdt de regie."
      body="GreenDee legt de uitgangspunten vast, selecteert de partijen en zet de uitvraag uit. Wij begeleiden het locatiebezoek en de vragenronde, verzorgen de communicatie en de opvolging, en leveren aan het eind een onderbouwd advies."
      image="/v2/rol-greendee"
      image-alt="Adviseur van GreenDee bij een zonnepark"
    />

    <CtaSection
      title="Klaar om de markt op te gaan?"
      body="Wij stellen de uitvraag op, halen de offertes op en leggen ze naast elkaar op gelijke uitgangspunten. U neemt het besluit."
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Offertetrajecten | GreenDee',
  meta: [{
    name: 'description',
    content: 'GreenDee voert namens u de uitvraag naar de markt en begeleidt de keuze van installateur of leverancier.',
  }],
})

const problemen = [
  {
    title: 'Onduidelijke offertes',
    body: 'Offertes van installateurs zijn onderling niet vergelijkbaar: andere scope, andere uitgangspunten, andere aannames.',
  },
  {
    title: 'Geen vaste uitgangspunten',
    body: 'Dat leidt tot meerwerk en faalkosten tijdens de uitvoering.',
  },
  {
    title: 'Tijdverlies aan het voortraject',
    body: 'U bent veel tijd kwijt aan het voortraject met meerdere partijen en kunt niet beoordelen of prijs en kwaliteit marktconform zijn.',
  },
  {
    title: 'Dimensionering naar het product',
    body: 'Leveranciers dimensioneren naar hun eigen product in plaats van naar de werkelijke vraag.',
  },
]

const stappen = [
  {
    title: 'Uitgangspunten vastleggen',
    body: 'Technisch en functioneel programma van eisen, op basis van de werktekening, de simulatie en het ontwerp.',
  },
  {
    title: 'Selectie van partijen',
    body: 'Uitvraag bij zorgvuldig geselecteerde installateurs en leveranciers. Getoetst op certificering: ISO 9001 en VCA.',
  },
  {
    title: 'Uitvraag en coördinatie',
    body: 'Uitzetten van de uitvraag, begeleiden van het locatiebezoek en de vragenronde voor installateurs. GreenDee verzorgt communicatie en opvolging; u houdt één vast aanspreekpunt.',
  },
  {
    title: 'Vergelijken en beoordelen',
    body: 'Aanbiedingen naast elkaar op gelijke uitgangspunten. Beoordeling op prijs, scope, kwaliteit, planning en garanties.',
  },
  {
    title: 'Advies',
    body: 'Onderbouwd advies met aandachtspunten voor het contract. Overdracht naar realisatie, of terug naar de businesscase als de prijzen afwijken.',
  },
]

const resultaten = [
  { term: 'Vergelijkbaar', description: 'Offertes van gekwalificeerde partijen, op een gelijke en complete uitvraag.' },
  { term: 'Betrouwbaar', description: 'Een betrouwbaar beeld van de investeringskosten en uitvoeringskosten voor het definitieve investeringsbesluit.' },
  { term: 'Minder risico', description: 'Minder meerwerk, minder faalkosten en minder discussie tijdens de uitvoering.' },
  { term: 'Objectief', description: 'Een objectieve keuze en een uitvraag conform de geldende wetgeving en normen.' },
]
</script>
