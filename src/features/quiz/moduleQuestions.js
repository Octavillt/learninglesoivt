import { ARTICLE_EXERCISE } from "../articles/data";
import { POSSESSIVE_EXERCISE } from "../possessiveAdjectives/data";
import { JOIN_EXERCISE } from "../possessiveNouns/data";
import { EXERCISE as GERUNDS } from "../gerunds/data";
import { EXERCISE as SIMPLE_PRESENT } from "../simplePresent/data";
import { EXERCISE as IN_ON_AT } from "../inOnAt/data";
import { SP_ADV_EXERCISE } from "../simplePresentAdvanced/data";
import { PRACTICE as DIRECTIONS } from "../directions/data";
import { PRACTICE as EXAM_REVIEW } from "../examReview/data";
import { IRREGULAR_VERBS } from "../irregularVerbs/data";
import { BEFORE_NOUN_SENTENCES, AFTER_VERB_SENTENCES } from "../adjectives/data";
import { WH_WORDS } from "../whQuestions/data";
import { GREETINGS, GOODBYES } from "../vocabulary/data";

const sentence = pts => pts.map(p => typeof p === "string" ? p : p.r === "zero" ? "" : p.t).join("").replace(/\s+/g, " ");

// Reutiliza los ejercicios de las lecciones para mantener una sola fuente.
function completeSentences(topic, rows) {
  return rows.map(row => ({
    topic,
    question: `Escribe la oración completa en inglés: ${row.q || row.a || row.esp}`,
    answers: [sentence(row.pts)],
    hint: row.q || row.a ? row.esp : "Usa el vocabulario de la lección.",
    explanation: `${sentence(row.pts)} — ${row.esp}`,
  }));
}

function missingToken(topic, rows) {
  return rows.map(row => ({
    topic,
    question: `Completa el espacio${topic === "articles" ? " (escribe Ø si no lleva artículo)" : ""}: ${row.pts.map(p => typeof p === "string" ? p : "___").join("")}`,
    answers: row.pts.filter(p => typeof p !== "string").map(p => p.t),
    hint: row.esp,
    explanation: sentence(row.pts),
  }));
}

export const MODULE_QUESTIONS = [
  ...missingToken("articles", ARTICLE_EXERCISE),
  ...missingToken("possessiveAdjectives", POSSESSIVE_EXERCISE),
  ...completeSentences("possessiveNouns", JOIN_EXERCISE),
  ...completeSentences("gerunds", GERUNDS),
  ...completeSentences("simplePresent", SIMPLE_PRESENT),
  ...completeSentences("inOnAt", IN_ON_AT),
  ...completeSentences("simplePresentAdvanced", SP_ADV_EXERCISE.map(row => row.q.includes("Be quiet") ? { ...row, q: "(sleep) The baby ___ now." } : row)),
  ...completeSentences("adjectives", [...BEFORE_NOUN_SENTENCES, ...AFTER_VERB_SENTENCES]),
  ...IRREGULAR_VERBS.flatMap(([verb, past, participle]) => [
    { topic: "irregularVerbs", question: `Escribe el pasado simple de ${verb}.`, answers: [past, ...past.split("/")], explanation: `${verb} → ${past}` },
    { topic: "irregularVerbs", question: `Escribe el participio pasado de ${verb}.`, answers: [participle, ...participle.split("/")], explanation: `${verb} → ${participle}` },
  ]),
  ...WH_WORDS.map(([word, translation, usage]) => ({ topic: "whQuestions", question: `¿Qué expresión WH significa «${translation}»?`, answers: [word], hint: usage, explanation: `${word} = ${translation}` })),
  ...[...GREETINGS, ...GOODBYES].map(([phrase, translation]) => ({ topic: "vocabulary", question: `Traduce al español: ${phrase}`, answers: [translation, ...translation.split(" / ")], explanation: `${phrase} = ${translation}` })),
  ...DIRECTIONS.map(row => ({ topic: "directions", question: `Traduce al inglés: ${row.q}`, answers: [row.answer], explanation: `${row.answer} — ${row.q}` })),
  ...EXAM_REVIEW.map(row => ({ topic: "examReview", question: row.question, options: row.options, answers: [row.options[row.correct]], explanation: row.explanation })),
];
