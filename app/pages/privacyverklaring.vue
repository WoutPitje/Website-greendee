<template>
  <LegalPage
    eyebrow="Juridisch"
    title="Privacyverklaring"
    intro="Deze website verzamelt zo min mogelijk. Hieronder staat precies welke gegevens GreenDee verwerkt, waarom, en wat u daaraan kunt doen."
    updated="2 oktober 2026"
  >
    <h2>Wie verwerkt uw gegevens</h2>
    <p>
      GreenDee is verantwoordelijk voor de verwerking van persoonsgegevens via deze
      website.
    </p>
    <ul>
      <li>Saneringsweg 3, 4053 JK IJzendoorn</li>
      <li>Bergerweg 200, 1817 MN Alkmaar</li>
      <li>Telefoon: <a href="tel:+31634466611">06-34466611</a></li>
      <li>E-mail: <a href="mailto:offerte@greendee.nl">offerte@greendee.nl</a></li>
      <li>KvK-nummer: 97695564</li>
    </ul>

    <h2>Welke gegevens en waarom</h2>

    <h3>Het contactformulier</h3>
    <p>
      Vult u het contactformulier in, dan verwerken wij uw naam, e-mailadres en uw
      omschrijving van het vraagstuk. Telefoonnummer en bedrijfsnaam zijn optioneel.
      Wij gebruiken die gegevens om uw vraag te beantwoorden en, als daar aanleiding
      toe is, een offerte uit te brengen.
    </p>
    <p>
      Het formulier slaat niets op in een database. Uw bericht wordt direct als e-mail
      naar ons verstuurd en komt in onze mailbox terecht. De grondslag is de uitvoering
      van een overeenkomst of de voorbereiding daarop; vraagt u iets zonder dat het tot
      een opdracht leidt, dan is de grondslag ons gerechtvaardigd belang om op vragen
      te kunnen antwoorden.
    </p>

    <h3>Uw IP-adres bij het verzenden</h3>
    <p>
      Om te voorkomen dat het formulier wordt misbruikt voor spam, telt de server hoe
      vaak er vanaf hetzelfde IP-adres wordt verzonden. Dat gebeurt alleen in het
      werkgeheugen en verdwijnt automatisch na tien minuten. Er wordt niets van
      bewaard. De grondslag is ons gerechtvaardigd belang bij een werkend formulier.
    </p>

    <h3>Technische logbestanden</h3>
    <p>
      De webserver legt vast welke pagina's worden opgevraagd, met het IP-adres, het
      tijdstip en het type browser. Dat is nodig om de site te laten werken, storingen
      op te lossen en misbruik te herkennen. De grondslag is ons gerechtvaardigd belang
      bij een veilige en werkende website.
    </p>

    <h3>Als u ons belt of mailt</h3>
    <p>
      Neemt u rechtstreeks contact op, dan verwerken wij de gegevens die u daarbij zelf
      geeft, voor hetzelfde doel: uw vraag beantwoorden.
    </p>

    <h2>Cookies en bezoekersstatistieken</h2>
    <p>
      Wij gebruiken Google Analytics om te zien welke pagina's worden bekeken en hoe
      bezoekers de site gebruiken. Daarmee kunnen wij de site verbeteren. Google
      Analytics plaatst daarvoor cookies.
    </p>
    <p>
      <strong>Dat gebeurt alleen als u daar toestemming voor geeft.</strong> Zolang u
      die niet heeft gegeven, wordt er niets van Google geladen: geen script, geen
      cookie, en er gaat geen enkel verzoek naar Google. Kiest u voor "alleen
      noodzakelijk", dan blijft dat zo.
    </p>
    <p>
      Geeft u wel toestemming, dan worden de pagina's die u bekijkt, het tijdstip, uw
      globale locatie, het type apparaat en browser en de pagina waarvandaan u kwam
      naar Google gestuurd. Google bewaart uw IP-adres niet als los gegeven; het wordt
      gebruikt om de globale locatie te bepalen en daarna verwijderd. Wij gebruiken
      geen advertentiefuncties en koppelen de statistieken niet aan uw naam of
      e-mailadres. De statistieken worden maximaal veertien maanden bewaard.
    </p>
    <p>
      Uw keuze zelf onthouden wij in uw browser (lokale opslag, niet in een cookie),
      zodat wij het niet bij elke pagina opnieuw hoeven te vragen. Die ene opslag is
      noodzakelijk en staat los van uw toestemming.
    </p>

    <ClientOnly>
      <p v-if="beschikbaar">
        <button type="button" class="font-semibold text-greendee-green underline underline-offset-2 transition-opacity hover:opacity-70" @click="herzie">
          Wijzig uw cookiekeuze
        </button>
        <span v-if="huidige !== 'onbekend'" class="text-gray-500">
          &nbsp;&mdash; nu ingesteld op
          {{ huidige === 'geaccepteerd' ? 'accepteren' : 'alleen noodzakelijk' }}.
        </span>
      </p>
    </ClientOnly>

    <h3>De online agenda</h3>
    <p>
      Op de contactpagina kunt u via Calendly een afspraak inplannen. Ook Calendly
      plaatst eigen cookies, daarom laden wij de agenda pas nadat u op
      <strong>Agenda laden</strong> klikt. Doet u dat niet, dan is er geen contact met
      Calendly en blijft het mailformulier de manier om ons te bereiken.
    </p>
    <p>
      Plant u een afspraak in, dan geeft u uw naam, e-mailadres en het gekozen tijdstip
      door aan Calendly. Zij leveren die gegevens bij ons af en bewaren ze in hun eigen
      systeem. Wij gebruiken ze alleen om de afspraak na te komen.
    </p>

    <h2>Wat wij niet doen</h2>
    <ul>
      <li>Er staat geen advertentienetwerk op deze site.</li>
      <li>Wij volgen u niet over andere websites en stellen geen profiel van u op.</li>
      <li>Wij verkopen uw gegevens niet en verhuren ze niet aan derden.</li>
    </ul>

    <h2>Wie uw gegevens nog meer ziet</h2>
    <p>
      Wij schakelen een paar partijen in die nodig zijn om de site en het formulier te
      laten werken. Zij mogen uw gegevens alleen gebruiken voor wat wij hun opdragen.
    </p>
    <div class="tabel-scroll">
      <table>
        <thead>
          <tr>
            <th>Partij</th>
            <th>Waarvoor</th>
            <th>Waar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hostinger</td>
            <td>Hosting van de website en het CMS</td>
            <td>Frankrijk (EU)</td>
          </tr>
          <tr>
            <td>Resend</td>
            <td>Aflevering van het e-mailbericht uit het contactformulier</td>
            <td>Verenigde Staten</td>
          </tr>
          <tr>
            <td>Google Fonts</td>
            <td>Het lettertype van de site</td>
            <td>Verenigde Staten</td>
          </tr>
          <tr>
            <td>Google Analytics</td>
            <td>Bezoekersstatistieken, alleen met uw toestemming</td>
            <td>Verenigde Staten</td>
          </tr>
          <tr>
            <td>Calendly</td>
            <td>De online agenda, alleen als u hem zelf laadt</td>
            <td>Verenigde Staten</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>
      Het lettertype wordt door uw browser bij Google opgehaald. Google ziet daarbij uw
      IP-adres. Verder wisselen wij geen gegevens met Google uit.
    </p>

    <h2>Hoe lang wij gegevens bewaren</h2>
    <ul>
      <li>
        <strong>Aanvragen die niet tot een opdracht leiden:</strong> maximaal één jaar
        na het laatste contact, zodat wij een eerder gesprek nog kunnen terugvinden.
      </li>
      <li>
        <strong>Aanvragen die tot een opdracht leiden:</strong> zolang het traject
        loopt. Wat tot onze administratie behoort, bewaren wij zeven jaar vanwege de
        fiscale bewaarplicht.
      </li>
      <li><strong>Technische logbestanden:</strong> enkele weken.</li>
      <li><strong>Statistieken in Google Analytics:</strong> maximaal veertien maanden.</li>
      <li>
        <strong>Ingeplande afspraken:</strong> zolang nodig om de afspraak na te komen
        en daarna in onze agenda-administratie.
      </li>
    </ul>

    <h2>Uw rechten</h2>
    <p>
      U mag ons vragen welke gegevens wij van u hebben, ze laten corrigeren of
      verwijderen, de verwerking laten beperken, bezwaar maken tegen verwerking op
      grond van een gerechtvaardigd belang, en uw gegevens in een overdraagbaar bestand
      opvragen.
    </p>
    <p>
      Stuur uw verzoek naar <a href="mailto:offerte@greendee.nl">offerte@greendee.nl</a>.
      Wij reageren binnen een maand. Om te voorkomen dat wij gegevens aan de verkeerde
      persoon geven, kunnen wij u vragen uzelf te identificeren.
    </p>
    <p>
      Komt u er met ons niet uit, dan kunt u een klacht indienen bij de Autoriteit
      Persoonsgegevens via
      <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer">autoriteitpersoonsgegevens.nl</a>.
    </p>

    <h2>Beveiliging</h2>
    <p>
      De site is uitsluitend via een beveiligde verbinding (https) bereikbaar. Het
      contactformulier bewaart niets op de server en is beperkt in het aantal
      verzendingen per IP-adres. Toegang tot onze mailbox en het CMS is afgeschermd met
      persoonlijke accounts.
    </p>

    <h2>Wijzigingen</h2>
    <p>
      Verandert er iets aan de website waardoor wij andere gegevens verwerken, dan
      passen wij deze verklaring aan. Bovenaan deze pagina staat wanneer dat voor het
      laatst is gebeurd.
    </p>
  </LegalPage>
</template>

<script setup lang="ts">
const { keuze: huidige, lees, wis: herzie } = useCookieConsent()
const beschikbaar = useAnalyticsBeschikbaar()

onMounted(lees)

useSeo({
  titel: 'Privacyverklaring',
  beschrijving:
    'Welke persoonsgegevens GreenDee via deze website verwerkt, waarom, hoe lang ze bewaard blijven en welke rechten u heeft.',
  afbeelding: 'standaard',
})
</script>
