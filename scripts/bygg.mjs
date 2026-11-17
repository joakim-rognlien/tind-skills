#!/usr/bin/env node
// Skillbiblioteket, byggeskript.
// Én kildefil i kilder/ blir til tre plattformpakker pluss innhold til nettsiden.
// Dato: 2026-09-08 · Sist endret: 2026-11-17 · Eier: Tind Studio

import { readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rot = join(dirname(fileURLToPath(import.meta.url)), '..');
const kilder = join(rot, 'kilder');
const dist = join(rot, 'dist');

const PLATTFORMER = {
  'claude-cowork': {
    navn: 'Claude Cowork',
    fil: 'zip',
    installer: [
      'Åpne Claude og gå til Customize (Tilpass), deretter fanen Skills (Ferdigheter).',
      'Klikk Add og velg zip-fila du lastet ned.',
      'Skru skillen på i samme liste.',
      'Skriv en melding som handler om oppgaven. Claude henter skillen selv når den passer.',
      'Står menyen på et annet språk enn her, er det samme sted. Grensesnittet oversettes, funksjonen er den samme.'
    ]
  },
  'copilot-cowork': {
    navn: 'Microsoft Copilot Cowork',
    fil: 'md',
    navngi_i_prompt: true,
    installer: [
      'Åpne Copilot Cowork og gå til Customize (Tilpass), deretter fanen Skills (Ferdigheter).',
      'Klikk pila ved siden av Add og velg Upload skill. Dialogen tar imot .MD, .ZIP eller .SKILL.',
      'Velg md-fila du lastet ned. Copilot tar imot en enkelt SKILL.md på inntil 1 MB.',
      'Nevn skillen ved navn i meldingen din. Copilot henter den ikke fram av seg selv slik Claude og ChatGPT gjør.',
      'Vil du dele den med kolleger, åpne skillen og bruk Share.'
    ]
  },
  'chatgpt-work': {
    navn: 'ChatGPT Work',
    fil: 'md',
    installer: [
      'Åpne ChatGPT og gå til Programtillegg (Plugins), deretter fanen Ferdigheter (Skills).',
      'Klikk pluss-knappen og velg «Last opp fra datamaskinen din» (Upload from your computer).',
      'Velg md-fila du lastet ned.',
      'Skriv en melding som handler om oppgaven. ChatGPT henter ferdigheten selv når den passer.'
    ]
  }
};

// ---- Vakt 1: ingenting fra kunder skal ut i biblioteket ----
// Absolutt regel: en oppskrift som gis bort kan aldri stamme fra en skill vi har
// bygget for eller sammen med en kunde, heller ikke i generalisert form.
// Kundelista ligger ALDRI i dette repoet, som er offentlig. Den leses fra
// miljøvariabelen TIND_KUNDER (kommaseparert) eller fra fila .kunder.txt
// (én per linje, står i .gitignore). Mangler begge, stopper bygget: en vakt
// som stille hoppes over er verre enn ingen vakt.
function lesKunder() {
  let raa = process.env.TIND_KUNDER || '';
  const fil = join(rot, '.kunder.txt');
  if (!raa && existsSync(fil)) raa = readFileSync(fil, 'utf8').split('\n').join(',');
  const liste = raa.split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (liste.length < 5) {
    throw new Error('STOPP · kundevakten mangler. Sett TIND_KUNDER eller legg .kunder.txt i rota før du bygger.');
  }
  return liste;
}
const KUNDER = lesKunder();
const OPPRINNELSE = ['ny', 'generalisert'];

// ---- Vakt 2: hver oppskrift må spørre brukeren om egen virksomhet ----
// Ingenting i biblioteket skal være forankret i hvordan Tind Studio jobber.
// Skillen skal hente konteksten fra den som bruker den.
const INTERVJU = `Du skal ikke levere resultatet på første melding.

Denne skillen brukes av alle slags virksomheter, og du vet ingenting om denne ennå. Et svar bygget på gjetting om hva de driver med, hvem de snakker til eller hvordan de jobber, blir generisk eller direkte feil.

Spørsmålene under er delt i to, og de behandles ulikt.

**De blokkerende spørsmålene må besvares.** Du leverer ikke resultatet før du har svar på dem. Sier brukeren «bare kjør på», «jeg har ikke tid» eller lignende, svarer du med å stille de blokkerende spørsmålene på nytt, samlet i én kort melding, og forklarer i én setning hva som blir feil uten dem. Du leverer fortsatt ikke. Dette er ikke stahet: uten disse svarene produserer du noe brukeren må kaste.

**De øvrige spørsmålene er nyttige, ikke påkrevde.** Vil brukeren hoppe over dem, gjør du det, men skriv i én setning hva du da antar.

Ellers gjelder dette:

1. Still spørsmålene ett eller to av gangen, ikke alle på én gang.
2. Får du et vagt svar på et blokkerende spørsmål, still et oppfølgingsspørsmål på nettopp det spørsmålet. Er flere vage samtidig, følger du opp hvert av dem. Ikke fyll hullet med en antakelse, og ikke lever fordi de fleste er besvart. Ett ubesvart blokkerende spørsmål er nok til at du ikke leverer.
3. **Dette punktet er det eneste unntaket fra punkt 2, og fra regelen om at du ikke leverer.** Avfeier brukeren det samme blokkerende spørsmålet to ganger, er det som regel ikke fordi de er vrange, men fordi spørsmålet er vanskelig å svare på. Da gjør du dette, i denne rekkefølgen:

   - Andre gang: still spørsmålet på en annen måte, med et konkret eksempel de kan si ja eller nei til.
   - Tredje gang, hvis de fortsatt avfeier: du leverer. Men først sier du hvilke deler av resultatet som faller bort uten svaret, og hvorfor. Så leverer du resten, med de delene tydelig utelatt, ikke gjettet. Skriv aldri at leveransen er komplett.

   Tell avfeiinger per spørsmål, ikke totalt, og regn bare med avfeiinger etter at du har stilt spørsmålet. Andre gjentakelser i denne skillen teller ikke med i denne stigen. Én «bare kjør på» teller som én avfeiing av hvert blokkerende spørsmål som står ubesvart.

   Unntak fra unntaket: er spørsmålet merket **strukturbærende**, finnes det ingen «resten» å levere uten svaret. Da leverer du ingenting, sier rett ut hvorfor, og gir brukeren det enkleste mulige alternativet i stedet, for eksempel et forslag de bare trenger å bekrefte eller korrigere.
4. Står svaret på et **ikke-blokkerende** spørsmål allerede i samtalen eller i et vedlegg, skal du ikke spørre om det på nytt.
5. **De blokkerende spørsmålene gjelder selv om materialet ser ut til å svare på dem.** Et dokument forteller deg hva som står der, ikke hvor brukeren står i det, hva de har lov til å love, eller hva de mener om det. Be om bekreftelse med brukerens egne ord, og gjett aldri ut fra materialet alene. Har brukeren allerede svart i sin første melding, skal du ikke spørre om det samme på nytt, bare bekrefte kort at du har det.
6. Hvert spørsmål sier hva det styrer. Endrer et svar ingenting i det du leverer, har du stilt feil spørsmål.

Når du har svarene, oppsummer dem i tre til fem linjer og be om bekreftelse før du går videre.`;

function vaktsjekk(fil, meta, raatekst, seksjon) {
  const lav = raatekst.toLowerCase();
  for (const k of KUNDER) {
    if (lav.includes(k)) {
      throw new Error(`STOPP · ${fil}: nevner kunden «${k}». Kundemateriale skal aldri ut i biblioteket.`);
    }
  }
  // Hvor oppskriften kommer fra, internt, føres internt. Her står bare om den er
  // helt ny eller generalisert fra hvordan Tind jobber selv. Aldri fra en kunde.
  if (!OPPRINNELSE.includes(meta.opprinnelse)) {
    throw new Error(`STOPP · ${fil}: feltet opprinnelse må være «ny» eller «generalisert».`);
  }
  if (raatekst.includes('\u2014') || raatekst.includes('\u2013')) {
    throw new Error(`STOPP · ${fil}: inneholder lang tankestrek. Bruk vanlig bindestrek (-).`);
  }
  const sp = seksjon('Spør om dette først');
  if (!sp) {
    throw new Error(`STOPP · ${fil}: mangler «## Spør om dette først». Hver oppskrift må hente konteksten fra brukerens egen virksomhet.`);
  }
  if (!sp.includes('Må besvares før du leverer')) {
    throw new Error(`STOPP · ${fil}: spørsmålene mangler blokket «Må besvares før du leverer noe». Uten blokkerende spørsmål blir intervjuet et ritual brukeren hopper over.`);
  }
  if (!sp.includes('(styrer')) {
    throw new Error(`STOPP · ${fil}: minst ett spørsmål mangler «(styrer ...)». Hvert spørsmål skal si hva svaret endrer, ellers er det bortkastet tid for brukeren.`);
  }
  if (meta.oppsummering && meta.oppsummering.length > 200) {
    throw new Error(`STOPP · ${fil}: oppsummeringen er ${meta.oppsummering.length} tegn. Claude tillater maks 200 i description.`);
  }
  if (meta.navn && meta.navn.length > 64) {
    throw new Error(`STOPP · ${fil}: navnet er ${meta.navn.length} tegn. Maks 64.`);
  }
}

function klipp(t) {
  const l = t.split('\n');
  while (l.length && !l[0].trim()) l.shift();
  while (l.length && !l[l.length - 1].trim()) l.pop();
  return l.join('\n');
}

function parse(tekst) {
  const m = tekst.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('mangler frontmatter');
  const meta = {};
  for (const linje of m[1].split('\n')) {
    const t = linje.match(/^([a-z0-9_]+):\s*(.*)$/);
    if (!t) continue;
    let v = t[2].trim();
    if (v.startsWith('[')) v = v.slice(1, -1).split(',').map(s => s.trim()).filter(Boolean);
    meta[t[1]] = v;
  }
  const body = m[2];
  const blokker = {};
  for (const del of body.split(/^## /m).slice(1)) {
    const nl = del.indexOf('\n');
    blokker[del.slice(0, nl).trim()] = klipp(del.slice(nl + 1));
  }
  return { meta, seksjon: (n) => blokker[n] || '' };
}

rmSync(dist, { recursive: true, force: true });
for (const p of Object.keys(PLATTFORMER)) mkdirSync(join(dist, p), { recursive: true });
mkdirSync(join(dist, 'nettside'), { recursive: true });

const index = [];

for (const fil of readdirSync(kilder).filter(f => f.endsWith('.md')).sort()) {
  const raa = readFileSync(join(kilder, fil), 'utf8');
  const { meta, seksjon } = parse(raa);
  vaktsjekk(fil, meta, raa, seksjon);

  const slug = meta.slug;
  for (const felt of ['sokeord', 'sidetittel', 'sporsmal_h2']) {
    if (!meta[felt]) throw new Error(`STOPP · ${fil}: mangler ${felt} i frontmatter. Hver skill skal eie et søk.`);
  }
  if (meta.sidetittel.length > 60) throw new Error(`STOPP · ${fil}: sidetittel er ${meta.sidetittel.length} tegn. Maks 60, ellers kuttes den i Google.`);
  if (!meta.sporsmal_h2.trim().endsWith('?')) throw new Error(`STOPP · ${fil}: sporsmal_h2 må være et spørsmål.`);
  const hva = seksjon('Hva den gjør');
  const sporsmal = seksjon('Spør om dette først');
  const instruks = seksjon('Instruksen');
  const bruk = seksjon('Slik bruker du den');
  const resultat = seksjon('Slik ser resultatet ut');
  const grenser = seksjon('Det den ikke gjør');
  const tindEksempel = seksjon('Sånn bruker vi den selv');
  const eksempelInput = seksjon('Eksempel på input');
  const faqRaa = seksjon('Vanlige spørsmål');
  // Disse to er nettsideinnhold. De skal aldri inn i SKILL.md, bare i innhold.json.
  const vanligeSporsmal = faqRaa.split(/^### /m).slice(1).map(b => {
    const nl = b.indexOf('\n');
    return { sporsmal: b.slice(0, nl).trim(), svar: b.slice(nl + 1).trim() };
  });
  if (!eksempelInput) throw new Error(`STOPP · ${fil}: mangler «## Eksempel på input». Hver skillside skal vise hva du limer inn, ikke bare hva som kommer ut.`);
  if (vanligeSporsmal.length < 2) throw new Error(`STOPP · ${fil}: trenger minst to spørsmål under «## Vanlige spørsmål».`);
  if (!instruks) throw new Error(`${fil}: mangler «## Instruksen»`);

  // Selve instruksteksten, lik for alle tre plattformene.
  const kropp = `${hva}

## Før du gjør noe annet

${INTERVJU}

### Spørsmålene

${sporsmal}

## Slik jobber du når du har svarene

${instruks}

## Format på svaret

${resultat}

## Begrensninger

${grenser}${tindEksempel ? `

## Et eksempel til inspirasjon

${tindEksempel}

Dette er hvordan ett selskap bruker den. Din versjon skal se ut som din virksomhet, ikke som dette.` : ''}`;

  const skillmd = `---
name: ${meta.navn}
description: ${meta.oppsummering}
---

# ${meta.navn}

${kropp}
`;

  const bunn = `\n---\nLaget av Tind Studio. Fri å bruke og endre internt i din egen virksomhet.\nVersjon ${meta.versjon}, sist testet ${meta.sist_testet}. tindstudio.no\n`;

  const startprompter = {};
  for (const [pid, p] of Object.entries(PLATTFORMER)) {
    // Copilot henter ikke skillen fram av seg selv (testet 09.09.2026), så navnet må stå i startprompten.
    const startprompt = p.navngi_i_prompt
      ? `Bruk skillen \u2039${meta.navn}\u203a. ${meta.startprompt}`
      : meta.startprompt;
    startprompter[pid] = startprompt;
    const hvordan = `## Slik tar du den i bruk i ${p.navn}\n\n${p.installer.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nStartprompt: «${startprompt}»\n`;

    if (p.fil === 'zip') {
      const mappe = join(dist, pid, slug);
      mkdirSync(mappe, { recursive: true });
      writeFileSync(join(mappe, 'SKILL.md'), `${skillmd}\n${bunn}`);
      writeFileSync(join(mappe, 'LES-MEG.md'), `# ${meta.navn}\n\n${hvordan}\n${bruk}\n${bunn}`);
      execSync(`cd "${join(dist, pid)}" && zip -qr "${slug}.zip" "${slug}" && rm -rf "${slug}"`);
    } else {
      writeFileSync(join(dist, pid, `${slug}.md`), `${skillmd}\n${hvordan}\n${bunn}`);
    }
  }

  index.push({
    slug,
    navn: meta.navn,
    kategori: meta.kategori,
    tilgang: meta.tilgang,
    oppsummering: meta.oppsummering,
    versjon: meta.versjon,
    sist_testet: meta.sist_testet,
    beste_paa: (meta.beste_paa || '').split(' ').filter(Boolean),
    sidetittel: meta.sidetittel,
    sokeord: meta.sokeord || '',
    sporsmal_h2: meta.sporsmal_h2 || '',
    side: {
      tittel: `${meta.sidetittel || meta.navn} | Gratis AI-skill fra Tind Studio`,
      metabeskrivelse: meta.oppsummering.slice(0, 155),
      ingress: hva.split('\n\n')[0],
      hva_du_far: hva,
      slik_bruker_du_den: bruk,
      sporsmalene_den_stiller: sporsmal,
      eksempel_input: eksempelInput,
      vanlige_sporsmal: vanligeSporsmal,
      slik_ser_resultatet_ut: resultat,
      det_den_ikke_gjor: grenser
    },
    startprompt: startprompter,
    nedlasting: {
      'claude-cowork': `claude-cowork/${slug}.zip`,
      'copilot-cowork': `copilot-cowork/${slug}.md`,
      'chatgpt-work': `chatgpt-work/${slug}.md`
    }
  });
}

const innhold = {
  bygget: new Date().toISOString().slice(0, 10),
  antall: index.length,
  plattformer: Object.entries(PLATTFORMER).map(([id, p]) => ({ id, navn: p.navn, installer: p.installer })),
  kategorier: [...new Set(index.map(o => o.kategori))],
  oppskrifter: index
};
writeFileSync(join(dist, 'nettside', 'innhold.json'), JSON.stringify(innhold, null, 2));

// Telling per plattform, så kravet om minst fem per plattform kan kontrolleres.
const perPlattform = Object.fromEntries(Object.keys(PLATTFORMER).map(p => [p, index.filter(o => o.nedlasting[p]).length]));
for (const [p, n] of Object.entries(perPlattform)) {
  if (n < 5) throw new Error(`STOPP · bare ${n} oppskrifter for ${p}. Kravet er minst fem per plattform.`);
}

// Vakt 3: instruksen skal være byte-identisk på alle tre plattformer.
for (const o of index) {
  const ut = {};
  ut['copilot-cowork'] = readFileSync(join(dist, 'copilot-cowork', `${o.slug}.md`), 'utf8');
  ut['chatgpt-work'] = readFileSync(join(dist, 'chatgpt-work', `${o.slug}.md`), 'utf8');
  ut['claude-cowork'] = execSync(`unzip -p "${join(dist, 'claude-cowork', o.slug + '.zip')}" "${o.slug}/SKILL.md"`).toString('utf8');
  const kjerne = Object.fromEntries(Object.entries(ut).map(([p, t]) => {
    const start = t.indexOf(`# ${o.navn}\n`);
    const slutt = t.indexOf('\n## Slik tar du den i bruk i ');
    return [p, t.slice(start, slutt === -1 ? t.indexOf('\n---\nLaget av Tind Studio') : slutt).trimEnd()];
  }));
  const [a, b, c] = Object.values(kjerne);
  if (a !== b || b !== c) throw new Error(`STOPP · ${o.slug}: instruksen er ikke identisk på de tre plattformene.`);
}

console.log(`Bygget ${index.length} oppskrifter. Instruksen er identisk på alle tre plattformer.`);
console.log(Object.entries(perPlattform).map(([p, n]) => `  ${p}: ${n}`).join('\n'));
