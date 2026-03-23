export interface Reference {
  id: string
  title: string
  location: string
  capacity: string
  category: 'Energiehandel' | 'Netcongestie'
  description: string
  image: string
  featured?: boolean
}

export const references: Reference[] = [
  {
    id: 'bakkums-boetje',
    title: 'Bakkums Boetje',
    location: 'Heerhugowaard',
    capacity: '209 kWh',
    category: 'Energiehandel',
    description: 'Bakkums Boetje is een boerderijwinkel waar dagelijks verse streekproducten worden verkocht. Met een duidelijke focus op lokaal en duurzaam ondernemen past slim energiegebruik goed bij de bedrijfsvoering. Om meer waarde te halen uit de eigen zonnestroom investeerde Bakkums Boetje in een Cellpower batterij van 104 kW / 209 kWh. Met deze batterij wordt zonne-energie opgeslagen en ingezet op momenten dat dit het meeste oplevert. Hiermee vergroot Bakkums Boetje het eigen zonne-energieverbruik, verlaagt het de energiekosten en is het bedrijf beter voorbereid op toekomstige netbeperkingen. Het volledige traject, van onafhankelijk advies tot en met realisatie, is begeleid door GreenDee. GreenDee vertaalde de bedrijfsvoering en het energieverbruik van de boerderijwinkel naar een passende en toekomstbestendige batterijoplossing. Dit project laat zien dat energieopslag ook voor lokale ondernemers praktisch toepasbaar is en direct bijdraagt aan zowel duurzaamheid als rendement.',
    image: '/referenties/Bakkums Boetje-Heerhugowaard.jpeg'
  },
  {
    id: 'de-methorst',
    title: 'De Methorst Melkgeiten en Pluimvee',
    location: 'Lunteren',
    capacity: '1045 kWh',
    category: 'Energiehandel',
    description: 'Methorst Melkgeiten en Pluimvee is een vooruitstrevend agrarisch bedrijf in Lunteren waar duurzaamheid en toekomstgericht ondernemen een steeds grotere rol spelen. Door veranderende marktomstandigheden leverde de aanwezige zonne-energie steeds minder op, terwijl de wens bestond om duurzaam te blijven investeren én nieuwe opbrengsten te creëren. Daarom is gekozen voor de inzet van energieopslag in combinatie met energiehandel. Op de locatie zijn vijf Cellpower batterijen van 104 kW / 209 kWh geplaatst, samen goed voor 1.045 kWh aan opslagcapaciteit. Met dit systeem kan opgewekte zonnestroom worden opgeslagen en ingezet op momenten waarop dit financieel het meest aantrekkelijk is. De batterij-installatie maakt het mogelijk om actief te profiteren van prijsschommelingen op de energiemarkt, terwijl tegelijkertijd de duurzaam opgewekte energie beter wordt benut. Zo verandert zonne-energie van een beperkte opbrengst in een strategisch onderdeel van de bedrijfsvoering. GreenDee begeleidde dit project van strategisch advies tot en met de volledige realisatie. Het resultaat is een toekomstbestendige energieoplossing die aansluit bij de duurzame ambities van het bedrijf en ruimte biedt voor extra rendement uit energiehandel.',
    image: '/referenties/De Methorst-Lunteren.jpg',
    featured: true
  },
  {
    id: 'den-akker-lunteren',
    title: 'Den Akker Pluimvee',
    location: 'Lunteren',
    capacity: '627 kWh',
    category: 'Energiehandel',
    description: 'Den Akker Pluimvee is een pluimveebedrijf in Lunteren dat actief inspeelt op veranderingen in de energiemarkt. Door dalende opbrengsten van zonnestroom ontstond de behoefte om de waarde van eigen duurzame energie te vergroten en gericht te investeren in toekomstbestendige oplossingen. Daarom is gekozen voor energieopslag in combinatie met energiehandel. Op de locatie zijn drie Cellpower batterijen van 209 kWh geïnstalleerd. Hiermee kan opgewekte zonnestroom worden opgeslagen en ingezet op momenten waarop de marktprijzen gunstig zijn, waardoor zonne-energie weer een interessant verdienmodel wordt. Het volledige traject, van advies tot en met realisatie, is begeleid door GreenDee. Het resultaat is een duurzame investering die Den Akker Pluimvee in staat stelt om actief te profiteren van prijsschommelingen op de energiemarkt en meer rendement te halen uit eigen opwek.',
    image: '/referenties/Den Akker Pluimvee-Lunteren.jpg.jpeg'
  },
  {
    id: 'den-akker-nijkerk',
    title: 'Den Akker Pluimvee',
    location: 'Nijkerk',
    capacity: '627 kWh',
    category: 'Energiehandel',
    description: 'Den Akker Pluimvee volgt de ontwikkelingen in de energiemarkt nauwgezet. Door de afnemende opbrengst van zonnestroom werd het steeds belangrijker om duurzame energie niet alleen op te wekken, maar ook slimmer te benutten. Tegelijk wilde het bedrijf gericht investeren in duurzaamheid en nieuwe verdienmogelijkheden via energiehandel. Op het bedrijf zijn daarom drie Cellpower batterijen van 209 kWh geplaatst. Met deze energieopslag kan zonnestroom worden vastgehouden en ingezet op momenten waarop de marktprijzen aantrekkelijk zijn. Zo krijgt zonne-energie opnieuw economische waarde en wordt actief ingespeeld op prijsschommelingen in de energiemarkt. GreenDee begeleidde het volledige traject, van strategisch advies tot en met de realisatie van het batterijsysteem. Dit project onderstreept hoe ook agrarische ondernemers met energieopslag hun duurzame ambities kunnen versterken én tegelijkertijd bouwen aan een toekomstbestendig verdienmodel.',
    image: '/referenties/Den Akker Pluimvee-Nijkerk.jpg'
  },
  {
    id: 'fresh2you',
    title: 'Fresh2You',
    location: 'Heerle',
    capacity: '209 kWh',
    category: 'Netcongestie',
    description: 'Fresh2You is actief in de opslag en distributie van verse groenten en fruit. Door de bouw van een nieuwe koelcel nam het elektriciteitsverbruik op de locatie toe. Hierdoor dreigde het bedrijf over het gecontracteerde vermogen te gaan, terwijl uitbreiding juist noodzakelijk was voor verdere groei. Netcongestie maakte een verzwaring van de aansluiting niet mogelijk. De oplossing werd gevonden in energieopslag. Met de installatie van een Cellpower batterij van 104 kW / 209 kWh kan Fresh2You de vermogenspieken van de koelcel opvangen. De batterij levert extra vermogen op piekmomenten, waardoor het totale verbruik binnen de bestaande contractgrenzen blijft. Dankzij deze oplossing is de uitbreiding van de koelcapaciteit alsnog gerealiseerd, zonder aanpassingen aan de netaansluiting. Het volledige traject van de uitvoering is begeleid door GreenDee. Dit project laat zien hoe energieopslag een praktisch en effectief antwoord biedt op netcongestie en groei mogelijk maakt, zelfs wanneer het elektriciteitsnet zijn grenzen bereikt.',
    image: '/referenties/Fresh2You-Heerle.jpg',
    featured: true
  },
  {
    id: 'herko-vastgoed',
    title: 'Herko Vastgoed',
    location: 'Amersfoort',
    capacity: '233 kWh',
    category: 'Netcongestie',
    description: 'Herko Vastgoed beheert meerdere bedrijfspanden met verschillende huurders. Door de groei van het elektriciteitsverbruik en de aanwezigheid van zonnepanelen liep de locatie tegen de grenzen van de netaansluiting aan. Vanwege netcongestie was het verzwaren van de aansluiting geen mogelijkheid. Om dit probleem op te lossen is gekozen voor energieopslag. Met de installatie van een Cellpower batterij van 233 kWh worden vermogenspiekken opgevangen, waardoor het totale verbruik binnen het gecontracteerde vermogen blijft. Hiermee is het netcongestieprobleem op de locatie effectief opgelost. GreenDee heeft dit project begeleid van advies tot en met de uitvoering. Dankzij deze oplossing kan Herko Vastgoed de bestaande panden blijven exploiteren zonder aanpassingen aan de netaansluiting.',
    image: '/referenties/Herko Vastgoed-Amersfoort.jpg'
  },
  {
    id: 'heteren-melkgeiten',
    title: 'Heteren Melkgeiten',
    location: 'Heteren',
    capacity: '836 kWh',
    category: 'Energiehandel',
    description: 'Heteren Melkgeiten is een melkgeitenbedrijf dat al geruime tijd investeert in duurzame energie met zonnepanelen op het erf. Door veranderingen in de energiemarkt kwam de opbrengst van zonnestroom echter steeds meer onder druk te staan. De wens was daarom om meer waarde te halen uit de bestaande opwek en actief te kunnen inspelen op kansen in de energiehandel. Als aanvulling op de zonnepanelen is gekozen voor energieopslag. Op de locatie zijn vier Cellpower batterijen van 209 kWh geplaatst. Met deze batterijen kan zonnestroom worden opgeslagen en ingezet op momenten waarop de marktprijzen gunstig zijn. Hierdoor wordt duurzame energie slimmer benut en ontstaat een nieuw verdienmodel. Het volledige traject, van advies tot en met de uitvoering, is begeleid door GreenDee. Met deze oplossing beschikt Heteren Melkgeiten over een toekomstbestendig energiesysteem waarmee het bedrijf actief deelneemt aan de energiemarkt en meer rendement haalt uit de eigen zonnestroom.',
    image: '/referenties/Heteren Melkgeiten-Heteren.jpg'
  },
  {
    id: 'de-adelhof',
    title: 'De Adelhof Pluimvee',
    location: 'Homoet',
    capacity: '627 kWh',
    category: 'Energiehandel',
    description: 'Adelhof Pluimvee is een pluimveebedrijf in Homoet dat inspeelt op de snel veranderende energiemarkt. Door de dalende opbrengsten van zonnestroom werd het steeds belangrijker om duurzame energie slimmer te benutten en de waarde ervan te behouden. Tegelijkertijd wilde het bedrijf blijven investeren in een toekomstbestendige bedrijfsvoering. Daarom is gekozen voor energieopslag in combinatie met energiehandel. Met een Cellpower batterijsysteem kan opgewekte zonnestroom worden opgeslagen en ingezet op momenten waarop de marktprijzen gunstig zijn. Zo wordt zonne-energie niet alleen duurzamer gebruikt, maar ook economisch aantrekkelijker. Het volledige traject, van advies tot en met de realisatie, is begeleid door GreenDee. Deze oplossing stelt Adelhof Pluimvee in staat om actief te profiteren van prijsschommelingen op de energiemarkt en meer rendement te halen uit de bestaande zonnestroominstallatie.',
    image: '/referenties/Locatie de Adelhof-Homoet.jpg'
  },
  {
    id: 'de-linge',
    title: 'De Linge Pluimvee',
    location: 'Homoet',
    capacity: '627 kWh',
    category: 'Energiehandel',
    description: 'Linge Pluimvee is een pluimveebedrijf in Homoet dat bewust inzet op verduurzaming. Door ontwikkelingen in de energiemarkt stond de opbrengst van zonnestroom steeds meer onder druk. Dit maakte het noodzakelijk om slimmer om te gaan met de bestaande zonne-energie en nieuwe mogelijkheden te benutten. Als oplossing is gekozen voor energieopslag. Op de locatie zijn drie Cellpower batterijen van 209 kWh geïnstalleerd. Met deze batterijen kan zonnestroom worden opgeslagen en strategisch worden ingezet op momenten met gunstige energieprijzen. Hierdoor neemt de waarde van de eigen zonne-energie toe en kan actief worden ingespeeld op energiehandel. Het volledige traject, van advies en ontwerp tot en met de realisatie, is begeleid door GreenDee. Met deze toekomstbestendige energieoplossing haalt Linge Pluimvee meer rendement uit duurzame opwek en is het bedrijf beter voorbereid op verdere veranderingen in de energiemarkt.',
    image: '/referenties/Locatie de Linge-Homoet.jpg'
  },
  {
    id: 't-trichtse-veld',
    title: '\'t Trichtse Veld',
    location: 'Tricht',
    capacity: '233 kWh',
    category: 'Energiehandel',
    description: '\'t Trichtse Veld is een melkgeitenbedrijf dat actief inzet op duurzaamheid en slim energiegebruik. Met zonnepanelen op het bedrijf wordt al geruime tijd duurzame energie opgewekt, maar door ontwikkelingen in de energiemarkt kwam de waarde van zonnestroom steeds meer onder druk te staan. Om meer rendement te halen uit de bestaande zonne-energie is gekozen voor energieopslag in combinatie met energiehandel. Op de locatie is een Cellpower batterij van 233 kWh geplaatst. Met deze batterij kan zonnestroom worden opgeslagen en ingezet op momenten waarop de energieprijzen gunstig zijn. Hierdoor wordt zonne-energie niet alleen duurzaam opgewekt, maar ook economisch slimmer benut. Het volledige traject, van advies tot en met de uitvoering, is begeleid door GreenDee. Met deze oplossing beschikt \'t Trichtse Veld over een toekomstbestendig energiesysteem dat bijdraagt aan extra opbrengsten en een efficiënter gebruik van eigen zonnestroom.',
    image: '/referenties/\'t Trichtse Veld-Tricht.jpeg'
  },
  {
    id: 't-woud',
    title: '\'t Woud',
    location: 'Lunteren',
    capacity: '209 kWh',
    category: 'Netcongestie',
    description: '\'t Woud Pluimvee uit Lunteren liep tegen beperkingen van het elektriciteitsnet aan. Door netcongestie was het niet mogelijk om het gecontracteerde vermogen te verhogen, terwijl het energieverbruik op piekmomenten hier wel om vroeg. Om dit probleem op te lossen is gekozen voor energieopslag. Op de locatie is een Cellpower batterij van 209 kWh geplaatst. Deze batterij vangt vermogenspiekken op, zodat het totale elektriciteitsverbruik binnen de bestaande contractgrenzen blijft. Daarmee is het netcongestieprobleem effectief ondervangen, zonder aanpassingen aan de netaansluiting. Het volledige traject, van analyse en advies tot en met de uitvoering, is begeleid door GreenDee. Dankzij deze oplossing kan \'t Woud de bedrijfsvoering voortzetten en toekomstige ontwikkelingen realiseren, ondanks de beperkingen van het elektriciteitsnet.',
    image: '/referenties/\'t Woud-Lunteren.jpeg'
  },
  {
    id: 'widdonckschool',
    title: 'Widdonckschool',
    location: 'Heibloem',
    capacity: '233 kWh',
    category: 'Netcongestie',
    description: 'Widdonckschool stond voor een grote uitdaging door netcongestie. De uitbreiding van het schoolgebouw en de samenvoeging van speciaal en voortgezet speciaal onderwijs zorgden voor een sterke toename van het energieverbruik. Vooral praktijklessen zoals koken en techniek vroegen veel vermogen, waardoor overschrijding van het gecontracteerde aansluitvermogen dreigde. Om het onderwijs betrouwbaar en ongestoord te laten doorgaan, is gekozen voor energieopslag als oplossing. Met de plaatsing van een Cellpower batterij van 233 kWh kan de school vermogenspiekken opvangen en blijft het elektriciteitsverbruik binnen de bestaande netcapaciteit. Hierdoor is een stabiele energievoorziening gegarandeerd, ook tijdens intensief gebruik van praktijklokalen. GreenDee heeft dit project volledig begeleid: van analyse en advies tot en met de uitvoering van het batterijsysteem. In samenwerking met de gemeente is zo een toekomstbestendige oplossing gerealiseerd die netcongestie opvangt en bijdraagt aan de continuïteit van het onderwijs. Dit project laat zien hoe energieopslag ook binnen het onderwijs een praktische en duurzame oplossing biedt voor een overvol stroomnet.',
    image: '/referenties/Widdonckschool-Heibloem.jpg',
    featured: true
  }
]
