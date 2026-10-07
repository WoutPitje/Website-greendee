<template>
  <div>
    <!-- Deze pagina staat niet in het v2-ontwerp. Layout volgt het stramien van de
         andere dienstenpagina's; alle teksten hieronder zijn een concept van ons
         en moeten door GreenDee worden nagelezen. -->
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Monitoring en rendementsbewaking"
      intro="Na oplevering begint het pas. GreenDee bewaakt of uw installatie doet wat de businesscase beloofde en grijpt in wanneer dat niet zo is."
      image="/v2/hero-monitoring"
      image-alt="Grafieken op een scherm waarop prestaties worden gevolgd"
    />

    <NumberedListSection
      eyebrow="Herkent u dit?"
      title="De installatie draait. Maar levert hij ook het besproken rendement op?"
      intro="Een installatie die het technisch doet, kan financieel alsnog achterblijven."
      :items="problemen"
    />

    <TimelineSection
      eyebrow="Onze aanpak"
      title="Bewaken in vier stappen."
      :steps="stappen"
    />

    <ResultsSection
      title="Zicht op wat uw installatie"
      title-accent="werkelijk oplevert."
      :rows="resultaten"
      rounded-top
    />

    <RoleSection
      title="Wij blijven meekijken na de oplevering."
      body="GreenDee vergelijkt de werkelijke opbrengst met de aannames uit de businesscase, signaleert afwijkingen en zet die om in concrete acties richting installateur, leverancier of netbeheerder."
      image="/v2/rol-energiesimulaties"
      image-alt="Adviseur van GreenDee bij een zonnepark"
      reverse
      background="grey"
    />

    <CtaSection
      title="Wie neemt er verantwoordelijkheid voor uw installatie na oplevering?"
      body="In een eerste gesprek kijken we naar uw huidige opbrengst en naar wat de businesscase destijds beloofde."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Monitoring en rendementsbewaking',
  beschrijving:
    'GreenDee bewaakt of uw energie-installatie doet wat de businesscase beloofde.',
  afbeelding: 'monitoring',
})

const problemen = [
  {
    title: 'Niemand kijkt er meer naar',
    body: 'Na oplevering verdwijnt de installatie uit beeld. Een storing of een verkeerd ingestelde sturing valt pas op bij de jaarlijkse rekening of uitbetaling.',
  },
  {
    title: 'De opbrengst wijkt af van de aannames',
    body: 'De businesscase rekende met bepaalde prijzen en volumes. Of dit in de praktijk ook de juiste setpoints zijn, kijkt niemand meer naar.',
  },
]

const stappen = [
  {
    title: 'Nulmeting en aannames vastleggen',
    body: 'De uitgangspunten uit de businesscase worden vastgelegd als meetlat voor de jaren erna.',
  },
  {
    title: 'Meetdata koppelen',
    body: 'Kwartierdata van de aansluiting en van de installatie zelf, zodat opbrengst en verbruik naast elkaar te leggen zijn.',
  },
  {
    title: 'Periodiek vergelijken',
    body: 'Werkelijke opbrengst tegenover de aannames, met aandacht voor sturing, beschikbaarheid en tarieven.',
  },
  {
    title: 'Bijsturen',
    body: 'Afwijkingen worden omgezet in concrete acties richting installateur, leverancier of netbeheerder.',
  },
]

const resultaten = [
  { term: 'Zicht', description: 'Een periodiek beeld van opbrengst, verbruik en beschikbaarheid van uw installatie.' },
  { term: 'Bijsturing', description: 'Signalering van afwijkingen, met een concrete actie in plaats van alleen een constatering.' },
  { term: 'Rendement', description: 'Inzicht in of de investering doet wat de businesscase beloofde, jaar na jaar.' },
  {
    term: 'Eigenaarschap',
    description: 'Wij monitoren onze installaties alsof we zelf eigenaar zijn en acteren daar ook op. '
      + 'Wij zijn verantwoordelijk voor het besproken rendement en nemen hiervoor eigenaarschap.',
  },
]
</script>
