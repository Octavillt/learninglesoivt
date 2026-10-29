const gen = t => ({ t, r: "gen" });

export const GEN_RULES = [
  {
    icon: "1️⃣", title: "Sustantivo singular", formula: "sustantivo + 's",
    examples: ["boy → boy's bicycle", "Octavio → Octavio's helmet", "my mom → my mom's kitchen"],
  },
  {
    icon: "2️⃣", title: "Sustantivo plural terminado en -s", formula: "sustantivo + '",
    examples: ["boys → boys' bicycles", "the teachers → the teachers' meeting", "my sisters → my sisters' friends"],
  },
  {
    icon: "3️⃣", title: "Plural irregular (no termina en -s)", formula: "sustantivo + 's",
    examples: ["children → children's teacher", "men → men's perfume", "women → women's kids", "people → people's choice"],
  },
];

// Cuándo usar 's y cuándo es más natural usar "of"
export const OF_VS_GEN = [
  {
    icon: "🧑", title: `Usa 's — personas, animales, tiempo`,
    examples: [
      { pts: [gen("Leslie's"), " car"], esp: "el carro de Leslie" },
      { pts: [gen("the dog's"), " leg"], esp: "la pata del perro" },
      { pts: [gen("today's"), " newspaper"], esp: "el periódico de hoy" },
    ],
  },
  {
    icon: "📦", title: `"Of" — ejemplos con partes de objetos`,
    examples: [
      { pts: ["the color ", { t: "of", r: "gen" }, " the car"], esp: "el color del carro" },
      { pts: ["the name ", { t: "of", r: "gen" }, " the book"], esp: "el nombre del libro" },
      { pts: ["the end ", { t: "of", r: "gen" }, " the movie"], esp: "el final de la película" },
    ],
  },
];

export const EXAMPLE_SENTENCES = [
  { pts: ["This is ", gen("Octavio's"), " helmet."],              esp: "Este es el casco de Octavio." },
  { pts: ["That is ", gen("Leslie's"), " backpack."],              esp: "Esa es la mochila de Leslie." },
  { pts: [gen("My mom's"), " kitchen is very clean."],             esp: "La cocina de mi mamá está muy limpia." },
  { pts: ["He is ", gen("my cousin's"), " boyfriend."],            esp: "Él es el novio de mi prima." },
  { pts: [gen("The student's"), " book is new."],                 esp: "El libro del estudiante es nuevo." },
  { pts: [gen("The students'"), " books are on the desk."],        esp: "Los libros de los estudiantes están en el escritorio." },
];

// Ejercicio — unir dos oraciones usando el posesivo
export const JOIN_EXERCISE = [
  {
    a: "The student has a pen. The pen is on the table.",
    pts: [gen("The student's"), " pen is on the table."],
    esp: "La pluma del estudiante está en la mesa.",
  },
  {
    a: "The man has a car. The car is in the garage.",
    pts: [gen("The man's"), " car is in the garage."],
    esp: "El carro del hombre está en el garage.",
  },
  {
    a: "My friends had a party. The party was fun.",
    pts: [gen("My friends'"), " party was fun."],
    esp: "La fiesta de mis amigos estuvo divertida.",
  },
  {
    a: "The women have kids. The kids are playing.",
    pts: [gen("The women's"), " kids are playing."],
    esp: "Los hijos de las mujeres están jugando.",
  },
  {
    a: "India has a population. The population is very large.",
    pts: [gen("India's"), " population is very large."],
    esp: "La población de India es muy grande.",
  },
  {
    a: "The children have a mother. The mother is over there.",
    pts: [gen("The children's"), " mother is over there."],
    esp: "La mamá de los niños está allá.",
  },
  {
    a: "My sisters have friends. The friends are interesting.",
    pts: [gen("My sisters'"), " friends are interesting."],
    esp: "Los amigos de mis hermanas son interesantes.",
  },
  {
    a: "The teachers had a meeting. The meeting was last week.",
    pts: [gen("The teachers'"), " meeting was last week."],
    esp: "La reunión de los maestros fue la semana pasada.",
  },
];
