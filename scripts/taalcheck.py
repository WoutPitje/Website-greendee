#!/usr/bin/env python3
"""Toetst de gepubliceerde site op de afspraken uit de taalcontrole van 8 oktober 2026.

Dit script is het vangnet onder een correctieronde van 132 punten: het leest de
pagina's zoals een bezoeker ze krijgt en zoekt naar wat er dan nog fout staat.
Daarmee vindt het ook missers die in de administratie wegvallen.

Gebruik:
    python3 scripts/taalcheck.py                      # tegen localhost:3000
    python3 scripts/taalcheck.py https://greendee.nl  # tegen productie

Afsluitcode 0 als alles schoon is, 1 als er bevindingen zijn.
"""

from __future__ import annotations

import re
import subprocess
import sys
from html.parser import HTMLParser

# De juridische pagina's houden bewust de formele aanspreekvorm: een
# leveringsvoorwaarde en een privacyverklaring zijn geen marketingtekst, en
# tutoyeren staat daar vreemd. Dat is een keuze, geen vergeten pagina.
FORMEEL_TOEGESTAAN = {'/algemene-voorwaarden', '/privacyverklaring'}


class TekstUithaler(HTMLParser):
    """Haalt de zichtbare tekst uit een pagina, inclusief alt- en titelteksten."""

    NEGEER = {'script', 'style', 'noscript'}

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stukken: list[str] = []
        self._diep = 0

    def handle_starttag(self, tag, attrs):
        if tag in self.NEGEER:
            self._diep += 1
        # Een alt-tekst is voor een schermlezer gewoon de inhoud van de pagina,
        # dus die moet net zo goed op de aanspreekvorm getoetst worden.
        for naam, waarde in attrs:
            if naam in ('alt', 'title', 'aria-label', 'placeholder') and waarde:
                self.stukken.append(waarde)

    def handle_endtag(self, tag):
        if tag in self.NEGEER and self._diep:
            self._diep -= 1

    def handle_data(self, data):
        if not self._diep:
            self.stukken.append(data)

    @property
    def tekst(self) -> str:
        return re.sub(r'\s+', ' ', ' '.join(self.stukken))


# Elke regel: (naam, patroon, uitleg). Het patroon zoekt naar wat er NIET hoort.
REGELS: list[tuple[str, re.Pattern[str], str]] = [
    (
        'aanspreekvorm',
        # "uw" is altijd het bezittelijk voornaamwoord. Losse "u" is bijna altijd
        # het persoonlijk voornaamwoord; een initiaal staat met een punt erachter.
        re.compile(r'(?<![\w-])([Uu]w|[Uu](?![\w.-]))(?![\w-])'),
        'formele aanspreekvorm; de site gebruikt je/jou/jouw',
    ),
    ('spelfout-agrariers', re.compile(r'\bagrariers\b', re.I), 'moet agrariërs zijn'),
    ('spelfout-geinvesteerd', re.compile(r'\bgeinvesteerd\b', re.I), 'moet geïnvesteerd zijn'),
    ('spelfout-vermogenspiekken', re.compile(r'vermogenspiekken', re.I), 'moet vermogenspieken zijn'),
    ('spelfout-teruglevert', re.compile(r'\bterug\s+levert\b', re.I), 'moet teruglevert zijn'),
    ('spelfout-begrijpbaar', re.compile(r'\bbegrijpbare?\b', re.I), 'moet begrijpelijk zijn'),
    ('spelfout-simulatief', re.compile(r'\bsimulatief\b', re.I), 'geen bestaand woord'),
    ('anglicisme-leer-meer', re.compile(r'\bLeer meer\b'), 'moet Lees meer zijn'),
    ('anglicisme-min-lezen', re.compile(r'\bmin lezen\b', re.I), 'moet "min. leestijd" zijn'),
    ('schrijfwijze-MKB', re.compile(r'\bMKB\b'), 'moet mkb zijn'),
    ('schrijfwijze-businesscase', re.compile(r'\bBusiness Cases?\b'), 'moet Businesscase(s) zijn'),
    ('schrijfwijze-batterij-oplossing', re.compile(r'batterij-oplossing', re.I), 'moet aaneen'),
    ('schrijfwijze-peakshaving', re.compile(r'\bpeak shaving\b', re.I), 'moet peakshaving zijn'),
    ('schrijfwijze-vergunningsvrij', re.compile(r'\bvergunnings(vrij|plicht|toets|vraag)', re.I), 'zonder tussen-s'),
    ('afkorting-pm', re.compile(r'\bp/m\b', re.I), 'schrijf "per maand" voluit'),
    ('notatie-co2', re.compile(r'\bCO2\b'), 'schrijf CO₂'),
    ('notatie-duizendtal', re.compile(r'(?<![\d.,])\d{4}(?![\d.,])\s*(kWh|kWp|ton|kW|MW|panelen)', re.I), 'duizendtal met punt'),
    ('notatie-eenheid-plakt', re.compile(r'\d(ton|MW|kWh|kWp|kW)\b'), 'spatie tussen getal en eenheid'),
    ('apostrof-gekruld', re.compile(r'’'), 'gebruik een rechte apostrof'),
    ('tegenstrijdig-120', re.compile(r'120\+'), 'spreekt 25+ bedrijven tegen'),
]


