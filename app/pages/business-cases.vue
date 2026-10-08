<template>
  <div>
    <InnerPageHero
      eyebrow="Onze diensten"
      title="Businesscases"
      intro="Van energievraag naar onderbouwd investeringsbesluit. Gebaseerd op echte data, zodat je weet wat een investering kost én oplevert."
      image="/v2/hero-business-cases"
      image-alt="Overleg over een businesscase"
    />

    <NumberedListSection
      eyebrow="Herken je dit?"
      title="Iedereen heeft een oplossing. Maar welke past bij mij?"
      intro="Netcongestie, stijgende energiekosten en elektrificatie dwingen tot keuzes. Moet je investeren in zonnepanelen, een batterij, laadinfrastructuur of een nieuw energiecontract? GreenDee geeft hier een onderbouwd antwoord op."
      :items="problemen"
    />

    <StepGridSection
      eyebrow="Onze aanpak"
      title="Van energievraag naar onderbouwd investeringsbesluit."
      intro="In zes stappen. Gemiddeld 8–10 weken van opdracht tot offertes."
      :steps="stappen"
    />

    <ResultCardsSection
      eyebrow="Het resultaat"
      title="Wat levert het op?"
      intro="Een onderbouwd investeringsbesluit waarmee je direct verder kunt."
      :cards="resultaten"
    />

    <RoleSection
      title="Eén aanspreekpunt, van eerste gesprek tot blijvend rendement."
      body="Wij ondersteunen je bij de gesprekken met netbeheerder, gemeente, verzekeraar en veiligheidsregio, en bewaken na realisatie jaarlijks je energiekosten en rendement."
      image="/v2/rol-greendee"
      image-alt="Lars van GreenDee in telefonisch overleg"
      background="grey"
    />

    <CtaSection
      title="Wil je weten of je investering rendabel is?"
      body="Het traject begint met een vrijblijvend gesprek over je situatie en ambities. Daarna ontvang je een offerte met vaste prijzen per onderdeel."
      background="mint"
      :rounded-top="false"
    />
  </div>
</template>

<script setup lang="ts">
useSeo({
  titel: 'Businesscases',
  beschrijving:
    'Van energievraag naar onderbouwd investeringsbesluit, gebaseerd op echte data.',
  afbeelding: 'business-cases',
})

const problemen = [
  {
    title: 'Netcongestie',
    body: 'De netaansluiting groeit niet mee met je plannen. Wat kost niets doen, wat levert de investering op, en wat is de TCO?',
  },
  {
    title: 'Teruglevering onder druk',
    body: 'Zonnestroom leveren op momenten dat de prijs laag is. Kan een batterij het eigen verbruik en de opbrengst verhogen?',
  },
  {
    title: 'Laadinfra',
    body: 'Wanneer verdient een openbaar laadplein zich terug, en hoeveel laadsessies zijn daarvoor nodig? Wanneer is eigen laadinfra voordeliger dan buiten de deur laden, en wanneer een elektrische vrachtwagen voordeliger dan een diesel?',
  },
  {
    title: 'Energiecontract en kosten',
    body: 'Aflopende contracten en stijgende tarieven. Welke contractvorm past bij je bedrijf en welke besparing is haalbaar?',
  },
]

const stappen = [
  {
    title: 'Kennismaking & situatieanalyse',
    duration: '1 week',
    body: 'Wij brengen je energievraag, aansluiting en ambities in kaart. Je ontvangt een offerte met vaste prijzen per onderdeel.',
  },
  {
    title: 'Technische schouw & werktekening',
    duration: '1 week',
    body: 'Eén bezoek op locatie: trafo/HVK, kabeltracés, ruimte en veiligheid. De werktekening is de basis voor alle installateurs.',
  },
  {
    title: 'Capaciteitsanalyse & simulatie',
    duration: '1–2 weken',
    body: 'Simulatie op kwartierniveau van verbruik, PV, batterij en laadinfra. Voorkomt overinvestering én onderdimensionering.',
  },
  {
    title: 'Investeringsbesluit & subsidiescan',
    duration: '2–3 weken',
    body: "CAPEX, OPEX, opbrengsten, terugverdientijd en risico's. Inclusief inventarisatie van subsidies en fiscale regelingen.",
  },
  {
    title: 'Marktuitvraag & offertevergelijking',
    duration: '2–4 weken',
    body: 'Programma van eisen namens jou; ISO 9001/VCA-gecertificeerde installateurs offreren op dezelfde uitgangspunten. De offertes zijn daardoor objectief vergelijkbaar.',
  },
  {
    title: 'Realisatie & rendementsbewaking',
    duration: 'doorlopend',
    body: 'Afstemming met netbeheerder, gemeente, verzekeraar en veiligheidsregio. Daarna jaarlijkse bewaking van kosten en rendement.',
  },
]

const resultaten = [
  {
    title: 'Inzicht',
    body: 'Vermogensvraag, netcapaciteit en de juiste dimensionering van PV, batterij en laadinfra.',
  },
  {
    title: 'Businesscase',
    body: "CAPEX, OPEX, terugverdientijd, subsidies en risico's. Gebaseerd op echte data.",
  },
  {
    title: 'Uitvoeringsklaar',
    body: 'Vergelijkbare offertes van gecertificeerde installateurs, klaar om te contracteren.',
  },
]
</script>
