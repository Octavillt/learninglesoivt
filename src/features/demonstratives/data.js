const vb = t => ({ t, r: "verb_be" });
const dm = t => ({ t, r: "demo" });

export const DEMO_AFF = [
  { pts: [dm("This"), " ", vb("is"), " an apple."],    esp: "Ésta es una manzana. (cerca, 1 cosa)" },
  { pts: [dm("This"), " ", vb("is"), " my book."],     esp: "Éste es mi libro. (cerca, 1 cosa)" },
  { pts: [dm("That"), " ", vb("is"), " a car."],       esp: "Ése es un carro. (lejos, 1 cosa)" },
  { pts: [dm("That"), " ", vb("is"), " my pencil."],   esp: "Ése es mi lápiz. (lejos, 1 cosa)" },
  { pts: [dm("These"), " ", vb("are"), " apples."],    esp: "Éstas son manzanas. (cerca, 2+ cosas)" },
  { pts: [dm("These"), " ", vb("are"), " my books."],  esp: "Éstos son mis libros. (cerca, 2+ cosas)" },
  { pts: [dm("Those"), " ", vb("are"), " cars."],      esp: "Ésos son carros. (lejos, 2+ cosas)" },
  { pts: [dm("Those"), " ", vb("are"), " my friends."],esp: "Ésos son mis amigos. (lejos, 2+ cosas)" },
];

export const DEMO_QA = [
  { q: ["What ", vb("is"), " ", dm("this"), "?"],   a: ["It ", vb("is"), " a book."],    esp: "¿Qué es esto? — Es un libro." },
  { q: ["What ", vb("is"), " ", dm("that"), "?"],   a: ["It ", vb("is"), " a car."],     esp: "¿Qué es eso? — Es un carro." },
  { q: ["What ", vb("are"), " ", dm("these"), "?"], a: ["They ", vb("are"), " apples."], esp: "¿Qué son éstos? — Son manzanas." },
  { q: ["What ", vb("are"), " ", dm("those"), "?"], a: ["They ", vb("are"), " books."],  esp: "¿Qué son ésos? — Son libros." },
];

export const DEMO_TRANSFORM = [
  { s: [dm("This"), " ", vb("is"), " a cat."],      p: [dm("These"), " ", vb("are"), " cats."],      esp: "Este gato → Estos gatos" },
  { s: [dm("That"), " ", vb("is"), " a book."],     p: [dm("Those"), " ", vb("are"), " books."],     esp: "Ese libro → Esos libros" },
  { s: [dm("This"), " ", vb("is"), " a box."],      p: [dm("These"), " ", vb("are"), " boxes."],     esp: "Esta caja → Estas cajas" },
  { s: [dm("That"), " ", vb("is"), " my friend."],  p: [dm("Those"), " ", vb("are"), " my friends."],esp: "Ese amigo → Esos amigos" },
];
