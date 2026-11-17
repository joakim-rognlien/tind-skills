---
navn: Gjennomlesing av avtale
slug: kontrakt-sjekkliste
sokeord: sjekkliste før signering av kontrakt
sidetittel: Sjekkliste før du signerer en avtale
sporsmal_h2: Hva bør jeg se etter før jeg signerer en avtale?
kategori: Økonomi og administrasjon
tilgang: e-post
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: ny
oppsummering: Finner bindingstid, oppsigelse, prisjustering, ansvar og det som mangler i en avtale du skal signere. Ikke juridisk rådgivning.
trigger: brukeren har fått en avtale eller kontrakt og vil vite hva de binder seg til.
beste_paa: claude-cowork copilot-cowork
startprompt: Her er en avtale jeg skal signere. Gå gjennom den for meg.
---

## Hva den gjør

De fleste leverandøravtaler blir signert uten at noen har lest dem ordentlig, fordi det tar tid og fordi språket er kjedelig. Så oppdager man bindingstiden når man vil ut.

Denne skillen går gjennom avtalen på de punktene som faktisk koster penger, og sier hva som står, hvor det står, og hva som ikke står i det hele tatt.

Den erstatter ikke en advokat. Den gjør at du vet hva du skal spørre advokaten om, og fanger de vanlige tingene før de blir dyre.

## Slik bruker du den

Lim inn avtalen, inkludert vedlegg og henvisninger til standardvilkår hvis du har dem. Si hvilken part du er.

Ta punktene under «Bør avklares før signering» med tilbake til motparten. Det er en normal del av en forhandling.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hvilken part er du i denne avtalen, og kjøper eller selger du? (styrer hele analysen. En ansvarsbegrensning er en fordel for den ene parten og en risiko for den andre) **Dette må du si med egne ord.** At avtalen navngir to parter forteller meg ikke hvilken av dem du er, og jeg gjetter ikke på det.
2. Hva er det du kjøper eller selger: en vare, en tjeneste, et abonnement, en leveranse over tid, eller en kombinasjon? (styrer hvilke punkter som sjekkes, og hvilke som droppes. En varekontrakt og en tjenestekontrakt har nesten ikke overlappende risikopunkter) **Også dette må du si selv**, selv om det går fram av avtaleteksten.

**Nyttig, men ikke påkrevd:**

3. Hva er avtalt muntlig eller i e-post som du forventer å finne igjen i teksten? (styrer letingen etter det vanligste problemet: det som ble lovet i møtet og ikke står i avtalen)
4. Hvor viktig er denne leveransen for driften deres? (styrer hvor strengt jeg leser)
5. Har dere egne innkjøpsbetingelser eller krav fra en eier som avtalen må ligge innenfor? (styrer hva jeg flagger som avvik)

## Instruksen

Du skal gå gjennom en avtale og forklare hva brukeren binder seg til.

Gå gjennom disse punktene i denne rekkefølgen. For hvert punkt: siter hva som står og hvor det står, eller skriv tydelig at det ikke er regulert.

1. **Varighet og binding.** Hvor lenge løper avtalen? Fornyes den automatisk, og med hvilken varslingsfrist?
2. **Oppsigelse.** Hvor lang frist, for hvem, og skjer det noe økonomisk ved oppsigelse?
3. **Pris og prisjustering.** Hva koster det, hva er inkludert, og kan prisen endres ensidig? Se etter indeksregulering og hvem som bestemmer den.
4. **Hva som faktisk leveres.** Er leveransen definert, eller beskrevet i generelle vendinger?
5. **Ansvar.** Er ansvaret begrenset til et beløp? Hva skjer ved forsinkelse eller feil?
6. **Eierskap.** Hvem eier det som lages, og hvem eier dataene?
7. **Endringer.** Hvordan prises og godkjennes endringer underveis?
8. **Personopplysninger.** Behandles persondata, og finnes det databehandleravtale?
9. **Tvist.** Hvilket lands rett, hvilken domstol eller voldgift?

**Sa brukeren at det gjelder varer, eller en leveranse som skal fram til et sted**, sjekker du i tillegg disse. Har brukeren ikke bekreftet avtaletypen, kjører du dem ikke, du spør. Og sa brukeren at det er en ren varekontrakt, dropper du punkt 6 om eierskap til det som lages og punkt 7 om endringer underveis, i stedet for å rapportere dem som «ikke regulert». Punkter som ikke hører hjemme i avtaletypen, skjuler de som gjør det:

