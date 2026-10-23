// Lógica de búsqueda del módulo «Verbos a la mano»: funciones puras, sin
// React, para poder consultarlas también desde el buscador global.

import { VERB_BANK } from "./data";
import { VERBS } from "../verbs/data";
import { IRREGULAR_VERBS } from "../irregularVerbs/data";
import { VERBS_ING } from "../gerunds/data";
import { EXERCISE_WORDS } from "../exerciseWords/data";
import { IRREGULARS, ED_PRONUNCIATION } from "../simplePast/data";

export function normalize(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// Patrón de las tres formas (con la primera de cada columna). Los regulares
// tienen el suyo («regular»); los irregulares se agrupan por cuántas formas
// comparten, que es como se memorizan mejor.
export function verbPattern(verb) {
  if (verb.kind === "regular") return "regular";
  const [base, past, participle] = [verb.base, verb.past[0], verb.participle[0]];
  if (base === past && past === participle) return "AAA";
  if (past === participle) return "ABB";
  if (base === participle) return "ABA";
  return "ABC";
}

// Metadatos de cada patrón para la UI (chips y ficha del verbo).
export const PATTERNS = [
  { id: "AAA", label: "Las tres iguales", example: "cut · cut · cut" },
  { id: "ABB", label: "Pasado = participio", example: "buy · bought · bought" },
  { id: "ABA", label: "Base = participio", example: "come · came · come" },
  { id: "ABC", label: "Tres formas distintas", example: "go · went · gone" },
];

export const PATTERN_BY_ID = Object.fromEntries(PATTERNS.map(p => [p.id, p]));

// Las coincidencias «contiene» solo valen a partir de 3 letras: con 1 o 2,
// devolver medio banco enturbia los resultados.
const MIN_PARTIAL = 3;

// Palabras del significado en español: paréntesis y comas son separadores,
// así el usuario busca palabras completas y no trozos de otras («ir» nunca
// trae «dirigir» ni «escribir»).
function esWords(es) {
  return normalize(es).replace(/[(),]/g, " ").split(/\s+/).filter(Boolean);
}

// La comparación va sin acentos; la pista muestra la palabra como está escrita.
function writtenWord(text, normalizedWord) {
  const tokens = text.replace(/[(),]/g, " ").split(/\s+/).filter(Boolean);
  return tokens.find(token => normalize(token) === normalizedWord) ?? normalizedWord;
}

// Mismas reglas para el infinitivo (es) y el pretérito (esPast): palabra exacta
// en rango 4 y, desde 3 letras, palabra que empieza con la consulta en rango 5.
function spanishHit(text, field, query) {
  if (!text) return null;
  const words = esWords(text);
  const exact = words.find(item => item === query);
  if (exact) {
    return {
      rank: 4,
      matchedForm: field === "esPast" ? writtenWord(text, exact) : exact,
      matchedField: field,
    };
  }
  if (normalize(text) === query) return { rank: 4, matchedForm: text, matchedField: field };
  if (query.length >= MIN_PARTIAL) {
    const starts = words.find(item => item.startsWith(query));
    if (starts) {
      return {
        rank: 5,
        matchedForm: field === "esPast" ? writtenWord(text, starts) : starts,
        matchedField: field,
      };
    }
  }
  return null;
}

// Si el infinitivo y el pretérito empatan en rango, gana el infinitivo.
function preferSpanish(baseHit, pastHit) {
  if (!baseHit) return pastHit;
  if (!pastHit) return baseHit;
  return pastHit.rank < baseHit.rank ? pastHit : baseHit;
}

// Mejor coincidencia de un verbo contra la query ya normalizada. El rango
// ordena la relevancia: exacto en inglés > base empieza > pasado/participio
// empieza > contiene en inglés > palabra exacta en español > palabra empieza.
function bestMatch(verb, query) {
  if (verb.base === query) return { rank: 0, matchedForm: verb.base, matchedField: "base" };
  for (const past of verb.past) {
    if (past === query) return { rank: 0, matchedForm: past, matchedField: "past" };
  }
  for (const participle of verb.participle) {
    if (participle === query) return { rank: 0, matchedForm: participle, matchedField: "participle" };
  }
  if (verb.base.startsWith(query)) return { rank: 1, matchedForm: verb.base, matchedField: "base" };
  for (const past of verb.past) {
    if (past.startsWith(query)) return { rank: 2, matchedForm: past, matchedField: "past" };
  }
  for (const participle of verb.participle) {
    if (participle.startsWith(query)) return { rank: 2, matchedForm: participle, matchedField: "participle" };
  }
  if (query.length >= MIN_PARTIAL) {
    if (verb.base.includes(query)) return { rank: 3, matchedForm: verb.base, matchedField: "base" };
    for (const past of verb.past) {
      if (past.includes(query)) return { rank: 3, matchedForm: past, matchedField: "past" };
    }
    for (const participle of verb.participle) {
      if (participle.includes(query)) return { rank: 3, matchedForm: participle, matchedField: "participle" };
    }
  }
  return preferSpanish(spanishHit(verb.es, "es", query), spanishHit(verb.esPast, "esPast", query));
}

export function searchVerbs(query, { limit } = {}) {
  const raw = normalize(query ?? "").trim();
  // El «to» del infinitivo no aporta nada a la búsqueda: to go → go.
  const q = raw.startsWith("to ") ? raw.slice(3) : raw;
  if (!q) return [];

  const matches = [];
  for (const verb of VERB_BANK) {
    const match = bestMatch(verb, q);
    if (match) matches.push({ verb, ...match });
  }
  matches.sort((a, b) => a.rank - b.rank || a.verb.base.localeCompare(b.verb.base));
  const results = matches.map(({ verb, matchedForm, matchedField }) => ({ verb, matchedForm, matchedField }));
  return limit ? results.slice(0, limit) : results;
}

// —— Lecciones donde aparece cada verbo ————————————————————————————————
// Se calcula desde los datos de las lecciones (no a mano), así un verbo nuevo
// en una lección aparece aquí sin tocar este archivo.

const pastToBase = new Map(VERB_BANK.flatMap(verb => verb.past.map(past => [past, verb.base])));

// «don't mind» (gerundios) cuenta como mind.
const withoutDont = verb => verb.toLowerCase().replace(/^don['’]t /, "");
// «go → went» (pasado simple) deja solo su forma base.
const baseSide = forms => forms.split("→")[0].trim().toLowerCase();

const LESSON_SOURCES = [
  { levelId: "basico1", topicId: "verbs", bases: new Set(VERBS.map(([en]) => en.toLowerCase())) },
  { levelId: "basico2", topicId: "irregularVerbs", bases: new Set(IRREGULAR_VERBS.map(([inf]) => inf.toLowerCase())) },
  { levelId: "basico2", topicId: "gerunds", bases: new Set(VERBS_ING.flatMap(group => group.verbs.map(withoutDont))) },
  { levelId: "basico4", topicId: "exerciseWords", bases: new Set(EXERCISE_WORDS.map(word => word.en.toLowerCase())) },
  {
    levelId: "basico5",
    topicId: "simplePast",
    bases: new Set([
      ...IRREGULARS.map(([forms]) => baseSide(forms)),
      // Los ejemplos de -ed son pasados: se resuelven a su verbo base.
      ...ED_PRONUNCIATION.flatMap(group => group.examples.map(past => pastToBase.get(past))),
    ]),
  },
];

export function lessonsFor(verb) {
  const base = typeof verb === "string" ? verb : verb.base;
  return LESSON_SOURCES
    .filter(source => source.bases.has(base))
    .map(({ levelId, topicId }) => ({ levelId, topicId }));
}
