import { EXAM_REVIEW_END, TOPICS_EXAM_END } from "./topicAvailability";

export const TOPICS = [
  { id: "verbs",          label: "🏃 Verbos",       color: "#7C3AED" },
  { id: "fruits",         label: "🍎 Frutas y Verduras", color: "#ea580c" },
  { id: "plural",         label: "➕ Plural",        color: "#059669" },
  { id: "numbers",        label: "🔢 Numbers & Letters", color: "#DB2777" },
  { id: "time",           label: "🕐 Time",          color: "#0284C7" },
  { id: "dates",          label: "📅 Dates",         color: "#22D3EE" },
  { id: "countries",      label: "🌎 Countries",     color: "#0EA5E9" },
  { id: "family",         label: "👪 Family",        color: "#CA8A04" },
  { id: "jobs",           label: "👷 Jobs",          color: "#16A34A" },
  { id: "tobe",           label: "✅ Verb To Be",    color: "#DC2626" },
  { id: "demonstratives", label: "👉 This / That",   color: "#D97706" },
  { id: "prepositions",   label: "📍 Preposiciones", color: "#2563EB" },
  { id: "progressive",    label: "🌀 Progresivo",    color: "#9333EA" },
];

export const TOPICS_BASICO2 = [
  { id: "irregularVerbs",        label: "🏃 Verbos Irregulares",      color: "#7C3AED" },
  { id: "adjectives",            label: "🎨 Adjetivos Calificativos", color: "#0D9488" },
  { id: "whQuestions",           label: "❓ WH Questions",            color: "#22D3EE" },
  { id: "articles",              label: "📖 Articles",                color: "#A3E635" },
  { id: "possessiveAdjectives",  label: "🙋 Possessive Adjectives",   color: "#E879F9" },
  { id: "possessiveNouns",       label: "🔑 Possessive Nouns",        color: "#818CF8" },
  { id: "gerunds",               label: "🔄 Uso del ING",             color: "#F472B6" },
  { id: "simplePresent",         label: "⏰ Simple Present",          color: "#38BDF8" },
  { id: "vocabulary",            label: "🗣️ Vocabulario",             color: "#FB923C" },
];

export const TOPICS_BASICO3 = [
  { id: "inOnAt",                label: "📍 In / On / At",            color: "#FB923C" },
  { id: "simplePresentAdvanced", label: "🔁 Simple Present Avanzado", color: "#0EA5E9" },
  { id: "directions",            label: "🗺️ Giving Directions",      color: "#14B8A6" },
  { id: "topicsExam", label: "📝 Topics Exam", color: "#EC4899", availableUntil: TOPICS_EXAM_END },
  {
    id: "examReview",
    label: "📝 Repaso para examen",
    color: "#EC4899",
    availableUntil: EXAM_REVIEW_END,
  },
];

export const TOPICS_BASICO4 = [
  { id: "bodyParts", label: "🧍 Partes del cuerpo", color: "#14B8A6" },
];

export const TOPICS_QUIZ = [{ id: "quiz", label: "🎯 Práctica general", color: "#EAB308" }];
