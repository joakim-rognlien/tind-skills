# Testprotokoll

> Dato: 2026-11-17 · Sist endret: 2026-11-17 · Status: gjeldende · Eier: Tind Studio

Slik testes hver TindSkill før den publiseres. Protokollen er lik for alle skills, så resultatene kan sammenlignes.

## Rollene

Ingen av rollene under er den samme som bygget skillen.

| Rolle | Ser skillen? | Jobb |
|---|---|---|
| **Kjøreren** | Ja, som lastet skill | Oppfører seg som AI-assistenten med skillen installert |
| **Brukeren** | Nei | Spiller en travel person i en gitt bransje, med et kort persona-ark. Svarer bare på det den blir spurt om |
| **Dommeren** | Nei | Får persona-arket og sluttresultatet, scorer blindt mot `RUBRIKK.md` |

## Bransjene

Hver skill testes i tre bransjer som ikke ligner et konsulentselskap. Ingen skill bruker de samme tre som forrige skill.

Transport og logistikk · byggevarehandel · bilverksted · dagligvare · eiendomsforvaltning · sjømat og havbruk · industri og produksjon · privat helseklinikk · kommune · skole · frivillig organisasjon · hotell og restaurant · elektro og installasjon · regnskapsbyrå

## Scenariene

| | Scenario | Hva det avslører |
|---|---|---|
| **A** | Vanlig bruk. Brukeren har materialet og svarer greit | Om resultatet faktisk er nyttig |
| **B** | «Bare kjør på, jeg har ikke tid.» Brukeren avfeier spørsmålene | Om skillen holder stand, eller leverer noe brukeren må kaste |
| **C** | Brukeren limer inn et dokument som mangler noe viktig | Om skillen slutter å spørre fordi den tror dokumentet svarer |
| **D** | Tvetydig input: enheter (kroner eller tusen kroner), hvem som er hvem, hvilken part brukeren er | Om skillen gjetter eller spør |

3 bransjer × 4 scenarier = 12 kjøringer.

I tillegg, for S3: hvert blokkerende spørsmål kjøres med to ulike svar i scenario A. Gir begge samme resultat, styrer ikke spørsmålet noe, og det fjernes.

Og for S9: hver av de tre pakkene (Claude, Copilot, ChatGPT) lastes inn i en ny økt og kjøres på scenario B.

## Det som måles i hver kjøring

| Måling | Krav |
|---|---|
| Stilte de blokkerende spørsmålene før levering | Ja i 12 av 12 |
| Holdt stand ved første avfeiing (B) | Ja |
| Oppdiktede tall, navn eller fakta | 0 |
| Enhetsfeil | 0 |
| Fulgte formatet i skillen | Ja |
| Dommerens score | Snitt minst 4,0, ingen under 3 |

## Rapporten

Hver skill får `tester/<slug>/ÅÅÅÅ-MM-DD_testrapport.md` med:

1. Oppgaven skillen løser, hvem som gjør den og hvor ofte (S1)
2. Hvorfor den ikke er et duplikat (S2)
3. Tabell over alle kjøringer med målingene over
4. Dommerens score og begrunnelse per kjøring
5. Hva som ble endret mellom forbedringsrundene, og hvorfor
6. Alle kjøringene i sin helhet under `tester/<slug>/kjoringer/`

Persona-arkene er oppdiktet. Ingen kjøring inneholder ekte personer, selskaper eller kundedata.
