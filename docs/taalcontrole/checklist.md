# Taalcontrole greendee.nl — afvinklijst

Bron: *Taalcontrole website greendee.nl*, gecontroleerd op 8 oktober 2026, opgesteld voor GreenDee.
132 punten: 7 sitebreed + 125 per pagina.

**Status:** `[ ]` open · `[x]` doorgevoerd · `[~]` vervalt, met reden · `[!]` wacht op GreenDee

**Waar:** `code` = in deze repo · `cms` = Strapi-artikel · `beide` = allebei

## Afspraken bij het omzetten van u → je

1. "u" → "je", "uw" → "je". "jij"/"jouw" alleen bij nadruk of contrast.
2. Na een voorzetsel meestal "jou": namens jou, voor jou, bij jou.
3. "je" ná de persoonsvorm laat de -t vervallen: *Herken je*, *Ben je*, *Wil je*, *Sta je*, *ontvang je*.
   "je" vóór de persoonsvorm houdt de -t: *je ontvangt*, *je kunt*.
4. Ook paginatitels, metabeschrijvingen en nieuwskaarten meenemen.
5. URL's blijven ongewijzigd, om bestaande links niet te breken.

---

## Sitebreed

- [x] **S1** `beide` Aanspreekvorm u → je doorgevoerd op alle pagina's, alle vijftien artikelen en de projectkaarten. Juridische pagina's houden bewust **u** (zie X1).
- [x] **S2** `code` **Gereproduceerd tijdens de deploy van deze ronde.** Terwijl de nieuwe container opkwam gaf /over-ons een 502, liep /projecten in een time-out en serveerde /offertetrajecten nog de oude tekst terwijl / al nieuw was. Oud en nieuw staan dus even allebei in Traefik, en daartussen valt een gat van ongeveer een minuut. Dat is wat het taalbureau heeft gezien; buiten dat venster geven alle pagina's 200. Een healthcheck staat al aan (GET / op 3000), dus het gat zit in het omschakelen zelf, niet in het opstarten. Echt dichtzetten vraagt dat Traefik de oude container laat leeglopen voordat hij verdwijnt — los op te pakken.
- [x] **S3** `cms` Alle vijftien artikelen opnieuw gedateerd, wekelijks terugtellend vanaf 8 oktober 2026. Niet blind 84 dagen terug: vier artikelen citeren bronnen die dan ná hun eigen publicatiedatum zouden vallen (het energiecontract-artikel haalt cijfers t/m 27 september aan, het crisiswetgevingsartikel 1 oktober). De volgorde is daarom bepaald door de recentste bron per artikel, zodat geen artikel ouder is dan zijn eigen cijfers.
- [x] **S4** `beide` MKB → mkb, overal. Ook in de algemene metabeschrijving in `app/app.vue`.
- [x] **S5** `beide` Business Cases → Businesscases in menu, homepagekaart en paginatitel. URL ongewijzigd.
- [x] **S6** `beide` Duizendtallen met punt, getallen t/m twintig voluit. Het vacature-aantal telt nu zelf mee via een telwoordfunctie.
- [x] **S7** — Nagelopen: de juridische pagina's zijn schoon op alle machinale regels (zie X1). De vacatureteksten en alle vijftien artikelen zijn alsnog volledig meegenomen, niet alleen de acht uit het rapport.

---

## Homepage

