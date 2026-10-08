<template>
  <div>
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Offertetrajecten"
      intro="GreenDee voert namens jou de uitvraag naar de markt uit en begeleidt de keuze van installateur of leverancier."
      image="/v2/hero-offertetrajecten"
      image-alt="Gesprek aan tafel over een offertetraject"
    />

    <NumberedListSection
      eyebrow="Herken je dit?"
      title="Vier offertes, vier verschillende uitgangspunten."
      intro="Zonder een gelijke uitvraag zijn offertes niet te vergelijken en ontstaat er meerwerk tijdens de uitvoering."
      :items="problemen"
    />

    <StepsSection
      eyebrow="Onze aanpak"
      title="In vijf stappen naar vergelijkbare offertes."
      intro="Het offertetraject volgt op het technisch ontwerp en het investeringsbesluit."
      :steps="stappen"
    />

    <ResultsSection
      title="Begrijpelijke offertes"
      title-accent="die je naast elkaar kunt leggen."
      :rows="resultaten"
    />

    <FeaturedTestimonialSection />

    <RoleSection
      title="Wij voeren de marktuitvraag uit, jij houdt de regie."
      body="GreenDee legt de uitgangspunten vast, selecteert de partijen en zet de uitvraag uit. Wij begeleiden het locatiebezoek en de vragenronde, verzorgen de communicatie en de opvolging, en leveren aan het eind een onderbouwd advies."
      image="/v2/rol-greendee"
      image-alt="Lars van GreenDee in telefonisch overleg"
    />

    <CtaSection
      title="Klaar om de markt op te gaan?"
      body="Wij stellen de uitvraag op, halen de offertes op en leggen ze naast elkaar op gelijke uitgangspunten. Jij neemt het besluit."
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Offertetrajecten',
  beschrijving:
    'GreenDee voert namens jou de uitvraag naar de markt uit en begeleidt de keuze van installateur of leverancier.',
  afbeelding: 'offertetrajecten',
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
    title: 'Tijdverlies in het voortraject',
    body: 'Je bent veel tijd kwijt in het voortraject met meerdere partijen en kunt niet beoordelen of prijs en kwaliteit marktconform zijn.',
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
    body: 'Uitvraag bij zorgvuldig geselecteerde installateurs en leveranciers. Getoetst op relevante certificeringen.',
  },
  {
    title: 'Uitvraag en coördinatie',
    body: 'Uitzetten van de uitvraag, begeleiden van het locatiebezoek en de vragenronde voor installateurs. GreenDee verzorgt communicatie en opvolging; je houdt één vast aanspreekpunt.',
  },
  {
    title: 'Vergelijken en beoordelen',
    body: 'Aanbiedingen naast elkaar op gelijke uitgangspunten. Beoordeling op prijs, scope, kwaliteit, planning, garanties en duurzaamheid.',
  },
  {
    title: 'Advies',
    body: 'Onderbouwd advies. Overdracht naar realisatie, of terug naar de businesscase als de prijzen afwijken.',
  },
]

const resultaten = [
  { term: 'Vergelijkbaar', description: 'Offertes van gekwalificeerde partijen, op een gelijke en complete uitvraag.' },
  { term: 'Betrouwbaar', description: 'Een betrouwbaar beeld van de investeringskosten en uitvoeringskosten voor het definitieve investeringsbesluit.' },
  { term: 'Minder risico', description: 'Minder meerwerk, minder faalkosten en minder discussie tijdens de uitvoering.' },
  { term: 'Objectief', description: 'Een objectieve keuze en een uitvraag conform de geldende wetgeving en normen.' },
]
</script>
