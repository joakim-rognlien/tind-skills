# TindSkills

Gratis AI-skills for norske virksomheter, fra [Tind Studio](https://www.tindstudio.no/skills). Hver skill finnes for **Claude**, **Microsoft Copilot** og **ChatGPT**, med nøyaktig samme instruks på alle tre.

Én ny skill hver tirsdag.

## Hvorfor du kan stole på dem

De fleste skill-lister på nettet er prompter noen har skrevet og aldri testet. Vi gjør det motsatt, og alt ligger åpent her:

- **Hver skill er testet før den publiseres.** 12 kjøringer i tre bransjer som ikke ligner vår, med en simulert bruker som har dårlig tid og rotete materiale. Testrapportene og kjøringene ligger i [`tester/`](tester/).
- **Resultatene vurderes blindt.** En egen dommer som ikke har sett skillen, scorer resultatet mot en fast rubrikk. Se [`tester/TESTPROTOKOLL.md`](tester/TESTPROTOKOLL.md).
- **Kravene er skrevet ned.** Ni krav, S1 til S9, i [`KVALITETSKRAV.md`](KVALITETSKRAV.md). Byggeskriptet stopper hvis et av de mekaniske kravene brytes.
- **Skillene spør før de svarer.** Hver skill har spørsmål om din virksomhet som må besvares før den leverer, og hvert spørsmål sier hva svaret styrer. Svarer du «bare kjør på», spør den igjen.
- **Samme instruks på tre plattformer.** Bygget sjekker at instruksen er byte-identisk i alle tre pakkene.

**Hva testene ikke er:** atferdstestene kjøres med Claude. Copilot- og ChatGPT-pakkene er validert mot formatkravene til hver plattform, og malen alle skillene bygger på ble testet manuelt i alle tre produktene 09.09.2026. Endrer en plattform hvordan skills lastes, oppdaterer vi pakkene og sier det i [`ENDRINGSLOGG.md`](ENDRINGSLOGG.md).

## Slik er repoet bygget opp

| Mappe | Innhold |
|---|---|
| `kilder/` | Én kildefil per skill. Det er denne som redigeres |
| `scripts/bygg.mjs` | Lager de tre plattformpakkene og innholdet til nettsiden |
| `dist/` | Ferdige pakker: `claude-cowork/*.zip`, `copilot-cowork/*.md`, `chatgpt-work/*.md` |
| `tester/` | Testprotokoll, rubrikk og testrapport for hver skill |

## Bygge selv

```
node scripts/bygg.mjs
```

Bygget krever en liste over ord som aldri skal forekomme i en skill (miljøvariabelen `TIND_KUNDER` eller fila `.kunder.txt`). Den ligger ikke her.

## Bruk

Fri å bruke og endre internt i din egen virksomhet. Vil du ha hjelp til å lage skills som er bygget på hvordan dere faktisk jobber, [ta kontakt](https://www.tindstudio.no).
