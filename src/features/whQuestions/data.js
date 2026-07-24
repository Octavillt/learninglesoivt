const wh = t => ({ t, r: "wh" });

// [palabra, uso, ejemplo, español]
export const WH_WORDS = [
  ["What", "Objetos / actividades", "What is that?", "¿Qué es eso?"],
  ["Where", "Lugares", "Where is he?", "¿Dónde está él?"],
  ["Why", "Razones / explicaciones", "Why are you late?", "¿Por qué llegas tarde?"],
  ["How", "Descripción / modo", "How are you?", "¿Cómo estás?"],
  ["When", "Tiempo / fechas", "When is the party?", "¿Cuándo es la fiesta?"],
  ["Who", "Personas", "Who is she?", "¿Quién es ella?"],
  ["Which", "Objetos, actividades u opciones", "Which one do you want?", "¿Cuál quieres?"],
  ["Whose", "A quién pertenece algo", "Whose backpack is this?", "¿De quién es esta mochila?"],
];

export const WH_QA = [
  { q: [wh("Where"), " is he?"], a: "He is in Alaquàs.", esp: "¿Dónde está él? — Él está en Alaquàs." },
  { q: [wh("What"), " is that?"], a: "It is a table.", esp: "¿Qué es eso? — Es una mesa." },
  { q: [wh("Who"), " is she?"], a: "She is my teacher Iris.", esp: "¿Quién es ella? — Ella es mi maestra Iris." },
  { q: [wh("When"), " is the exam?"], a: "It is at one o'clock.", esp: "¿Cuándo es el examen? — Es a la una en punto." },
  { q: [wh("What"), " is this?"], a: "This is my new mobile phone.", esp: "¿Qué es esto? — Este es mi celular nuevo." },
  { q: [wh("When"), " is the party?"], a: "The party is tomorrow.", esp: "¿Cuándo es la fiesta? — La fiesta es mañana." },
  { q: [wh("Who"), " is he?"], a: "He is my brother.", esp: "¿Quién es él? — Él es mi hermano." },
  { q: [wh("Where"), " is Maria?"], a: "She is in London.", esp: "¿Dónde está María? — Ella está en Londres." },
  { q: [wh("Where"), " is the dog?"], a: "The dog is in the park.", esp: "¿Dónde está el perro? — El perro está en el parque." },
  { q: [wh("Who"), " is this?"], a: "This is my friend Marcos.", esp: "¿Quién es este? — Este es mi amigo Marcos." },
];