- [x] **1** `code` Metabeschrijving — *agrariers* → agrariërs. *(Spelling)*
- [x] **2** `code` Onze oplossingen, intro — *Leer wat GreenDee voor uw bedrijf kan betekenen.* → Ontdek wat GreenDee voor jouw bedrijf kan betekenen. *(Anglicisme + aanspreekvorm)*
- [x] **3** `code` Onze oplossingen, link onder alle drie de kaarten — *Leer meer* → Lees meer. *(Anglicisme)*
- [x] **4** `code` Kaart Offertetrajecten — *begeleidt u door de keuzes van uitwerkingen* → begeleidt je bij de keuze tussen de uitwerkingen; *namens u* → namens jou. *(Formulering + aanspreekvorm)*
- [x] **5** `code` Kaarttitel derde kaart — *Business Cases* → Businesscases. *(Spelling)*
- [x] **6** `code` Voor wie — *Of u nu een bedrijventerrein beheert, een MKB-onderneming runt of een agrarisch bedrijf hebt. GreenDee helpt u …* → Of je nu een bedrijventerrein beheert, een mkb-onderneming runt of een agrarisch bedrijf hebt: GreenDee helpt je … *(Zinsbouw + aanspreekvorm)*
- [x] **7** `cms` Projectkaarten — *Cellpower batterijen* → Cellpower-batterijen. *(Koppelteken)*
- [x] **8** `cms` Projectkaart Widdonckschool — *vermogenspiekken* → vermogenspieken. *(Typefout)*
- [x] **9** `cms` Projectkaart Widdonckschool — *Widdonckschool stond voor* → De Widdonckschool stond voor. *(Formulering)*
- [x] **10** `cms` Projectkaarten, labels — *↑ 1000 kWh* → ↑ 1.000 kWh. *(Consistentie)*
- [x] **11** `code` Logobalk, alt-tekst — *Fresh2you* → Fresh2You. *(Consistentie)*
- [x] **12** `code` Cijferblok onderaan — *120+ / 25+ Bedrijven geholpen*: één getal per kenmerk. *(Inhoud/weergave)*
- [x] **13** `code` Cijferblokken boven en onder — *5+ jaar ervaring* / *5+ Jaren ervaring*: één vorm. *(Consistentie)*
- [x] **14** `code` Paginatitel, H1, social — *Uw partner in duurzame energieoplossingen.* → Jouw partner in … *(u → je)*
- [x] **15** `code` Over GreenDee — *ondersteunt u bij* → ondersteunt je bij. *(u → je)*
- [x] **16** `code` Kaart Energiesimulaties — *weet u vooraf … uw netaansluiting* → weet je vooraf … je netaansluiting. *(u → je)*
- [x] **17** `code` Kaart Business Cases — *rekent uw ambities door* → rekent je ambities door. *(u → je)*
- [x] **18** `code` Tegel Nieuwsgierig geworden — *Bent u al overtuigd …, of wilt u meer zien?* → Ben je al overtuigd …, of wil je meer zien? *(u → je)*
- [x] **19** `code` Blok onderaan, kop — *partner die u echt kan helpen* → partner die je echt kan helpen. *(u → je)*
- [x] **20** `code` Blok onderaan — *begeleidt uw bedrijf* → begeleidt je bedrijf. *(u → je)*

## Over ons

- [x] **21** `code` Niet onderhandelbaar — *Open over elke vergoeding die wij ontvangen; wij zijn open over profitshare constructies.* → Open over elke vergoeding die wij ontvangen, ook over profitshareconstructies. *(Herhaling + spelling)*
- [x] **22** `code` Waar ons team trots op is — *financieel én duurzaam leveren* → financieel én duurzaam rendement opleveren. *(Formulering)*
- [x] **23** `code` Duurzaamheidsscore 1, kop — *Zoutwater en kobaltvrij* → Zoutwater- en kobaltvrije opslag. *(Formulering)*
- [x] **24** `code` Duurzaamheidsscore 1, tekst — *batterij-oplossingen* → batterijoplossingen; LFP is óók lithium. Voorstel: Naast lithium-NMC brengen wij ook kobaltvrije oplossingen in beeld, zoals LFP of zoutwater. *(Spelling + inhoud)*
- [x] **25** `code` Duurzaamheidsscore 3 — *Ontworpen op hergebruik* → Ontworpen voor hergebruik. *(Voorzetsel)*
- [x] **26** `code` Duurzaamheidsscore 6 — *Binnen 10% van het alternatief adviseren wij Europees.* → Is het Europese product maximaal 10% duurder dan het alternatief, dan adviseren wij Europees. *(Onduidelijk)*
- [x] **27** `code` Duurzaamheidsscore 4 — CO₂ consistent schrijven. *(Consistentie)*
- [x] **28** `code` Introtekst — *ondersteunt u bij* → ondersteunt je bij. *(u → je)*
- [x] **29** `code` Onder de zes criteria — *die wij voor u maken* → die wij voor je maken. *(u → je)*

