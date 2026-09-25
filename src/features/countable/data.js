export const NOUN_GROUPS = [
  { title: "🔢 Countable — Contables", rule: "Podemos contarlos como unidades: tienen singular y plural.", examples: [
    ["a taco → two tacos", "un taco → dos tacos"],
    ["an egg → three eggs", "un huevo → tres huevos"],
    ["an apple → four apples", "una manzana → cuatro manzanas"],
    ["a guava → five guavas", "una guayaba → cinco guayabas"],
    ["a bill / a coin → bills / coins", "un billete / una moneda → billetes / monedas"],
    ["a lentil / a noodle → lentils / noodles", "una lenteja / un fideo → lentejas / fideos"],
  ] },
  { title: "💧 Uncountable — Incontables", rule: "Los tratamos como una cantidad o masa, sin contar unidades directamente. En este uso no llevan a/an ni plural y concuerdan en singular.", examples: [
    ["water / juice / milk", "agua / jugo / leche"],
    ["rice / spaghetti / broccoli", "arroz / espagueti / brócoli"],
    ["money", "dinero (aunque los billetes y las monedas sí se cuentan)"],
    ["information / advice", "información / consejos (incontables en inglés)"],
  ] },
];

export const QUESTIONS = [
  ["How many tacos do you usually eat?", "I usually eat three tacos.", "¿Cuántos tacos comes normalmente? — Normalmente como tres tacos."],
  ["How many apples do you need for the salad?", "I need two apples.", "¿Cuántas manzanas necesitas para la ensalada? — Necesito dos manzanas."],
  ["How many guavas do you need for the guava water?", "I need six guavas.", "¿Cuántas guayabas necesitas para el agua de guayaba? — Necesito seis guayabas."],
  ["How much water do you want?", "I want a glass of water.", "¿Cuánta agua quieres? — Quiero un vaso de agua."],
  ["How much rice does she need?", "She needs a cup of rice.", "¿Cuánto arroz necesita ella? — Necesita una taza de arroz."],
  ["How much spaghetti do you eat?", "I eat a little spaghetti.", "¿Cuánto espagueti comes? — Como un poco de espagueti."],
];

export const QUANTIFIERS = [
  ["some", "Contables plurales e incontables; común en afirmaciones.", "I have some eggs and some milk.", "Tengo algunos huevos y un poco de leche."],
  ["any", "Contables plurales e incontables; común en preguntas y negaciones.", "Do you have any apples? I don't have any juice.", "¿Tienes manzanas? No tengo jugo."],
  ["many / much", "Many con contables plurales; much con incontables. Frecuentes en preguntas y negaciones.", "I don't have many coins. I don't have much money.", "No tengo muchas monedas. No tengo mucho dinero."],
  ["a lot of", "Muchos/as o mucho/a; sirve con ambos tipos y es natural en afirmaciones.", "We have a lot of tacos and a lot of water.", "Tenemos muchos tacos y mucha agua."],
  ["a few / a little", "A few con contables plurales; a little con incontables.", "I need a few eggs and a little milk.", "Necesito unos cuantos huevos y un poco de leche."],
];

export const UNITS = [
  ["a bottle of water → two bottles of water", "una botella de agua → dos botellas de agua"],
  ["a glass of juice → three glasses of juice", "un vaso de jugo → tres vasos de jugo"],
  ["a cup of rice → two cups of rice", "una taza de arroz → dos tazas de arroz"],
  ["a slice of bread → two slices of bread", "una rebanada de pan → dos rebanadas de pan"],
  ["a piece of advice → two pieces of advice", "un consejo → dos consejos"],
];

export const PRACTICE = [
  { question: "Clasifica water: countable o uncountable.", options: ["countable", "uncountable"], answers: ["uncountable"], explanation: "Water es incontable: some water o a bottle of water." },
  { question: "Clasifica lentils: countable o uncountable.", options: ["countable", "uncountable"], answers: ["countable"], explanation: "Lentil es contable: one lentil, two lentils. Rice y spaghetti son incontables." },
  { question: "Completa con a o an: I want ___ egg.", answers: ["an"], explanation: "An egg: egg empieza con sonido vocálico." },
  { question: "Completa con a o an: I want ___ guava.", answers: ["a"], explanation: "A guava: guava empieza con sonido consonántico." },
  { question: "Completa con How many o How much: ___ tacos do you usually eat?", answers: ["How many"], explanation: "How many tacos…? Tacos es un sustantivo contable plural." },
  { question: "Completa con How many o How much: ___ money do you need?", answers: ["How much"], explanation: "How much money…? Money es incontable; coins y bills son contables." },
  { question: "Completa con some o any: I don't have ___ milk.", answers: ["any"], explanation: "I don't have any milk. Any es habitual en negaciones." },
  { question: "Completa con some o any: I need ___ water.", answers: ["some"], explanation: "I need some water. Some expresa una cantidad no exacta en esta afirmación." },
  { question: "Completa con a few o a little: We need ___ eggs.", answers: ["a few"], explanation: "A few eggs: eggs es contable plural. A little se usa con incontables." },
  { question: "Completa con many o much: There isn't ___ rice.", answers: ["much"], explanation: "There isn't much rice. Rice es incontable y concuerda en singular." },
  { question: "Escribe el plural de la unidad: two ___ of water (bottle).", answers: ["bottles"], explanation: "Two bottles of water. Se pluraliza la unidad bottles, no water." },
  { question: "Ordena: rice / does / How much / she / need / ?", answers: ["How much rice does she need?"], explanation: "How much + incontable + does + sujeto + verbo base. Con does se usa need, no needs." },
];