def haal(url: str) -> str:
    # Via curl en niet via urllib: de Python op deze machines heeft geen
    # werkende certificaatbundel, waardoor elke https-aanvraag afketst.
    klaar = subprocess.run(
        ['curl', '-sS', '--fail', '-m', '30', '-A', 'GreenDee-taalcheck', url],
        capture_output=True, text=True,
    )
    if klaar.returncode:
        raise RuntimeError(klaar.stderr.strip() or f'curl gaf {klaar.returncode}')
    return klaar.stdout


def paden(basis: str) -> list[str]:
    """Haalt de te controleren pagina's uit de sitemap, zodat nieuwe pagina's
    automatisch meelopen in plaats van hier handmatig bijgehouden te worden."""
    xml = haal(f'{basis}/sitemap.xml')
    gevonden = re.findall(r'<loc>([^<]+)</loc>', xml)
    return sorted({re.sub(r'^https?://[^/]+', '', u) or '/' for u in gevonden})


def toets(basis: str) -> int:
    try:
        lijst = paden(basis)
    except Exception as fout:  # noqa: BLE001
        print(f'sitemap niet op te halen ({fout}); val terug op een vaste lijst')
        lijst = ['/', '/offertetrajecten', '/energiesimulaties', '/business-cases',
                 '/energiecontracten', '/monitoring', '/energyhubs', '/projecten',
                 '/over-ons', '/onze-doelen', '/vacatures', '/nieuws', '/contact']

    totaal = 0
    print(f'{len(lijst)} pagina\'s via {basis}\n')

    for pad in lijst:
        try:
            html = haal(f'{basis}{pad}')
        except Exception as fout:  # noqa: BLE001
            print(f'  {pad}\n      ! niet op te halen: {fout}')
            totaal += 1
            continue

        uithaler = TekstUithaler()
        uithaler.feed(html)
        tekst = uithaler.tekst

        bevindingen: list[str] = []
        for naam, patroon, uitleg in REGELS:
            if naam == 'aanspreekvorm' and pad in FORMEEL_TOEGESTAAN:
                continue
            for treffer in patroon.finditer(tekst):
                start = max(0, treffer.start() - 45)
                eind = min(len(tekst), treffer.end() + 45)
                bevindingen.append(f'{naam}: …{tekst[start:eind].strip()}…  ({uitleg})')

        if bevindingen:
            print(f'  {pad}')
            for b in bevindingen[:12]:
                print(f'      {b}')
            if len(bevindingen) > 12:
                print(f'      … en nog {len(bevindingen) - 12}')
            totaal += len(bevindingen)

    print()
    if totaal:
        print(f'{totaal} bevinding(en)')
    else:
        print('schoon')
    return 1 if totaal else 0


if __name__ == '__main__':
    basis = (sys.argv[1] if len(sys.argv) > 1 else 'http://localhost:3000').rstrip('/')
    raise SystemExit(toets(basis))
