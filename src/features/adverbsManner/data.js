export const FORMATION_RULES = [
  { title: "Regla frecuente: adjetivo + -ly", description: "Muchos adverbios de modo se forman añadiendo -ly al adjetivo. Conserva la l de beautiful y careful: el resultado termina en -fully.", examples: [
    ["beautiful → beautifully", "hermoso/a → hermosamente / maravillosamente"],
    ["quick → quickly", "rápido/a → rápidamente"],
    ["careful → carefully", "cuidadoso/a → con cuidado"],
    ["slow → slowly", "lento/a → lentamente / despacio"],
    ["amazing → amazingly", "asombroso/a → asombrosamente"],
  ] },
  { title: "Consonante + y: cambia y por i y añade -ly", description: "Es un patrón frecuente en palabras como happy y easy; no lo apliques a todas las palabras que terminan en y.", examples: [
    ["happy → happily", "feliz → felizmente / con alegría"],
    ["easy → easily", "fácil → fácilmente"],
    ["angry → angrily", "enojado/a → con enojo"],
  ] },
  { title: "Consonante + -le: sustituye la e final por y", description: "En palabras como gentle y simple, conserva la l: gentle → gently, no «gentlely».", examples: [
    ["gentle → gently", "suave / delicado/a → suavemente / con delicadeza"],
    ["simple → simply", "simple → de manera simple"],
  ] },
  { title: "Irregular: good → well", description: "Good es el adjetivo habitual para describir algo bueno. Well describe que una acción se realiza bien.", examples: [
    ["good → well", "bueno/a → bien"],
  ] },
  { title: "Misma forma: fast → fast, hard → hard", description: "Estos adverbios no necesitan -ly. Aprende cada palabra con una oración, porque añadir -ly puede cambiar el significado.", examples: [
    ["fast → fast", "rápido/a → rápido / rápidamente"],
    ["hard → hard", "duro/a → con esfuerzo / intensamente (según el contexto)"],
  ] },
];

export const CONTRASTS = [
  ["He is a good singer.", "Él es un buen cantante.", "He sings well.", "Él canta bien."],
  ["She is a careful driver.", "Ella es una conductora cuidadosa.", "She drives carefully.", "Ella conduce con cuidado."],
  ["He is a fast runner.", "Él es un corredor rápido.", "He runs fast.", "Él corre rápido."],
];

export const EXAMPLES = [
  ["He sings beautifully.", "Él canta maravillosamente."],
  ["He runs fast.", "Él corre rápido."],
  ["He can speak fast.", "Él puede hablar rápido."],
  ["I can eat quickly.", "Puedo comer rápidamente."],
  ["Dogs can learn tricks easily.", "Los perros pueden aprender trucos fácilmente."],
  ["Octavio can play soccer well.", "Octavio puede jugar fútbol bien."],
  ["She smiles happily.", "Ella sonríe con alegría."],
  ["Move your arms gently.", "Mueve los brazos suavemente."],
  ["Lift the weights carefully.", "Levanta las pesas con cuidado."],
  ["They work hard.", "Ellos trabajan con esfuerzo."],
];

export const PRACTICE = [
  ...[
    ["beautiful", "beautifully"], ["quick", "quickly"], ["careful", "carefully"],
    ["happy", "happily"], ["easy", "easily"], ["gentle", "gently"],
    ["good", "well"], ["fast", "fast"], ["hard", "hard"],
  ].map(([adjective, adverb]) => ({
    question: `Escribe el adverbio de modo correspondiente a ${adjective}.`,
    answers: [adverb],
    explanation: `${adjective} → ${adverb}. ${adjective === adverb ? "Mantiene la misma forma; no añadas -ly." : adjective === "good" ? "Good → well es irregular." : "El adverbio describe cómo se realiza una acción."}`,
  })),
  { question: "Completa con good o well: He is a ___ singer.", answers: ["good"], explanation: "Good describe al sustantivo singer: He is a good singer." },
  { question: "Completa con good o well: He sings ___.", answers: ["well"], explanation: "Well describe cómo canta: He sings well." },
  { question: "Completa con careful o carefully: Lift the weights ___.", answers: ["carefully"], explanation: "Carefully describe cómo levantar las pesas. Va después del objeto the weights." },
  { question: "Completa: Dogs can ___ (learn) tricks easily.", answers: ["learn"], explanation: "Después de can usa el verbo base: Dogs can learn tricks easily." },
  { question: "Completa: How ___ he play soccer? (do / does)", answers: ["does"], explanation: "How does he play soccer? Con he usa does y el verbo base play." },
  { question: "Ordena con el adverbio al final: sings / She / beautifully / .", answers: ["She sings beautifully."], explanation: "Sujeto + verbo + adverbio: She sings beautifully." },
  { question: "Ordena con el adverbio al final: can / Octavio / soccer / play / well / .", answers: ["Octavio can play soccer well."], explanation: "Sujeto + can + verbo base + objeto + adverbio. No separes play de soccer." },
  { question: "¿Qué significa He hardly works?", options: ["Él trabaja con esfuerzo.", "Él apenas trabaja.", "Él trabaja rápidamente."], answers: ["Él apenas trabaja."], explanation: "Hardly significa apenas o casi no. He works hard significa que trabaja con esfuerzo." },
  { question: "¿Cuál pregunta pide el modo de realizar una acción?", options: ["How does she sing?", "How often does she sing?", "When does she sing?"], answers: ["How does she sing?"], explanation: "How pregunta cómo; how often pregunta con qué frecuencia; when pregunta cuándo." },
];
