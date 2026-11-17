---
navn: Ukesstatus til ledergruppa
slug: statusrapport-mal
sokeord: statusrapport mal
sidetittel: Statusrapport-mal til ledergruppa
sporsmal_h2: Hvordan skriver jeg en ukentlig statusrapport?
kategori: Ledelse og møter
tilgang: e-post
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: ny
oppsummering: Samler uka fra egne notater til en status som er like lang hver gang, og som sier hva som står stille.
trigger: brukeren skal rapportere status oppover eller til et team, og vil slippe å skrive den fra bunn hver uke.
beste_paa: claude-cowork copilot-cowork
startprompt: Her er notatene mine fra uka. Lag ukesstatusen.
---

## Hva den gjør

Statusrapporter har to feil. De blir lange når det har skjedd mye og korte når det har skjedd lite, så leseren kan ikke sammenligne uker. Og de forteller hva som er gjort, ikke hva som står stille.

Denne skillen gir samme format hver uke, og tvinger fram det som har stoppet opp. Det er den eneste delen mottakeren egentlig kan gjøre noe med.

## Slik bruker du den

Lim inn det du har fra uka: kalenderen, notater, Slack-meldinger du sendte, oppgavelista. Rot er greit.

Har du forrige ukes status, lim den inn også. Da kan den se hva som ikke har flyttet seg.

## Spør om dette først

**Må besvares før du leverer noe:**

**Bare første gang.** Har brukeren limt inn en statusprofil fra en tidligere uke, hopper du over hele dette intervjuet og går rett på notatene. Å intervjue noen på nytt hver mandag er den sikreste måten å få dem til å slutte å bruke en ukentlig skill.

1. **Strukturbærende.** Hva er de tre til fem faste sporene dere følger? Kunder, prosjekter, salg, leveranser, rekruttering, drift. (styrer hele strukturen, som skal være lik hver uke. Uten faste spor kan ikke leseren sammenligne to uker, og da finnes det ingen status å lage. Får du ikke svar, foreslår du fire spor ut fra notatene og ber om et ja eller en korrigering. Du lager ikke statusen på gjettede spor)
2. Hvem leser statusen, og hva bruker de den til? (styrer hva som tas med og hva som utelates)

**Nyttig, men ikke påkrevd:**

3. Er det tall dere alltid rapporterer, og hvor kommer de fra? (styrer tallbolken)
4. Hvor mange av sporene har vanligvis reell framgang på én uke? (styrer hvor hardt jeg prioriterer når notatene inneholder mer enn det som får plass)
5. Er det noe leseren ikke skal se i denne kanalen? (styrer hva jeg holder utenfor)
6. Har du forrige ukes status? Lim den inn. (styrer «står stille»-delen, som er den eneste som viser hva som ikke har flyttet seg)

## Instruksen

Du skal lage en ukesstatus fra brukerens rot av notater.

Absolutte regler:

1. **Fast lengde.** Aldri mer enn én skjerm. Har det skjedd mye, prioriterer du hardere, du gjør ikke rapporten lengre.

2. **Framgang, ikke aktivitet.** «Hatt tre møter om X» er aktivitet. «X er klar til beslutning, mangler pris» er framgang. Klarer du ikke å formulere framgang for noe, hører det hjemme under «står stille».

3. **Står stille er den viktigste delen.** Har du forrige ukes status: alt som står likt to uker på rad flyttes hit automatisk, uansett hva notatene sier. Skriv hva som blokkerer og hvem som må gjøre noe.

4. Ikke skriv noe som ikke har et grunnlag i notatene. Er det tomt for en av de faste bolkene, skriv «ingenting denne uka». Det er informasjon i seg selv.

5. Tall skal med hvis de finnes i notatene, ellers ikke. Ikke anslå.

6. Skriv nøkternt. Ingen «spennende utvikling», ingen «god fremdrift». Bare hva som er tilfellet.

7. Legg tre linjer til slutt om hva neste uke handler om. Maks tre, prioritert.

8. **Avslutt alltid med en statusprofil** i en egen blokk brukeren kan kopiere: sporene, leserne, tallkildene og eventuelle utelatelser, i fem til seks linjer. Be dem lime den inn sammen med notatene neste uke, så slipper de intervjuet. Legg ved denne ukas status i samme blokk, slik at «står stille» virker uten at de må lete den opp.

Skriv i jeg- eller vi-form etter hva notatene bruker.

## Slik ser resultatet ut

    UKE [nr]

    FLYTTET SEG
    - [sak]: [fra hva til hva]

    STÅR STILLE
    - [sak]: [hva som blokkerer] · [hvem som må gjøre noe]

    TALL
    - [bare det som finnes i notatene]

    NESTE UKE
    1.

    STATUSPROFIL, KOPIER DENNE TIL NESTE UKE
    Spor: / Lesere: / Tall fra: / Utelates:
    Denne ukas status: [kort gjengivelse, brukes til å finne hva som står stille]

## Eksempel på input

Notatene dine fra uka, slik de ligger:

man: kickoff Nordvik, gikk fint. Kari vil ha ukentlig rapport
tir: ingenting, syk
ons: purret Fjelltind på signatur, ikke svar. Tredje gang nå
ons: ansatt en til på lager, starter 1. okt
tor: demo for Solvang flyttet til uke 39 (deres ønske)
fre: fakturagrunnlag ferdig, 412' ut
fre: Mats sa at serveren må byttes før nyttår, ca 90'

## Vanlige spørsmål

### Må jeg svare på spørsmålene hver uke?

Nei, bare første gang. Da lager den en statusprofil du kopierer inn neste uke, med hvilke spor du følger, hvem som leser og hvilke tall som skal med. Etter det er det bare å lime inn ukas notater. Det var den viktigste rettelsen vi gjorde i testingen.

### Hva er poenget med «står stille»-delen?

At den er der. De fleste statusrapporter lister opp det som har skjedd, og da forsvinner det som ikke har skjedd. En sak som har stått stille i tre uker er som regel viktigere enn tre saker som beveget seg litt.

## Det den ikke gjør

Den kan ikke vite hva som er viktig i din organisasjon. Første gang bør du korrigere prioriteringen, og legge korrigeringen inn i instruksen.

Den erstatter ikke en samtale om det som står stille.

## Sånn bruker vi den selv

Vår egen versjon har fire faste spor. Det som har hatt størst effekt er regelen om at alt som står likt to uker på rad flyttes automatisk til «står stille». Det gjorde at et par saker som hadde ligget i månedsvis, ble synlige for hele teamet på én gang.
