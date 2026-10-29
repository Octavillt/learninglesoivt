const wh = t => ({ t, r: "wh" });

// [palabra, traducción corta, uso, ejemplo, español]
export const WH_WORDS = [
  ["What", "¿Qué?", "Objetos / actividades", "What is that?", "¿Qué es eso?"],
  ["Where", "¿Dónde?", "Lugares", "Where is he?", "¿Dónde está él?"],
  ["Why", "¿Por qué?", "Razones / explicaciones", "Why are you late?", "¿Por qué llegas tarde?"],
  ["How", "¿Cómo?", "Descripción / modo", "How are you?", "¿Cómo estás?"],
  ["When", "¿Cuándo?", "Tiempo / fechas", "When is the party?", "¿Cuándo es la fiesta?"],
  ["Who", "¿Quién?", "Personas", "Who is she?", "¿Quién es ella?"],
  ["Which", "¿Cuál?", "Objetos, actividades u opciones", "Which one is yours?", "¿Cuál es tuyo?"],
  ["Whose", "¿De quién?", "A quién pertenece algo", "Whose backpack is this?", "¿De quién es esta mochila?"],
  ["What time", "¿Qué hora?", "Preguntar la hora", "What time is it?", "¿Qué hora es?"],
];

// Mapa palabra WH → traducción corta, derivado de WH_WORDS para no repetir datos
export const WH_TRANSLATIONS = Object.fromEntries(WH_WORDS.map(([word, translation]) => [word, translation]));

export const WH_QA = [
  { q: [wh("Where"), " is he?"], a: "He is in Alaquàs.", esp: "¿Dónde está él? — Él está en Alaquàs." },
  { q: [wh("What"), " is that?"], a: "It is a table.", esp: "¿Qué es eso? — Es una mesa." },
  { q: [wh("Who"), " is she?"], a: "She is my teacher Iris.", esp: "¿Quién es ella? — Ella es mi maestra Iris." },
  { q: [wh("When"), " is the exam?"], a: "It is at one o'clock.", esp: "¿Cuándo es el examen? — Es a la una en punto." },
  { q: [wh("What"), " is this?"], a: "This is my new mobile phone.", esp: "¿Qué es esto? — Este es mi celular nuevo." },
  { q: [wh("When"), " is the party?"], a: "The party is tomorrow.", esp: "¿Cuándo es la fiesta? — La fiesta es mañana." },
  { q: [wh("Who"), " is he?"], a: "He is my brother.", esp: "¿Quién es él? — Él es mi hermano." },
  { q: [wh("Where"), " is Leslie?"], a: "She is in London.", esp: "¿Dónde está Leslie? — Ella está en Londres." },
  { q: [wh("Where"), " is the dog?"], a: "The dog is in the park.", esp: "¿Dónde está el perro? — El perro está en el parque." },
  { q: [wh("Who"), " is this?"], a: "This is my friend Marcos.", esp: "¿Quién es este? — Este es mi amigo Marcos." },
];