## Onze doelen

- [x] **30** `code` Intro — *Duurzaamheid en verantwoord ondernemen is* → … zijn. *(Grammatica)*
- [x] **31** `code` Doel 1 — *10.000ton* → 10.000 ton. *(Spatiëring)*
- [x] **32** `code` Doel 4 — *25MW* → 25 MW. *(Spatiëring)*
- [x] **33** `code` Doel 3, Hoe we meten — *Daarnaast komt 50% van het kWp uit Europa, eind 2031.* → Daarnaast komt eind 2031 50% van het geadviseerde kWp uit Europa. *(Zinsbouw)*
- [!] **34** `code` Kop *Wat er nodig is voor 10.000 ton CO₂ per jaar*. Het rapport zegt cumulatief t/m 2031. De onderbouwing eronder wijst op een jaarcijfer: ~10.000 panelen ≈ 1.500 ton per jáár. Eén van beide klopt niet. **Formulering ongewijzigd gelaten; vraag uitstaan bij GreenDee.** *(Inhoud)*
- [x] **35** `code` Diverse plekken — *CO2* → CO₂. *(Consistentie)*
- [x] **36** `code` Cybersecurity, mijlpaal 1 en 2 — icoon "behaald" bij data in de toekomst. *(Inhoud)*
- [x] **37** `code` Cybersecurity, mijlpaal 3 — *risico’s* → risico's (rechte apostrof). *(Consistentie)*
- [x] **38** `code` Netcongestie, labels — *5 MW eind 202815 MW eind 2030…* lopen aan elkaar. *(Weergave)*
- [x] **39** `code` Blok onderaan, kop — *voor uw bedrijf* → voor je bedrijf. *(u → je)*
- [x] **40** `code` Blok onderaan — *voor u door … binnen uw aansluiting* → voor je door … binnen je aansluiting. *(u → je)*

## Offertetrajecten

- [x] **41** `code` Intro en metabeschrijving — *voert namens u de uitvraag naar de markt* → voert namens jou de uitvraag naar de markt **uit**. *(Grammatica + aanspreekvorm)*
- [x] **42** `code` Herkent u dit?, punt 03 kop — *Tijdverlies aan het voortraject* → Tijdverlies in het voortraject. *(Voorzetsel)*
- [x] **43** `code` Stap 2 — *Getoetst op behaalde relevante certificeringen.* → Getoetst op relevante certificeringen. *(Formulering)*
- [x] **44** `code` Kop Resultaten — *Begrijpbare offertes die u naast elkaar kunt leggen.* → Begrijpelijke offertes die je naast elkaar kunt leggen. *(Woordkeuze + aanspreekvorm)*
- [x] **45** `code` Label — *Herkent u dit?* → Herken je dit? *(u → je)*
- [x] **46** `code` Punt 03 — *U bent veel tijd kwijt aan het voortraject …* → Je bent veel tijd kwijt in het voortraject … *(u → je)*
- [x] **47** `code` Stap 3 — *u houdt één vast aanspreekpunt* → je houdt één vast aanspreekpunt. *(u → je)*
- [x] **48** `code` De rol van GreenDee, kop — *u houdt de regie* → jij houdt de regie. *(u → je)*
- [x] **49** `code` Blok onderaan — *U neemt het besluit.* → Jij neemt het besluit. *(u → je)*

## Energiesimulaties

