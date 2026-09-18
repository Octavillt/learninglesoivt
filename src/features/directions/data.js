const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb" });
const pp = t => ({ t, r: "prep" });
const wh = t => ({ t, r: "wh" });
const aux = t => ({ t, r: "aux" });

export const DIRECTION_PHRASES = [
  { icon: "⬆️", phrase: "Go straight ahead", esp: "Sigue derecho / todo recto" },
  { icon: "↩️", phrase: "Turn left", esp: "Da vuelta a la izquierda" },
  { icon: "↪️", phrase: "Turn right", esp: "Da vuelta a la derecha" },
  { icon: "🔄", phrase: "Turn around", esp: "Da la vuelta / regresa" },
  { icon: "🌉", phrase: "Go over the bridge", esp: "Cruza / pasa por el puente" },
  { icon: "🚶", phrase: "Go past the…", esp: "Pasa de largo el/la…" },
  { icon: "◀️¹", phrase: "Take the first left", esp: "Toma la primera a la izquierda" },
  { icon: "▶️¹", phrase: "Take the first right", esp: "Toma la primera a la derecha" },
  { icon: "◀️²", phrase: "Take the second left", esp: "Toma la segunda a la izquierda" },
  { icon: "▶️²", phrase: "Take the second right", esp: "Toma la segunda a la derecha" },
];

export const PLACE_PHRASES = [
  { phrase: "on the corner", esp: "en la esquina" },
  { phrase: "next to", esp: "al lado de" },
  { phrase: "across from", esp: "enfrente de" },
  { phrase: "between", esp: "entre dos lugares" },
  { phrase: "at the traffic light", esp: "en el semáforo" },
  { phrase: "at the intersection", esp: "en la intersección" },
];

export const ASKING_DIRECTIONS = [
  {
    pts: [wh("Where"), " ", aux("is"), " the hospital?"],
    esp: "¿Dónde está el hospital?",
  },
  {
    pts: [wh("How"), " ", aux("do"), " ", su("I"), " ", vb("get"), " to the high school?"],
    esp: "¿Cómo llego a la preparatoria?",
  },
  {
    pts: [aux("Can"), " you ", vb("tell"), " me the way to the gym?"],
    esp: "¿Puedes decirme cómo llegar al gimnasio?",
  },
  {
    pts: [aux("Is"), " there a coffee shop near here?"],
    esp: "¿Hay una cafetería cerca de aquí?",
  },
];

export const ROUTES = [
  {
    title: "From the bus stop to the gym",
    esp: "De la parada de autobús al gimnasio",
    color: "#38bdf8",
    start: "en River Street, junto a la parada de autobús, mirando al norte (↑).",
    steps: [
      "Go straight on River Street to Main Street.",
      "Turn right onto Main Street.",
      "Go past the coffee shop and turn right onto Park Avenue.",
      "Go straight. The gym is on your left.",
    ],
  },
  {
    title: "From the gym to the hospital",
    esp: "Del gimnasio al hospital",
    color: "#f472b6",
    start: "en Park Avenue, junto al gimnasio, mirando al norte (↑).",
    steps: [
      "Go straight on Park Avenue to Main Street.",
      "Turn left onto Main Street and go past the coffee shop.",
      "Turn right onto River Street.",
      "Go straight. The hospital is on your left.",
    ],
  },
  {
    title: "From the hospital to the high school",
    esp: "Del hospital a la preparatoria",
    color: "#4ade80",
    start: "en River Street, junto al hospital, mirando al sur (↓).",
    steps: [
      "Go straight on River Street to Main Street.",
      "Turn left onto Main Street.",
      "Go past the coffee shop and turn left onto Park Avenue.",
      "Go straight. The high school is on your right.",
    ],
  },
];

export const EXAMPLES = [
  {
    pts: [vb("Go"), " straight ahead and ", vb("turn"), " ", pp("left"), " at the traffic light."],
    esp: "Sigue derecho y da vuelta a la izquierda en el semáforo.",
  },
  {
    pts: [vb("Take"), " the second street ", pp("on your right"), "."],
    esp: "Toma la segunda calle a tu derecha.",
  },
  {
    pts: [vb("Go"), " ", pp("past"), " the bank. The library is ", pp("on the corner"), "."],
    esp: "Pasa el banco. La biblioteca está en la esquina.",
  },
];

export const MISTAKES = [
  { wrong: "Turn to left.", right: "Turn left.", note: "Después de turn no usamos to." },
  { wrong: "Go straight in Main Street.", right: "Go straight on Main Street.", note: "Para nombrar una calle usamos on." },
  { wrong: "Take the second right street.", right: "Take the second street on the right.", note: "Con street, la posición natural es on the right/left." },
];

export const PRACTICE = [
  { q: "Da vuelta a la derecha.", answer: "Turn right." },
  { q: "Toma la primera a la izquierda.", answer: "Take the first left." },
  { q: "Pasa de largo la cafetería.", answer: "Go past the coffee shop." },
  { q: "El gimnasio está en la esquina.", answer: "The gym is on the corner." },
];
