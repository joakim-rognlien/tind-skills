# Kvalitetskrav for TindSkills

> Dato: 2026-11-17 · Sist endret: 2026-11-17 · Status: gjeldende · Eier: Tind Studio

En skill publiseres ikke før alle ni krav er bestått. Hvert krav kan sjekkes av noen andre enn den som bygget skillen. Krav merket **(bygget)** sjekkes automatisk av `scripts/bygg.mjs`, og bygget stopper ved brudd.

| | Krav | Slik sjekkes det |
|---|---|---|
| **S1 Nytte** | Løser en navngitt oppgave som en leder eller fagperson gjør minst hver måned | Oppgaven, hvem som gjør den og hvor ofte, står i testrapporten. Dommeren gir resultatet minst 4 av 5 på «bedre enn det en travel leder lager selv på 15 minutter» |
| **S2 Ikke duplikat** | Overlapper ikke med en annen TindSkill eller noe Claude, Copilot eller ChatGPT gjør innebygd | Sjekket mot lista i `dist/nettside/innhold.json` og mot Tinds AI-verktøyguide samme uke |
| **S3 Spørsmål som styrer** **(bygget)** | Blokkerende spørsmål om brukerens egen virksomhet, hvert med «(styrer ...)» | Bygget krever blokken og forklaringen. I testen varieres hvert svar: endrer det ikke resultatet, fjernes spørsmålet |
| **S4 Tre plattformer** **(bygget)** | Byte-identisk instruks, og bare funksjoner som finnes i alle tre i Norge | Bygget sammenligner instruksen i de tre pakkene og sjekker plattformgrensene (navn maks 64 tegn, beskrivelse maks 200, Copilot under 1 MB) |
| **S5 Testbatteri** | 3 bransjer × 4 scenarier = 12 kjøringer | Se `tester/TESTPROTOKOLL.md`. Krav: 12 av 12 stiller de blokkerende spørsmålene før levering, null oppdiktede tall eller fakta, null enhetsfeil |
| **S6 Blind dommer** | Uavhengig vurdering av resultatene | Egen dommer som ikke har sett skillen, scorer mot `tester/RUBRIKK.md`. Snitt minst 4,0, ingen kjøring under 3 |
| **S7 Ikke kundemateriale** **(bygget)** | Ingen skill bygger på noe vi har laget for eller sammen med en kunde | Bygget stopper på navn fra en privat liste. Opprinnelse (ny eller generalisert fra egen praksis) står i kildefila |
| **S8 Språk** **(delvis bygget)** | Norsk bokmål, rett på sak, lover ikke mer enn skillen gjør, ingen lange tankestreker | Bygget stopper på lange tankestreker. Resten vurderes av dommeren |
| **S9 Pakkene virker** | Hver pakke laster og oppfører seg likt | Hver av de tre pakkene lastes inn i en ny økt og kjøres på scenario B («bare kjør på»). Alle tre skal holde stand |

## Bremsen

Består en skill ikke etter to forbedringsrunder, publiseres den ikke. Da går reserven ut i stedet, og skillen går tilbake i køen med det som feilet.

Heller en uke uten ny skill enn en svak skill.