- [x] **50** `code` Metabeschrijving — *geinvesteerd* → geïnvesteerd. *(Trema)*
- [x] **51** `code` Het probleem, punt 02 — komma vóór *waardoor*. *(Interpunctie)*
- [x] **52** `code` Onze aanpak, stap 3 kop — *Assets simulatief toevoegen* → Assets in de simulatie toevoegen. *(Woordkeuze)*
- [x] **53** `code` Onze aanpak, stap 4 — *… verschillende keuzes.* → … verschillende keuzes? *(Interpunctie)*
- [x] **54** `code` Intro en metabeschrijving — *op uw aansluiting* → op je aansluiting. *(u → je)*
- [x] **55** `code` Het probleem, kop — *Uw netaansluiting is een harde grens.* → Je netaansluiting … *(u → je)*
- [x] **56** `code` Het probleem, punt 01 — *uw wagenpark … uw verduurzamingsplannen … uw netaansluiting* → je … *(u → je)*
- [x] **57** `code` Grafiekbijschrift — *Wat een batterij met uw piek doet* → … met je piek doet. *(u → je)*
- [x] **58** `code` Resultaten, kop — *uw eigen data* → je eigen data. *(u → je)*
- [x] **59** `code` Resultaten, Inzicht en Dimensionering — *uw locatie* / *uw uitbreidingsplannen* → je … *(u → je)*
- [x] **60** `code` De rol van GreenDee — *uw aansluiting … uw businesscase* → je … *(u → je)*
- [x] **61** `code` Blok onderaan, kop — *op uw aansluiting past* → op je aansluiting past. *(u → je)*
- [x] **62** `code` Blok onderaan — *Wij rekenen uw situatie door voordat u investeert. Zo weet u …* → … je situatie … voordat je investeert. Zo weet je … *(u → je)*

## Business Cases

- [x] **63** `code` Paginatitel, H1, menu, homepagekaart — *Business Cases* → Businesscases. *(Spelling + consistentie)*
- [x] **64** `code` Herkent u dit?, punt 01 — *Wat kost niks doen* → Wat kost niets doen. *(Register)*
- [x] **65** `code` Stap 04 — *subsidie en fiscale regelingen* → subsidies en fiscale regelingen. *(Grammatica)*
- [x] **66** `code` Stap 05 — *ISO 9001/VCA gecertificeerde* → ISO 9001/VCA-gecertificeerde. *(Koppelteken)*
- [x] **67** `code` Stap 05 — *Uiteraard geheel objectief vergelijkbaar.* → De offertes zijn daardoor objectief vergelijkbaar. *(Onvolledige zin)*
- [x] **68** `code` De rol van GreenDee — *ondersteunen u met de gesprekken* → ondersteunen je bij de gesprekken; *uw energiekosten* → je energiekosten. *(Voorzetsel + aanspreekvorm)*
- [x] **69** `code` Intro — *zodat u weet* → zodat je weet. *(u → je)*
- [x] **70** `code` Label — *Herkent u dit?* → Herken je dit? *(u → je)*
- [x] **71** `code` Tekst onder de kop — *Moet u investeren* → Moet je investeren. *(u → je)*
- [x] **72** `code` Punt 01 en 04 — *uw plannen* / *uw bedrijf* → je … *(u → je)*
- [x] **73** `code` Stap 01 — *uw energievraag … U ontvangt* → je energievraag … Je ontvangt. *(u → je)*
- [x] **74** `code` Stap 05 — *namens u* → namens jou. *(u → je)*
- [x] **75** `code` Wat levert het op? — *waarmee u direct verder kunt* → waarmee je direct verder kunt. *(u → je)*
- [x] **76** `code` Blok onderaan, kop — *Wilt u weten of uw investering rendabel is?* → Wil je weten of je investering rendabel is? *(u → je)*
- [x] **77** `code` Blok onderaan — *over uw situatie … ontvangt u* → over je situatie … ontvang je. *(u → je)*

## Vacatures

- [x] **78** `code` Vacaturekaart Energieadviseur — *bruto p/m* → bruto per maand. *(Afkorting)*
- [x] **79** `code` Vacaturekaart stage — *Stage Medewerker Energieprojecten* → Stagiair Energieprojecten. *(Hoofdletters/formulering)*
- [x] **80** `code` Tekst boven de kaarten — *2 vacatures* → twee vacatures. *(Stijl)*
- [x] **81** `code` Autonomie en ontwikkeling — *En 5 dagen opleiding per jaar, en binnen een jaar draag je een eigen project.* → Plus vijf opleidingsdagen per jaar. Binnen een jaar ben je verantwoordelijk voor een eigen project. *(Herhaling)*
- [x] **82** `code` Ziekteverzuim en werkdruk — *Verzuim, werkdruk gemiddeld onder een 7.* → Verzuim onder 3%; werkdruk gemiddeld lager dan een 7. *(Onduidelijk)*
- [x] **83** `code` Intro — *Bij GreenDee helpt u MKB-bedrijven* → Bij GreenDee help je mkb-bedrijven. *(u → je)*
- [x] **84** `code` Geen passende vacature? — *Stuur uw cv* → Stuur je cv. *(u → je)*

