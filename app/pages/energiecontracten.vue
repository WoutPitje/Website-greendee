<template>
  <div>
    <!-- Deze pagina staat niet in het v2-ontwerp. Layout volgt het stramien van de
         andere dienstenpagina's; alle teksten hieronder zijn een concept van ons
         en moeten door GreenDee worden nagelezen vóór livegang. -->
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Energiecontracten"
      intro="Je contractvorm bepaalt wat je betaalt voor dezelfde kilowatturen. GreenDee brengt in kaart welke vorm past bij je verbruiksprofiel en begeleidt de overstap."
      image="/v2/hero-energiecontracten"
      image-alt="Het team van GreenDee in gesprek met een ondernemer"
    />

    <NumberedListSection
      eyebrow="Herken je dit?"
      title="Hetzelfde verbruik, een heel andere rekening."
      intro="Opslagen, tarieven, contractvormen en voorwaarden van energiecontracten zijn het afgelopen jaar sterk veranderd. Het juist beoordelen van een nieuw energiecontract is daarmee van belang."
      :items="problemen"
    />

    <TimelineSection
      eyebrow="Onze aanpak"
      title="In vier stappen naar een passend contract."
      :steps="stappen"
    />

    <ResultsSection
      title="Een contract dat past bij"
      title-accent="hoe je werkelijk verbruikt."
      :rows="resultaten"
      rounded-top
    />

    <RoleSection
      title="Wij vergelijken, jij tekent."
      body="GreenDee legt je verbruiksprofiel naast de beschikbare contractvormen, haalt aanbiedingen op bij leveranciers en legt ze naast elkaar op gelijke uitgangspunten. Je houdt de keuze en het contract op eigen naam."
      image="/v2/rol-greendee"
      image-alt="Lars van GreenDee in telefonisch overleg"
      reverse
      background="grey"
    />

    <CtaSection
      title="Loopt je contract binnenkort af?"
      body="Begin op tijd. In een eerste gesprek kijken we naar je verbruiksprofiel en naar wat er in je situatie te winnen valt."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Energiecontracten',
  beschrijving:
    'GreenDee brengt in kaart welke contractvorm past bij je verbruiksprofiel en begeleidt de overstap.',
  afbeelding: 'energiecontracten',
})

const problemen = [
  {
    title: 'Aflopend contract, stijgende tarieven',
    body: 'Een contract loopt af en de nieuwe aanbieding valt hoger uit, zonder dat duidelijk is welk deel daarvan werkelijk aan de markt ligt.',
  },
  {
    title: 'De contractvorm past niet bij je profiel',
    body: 'Vast, variabel of dynamisch pakt heel anders uit per bedrijf. Wie kan sturen op verbruik, of gebruik kan maken van een batterij met een goed EMS, komt heel ergens anders uit.',
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
    body: 'Kwartierdata van je aansluiting, inclusief teruglevering en pieken over een volledig jaar.',
  },
  {
    title: 'Contractvormen naast je profiel',
    body: 'Doorrekening van vast, variabel en dynamisch op je eigen data, in plaats van op een gemiddeld profiel.',
  },
  {
    title: 'Uitvraag bij leveranciers',
    body: 'Aanbiedingen opvragen op gelijke uitgangspunten, zodat opslagen en voorwaarden vergelijkbaar zijn.',
  },
  {
    title: 'Advies en overstap',
    body: 'Onderbouwd advies met de aandachtspunten uit de voorwaarden. Je tekent zelf; wij begeleiden de overstap.',
  },
]

const resultaten = [
  { term: 'Inzicht', description: 'Wat je werkelijk betaalt per onderdeel: levering, netbeheer, belastingen en opslagen.' },
  { term: 'Vergelijkbaar', description: 'Aanbiedingen van leveranciers op gelijke uitgangspunten, naast elkaar te leggen.' },
  { term: 'Passend', description: 'Een contractvorm die aansluit op je verbruikspatroon en op je plannen voor opwek en opslag.' },
  { term: 'Onderbouwd', description: "Een keuze die je intern kunt verantwoorden, met de risico's benoemd." },
]
</script>
