---
navn: Én sak, ti innlegg
slug: innlegg-til-sosiale-medier
sokeord: innlegg til sosiale medier
sidetittel: Innlegg til sosiale medier fra én sak
sporsmal_h2: Hvordan lager jeg flere innlegg av én sak?
kategori: Marked og innhold
tilgang: e-post
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: generalisert
oppsummering: Gjør én artikkel eller kundehistorie om til innlegg for flere kanaler, uten at alt høres likt ut.
trigger: brukeren har laget noe innhold og skal distribuere det flere steder.
beste_paa: claude-cowork chatgpt-work
startprompt: Her er artikkelen. Lag distribusjonspakken.
---

## Hva den gjør

Det vanlige er at én artikkel blir til én LinkedIn-post som er sammendraget av artikkelen, og så stopper det. Resten av innholdet blir aldri brukt.

Denne skillen henter ut poengene som kan stå alene, og lager innlegg som er forskjellige fordi de sier forskjellige ting, ikke fordi de er formulert litt ulikt.

## Slik bruker du den

Lim inn artikkelen, kundehistorien eller rapporten. Si hvem du snakker til og hvilke kanaler du bruker.

Har du en stilprofil fra «Din egen skrivestil», legg den inn først. Da høres innleggene ut som deg og ikke som markedsavdelingen.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hvilke kanaler bruker dere faktisk, og hvilke bruker dere ikke? (styrer hvilke tekster som lages. Har dere ikke LinkedIn, lager jeg ikke LinkedIn-poster)
2. Poster dere som selskap eller som en navngitt person? (styrer om alle tekstene skrives i jeg-form eller vi-form, og hvor personlig de kan være)
3. Er dere i en bransje med regler for hva markedsføringen kan påstå, for eksempel helse, finans, alkohol eller advokat? (styrer hvilke påstander som er lov å skrive i det hele tatt)

**Nyttig, men ikke påkrevd:**

4. Hvem skal lese det, og hva vil dere at de skal gjøre? (styrer vinklingen)
5. Er det tall, kundenavn eller personer i grunnteksten som ikke er klarert for publisering? (styrer hva jeg utelater)
6. Har dere en stilprofil jeg skal holde meg innenfor? (styrer tonen)
7. Hvor ofte publiserer dere vanligvis? (styrer hvor mange tekster jeg lager. Ti tekster til noen som poster hver fjortende dag, er fem måneder med innhold)

## Instruksen

Du skal lage en distribusjonspakke fra ett stykke innhold.

Første steg er det viktigste: finn poengene i teksten som kan stå alene. Et poeng kan stå alene hvis noen kan være uenig i det, hvis det overrasker litt, eller hvis det gir en konkret ting å gjøre. Et sammendrag av teksten er ikke et poeng.

Finner du færre enn fire slike poeng, si det. Da er ikke grunnteksten sterk nok til ti innlegg, og du skal lage færre heller enn å tynne ut.

Lag deretter tekster **bare for kanalene brukeren faktisk har oppgitt**. Ikke lag en LinkedIn-post til noen som ikke er på LinkedIn, og ikke lag en annonsetekst til noen som ikke annonserer.

Antall styres av to ting: hvor mange kanaler de har, og hvor ofte de publiserer. Regn ut hva de rekker å publisere på omtrent én måned, og lag så mange. Med tre kanaler og ukentlig publisering blir det rundt ti. Med én kanal og en post hver fjortende dag blir det to eller tre, og da lager du to eller tre gode i stedet for ti som blir liggende. Flest på den kanalen de sa de bruker mest.

Alle tekstene skrives i den formen brukeren oppga i det andre blokkerende spørsmålet: jeg-form gjennomgående hvis en navngitt person står bak, vi-form gjennomgående hvis det er selskapet. Dette gjelder nyhetsbrev og nettside like mye som sosiale medier.

Slik skriver du for hver kanaltype:

- **Sosiale medier** (LinkedIn, Facebook, Instagram): ett poeng per innlegg. Første linje skal si noe konkret, ikke stille et retorisk spørsmål. Ingen emoji-lister, ingen «Tanker?» på slutten.
- **Nyhetsbrev:** hele saken på fem setninger, med lenke videre.
- **Nettside eller kundeportal:** mer nøktern tone, ingen oppfordring til å dele.
- **Annonse:** under 30 ord. Lag to, en som leder med problemet og en som leder med resultatet.
- **Andre kanaler brukeren nevner** (kundebrev, oppslag på pauserom, SMS, bransjeforum): følg samme prinsipp, ett poeng per tekst, og tilpass lengden til kanalen.

Avslutt alltid med **to oppfølgingsvinkler**: hva de kan skrive om senere som fortsetter denne saken. Én setning hver.

Regler for alle tekstene:

- Ikke gjenta samme åpningssetning i to innlegg.
- Ikke bruk tall eller påstander som ikke står i grunnteksten.
- Sa brukeren at de er i en regulert bransje, gjelder det strengere: ingen påstander om effekt, resultat, helbredelse, avkastning eller sammenligning med konkurrenter, og ingen pasient-, klient- eller kundehistorier uten at brukeren har bekreftet at samtykke foreligger. Er du i tvil om en formulering er lov, skriv den ikke, og si hvorfor i stedet.
- Er det en kundehistorie: nevn ikke kundenavn med mindre det står i teksten at det er klarert.
- Ingen floskler av typen «i en verden der alt går raskere».

Skriv på samme språk som grunnteksten.

## Slik ser resultatet ut

    POENGENE SOM KAN STÅ ALENE
    1.

    TEKSTENE, GRUPPERT PER KANAL BRUKEREN HAR
    [kanal] ([antall])
    1. ...

    OPPFØLGINGSVINKLER (2)

## Eksempel på input

Én sak du allerede har skrevet, for eksempel en kundehistorie:

"Nordvik Transport hadde 89 prosent leveringspresisjon da vi startet.
Alle trodde det handlet om ruteplanlegging. Da vi målte, viste det seg
at 70 prosent av forsinkelsene oppsto på lageret før bilen kjørte ut.
Etter tre måneder med endret morgenrutine er de på 96 prosent.
Ingen ny programvare ble kjøpt."

## Vanlige spørsmål

### Blir ikke alle innleggene like?

Det er nettopp det den er bygget for å unngå. Den starter med å plukke ut poengene i saken som kan stå alene, og lager ett innlegg per poeng i stedet for ti omskrivinger av det samme. Har saken bare to poeng, sier den det, i stedet for å strekke det til ti.

### Hva om vi ikke er på alle kanalene?

Da lager den ikke tekster for dem. Den spør først hvilke kanaler dere faktisk bruker, og hvilke dere ikke bruker. Har dere ikke Instagram, får du ikke Instagram-tekster du må slette.

## Det den ikke gjør

Den gjør ikke svakt innhold sterkt. Er grunnteksten uten poenger, blir alle ti innleggene like tynne, og da skal den si fra i stedet for å levere.

Den vet ikke hva som er klarert å publisere om en kunde.

## Sånn bruker vi den selv

Vi lager fem til åtte innlegg av hver artikkel vi publiserer. Det som overrasket oss var punktet om poeng som kan stå alene: flere av våre egne artikler ga bare tre. Det var et signal om at artikkelen var tynn, ikke at skillen var dårlig.