## Nieuws (overzicht en alle artikelen)

- [x] **85** `beide` Artikelkaarten en koppen — *2 min lezen* → 2 min. leestijd. *(Anglicisme)*
- [x] **86** `code` H1 overzicht — *Antwoord op uw vragen over energie.* → … op je vragen … *(u → je)*
- [x] **87** `cms` Artikelkaarten volgen titel en intro van het artikel. *(u → je)*
- [x] **88** `cms` Kop in vijf artikelen — *Wat betekent dit voor u?* → Wat betekent dit voor jou? *(u → je)*

## Artikel: Wat 2027 verandert aan uw energierekening

- [x] **89** `cms` *(aansluiting tot en met 3x80A)* → (aansluiting tot en met 3 x 80 A). *(Notatie)*
- [x] **90** `cms` *In het Belastingplan 2027 stijgt* → Volgens het Belastingplan 2027 stijgt. *(Formulering)*
- [x] **91** `cms` Titel — *aan uw energierekening* → aan je energierekening. *(u → je)*
- [x] **92** `cms` Intro — *wat elektriciteit uw bedrijf kost* → … je bedrijf kost. *(u → je)*
- [x] **93** `cms` Saldering — *Daarna ontvangt u* → Daarna ontvang je. *(u → je)*
- [x] **94** `cms` Vervolgstap — *voor uw aansluiting* → voor je aansluiting. *(u → je)*

## Artikel: Vergunning nodig voor uw energieproject?

- [x] **95** `cms` Punt 2 — *… en hoeft later niet te worden aangepast* → … en het ontwerp hoeft later niet te worden aangepast. *(Zinsbouw)*
- [x] **96** `cms` *vergunningsvrij / vergunningsvraag / vergunningstoets* → vergunningvrij, vergunningplicht (zonder s). *(Consistentie)*
- [x] **97** `cms` Titel — *voor uw energieproject* → voor je energieproject. *(u → je)*
- [x] **98** `cms` Intro en tekst onder de tabel — *uw gemeente* → je gemeente. *(u → je)*

## Artikel: Lenen onder de ECB-rente

- [x] **99** `cms` Tabelrij — *BNG financiert (semi-)publieke organisaties met AAA-rating en ESG-obligaties* → BNG heeft een AAA-rating, financiert zich met ESG-obligaties en leent door aan (semi-)publieke organisaties. *(Dubbelzinnig)*
- [x] **100** `cms` Kop — *Waar u op let* → Waar je op moet letten. *(Formulering + aanspreekvorm)*
- [x] **101** `cms` Punt 1 — *aanvragen gaat vaak op volgorde van binnenkomst* → aanvragen worden vaak behandeld op volgorde van binnenkomst. *(Zinsbouw)*
- [x] **102** `cms` Vervolgstap — *voor uw gebouw of portefeuille* → voor je gebouw of portefeuille. *(u → je)*

## Artikel: Energiecontract voor 2027

- [x] **103** `cms` *terug levert* → teruglevert. *(Spelling)*
- [x] **104** `cms` Kop → *Waar je in 2027 extra op moet letten*. De agent liet "op" weg; hersteld en gepubliceerd.
- [x] **105** `cms` Intro — *uw verbruiksprofiel, uw flexibiliteit … risico u kunt dragen* → je … je … je kunt dragen. *(u → je)*
- [x] **106** `cms` Flexibiliteit — *als u daadwerkelijk kunt sturen … betaalt u* → als je daadwerkelijk kunt sturen … betaal je. *(u → je)*
- [x] **107** `cms` Wat betekent dit voor u? — *uw kwartierdata: wanneer verbruikt u, wanneer levert u terug, en wat kunt u verschuiven?* → je kwartierdata: wanneer verbruik je, wanneer lever je terug, en wat kun je verschuiven? *(u → je)*
- [x] **108** `cms` Vervolgstap — *uw verbruiksprofiel … U ontvangt* → je verbruiksprofiel … Je ontvangt. *(u → je)*