10. **Levering.** Hvor og når skjer levering, og hvilken leveringsbetingelse gjelder?
11. **Risikoovergang.** Når går risikoen for varen over fra selger til kjøper? Dette avgjør hvem som taper på en skadet forsendelse.
12. **Forsinkelse.** Hva skjer ved forsinket levering? Er det dagbøter, en øvre grense, eller ingenting?
13. **Reklamasjon.** Hvor lang frist har kjøper på å melde fra om feil, og hva skjer hvis fristen brytes?
14. **Kvalitet og kontroll.** Er det avtalt en spesifikasjon, en toleranse eller en kontrollordning, og hvem betaler for kontrollen?
15. **Forsikring.** Hvem skal forsikre varen underveis, og hvem bærer tapet hvis ingen har gjort det?
16. **Volum.** Er det avtalt minstevolum eller eksklusivitet, og hva koster det å ikke nå det?

Deretter tre lister:

- **Dette er uvanlig.** Punkter som avviker fra det som er normalt i en slik avtale, i den ene eller andre retningen.
- **Dette står ikke.** Det som mangler helt. Manglende regulering er ofte den største risikoen.
- **Bør avklares før signering.** Konkrete spørsmål å sende motparten, formulert som spørsmål.

Regler:

- Ikke omskriv juridisk tekst til noe som høres mildere ut enn det står. Siter.
- Er en formulering flertydig, si begge tolkningene.
- Ikke gi råd om hvorvidt avtalen bør signeres. Det er brukerens vurdering.
- Les hele veien fra brukerens side. Er brukeren selger, er en streng reklamasjonsfrist en risiko for brukeren, ikke en trygghet. Snu vurderingen, ikke bare teksten.
- Skriv hverdagsspråk, men behold de juridiske begrepene og forklar dem i samme setning.

Start alltid svaret med denne linjen: «Dette er ikke juridisk rådgivning. Ved vesentlige forpliktelser bør en advokat lese avtalen.»

## Slik ser resultatet ut

    [ansvarsfraskrivelse]

    KORT OPPSUMMERT
    Er brukeren kjøper: [hva du binder deg til, hvor lenge, hva det koster å komme ut]
    Er brukeren selger: [hva du har forpliktet deg til å levere, hva du hefter for hvis det svikter, og hva du får betalt når]
    Bruk bare den varianten som gjelder.

    PUNKT FOR PUNKT
    Varighet og binding: [sitat + hvor] eller IKKE REGULERT
    ...

    DETTE ER UVANLIG
    DETTE STÅR IKKE
    BØR AVKLARES FØR SIGNERING

## Eksempel på input

Avtalen du skal signere, eller de punktene du er usikker på:

"§ 4 Varighet
Avtalen løper i 36 måneder fra oppstartsdato og fornyes automatisk
med 12 måneder om gangen med mindre den sies opp skriftlig senest
6 måneder før utløp.

§ 7 Prisregulering
Leverandøren kan årlig justere prisene i henhold til konsumprisindeksen,
samt for øvrige kostnadsøkninger utenfor leverandørens kontroll."

## Vanlige spørsmål

### Er dette juridisk rådgivning?

Nei, og skillen sier det selv øverst i svaret. Den peker på hva som står, hvor det står, og hva som ikke står. Den nevner aldri en lov, en paragraf eller en tallgrense, fordi det er akkurat der en AI tar feil på en måte som ser overbevisende ut. Er beløpet stort, snakk med en advokat.

### Hvorfor må jeg si om jeg er kjøper eller selger?

Fordi den samme setningen er en fordel for den ene og en risiko for den andre. En ansvarsbegrensning beskytter leverandøren og eksponerer kunden. At avtalen navngir to parter forteller ikke hvilken av dem du er, og den gjetter ikke.

## Det den ikke gjør

Den er ikke juridisk rådgivning, og den kjenner ikke rettspraksis eller bransjestandarden i ditt marked.

Den ser bare det du limer inn. Henviser avtalen til standardvilkår du ikke har med, er gjennomgangen ufullstendig, og da sier den fra.

## Sånn bruker vi den selv

Vi bruker den på avtaler vi selv får tilsendt, som verktøy- og leverandøravtaler. Funnet som går igjen er automatisk fornyelse med kort varslingsfrist. Det er sjelden skjult, men det er lett å overse når man leser fort.
