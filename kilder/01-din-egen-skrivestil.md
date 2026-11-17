---
navn: Din egen skrivestil
slug: din-egen-skrivestil
sokeord: få AI til å skrive som deg
sidetittel: Få AI til å skrive som deg selv
sporsmal_h2: Hvordan får jeg AI til å skrive som meg?
kategori: Kom i gang
tilgang: åpen
versjon: 1.0
dato: 2026-09-05
sist_testet: 2026-09-05
opprinnelse: generalisert
oppsummering: Lager en stilprofil av tekster du allerede har sendt, slik at alt AI-en skriver for deg høres ut som deg og ikke som en robot.
trigger: brukeren vil at AI-en skal skrive i deres egen stemme, eller sier at tekstene høres ut som en robot.
beste_paa: claude-cowork copilot-cowork chatgpt-work
startprompt: Her er åtte tekster jeg har skrevet selv. Lag stilprofilen min.
---

## Hva den gjør

Den vanligste grunnen til at folk slutter å bruke AI til skriving er at resultatet ikke høres ut som dem. De bruker like lang tid på å skrive om som de ville brukt på å skrive selv.

Denne skillen løser det én gang. Du limer inn åtte tekster du har skrevet selv, og får tilbake en stilprofil: en beskrivelse av hvordan du faktisk skriver, som du legger inn i verktøyet og som gjelder for alt du skriver etterpå.

## Slik bruker du den

Finn åtte tekster du har skrevet selv og som du er fornøyd med. Blandet lengde og situasjon gir best resultat: to e-poster til en kunde, to interne meldinger, et lengre notat, en beskjed du sendte da du var stresset, noe du skrev til en du kjenner godt, og noe formelt.

Ikke rens dem. Skrivefeil, halve setninger og rare uttrykk er nettopp det som gjør profilen din til din.

Lim dem inn og be om stilprofilen. Legg svaret inn som fast instruks i verktøyet, så gjelder det videre.

## Spør om dette først

**Må besvares før du leverer noe:**

1. Hva skal profilen brukes til framover: kundemail, interne meldinger, tilbud, innlegg, eller alt sammen? (styrer hvilke situasjoner profilen må dekke, og dermed hvilke tekster jeg sier fra at du mangler)
2. Er alle tekstene du har limt inn skrevet av deg selv, og er det minst seks av dem? (styrer om det i det hele tatt er grunnlag for en profil)

Er svaret på spørsmål to nei, sier du det med en gang: under seks tekster gir en profil som er en gjetning, og tekster skrevet av andre gjør profilen til deres, ikke din. Be om flere. Vil brukeren likevel gå videre, lager du profilen, men merker den tydelig som foreløpig og sier hvor mange tekster som mangler.

**Nyttig, men ikke påkrevd:**

3. Hva slags virksomhet jobber du i, og hva er rollen din? (styrer hvilke fagord som er naturlige for deg)
4. Er det noe ved din egen skriving du er misfornøyd med? (styrer hvilke vaner profilen skal rette opp i stedet for å låse fast)
5. Har dere en språkprofil eller merkevarestemme fra før? (styrer rammen profilen må holde seg innenfor)

## Instruksen

Du skal analysere hvordan denne personen skriver, og lage en stilprofil som en annen AI kan skrive etter.

Jobb i denne rekkefølgen:

1. Les alle tekstene før du konkluderer noe. Se etter mønstre som går igjen i minst tre av dem, ikke enkelttilfeller.

2. Kartlegg disse tingene, og bruk sitater fra tekstene som belegg for hvert punkt:
   - Setningslengde og rytme. Korte og direkte, eller lange med innskudd? Varierer det med situasjonen?
   - Hvordan personen åpner. Hilsen eller rett på sak? Samme åpning hver gang, eller tilpasset?
   - Hvordan personen avslutter. Skriv ned de faktiske avslutningene som brukes.
   - Ord og uttrykk som går igjen, inkludert de litt særegne. Dette er det viktigste enkeltfunnet.
   - Ord og uttrykk personen tydelig unngår.
   - Tegnsetting: bruker personen tankestrek, utropstegn, punktlister, emoji, parenteser?
   - Formalitetsnivå, og hva som får det til å endre seg.
   - Hvordan dårlige nyheter, uenighet eller forsinkelser formuleres.
   - Om personen skriver «jeg» eller «vi», og når.

3. Skriv stilprofilen som instruksjoner til en annen AI, ikke som en analyse. Skriv «Bruk korte setninger på under 15 ord», ikke «personen har en tendens til korthet».

4. Lag til slutt tre eksempler: samme melding skrevet i personens stemme og i nøytral stemme, slik at forskjellen er synlig.

Sammenlign til slutt tekstene du fikk med det profilen skal brukes til, og si hvilke situasjoner du mangler eksempler fra. Vær ærlig hvis tekstene ikke er nok til å konkludere på et punkt. Skriv da hva du er usikker på og hva slags tekst du trenger for å avgjøre det.

Ikke gjør stemmen penere enn den er. Hvis personen skriver kort og litt brått, skal profilen si det.

## Slik ser resultatet ut

Et dokument med tre deler:

1. Stilprofil, 10 til 15 punkter formulert som instruksjoner, hvert med et sitat som belegg.
2. Ordbank: uttrykk som skal brukes, og uttrykk som skal unngås.
3. Tre før-og-etter-eksempler.

Under det, en kort liste over hva profilen er usikker på.

## Eksempel på input

Tre e-poster du allerede har sendt, limt rett inn:

"Hei Marit. Takk for i går. Jeg har sett på tallene du sendte, og jeg tror vi
bommer på lageret, ikke på ruta. Skal vi ta en halvtime torsdag? Joakim"

"Hei igjen. Kort svar: ja, det går. Men da må vi flytte oppstart to uker.
Si fra om det er greit, så booker jeg folk."

"Beklager sent svar, har vært på farten. Det korte er at vi ikke rekker
november. Det lange tar vi på telefon i morgen tidlig hvis det passer."

## Vanlige spørsmål

### Hvorfor holder det ikke å be AI-en skrive «uformelt»?

Fordi uformelt betyr noe ulikt for alle. Skrivestilen din ligger i konkrete valg: at du åpner med saken og ikke med høflighetsfraser, at du bruker punktum der andre bruker komma, at du skriver «kort svar: ja». En profil bygget av tekster du faktisk har sendt fanger de valgene. Et adjektiv gjør det ikke.

### Hvor mange tekster trenger jeg for at det skal bli bra?

Fem til ti tekster fra samme type situasjon holder. Femti tekster fra ti ulike situasjoner er verre, fordi profilen da blir et gjennomsnitt av flere stemmer. Skillen sier fra hvis materialet du gir den er for tynt eller for sprikende, i stedet for å gjette.

## Det den ikke gjør

Den kan ikke gjette hvordan du skriver i situasjoner du ikke har gitt eksempler fra. Skal AI-en skrive salgsmail og du bare har gitt interne meldinger, blir treffet dårlig.

Den erstatter ikke gjennomlesing. En stilprofil gjør utkastet ditt, ikke ferdig.

## Sånn bruker vi den selv

Vi laget den første versjonen av denne for vår egen daglige leder, fordi utkastene fra AI konsekvent ble for lange og for høflige mot hans egen stil. Åtte ekte e-poster inn ga en profil med to funn han ikke visste om selv: han åpner nesten aldri med hilsen internt, og han svarer på spørsmål før han forklarer bakgrunnen. Begge deler er nå regler i profilen, og utkastene trenger langt mindre omskriving.
