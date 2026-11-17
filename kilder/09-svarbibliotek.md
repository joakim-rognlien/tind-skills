---
navn: Svarbibliotek fra egne henvendelser
slug: kundeservice-svarmal
sokeord: svarmaler kundeservice
sidetittel: Svarmaler for spørsmålene som går igjen
sporsmal_h2: Hvordan lager jeg svarmaler for kundeservice?
kategori: Kundeservice
tilgang: e-post
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: ny
oppsummering: Finner de spørsmålene som går igjen i innboksen din, og lager et godt svar på hvert av dem.
trigger: brukeren svarer på de samme spørsmålene om og om igjen og vil ha ferdige svar.
beste_paa: copilot-cowork chatgpt-work
startprompt: Her er de siste hundre henvendelsene våre. Bygg svarbiblioteket.
---

## Hva den gjør

I de fleste virksomheter er åtti prosent av kundehenvendelsene tjue varianter av det samme spørsmålet. Alle vet det, men ingen har tid til å sette seg ned og skrive ut svarene.

Denne skillen gjør jobben på én runde: den grupperer henvendelsene, finner det virkelige spørsmålet bak formuleringene, og skriver et svar per gruppe som kan brukes som det er eller tilpasses litt.

Den finner også spørsmålene som kommer fordi noe er uklart et annet sted. De skal ikke besvares bedre, de skal fjernes.

## Slik bruker du den

Lim inn henvendelser fra innboksen, chatten eller skjemaet deres. Femti er nok, hundre er bedre. Fjern navn og personopplysninger før du limer inn.

Har du svar dere allerede bruker, ta dem med. Da bygger den videre på det som finnes.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hva leverer dere, og hvem henvender seg til dere? (styrer hvordan henvendelsene grupperes)
2. Hva er de faktiske tallene for pris, frister, garanti, åpningstider og leveringstid, eller hvor står de? Lim gjerne inn prislista. (styrer hvor mange ferdige svar du får. Gir du meg tallene, blir svarene klare til bruk. Sier du bare hvor de står, markerer jeg dem som noe du må fylle inn selv. Finner jeg dem ikke noe sted, dikter jeg dem ikke opp)
3. Hvilken kanal kommer henvendelsene fra: e-post, chat, skjema eller telefon? (styrer formen på svarene. Et telefonsvar er en replikk på to setninger, ikke en e-posttekst)

**Nyttig, men ikke påkrevd:**

4. Hvem skal bruke svarene? (styrer hvor mye forklaring som legges ved hvert svar, se punkt 4 under)
5. Hvilke ord bruker kundene om det dere selger, og hvilke bruker dere internt? (styrer språket i svarene)

Minn brukeren om å fjerne navn og personopplysninger før de limer inn henvendelser.

## Instruksen

Du skal bygge et svarbibliotek fra ekte kundehenvendelser.

Jobb slik:

1. **Grupper etter spørsmål, ikke etter ord.** «Når kommer pakken», «har dere sendt den» og «jeg har ikke fått noe» er samme spørsmål. Slå dem sammen.

2. Ranger gruppene etter hvor mange henvendelser de dekker. Ta med antall for hver.

3. For hver gruppe, skriv:
   - Spørsmålet slik det egentlig stilles
   - De vanligste formuleringene, så folk kjenner igjen gruppen
   - Et ferdig svar
   - Hva som må fylles inn før svaret sendes, tydelig markert

4. **Krav til svarene:** de skal svare på spørsmålet i første setning. De skal si hva som skjer videre og når. De skal ikke be om unnskyldning for noe som ikke er en feil. De skal være kortere enn du tror er nødvendig.

   Formen følger kanalen brukeren oppga. E-post og skjema gir en kort e-posttekst med hilsen. Chat gir to til fire setninger uten hilsen. Telefon gir en replikk å si høyt, ikke noe som skal leses opp.

   Sa brukeren at svarene skal brukes av noen som er ny eller uerfaren, legger du en linje under hvert svar som forklarer hvorfor svaret er sånn og når det ikke passer. Er brukerne erfarne, sløyfer du den linja: den er da støy.

5. **Aldri finn på et faktum.** Pris, frist, garanti, leveringstid, åpningstid og vilkår skrives bare hvis brukeren har oppgitt hvor fasiten står og hva den sier. Ellers skriver du `[FYLL INN: hentes fra prislista]` eller tilsvarende. Et oppdiktet tall i et svarbibliotek blir sendt til hundre kunder før noen oppdager det.

5. Bruk språket kundene bruker, ikke internt fagspråk. Kaller kundene det «abonnementet» mens dere sier «avtalen», skriv abonnementet.

6. **Skill ut de forebyggbare.** Kommer et spørsmål fordi noe er uklart et annet sted, sett det i en egen liste med hva som burde endres og hvor. Let bredt, ikke bare på nett: nettside og bestillingsflyt, men også prisoverslag og tilbud på papir, SMS- og e-postvarsler, skilting og oppslag i lokalet, pakksedler og fakturaer, telefonsvareren, og det som blir sagt muntlig ved bestilling. Spør brukeren hvor kunden møter dere, hvis du er usikker. Dette er den mest verdifulle delen.

7. Finnes det henvendelser som ikke passer i noen gruppe, la dem stå i en restliste. Ikke tving dem inn.

Er det åpenbare sinte henvendelser i materialet, hold dem utenfor. De trenger et personlig svar, ikke en mal.

## Slik ser resultatet ut

    DE VANLIGSTE SPØRSMÅLENE
    1. [spørsmål] · [antall henvendelser]
       Formuleringer: "...", "..."
       Svar:
       [tekst med [FYLL INN] der det trengs]

    BØR FJERNES, IKKE BESVARES
    - [spørsmål] · [hva som bør endres] · [hvor: nettside, skilt, SMS, tilbudsmal, telefonsvarer]

    PASSET IKKE INN
    - [restliste]

## Eksempel på input

Emnefeltene fra innboksen din de siste to ukene, kopiert rett ut:

Spørsmål om levering
Når kommer bestillingen min?
Feil størrelse
Hvor lang leveringstid har dere?
Retur
Bytte av vare - hvordan?
Sendingen har ikke kommet
Faktura spørsmål
Kan jeg endre bestillingen?
Leveringstid?
Retur av vare kjøpt på salg
Har dere åpent på lørdag

## Vanlige spørsmål

### Hvordan vet den hvilke spørsmål som går igjen?

Den grupperer på hva folk faktisk lurer på, ikke på hvordan de formulerer det. «Når kommer bestillingen min», «leveringstid?» og «sendingen har ikke kommet» er tre formuleringer av to ulike spørsmål, og den skiller dem.

### Hva er «bør fjernes, ikke besvares»?

Den delen folk pleier å bli overrasket over. Går det tjue henvendelser i måneden på leveringstid, er svaret ikke en bedre svarmal. Svaret er å skrive leveringstiden et sted folk ser den. Den sier hvor endringen bør gjøres, ikke bare hva du skal svare.

## Det den ikke gjør

Den kan ikke vite om svarene er riktige. Alt som gjelder pris, frister, garanti eller rettigheter må kontrolleres av noen som kan det før det brukes.

Den håndterer ikke klager. Bruk «Svaret på den vanskelige e-posten» til det.

## Sånn bruker vi den selv

Vi kjørte den på vår egen innboks og fant at fire av de ti vanligste spørsmålene ikke burde besvares i det hele tatt. De kom fordi noe var uklart på nettsiden. Den lista var mer verdt enn svarene.
