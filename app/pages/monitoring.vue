<template>
  <div>
    <!-- Deze pagina staat niet in het v2-ontwerp. Layout volgt het stramien van de
         andere dienstenpagina's; alle teksten hieronder zijn een concept van ons
         en moeten door GreenDee worden nagelezen vóór livegang. De hero-foto is
         geleend van Energiesimulaties en heeft nog een eigen beeld nodig. -->
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Monitoring en rendementsbewaking"
      intro="Na oplevering begint het pas. GreenDee bewaakt of uw installatie doet wat de businesscase beloofde en grijpt in wanneer dat niet zo is."
      image="/v2/hero-monitoring"
      image-alt="Grafieken op een scherm waarop prestaties worden gevolgd"
    />

    <NumberedListSection
      eyebrow="Herkent u dit?"
      title="De installatie draait. Maar levert die ook op?"
      intro="Een installatie die het technisch doet, kan financieel alsnog achterblijven bij de aannames uit de businesscase."
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
      title="Weet u of uw installatie nog op koers ligt?"
      body="In een eerste gesprek kijken we naar uw huidige opbrengst en naar wat de businesscase destijds beloofde."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Monitoring en rendementsbewaking | GreenDee',
  meta: [{
    name: 'description',
    content: 'GreenDee bewaakt of uw energie-installatie doet wat de businesscase beloofde.',
  }],
})

const problemen = [
  {
    title: 'Niemand kijkt er meer naar',
    body: 'Na oplevering verdwijnt de installatie uit beeld. Een storing of een verkeerd ingestelde sturing valt pas op als de rekening tegenvalt.',
  },
  {
    title: 'De opbrengst wijkt af van de aannames',
    body: 'De businesscase rekende met bepaalde prijzen en volumes. Of die in de praktijk gehaald worden, wordt zelden teruggekoppeld.',
  },
  {
    title: 'Sturing is niet meegegroeid',
    body: 'Verbruik, tarieven en regelgeving veranderen. Een sturing die bij oplevering klopte, is een paar jaar later niet meer optimaal.',
  },
  {
    title: 'Garanties verlopen ongemerkt',
    body: 'Zonder vastlegging van prestaties is een beroep op garantie achteraf lastig te onderbouwen.',
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
  { term: 'Onderbouwing', description: 'Vastgelegde prestaties waarmee u een beroep op garantie kunt onderbouwen.' },
  { term: 'Bijsturing', description: 'Signalering van afwijkingen, met een concrete actie in plaats van alleen een constatering.' },
  { term: 'Rendement', description: 'Inzicht in of de investering doet wat de businesscase beloofde, jaar na jaar.' },
]
</script>
