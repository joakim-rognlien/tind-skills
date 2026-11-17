---
navn: Månedstallene i klartekst
slug: manedsrapport-forklart
sokeord: månedsrapport forklart
sidetittel: Månedsrapporten forklart for ledergruppa
sporsmal_h2: Hvordan forklarer jeg månedstallene for ledergruppa?
kategori: Økonomi og administrasjon
tilgang: e-post
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: ny
oppsummering: Gjør resultatrapporten om til fem setninger ledergruppa forstår, med avvikene først og forslag til hva som bør sjekkes.
trigger: brukeren har månedstall eller en resultatrapport og skal forklare den til noen som ikke leser regnskap.
beste_paa: claude-cowork copilot-cowork
startprompt: Her er månedens resultatrapport. Forklar den i klartekst.
---

## Hva den gjør

Regnskapsrapporten er laget for regnskapsføreren. Ledergruppa trenger å vite tre ting: gikk det bedre eller dårligere enn ventet, hvorfor, og hva bør vi gjøre med det.

Denne skillen gjør den oversettelsen. Den finner avvikene som faktisk betyr noe, forklarer dem uten fagspråk, og lister opp hva som bør sjekkes før tallene brukes til å bestemme noe.

## Slik bruker du den

Lim inn tallene. Resultatrapport, hovedbokutdrag eller et regneark fungerer. Ta med forrige måned eller budsjettet hvis du har det, ellers har den ingenting å sammenligne med.

Si hvem som skal lese det. En styreleder og en avdelingsleder trenger ikke det samme.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Er tallene i kroner eller i tusen kroner? Sjekk overskrift, kolonnetittel og bunntekst i rapporten. (styrer hvert eneste beløp. Feil her gir et direkte galt tall i en e-post til ledergruppa)
2. Hvordan tjener dere penger: varehandel, timesalg, abonnement, prosjekt? (styrer hvilke poster som er vesentlige. En varekostnad betyr noe helt annet i et timeselskap enn i en butikk)
3. Skal jeg måle mot budsjett eller mot forrige periode? Har du begge, si det. (styrer hvert avvik i hele rapporten)

**Nyttig, men ikke påkrevd:**

4. Hvem skal lese sammendraget? (styrer detaljnivå og hvor mye som må forklares)
5. Er det noe dere allerede vet forklarer månedens tall? (styrer hva jeg slipper å foreslå som mulig forklaring)
6. Hvilke poster følger dere tettest? (styrer rekkefølgen når flere avvik er like store)

## Instruksen

Du skal forklare økonomiske tall for noen som ikke leser regnskap til daglig.

**Steg 0, grunnlaget. Gjør dette før du regner på noe.**

Les tilbake til brukeren hva du faktisk har foran deg, i fire linjer:

- Hvilken periode tallene gjelder
- Hvilken enhet de er i. Se etter «tall i 1000», «NOK 1000» eller «i hele tusen» i overskrift, kolonnetittel eller bunntekst. Er dette tvetydig, STOPP og spør. Et avvik på 180 er noe helt annet enn 180 000, og dette er den ene feilen som gir ledergruppa et galt tall.
- Hvilken sammenligning du bruker. Er både budsjett og forrige periode med, bruker du budsjett som hovedsammenligning og nevner forrige periode bare når de to peker i hver sin retning. Er ingen av delene med, si det og be om den.
- Om rapporten har både månedstall og hittil i år. Har den det, skal du analysere måneden, og nevne hittil i år bare der de spriker.

Fortsett først når disse fire er avklart.

**Steg 1, analysen.**

1. Finn avvikene mot sammenligningen du valgte i steg 0.

2. Rangér avvikene etter kroner, ikke etter prosent. Et avvik på 40 prosent på en liten post er som regel støy. Nevn prosent bare når det hjelper forståelsen.

3. Vesentlig betyr her: de fem største avvikene i kroner, pluss alt som utgjør mer enn ti prosent av periodens resultat. Resten lar du ligge.

4. For hvert vesentlig avvik skriver du to ting, adskilt: **hva vi ser** i tallene, på hverdagsspråk, og eventuelt **mulig forklaring** merket «må bekreftes». Ikke skriv «negativt avvik på varekost», skriv «vi brukte 180 000 mer på varer enn planlagt». Finner du ingen forklaring i materialet, lar du forklaringsfeltet stå tomt. Det er et lovlig og riktig svar.

5. Se etter det som er lett å overse: poster som er null der de pleier å ha et tall, engangsposter som gjør en måned kunstig god eller dårlig, og periodiseringer som flytter kostnad mellom måneder.

6. Skriv sammendraget først, maks fem setninger, som skal kunne stå alene i en e-post.

7. Avslutt med to eller tre ting som bør sjekkes eller besluttes. Konkret, ikke «følge med på utviklingen».

Skriv alle beløp i hele kroner uansett hvilken enhet rapporten bruker, og regn om selv hvis rapporten er i tusen. Ingen desimaler. Ikke bruk fagord uten å forklare dem i samme setning.

Er noe i materialet uklart eller ser ut som en feil, si det i stedet for å regne videre på det.

## Slik ser resultatet ut

    GRUNNLAG
    Periode: / Enhet: / Sammenlignet mot: / Hittil i år: [ja/nei]

    SAMMENDRAG
    [maks fem setninger, står alene]

    DE STØRSTE AVVIKENE
    1. [post]: [beløp] [over/under] [sammenligning]
       Hva vi ser: [én setning]
       Mulig forklaring, må bekreftes: [eller utelatt]

    VERDT Å MERKE SEG
    - [engangsposter, tomme poster, periodiseringer]

    BØR SJEKKES ELLER BESLUTTES
    1.

## Eksempel på input

Tallene slik de kommer ut av regnskapssystemet:

Resultat august 2026 (tall i hele tusen)
                    Faktisk   Budsjett   Avvik
Salgsinntekt          4 210      4 500     -290
Varekostnad           1 980      2 025      -45
Lønn                  1 640      1 580      +60
Andre driftskostnader   612        480     +132
Driftsresultat          -22        415     -437

Kommentar fra regnskapsfører: "Husk at forsikringen for hele året
ble bokført i august i år, ikke i januar."

## Vanlige spørsmål

### Hvorfor spør den om tallene er i kroner eller tusen kroner?

Fordi det er den feilen som koster mest. Er den usikker og gjetter, kan den skrive at driftsresultatet er 22 kroner under budsjett i stedet for 22 000. Det er et tall som går rett inn i en e-post til ledergruppa, og du oppdager det først når noen spør.

### Erstatter dette regnskapsføreren?

Nei. Den forklarer tall som allerede er ført, den fører dem ikke og den kontrollerer dem ikke. Der den ser noe som ser rart ut, skriver den «mulig forklaring, må bekreftes» i stedet for å slå det fast. Det er regnskapsføreren som bekrefter.

## Det den ikke gjør

Den er ikke revisor og ikke regnskapsfører. Den finner ikke feil i bokføringen, bare det som ser rart ut i tallene du limte inn.

Den kan lese feil enhet hvis rapporten din ikke sier tydelig om tallene er i kroner eller tusen kroner. Sjekk grunnlagslinja øverst i svaret før du bruker tallene til noe.

Den kan ikke vite hvorfor noe skjedde. Alle årsaker er forslag som må bekreftes av noen som var der.

## Sånn bruker vi den selv

Vi bruker den på vår egen månedsrapport. Grunnlagssteget kom inn nettopp fordi den første versjonen leste en rapport i tusen kroner som om den var i kroner. Feilen ble oppdaget i testing, ikke i et styrerom, og det er grunnen til at steget nå er obligatorisk.
