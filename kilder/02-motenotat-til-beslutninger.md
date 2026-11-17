---
navn: Fra møtenotat til beslutninger
slug: motereferat-mal
sokeord: møtereferat mal
sidetittel: Møtereferat-mal med AI: beslutninger først
sporsmal_h2: Hvordan skriver jeg et møtereferat med AI?
kategori: Ledelse og møter
tilgang: åpen
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: ny
oppsummering: Gjør rot av møtenotater eller en transkripsjon om til et referat som skiller mellom hva som ble bestemt og hva som bare ble sagt.
trigger: brukeren har notater eller opptak fra et møte og trenger et referat noen faktisk kan handle på.
beste_paa: claude-cowork copilot-cowork
startprompt: Her er notatene fra møtet. Lag referat.
---

## Hva den gjør

De fleste møtereferater er en gjengivelse av samtalen. Da må alle lese hele for å finne ut hva de skal gjøre, og halvparten gjør det ikke.

Denne skillen snur det. Den plasserer beslutningene øverst, med navn og frist, og skiller tydelig mellom det som ble bestemt, det som ble diskutert uten konklusjon, og det som bare ble nevnt. Den sier også hva som ikke ble avklart, som er den delen folk oftest oppdager for sent.

## Slik bruker du den

Lim inn det du har. Stikkord er nok, transkripsjon fungerer også. Ta med hvem som var til stede hvis det ikke går fram av teksten.

Gå gjennom «Uavklart»-lista til slutt. Den er poenget med hele referatet.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hvem i møtet kan faktisk bestemme? (styrer hva som føres som beslutning og hva som er et forslag. Uten dette gjør du et innspill om til et vedtak)
2. Hvis notatene mangler navn eller bruker initialer: hvem er hvem? (styrer om ansvar kan fordeles i det hele tatt)

**Nyttig, men ikke påkrevd:**

3. Hvem skal lese referatet? (styrer hvor mye bakgrunn som må med)
4. Har dere en fast referatmal? (styrer overskriftene, ellers bruker jeg malen under)
5. Hvor lang tid går det før dere følger opp? (styrer hvor eksplisitt fristene må skrives)

## Instruksen

Du skal lage et møtereferat som gjør det mulig å handle uten å lese hele samtalen om igjen.

Skill strengt mellom tre ting, og ikke bland dem:

- **Beslutning:** noen sa at noe skal gjøres, og ingen protesterte. En beslutning uten ansvarlig person er fortsatt en beslutning, men den er ikke ferdig. Den står under BESLUTNINGER med «ansvarlig ikke avklart», og du gjentar den i UAVKLART med teksten «trenger ansvarlig». Dette er den vanligste grunnen til at ting ikke skjer.
- **Diskutert uten konklusjon:** temaet ble tatt opp, meninger kom fram, men ingenting ble bestemt.
- **Nevnt:** kom opp i forbifarten og ble ikke fulgt opp.

Regler du skal følge:

1. Ikke finn på ansvarlige eller frister. Står det ikke i notatene, skriver du «ansvarlig ikke avklart» eller «frist ikke avklart», og gjentar punktet under UAVKLART. Dette er viktigere enn at referatet ser komplett ut.

2. Skriv beslutninger som en handling med et objekt: «Marit sender revidert budsjett til styret», ikke «budsjett».

3. Er en frist uttrykt vagt («i løpet av høsten», «snart»), gjengi den som den ble sagt. Ikke gjør den presis.

4. Legg merke til uenighet. Ble noe bestemt selv om noen var tydelig imot, får beslutningen en egen linje under seg som starter med «Uenighet:». Det er ofte det som kommer tilbake senere.

5. Til slutt: list opp det møtet burde ha avklart, men ikke gjorde. Se etter spørsmål som ble stilt uten å få svar, tall ingen kunne bekrefte, og oppgaver ingen tok eierskap til.

6. Skriv kort. Et referat på mer enn én side blir ikke lest.

Bruk samme språk som notatene. Ikke oversett, og oversett også overskriftene i malen til samme språk.

## Slik ser resultatet ut

    Møte: [tema], [dato]
    Til stede: [navn]

    BESLUTNINGER
    1. [Handling] · [ansvarlig] · [frist]
       Uenighet: [bare hvis noen var imot]

    DISKUTERT, IKKE BESTEMT
    - [tema]: [posisjonene som kom fram]

    UAVKLART, MÅ FØLGES OPP
    - [spørsmål som står igjen]

    NEVNT
    - [stikkord]

## Eksempel på input

Notatene slik de faktisk ser ut etter et møte:

Driftsmøte torsdag
Til stede: KL, MB, TS, ei til fra lager (rakk ikke å få med navnet)

- KL åpnet med at leveringspresisjonen har falt til 89 prosent, må opp
- MB mener det er ruteplanleggingen, TS mener det er lasting om morgenen
- Ble enige om at noen må gå gjennom morgenrutinen og komme tilbake med forslag
- TS: vi må ha flere traller, ellers hjelper det ikke uansett
- KL: vi har ikke råd til traller før nyttår. TS var tydelig uenig
- MB tar en prat med de tre sjåførene med flest avvik, i løpet av høsten
- Ny kundeportal ble nevnt, ingen fulgte opp
- Noen må sjekke om avtalen med underleverandøren går ut i november, ingen tok den

## Vanlige spørsmål

### Hva gjør den hvis notatene mine er veldig rotete?

Rot er normaltilfellet, og den er bygget for det. Det den ikke gjør, er å fylle hullene. Står det ikke hvem som skal gjøre noe, skriver den «ansvarlig ikke avklart» og gjentar punktet under Uavklart. Et referat som ser komplett ut, men som har gjettet på ansvarlig, er farligere enn et som innrømmer hullet.

### Kan jeg bruke den på en transkripsjon fra Teams eller Zoom?

Ja, og den fungerer ofte bedre på en transkripsjon enn på stikkord, fordi den ser hvem som sa hva og om noen protesterte. Det er den siste biten den bruker til å legge inn en egen Uenighet-linje under en beslutning, som er det som oftest kommer tilbake senere.

## Det den ikke gjør

Den kan ikke vite hva som ble sagt utenfor notatene. Er notatene tynne, blir referatet tynt, og da sier den fra i stedet for å fylle inn.

Den avgjør ikke om en beslutning var klok.

## Sånn bruker vi den selv

Vi kjører denne på våre egne ukentlige interne møter. Den delen som har endret mest hos oss er ikke referatet, men uavklart-lista: den avslørte at vi i snitt forlot to saker per møte uten ansvarlig. Nå leses den lista høyt før møtet heves.