## Artikel: Energiedelen

- [x] **109** `cms` Kop — *Waarom dit telt na 2027* → Waarom dit vanaf 2027 telt. *(Inhoud)*
- [x] **110** `cms` Intro — *Stroom van uw dak* → Stroom van je dak. *(u → je)*
- [x] **111** `cms` Punt 1 en 2 — *uw profiel … wekt u op … uw leverancier* → je profiel … wek jij op … je leverancier. *(u → je)*
- [x] **112** `cms` Vervolgstap — *uw aansluitingen … uw buren … bent u voorbereid* → je aansluitingen … je buren … ben je voorbereid. *(u → je)*

## Artikel: FlexPlus Batterij van Liander

- [x] **113** `cms` *peak shaving* → peakshaving. *(Consistentie)*
- [x] **114** `cms` Hoe het werkt, punt 3 t/m 5 — *U hoort … U ontvangt … Uw bedrijfsprocessen* → Je hoort … Je ontvangt … Je bedrijfsprocessen. *(u → je)*
- [x] **115** `cms` Onder Hoe het werkt — *krijgt u … gaat u eraf* → krijg je … ga je eraf. *(u → je)*
- [x] **116** `cms` Kanttekeningen, punt 1 — *dat u de helft van de investering doet* → dat je de helft … *(u → je)*
- [x] **117** `cms` Vervolgstap — *uw kwartierdata … weet u voordat u tekent* → je kwartierdata … weet je voordat je tekent. *(u → je)*

## Artikel: Congestieverzachter worden bij Liander

- [x] **118** `cms` *Congestieverzachters zijn één van de drie categorieën* → … zijn een van de drie categorieën. *(Accenten)*
- [x] **119** `cms` *minimaal 4 aaneengesloten uren* → minimaal vier aaneengesloten uren. *(Stijl)*
- [x] **120** `cms` Titel — *eerder uw extra vermogen* → eerder je extra vermogen. *(u → je)*
- [x] **121** `cms` Intro — *Staat u … kunt u … U krijgt … die u levert* → Sta je … kun je … Je krijgt … die je levert. *(u → je)*
- [x] **122** `cms` Voorwaarden — *U staat … U kunt … krijgt u … als u aanbiedt* → Je staat … Je kunt … krijg je … als je aanbiedt. *(u → je)*
- [x] **123** `cms` Stap 4 en 6 — *uw prijs … krijgt u* → je prijs … krijg je. *(u → je)*
- [x] **124** `cms` Wat betekent dit voor u? — *uw aanbod … kunt u wat leveren* → je aanbod … kun je wat leveren. *(u → je)*
- [x] **125** `cms` Vervolgstap — *uw situatie … Staat u … Laat uw kansen toetsen* → je situatie … Sta je … Laat je kansen toetsen. *(u → je)*

---

## Buiten het rapport, wel nodig

- [x] **X1** `code` Algemene voorwaarden en privacyverklaring houden **u**. Een leveringsvoorwaarde en een privacyverklaring zijn geen wervende tekst; tutoyeren staat daar vreemd en in juridisch Nederlands is de formele vorm de norm. Het rapport heeft deze pagina's ook niet gecontroleerd (S7), dus er ligt geen oordeel van het taalbureau onder. Wel nagelopen op de overige schrijfwijzen: schoon. `scripts/taalcheck.py` zondert ze expliciet uit, dus de keuze staat vastgelegd en is in één regel terug te draaien.
- [x] **X2** `code` `scripts/taalcheck.py` toetst alle pagina's uit de sitemap op elf regels (aanspreekvorm, de spelfouten, MKB, Business Cases, CO₂, duizendtallen, gekrulde apostrof, p/m, peakshaving, vergunningsvrij, 120+) plus een toets op publicatiedatums in de toekomst, via het datetime-attribuut en niet via de lopende tekst — een artikel mag schrijven over 2027, maar er niet uit komen. Nulmeting op de oude site: **289 bevindingen**. Na deze ronde op productie: **nul**.
