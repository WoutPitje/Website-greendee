<template>
  <div>
    <!-- Deze pagina staat niet in het v2-ontwerp. Layout volgt het stramien van de
         andere dienstenpagina's; alle teksten hieronder zijn een concept van ons
         en moeten door GreenDee worden nagelezen vóór livegang. De hero-foto is
         geleend van Offertetrajecten en heeft nog een eigen beeld nodig. -->
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Energiecontracten"
      intro="Uw contractvorm bepaalt wat u betaalt voor dezelfde kilowatturen. GreenDee brengt in kaart welke vorm past bij uw verbruiksprofiel en begeleidt de overstap."
      image="/v2/hero-energiecontracten"
      image-alt="Twee mensen aan tafel bij een contract"
    />

    <NumberedListSection
      eyebrow="Herkent u dit?"
      title="Hetzelfde verbruik, een heel andere rekening."
      intro="Tarieven, contractvormen en voorwaarden verschillen sterk. Zonder inzicht in uw eigen profiel is een aanbieding niet te beoordelen."
      :items="problemen"
    />

    <TimelineSection
      eyebrow="Onze aanpak"
      title="In vier stappen naar een passend contract."
      :steps="stappen"
    />

    <ResultsSection
      title="Een contract dat past bij"
      title-accent="hoe u werkelijk verbruikt."
      :rows="resultaten"
      rounded-top
    />

    <RoleSection
      title="Wij vergelijken, u tekent."
      body="GreenDee legt uw verbruiksprofiel naast de beschikbare contractvormen, haalt aanbiedingen op bij leveranciers en legt ze naast elkaar op gelijke uitgangspunten. U houdt de keuze en het contract op eigen naam."
      image="/v2/rol-greendee"
      image-alt="Adviseur van GreenDee"
      reverse
      background="grey"
    />

    <CtaSection
      title="Loopt uw contract binnenkort af?"
      body="Begin op tijd. In een eerste gesprek kijken we naar uw verbruiksprofiel en naar wat er in uw situatie te winnen valt."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Energiecontracten',
  beschrijving:
    'GreenDee brengt in kaart welke contractvorm past bij uw verbruiksprofiel en begeleidt de overstap.',
  afbeelding: 'energiecontracten',
})

const problemen = [
  {
    title: 'Aflopend contract, stijgende tarieven',
    body: 'Een contract loopt af en de nieuwe aanbieding valt hoger uit, zonder dat duidelijk is welk deel daarvan werkelijk aan de markt ligt.',
  },
  {
    title: 'De contractvorm past niet bij uw profiel',
    body: 'Vast, variabel of dynamisch pakt heel anders uit voor een bedrijf met scherpe pieken dan voor een bedrijf met een vlakke basislast.',
  },
  {
    title: 'Teruglevering levert minder op dan verwacht',
    body: 'Wie zonnestroom teruglevert op momenten dat de prijs laag is, ziet daar in de afrekening weinig van terug.',
  },
  {
    title: 'Aanbiedingen zijn niet vergelijkbaar',
    body: 'Verschillende leveranciers rekenen met andere opslagen en voorwaarden, waardoor de laagste kale prijs niet de goedkoopste hoeft te zijn.',
  },
]

const stappen = [
  {
    title: 'Verbruiksprofiel ophalen',
    body: 'Kwartierdata van uw aansluiting, inclusief teruglevering en pieken over een volledig jaar.',
  },
  {
    title: 'Contractvormen naast uw profiel',
    body: 'Doorrekening van vast, variabel en dynamisch op uw eigen data, in plaats van op een gemiddeld profiel.',
  },
  {
    title: 'Uitvraag bij leveranciers',
    body: 'Aanbiedingen opvragen op gelijke uitgangspunten, zodat opslagen en voorwaarden vergelijkbaar zijn.',
  },
  {
    title: 'Advies en overstap',
    body: 'Onderbouwd advies met de aandachtspunten uit de voorwaarden. U tekent zelf; wij begeleiden de overstap.',
  },
]

const resultaten = [
  { term: 'Inzicht', description: 'Wat u werkelijk betaalt per onderdeel: levering, netbeheer, belastingen en opslagen.' },
  { term: 'Vergelijkbaar', description: 'Aanbiedingen van leveranciers op gelijke uitgangspunten, naast elkaar te leggen.' },
  { term: 'Passend', description: 'Een contractvorm die aansluit op uw verbruikspatroon en op uw plannen voor opwek en opslag.' },
  { term: 'Onderbouwd', description: 'Een keuze die u intern kunt verantwoorden, met de risico’s benoemd.' },
]
</script>
