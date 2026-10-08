<template>
  <div>
    <!-- Deze pagina staat niet in het v2-ontwerp. De inhoud komt uit het plan van
         aanpak "netcongestie en energyhubs" en is losgemaakt van die ene gemeente:
         de naam, de datum, het vouchervoorstel en de partnernaam staan er niet in.
         Teksten moeten door GreenDee worden nagelezen vóór livegang. -->
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Energyhubs"
      intro="Wil je een energiehub beginnen, of een bestaande uitbreiden? Met GreenDee onderzoek je samen met andere ondernemingen de mogelijkheden. Een energiehub helpt je verduurzamen en helpt je het elektriciteitsnet bij jou in de buurt beter te gebruiken. Wij simuleren de energieprofielen, regisseren de hub en kijken mee naar de subsidiemogelijkheden."
      image="/v2/hero-energyhubs"
      image-alt="Bedrijventerrein vanuit de lucht"
    />

    <NumberedListSection
      eyebrow="Herken je dit?"
      title="Ondernemers willen door, maar het net zit vol."
      intro="Gemeenten en parkmanagers willen bedrijven verder helpen, maar weten niet per bedrijf wat er nog kan en waar een gezamenlijke oplossing echt nodig is."
      :items="problemen"
    />

    <StepGridSection
      eyebrow="Fase 1"
      title="Eerst kijken wat er binnen de eigen aansluiting kan."
      intro="Per ondernemer brengen we de ambitie in beeld en rekenen we door of die binnen de bestaande netaansluiting past."
      :steps="faseEen"
      timeline
    />

    <StepGridSection
      eyebrow="Fase 2"
      title="Samen verder waar het alleen niet lukt."
      intro="Voor de ondernemers die hun ambitie niet binnen de eigen aansluiting kunnen realiseren, en voor wie met overcapaciteit kan bijdragen."
      :steps="faseTwee"
      background="grey"
    />

    <ResultsSection
      title="Ondernemers die verder kunnen,"
      title-accent="zonder te wachten op netverzwaring."
      :rows="resultaten"
      rounded-top
    />

    <RoleSection
      title="Wij rekenen door, jij houdt de regie."
      body="GreenDee voert de inventarisatie op locatie uit, maakt de energiesimulaties en voegt ze samen tot een ringonderzoek. In fase 2 werken we samen met een partner die het energyhub-traject trekt; wij leveren de onderbouwing waarop de keuzes rusten."
      image="/v2/rol-greendee"
      image-alt="Lars van GreenDee in telefonisch overleg"
      reverse
      background="grey"
    />

    <CtaSection
      title="Zitten je ondernemers vast op het net?"
      body="In een eerste gesprek kijken we hoeveel bedrijven het betreft en welke stap in je situatie het meeste oplevert."
      background="white"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Energyhubs',
  beschrijving:
    'Van energiesimulatie per bedrijf tot een gezamenlijke energyhub. GreenDee helpt gemeenten en bedrijventerreinen ondernemers verder ondanks netcongestie.',
  afbeelding: 'energyhubs',
})

const problemen = [
  {
    title: 'De aansluiting groeit niet mee',
    body: 'Uitbreiden, elektrificeren of verduurzamen past niet binnen de bestaande netaansluiting, en netverzwaring laat jaren op zich wachten.',
  },
  {
    title: 'Niemand weet wat er wél kan',
    body: 'Zonder inzicht per bedrijf is niet te zeggen of een ambitie met opslag, zon en slimme aansturing alsnog binnen de eigen aansluiting past.',
  },
  {
    title: 'Een energyhub start zonder onderbouwing',
    body: 'Een gezamenlijke oplossing opzetten zonder te weten welke profielen elkaar aanvullen, levert een plan op dat in de praktijk niet klopt.',
  },
  {
    title: 'Ondernemers haken af',
    body: 'Tijd van ondernemers is kostbaar. Verspil die niet: maak duidelijke afspraken met milestones, zodat voor iedereen vooraf duidelijk is wat er wanneer gebeurt.',
  },
]

// Fase 1 voert GreenDee zelf uit; doorlooptijden komen uit het plan van aanpak.
const faseEen = [
  {
    title: 'Inventarisatie op locatie',
    duration: '1 week',
    body: 'Bezoek per ondernemer: netaansluiting, verbruiksprofiel, bestaande installaties en de plannen voor uitbreiding, elektrificatie en verduurzaming. We leggen meteen de machtiging voor meetdata en de toestemming voor datadeling vast.',
  },
  {
    title: 'Energiesimulatie: nu tegenover straks',
    duration: '2 weken',
    body: 'We modelleren het energieprofiel en leggen de huidige situatie naast de situatie mét de ambities van de onderneming. Daaruit blijkt of, wanneer en hoeveel de aansluiting tekortschiet.',
  },
  {
    title: 'Beslismoment op één objectief criterium',
    duration: 'direct na de simulatie',
    body: 'Is de ambitie haalbaar met batterij, zon, slimme aansturing en contractoptimalisatie binnen de eigen aansluiting, en is dat financieel rond? Zo ja, dan is dit bedrijf niet direct een geschikte partner voor een energyhub. Zo nee, dan gaat het bedrijf door naar fase 2, en de simulatie is dan meteen de input.',
  },
]

// Fase 2 wordt getrokken door de partner; GreenDee levert simulaties en ringonderzoek.
const faseTwee = [
  {
    title: 'Ringonderzoek en simulaties samenvoegen',
    duration: 'GreenDee en partner',
    body: 'De simulaties van ondernemers op dezelfde ring gaan bij elkaar: waar vullen profielen elkaar aan en welke ruimte ontstaat er gezamenlijk? De netbeheerder haakt hier aan.',
  },
  {
    title: 'Mogelijkheden uitwerken tot een plan',
    duration: 'partner',
    body: 'Technische opzet, organisatievorm, financiering, subsidie en de afspraken tussen deelnemers komen samen in één uitvoerbaar plan.',
  },
  {
    title: 'Overleg met de energiestakeholders',
    duration: 'partner, GreenDee ondersteunend',
    body: 'Afstemming met netbeheerder, energieleverancier en installateurs over contractvormen, aansluiting en uitvoering.',
  },
  {
    title: 'Realisatie van de energyhub',
    duration: 'partner en gemeente',
    body: 'De energyhub wordt gebouwd en in gebruik genomen. De aangesloten ondernemers kunnen hun plannen uitvoeren.',
  },
]

const resultaten = [
  { term: 'Inzicht per bedrijf', description: 'Voor elke ondernemer is duidelijk wat er binnen de eigen aansluiting nog kan en wat niet.' },
  { term: 'Snel geholpen', description: 'Bedrijven die het zelf redden, kunnen binnen enkele weken door zonder op een gezamenlijk traject te wachten.' },
  { term: 'Onderbouwde hub', description: 'De energyhub start met de bedrijven die hem echt nodig hebben, op basis van doorgerekende profielen.' },
  { term: 'Groei zonder netverzwaring', description: 'Ondernemers kunnen uitbreiden en verduurzamen zonder te wachten tot het net verzwaard is.' },
  {
    term: 'Subsidie aangevraagd',
    description: 'Sinds 1 oktober is er een landelijke subsidieregeling voor energyhubs. GreenDee vraagt die voor jou aan, '
      + 'waardoor een deel van de kosten wordt gesubsidieerd.',
    href: 'https://www.rvo.nl/subsidies-financiering/ehub',
  },
]
</script>
