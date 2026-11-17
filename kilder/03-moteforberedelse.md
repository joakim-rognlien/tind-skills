---
navn: Møteforberedelse på ti minutter
slug: moteforberedelse
sokeord: forberede kundemøte
sidetittel: Forbered kundemøtet på ti minutter
sporsmal_h2: Hvordan forbereder jeg meg til et kundemøte med AI?
kategori: Salg
tilgang: åpen
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: generalisert
oppsummering: Gjør nettsiden og tidligere e-poster om til en agenda med hypoteser, spørsmål og det du bør sjekke før du går inn i møtet.
trigger: brukeren skal i et kundemøte eller salgsmøte og vil forberede seg raskt.
beste_paa: claude-cowork chatgpt-work
startprompt: Jeg skal i møte med dette selskapet. Her er nettsiden og e-postene våre så langt.
---

## Hva den gjør

De fleste møteforberedelser blir enten hoppet over eller til en halvtime med googling som gir lite. Denne skillen gir deg noe å gå inn med: en hypotese om hva de sliter med, tre spørsmål som er verdt å stille, og de tingene du bør ha sjekket for ikke å bli tatt på senga.

Den holder også hypotese og faktum fra hverandre, slik at du ikke går inn i møtet og påstår noe du egentlig bare har gjettet.

## Slik bruker du den

Lim inn det du har: lenken til nettsiden deres, tidligere e-poster, notater fra forrige møte, siste årsrapport hvis du har den. Si hvem du skal møte og hva slags møte det er.

Bruk spørsmålene som utgangspunkt, ikke manus. Poenget er å ha tenkt før du går inn.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hva selger eller leverer dere, og til hvem? (styrer samtlige hypoteser. Uten dette gjetter jeg, og gjetningen blir synlig i møtet)
2. Hva er målet med akkurat dette møtet: første kontakt, behovsavklaring, forhandling eller oppfølging? (styrer hvilke spørsmål som er verdt å bruke tid på)
3. Hva har du om selskapet du skal møte? Nettsiden, tidligere e-poster, notater fra sist, en årsrapport, eller bare navnet? (styrer om jeg kan lage hypoteser i det hele tatt) **Har du bare navnet, og jeg ikke kan søke på nett, sier jeg det med en gang.** Da lager jeg spørsmålene og forberedelseslista, men ingen hypoteser, og du får en liste over hva du bør finne selv på fem minutter.

**Nyttig, men ikke påkrevd:**

4. Hvem skal du møte, og hva vet du om rollen deres? (styrer hvem spørsmålene rettes mot)
5. Hva kan dere ikke eller vil dere ikke levere? (styrer hva jeg holder meg unna å foreslå i «dette bør du ikke si»)
6. Hva er innvendingen dere møter oftest? (styrer forberedelsen på motstand)

## Instruksen

Du skal forberede brukeren til et møte med et selskap. Målet er ikke en presentasjon av selskapet, men noe brukeren kan bruke i rommet.

Hold tre ting strengt fra hverandre gjennom hele svaret, og merk hver påstand:

- **Fakta:** står i materialet brukeren ga deg. Vis hvor.
- **Hypotese:** din slutning ut fra det du ser. Merk den som hypotese hver gang.
- **Må sjekkes:** noe du ikke kan vite, men som endrer møtet hvis svaret går den ene eller andre veien.

Jobb slik:

1. Slå fast hva selskapet gjør, hvem de selger til, og hvordan de tjener penger. Én setning på hver, og bare det som står i materialet. Mangler du grunnlag for en av dem, skriver du «vet ikke, sjekk selv» i stedet for å fylle den. En tom linje er riktigere enn en gjettet.

   Har du ikke noe materiale, hopper du over punkt 1 til 3 helt, sier hvorfor, og går rett til spørsmålene og forberedelseslista. Da er lista over hva brukeren bør sjekke det viktigste du leverer.

2. Se etter signaler på hva som er i bevegelse hos dem akkurat nå: nye stillinger, nytt produkt, nytt marked, endret ledelse, språk på nettsiden som peker mot en satsing. Bevegelse er grunnen til at noen kjøper noe.

3. Lag to eller tre hypoteser om hva som er vanskelig for dem, knyttet til det de faktisk driver med. Hver hypotese skal ha et konkret holdepunkt i materialet. Har du ingen holdepunkter, si det heller enn å finne på.

4. Skriv tre spørsmål brukeren kan stille. Kravene til et godt spørsmål her: det kan ikke besvares med ja eller nei, det viser at du har lest deg opp, og svaret endrer hva du vil foreslå. Ikke skriv spørsmål som egentlig er en påstand med spørsmålstegn.

5. Skriv én ting brukeren bør unngå å si, ut fra det du ser i materialet. Har du ikke materiale, utelater du denne bolken også. Du kan ikke vite hva som er ømtålig i et selskap du ikke har lest noe om.

6. Er det tidligere e-poster i materialet: oppsummer hva som er lovet, hva som står ubesvart, og hvem som har ballen.

Skriv kort nok til at det kan leses på tre minutter rett før møtet.

## Slik ser resultatet ut

    SELSKAPET PÅ TRE LINJER (utelates helt hvis du ikke har materiale)
    HVA SOM ER I BEVEGELSE (samme)
    HYPOTESER (2-3, hver med holdepunkt. Utelates helt hvis du ikke har materiale)
    TRE SPØRSMÅL Å STILLE
    DETTE BØR DU IKKE SI (utelates helt hvis du ikke har materiale)
    STATUS I DIALOGEN (hvis e-poster er gitt)
    MÅ SJEKKES FØR MØTET

## Eksempel på input

Det du har liggende før møtet, uten å lete lenge:

Nettadressen til selskapet: nordviktransport.no
Siste e-post fra dem:

"Hei. Takk for praten på messa. Vi ser på om vi skal gjøre noe med
ruteplanleggingen til neste år, men budsjettet er ikke satt ennå.
Kan vi ta en prat i september? Mvh Kari, logistikksjef"

Det jeg vet fra før: de kjøpte et nytt lagersystem i fjor, og de har
klaget på leveringspresisjon på LinkedIn.

## Vanlige spørsmål

### Hva om jeg ikke har noe materiale om selskapet?

Da utelater den hypotesene helt i stedet for å finne på noen. Det er et bevisst valg: en hypotese uten holdepunkt blir synlig i møtet, og det koster deg mer enn å møte uforberedt på det punktet. Du får fortsatt spørsmålene og sjekklista.

### Er ikke dette bare research jeg kunne gjort selv?

Jo, og det er poenget. Forskjellen er at den gjør det på ti minutter i stedet for førti, og at den tvinger fram tre spørsmål og en liste over hva du ikke bør si. Den siste delen er den folk hopper over når de gjør det selv.

## Det den ikke gjør

Den har ikke tilgang til noe du ikke gir den, med mindre verktøyet ditt kan søke på nett. Uten materiale blir hypotesene generiske, og da skal den si fra.

Den lager ikke et tilbud, og den vet ikke hva selskapet har råd til.

## Sånn bruker vi den selv

Vi bruker den før førstegangsmøter, og den mest nyttige delen for oss er ikke spørsmålene, men punktet «dette bør du ikke si». I ett tilfelle stoppet den oss fra å foreslå noe selskapet allerede hadde gjort internt året før, noe som ville gjort at vi framsto som dårlig forberedt de første to minuttene.
