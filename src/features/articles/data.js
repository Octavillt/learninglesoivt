const art = t => ({ t, r: "art" });
const zero = () => ({ t: "Ø", r: "zero" });

// Categorías de sustantivo — qué palabras cuentan como "sustantivo"
export const NOUN_EXAMPLES = [
  { icon: "🧑", title: "Personas", words: [["teacher", "maestro/a"], ["student", "estudiante"], ["friend", "amigo/a"]] },
  { icon: "📍", title: "Lugares", words: [["city", "ciudad"], ["school", "escuela"], ["park", "parque"]] },
  { icon: "🐶", title: "Animales", words: [["dog", "perro"], ["cat", "gato"], ["bird", "pájaro"]] },
  { icon: "📦", title: "Cosas / objetos", words: [["book", "libro"], ["car", "carro"], ["phone", "teléfono"]] },
  { icon: "💭", title: "Ideas / conceptos", words: [["love", "amor"], ["idea", "idea"], ["freedom", "libertad"]] },
];

// Categorías de "sin artículo" — cada una con su explicación y ejemplos
export const ZERO_RULES = [
  {
    icon: "🔵", title: "Adjetivo solo (sin sustantivo después)",
    why: "Con to be + adjetivo, sin un sustantivo, no usamos a/an: she is busy. Con un sustantivo sí: she is a busy student.",
    examples: ["Are you Ø busy?", "Is Bob Ø thin?"],
  },
  {
    icon: "🔢", title: "Sustantivos plurales, en general",
    why: `"a" y "an" significan literalmente "uno" — solo se usan con UN sustantivo en singular. Para hablar de varios en general (no uno específico), no se usa artículo.`,
    examples: ["Do you like Ø apples?", "I have Ø noisy neighbors."],
  },
  {
    icon: "☁️", title: "Sustantivos incontables / idiomas",
    why: `Los sustantivos incontables (agua, café, información...) no se pueden contar "uno, dos, tres", así que tampoco pueden llevar "a/an" (= uno). Los idiomas (English, Spanish...) siguen la misma regla.`,
    examples: ["Kenji is studying Ø English.", "I like Ø coffee."],
  },
  {
    icon: "📍", title: "Nombres propios / lugares",
    why: "Un nombre propio (una persona, una ciudad, la mayoría de países) ya señala algo específico y único por sí mismo, así que no necesita artículo para identificarlo.",
    examples: ["He lives in Ø Alaska.", "She is in Ø London."],
  },
  {
    icon: "🙋", title: "Después de un adjetivo posesivo (my, your...)",
    why: `No combines a/an/the con my, your, his, her, its, our o their delante del mismo sustantivo: my book, no the my book.`,
    examples: ["Clean my Ø apartment.", "Are these your Ø shoes?"],
  },
];

// Excepciones del sonido en a/an
export const SOUND_EXCEPTIONS = [
  { word: "an hour", why: "La H es muda → suena como vocal", icon: "🤫" },
  { word: "a university", why: "La U suena \"y\" (/juː/) → suena como consonante", icon: "🗣️" },
  { word: "a European trip", why: "La EU suena \"y\" → suena como consonante", icon: "🗣️" },
  { word: "an honest man", why: "La H es muda → suena como vocal", icon: "🤫" },
];

// Ejercicio completo — [pts, español]
export const ARTICLE_EXERCISE = [
  { pts: ["Look at ", art("the"), " moon."], esp: "Mira la luna." },
  { pts: ["This is a book. ", art("The"), " book is red."], esp: "Este es un libro. El libro es rojo." },
  { pts: ["Sam is ", art("a"), " university student."], esp: "Sam es estudiante universitario." },
  { pts: ["This is ", art("a"), " car."], esp: "Esto es un carro." },
  { pts: ["Are you ", zero(), " busy?"], esp: "¿Estás ocupado?" },
  { pts: ["Is Bob ", zero(), " thin?"], esp: "¿Bob es delgado?" },
  { pts: ["This is ", art("an"), " Italian sports car."], esp: "Este es un auto deportivo italiano." },
  { pts: ["Kenji is studying ", zero(), " English."], esp: "Kenji está estudiando inglés." },
  { pts: ["Are you carrying ", art("an"), " umbrella?"], esp: "¿Estás llevando un paraguas?" },
  { pts: ["My father is reading ", art("a"), " newspaper."], esp: "Mi papá está leyendo un periódico." },
  { pts: ["There is ", art("an"), " airport about five miles from here."], esp: "Hay un aeropuerto a unas cinco millas de aquí." },
  { pts: ["This is ", art("a"), " pair of gloves."], esp: "Este es un par de guantes." },
  { pts: ["This is ", art("an"), " interesting movie."], esp: "Esta es una película interesante." },
  { pts: ["This is ", art("a"), " kangaroo."], esp: "Este es un canguro." },
  { pts: ["Alice drives ", art("an"), " old car."], esp: "Alice maneja un carro viejo." },
  { pts: ["Do you like ", zero(), " apples?"], esp: "¿Te gustan las manzanas?" },
  { pts: ["He is ", art("an"), " artist."], esp: "Él es artista." },
  { pts: ["Is there ", art("a"), " big window in your kitchen?"], esp: "¿Hay una ventana grande en tu cocina?" },
  { pts: ["He lives in ", zero(), " Alaska."], esp: "Él vive en Alaska." },
  { pts: ["Is Fred reading ", art("an"), " exciting story?"], esp: "¿Fred está leyendo una historia emocionante?" },
  { pts: ["This is ", art("a"), " liter of grape juice."], esp: "Este es un litro de jugo de uva." },
  { pts: ["Are these your ", zero(), " shoes?"], esp: "¿Estos son tus zapatos?" },
  { pts: ["I have ", zero(), " noisy neighbors."], esp: "Tengo vecinos ruidosos." },
  { pts: ["He is drinking ", art("a"), " cup of coffee."], esp: "Él está tomando una taza de café." },
  { pts: ["Please help me clean my ", zero(), " apartment."], esp: "Ayúdame a limpiar mi departamento." },
  { pts: ["Is Albert ", art("a"), " happy man?"], esp: "¿Albert es un hombre feliz?" },
  { pts: ["The meeting is in ", art("an"), " hour."], esp: "La reunión es dentro de una hora." },
];
