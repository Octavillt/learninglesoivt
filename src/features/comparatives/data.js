// Comparativos de Básico V: comparan dos personas, animales o cosas.
// Adjetivo corto → -er + than; adjetivo largo → more + adjetivo + than.

// Helper builders — shorthand para armar tokens
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const adj = t => ({ t, r: "adj" });
const cmp = t => ({ t, r: "comp" });

export const SHORT_EXAMPLES = [
  { pts: [su("A rabbit"), " ", vb("is"), " ", adj("bigg"), cmp("er"), " ", cmp("than"), " a hamster."], esp: "Un conejo es más grande que un hámster." },
  { pts: [su("Snails"), " ", vb("are"), " ", adj("slow"), cmp("er"), " ", cmp("than"), " ants."], esp: "Los caracoles son más lentos que las hormigas." },
  { pts: [su("Dogs"), " ", vb("are"), " ", cmp("better"), " ", cmp("than"), " birds."], esp: "Los perros son mejores que los pájaros." },
  { pts: [su("I"), " ", vb("am"), " ", adj("happi"), cmp("er"), " ", cmp("than"), " you."], esp: "Yo estoy más feliz que tú." },
  { pts: [su("Israel"), " ", vb("is"), " ", adj("tall"), cmp("er"), " ", cmp("than"), " Eduardo."], esp: "Israel es más alto que Eduardo." },
  { pts: [su("Today"), " ", vb("is"), " ", adj("sunni"), cmp("er"), " ", cmp("than"), " yesterday."], esp: "Hoy está más soleado que ayer." },
];

export const LONG_EXAMPLES = [
  { pts: [su("Crocodiles"), " ", vb("are"), " ", cmp("more"), " ", adj("dangerous"), " ", cmp("than"), " panthers."], esp: "Los cocodrilos son más peligrosos que las panteras." },
  { pts: [su("A spider"), " ", vb("is"), " ", cmp("more"), " ", adj("poisonous"), " ", cmp("than"), " a snake."], esp: "Una araña es más venenosa que una serpiente." },
  { pts: [su("Leslie"), " ", vb("is"), " ", cmp("more"), " ", adj("patient"), " ", cmp("than"), " Octavio."], esp: "Leslie es más paciente que Octavio." },
  { pts: [su("This exam"), " ", vb("is"), " ", cmp("more"), " ", adj("difficult"), " ", cmp("than"), " the last one."], esp: "Este examen es más difícil que el anterior." },
  { pts: [su("A car"), " ", vb("is"), " ", cmp("more"), " ", adj("expensive"), " ", cmp("than"), " a motorcycle."], esp: "Un coche es más caro que una motocicleta." },
];

// Reglas de escritura del comparativo corto. pairs = [base, comparativo].
export const SPELLING_RULES = [
  { title: "Regla general", rule: "Agrega -er.", pairs: [["fast", "faster"], ["quick", "quicker"], ["tall", "taller"], ["cheap", "cheaper"]] },
  { title: "Termina en -e", rule: "Agrega solo -r.", pairs: [["cute", "cuter"], ["wide", "wider"], ["nice", "nicer"], ["large", "larger"]] },
  {
    title: "Termina en consonante + vocal + consonante (CVC)",
    rule: "Duplica la última consonante y agrega -er.",
    pairs: [["big", "bigger"], ["wet", "wetter"], ["hot", "hotter"], ["thin", "thinner"]],
    note: "La w no se duplica: slow → slower, new → newer. Con dos vocales antes de la consonante tampoco: cheap → cheaper.",
  },
  { title: "Dos sílabas que terminan en -y", rule: "Cambia la -y por -i y agrega -er.", pairs: [["happy", "happier"], ["sunny", "sunnier"], ["easy", "easier"], ["funny", "funnier"]] },
];

// [base, comparativo, español]
export const IRREGULARS = [
  ["good", "better", "bueno → mejor"],
  ["bad", "worse", "malo → peor"],
  ["far", "farther / further", "lejos → más lejos"],
];

export const LESS_EXAMPLES = [
  { pts: [su("A motorcycle"), " ", vb("is"), " ", cmp("less"), " ", adj("expensive"), " ", cmp("than"), " a car."], esp: "Una motocicleta es menos cara que un coche." },
  { pts: [su("Panthers"), " ", vb("are"), " ", cmp("less"), " ", adj("dangerous"), " ", cmp("than"), " crocodiles."], esp: "Las panteras son menos peligrosas que los cocodrilos." },
];

export const EQUAL_EXAMPLES = [
  { pts: [su("Israel"), " ", vb("is"), " ", cmp("as"), " ", adj("tall"), " ", cmp("as"), " Eduardo."], esp: "Israel es tan alto como Eduardo." },
  { pts: [su("A hamster"), " ", vb("isn't"), " ", cmp("as"), " ", adj("big"), " ", cmp("as"), " a rabbit."], esp: "Un hámster no es tan grande como un conejo." },
  { pts: [su("This exam"), " ", vb("isn't"), " ", cmp("as"), " ", adj("difficult"), " ", cmp("as"), " the last one."], esp: "Este examen no es tan difícil como el anterior." },
];

// [pregunta, respuesta, español]
export const QUESTIONS = [
  ["Is a rabbit bigger than a hamster?", "Yes, it is.", "¿Un conejo es más grande que un hámster? — Sí."],
  ["Are snails faster than ants?", "No, they aren't. They're slower.", "¿Los caracoles son más rápidos que las hormigas? — No. Son más lentos."],
  ["Which is more dangerous, a crocodile or a panther?", "A crocodile is more dangerous.", "¿Cuál es más peligroso, un cocodrilo o una pantera? — El cocodrilo."],
  ["Who is taller, Israel or Leslie?", "Israel is taller than Leslie.", "¿Quién es más alto, Israel o Leslie? — Israel es más alto que Leslie."],
];

// [inglés, español]
export const INTENSIFIERS = [
  ["A crocodile is much more dangerous than a snail.", "Un cocodrilo es mucho más peligroso que un caracol."],
  ["Leslie is a little taller than Argelia.", "Leslie es un poco más alta que Argelia."],
  ["My new phone is a lot better than my old phone.", "Mi teléfono nuevo es mucho mejor que el viejo."],
];

// [inglés, español]
export const PAST_EXAMPLES = [
  ["Yesterday was hotter than today.", "Ayer hizo más calor que hoy."],
  ["The movie was more interesting than the book.", "La película fue más interesante que el libro."],
  ["My old phone was cheaper than my new phone.", "Mi teléfono viejo era más barato que el nuevo."],
  ["Last week's exam was easier than this one.", "El examen de la semana pasada fue más fácil que este."],
];

export const RULE_LABELS = { general: "+ -er", e: "+ -r", cvc: "CVC: duplica + -er", y: "-y → -ier", long: "more + adjetivo", irregular: "Irregular" };

// [adjetivo, comparativo, español, regla]
export const ADJECTIVE_BANK = [
  ["fast", "faster", "rápido", "general"],
  ["quick", "quicker", "rápido", "general"],
  ["tall", "taller", "alto", "general"],
  ["short", "shorter", "bajo, corto", "general"],
  ["old", "older", "viejo, mayor", "general"],
  ["young", "younger", "joven", "general"],
  ["small", "smaller", "pequeño", "general"],
  ["cheap", "cheaper", "barato", "general"],
  ["slow", "slower", "lento", "general"],
  ["strong", "stronger", "fuerte", "general"],
  ["long", "longer", "largo", "general"],
  ["cold", "colder", "frío", "general"],
  ["new", "newer", "nuevo", "general"],
  ["clean", "cleaner", "limpio", "general"],

  ["cute", "cuter", "lindo, tierno", "e"],
  ["wide", "wider", "ancho", "e"],
  ["nice", "nicer", "agradable, amable", "e"],
  ["large", "larger", "grande", "e"],
  ["safe", "safer", "seguro", "e"],

  ["big", "bigger", "grande", "cvc"],
  ["wet", "wetter", "mojado", "cvc"],
  ["hot", "hotter", "caliente, caluroso", "cvc"],
  ["thin", "thinner", "delgado", "cvc"],
  ["fat", "fatter", "gordo", "cvc"],
  ["sad", "sadder", "triste", "cvc"],

  ["happy", "happier", "feliz", "y"],
  ["sunny", "sunnier", "soleado", "y"],
  ["easy", "easier", "fácil", "y"],
  ["funny", "funnier", "gracioso", "y"],
  ["busy", "busier", "ocupado", "y"],
  ["heavy", "heavier", "pesado", "y"],
  ["pretty", "prettier", "bonito", "y"],
  ["dirty", "dirtier", "sucio", "y"],

  ["dangerous", "more dangerous", "peligroso", "long"],
  ["poisonous", "more poisonous", "venenoso", "long"],
  ["expensive", "more expensive", "caro", "long"],
  ["beautiful", "more beautiful", "hermoso", "long"],
  ["interesting", "more interesting", "interesante", "long"],
  ["difficult", "more difficult", "difícil", "long"],
  ["famous", "more famous", "famoso", "long"],
  ["patient", "more patient", "paciente", "long"],
  ["comfortable", "more comfortable", "cómodo", "long"],
  ["important", "more important", "importante", "long"],

  ["good", "better", "bueno → mejor", "irregular"],
  ["bad", "worse", "malo → peor", "irregular"],
  ["far", "farther / further", "lejos → más lejos", "irregular"],
];

export const PRACTICE = [
  { question: "¿Cuál es el comparativo de big?", options: ["bigger", "biger", "more big"], answers: ["bigger"], explanation: "Big es CVC (consonante + vocal + consonante): duplica la g y agrega -er." },
  { question: "Escribe el comparativo de happy.", answers: ["happier"], explanation: "Happy tiene dos sílabas y termina en -y: cambia la y por i y agrega -er." },
  { question: "Escribe el comparativo de cute.", answers: ["cuter"], explanation: "Cute termina en -e: solo agrega -r." },
  { question: "¿Cuál es correcta?", options: ["more dangerous", "dangerouser", "more dangerouser"], answers: ["more dangerous"], explanation: "Dangerous es un adjetivo largo: more + adjetivo, sin -er." },
  { question: "Escribe el comparativo de good.", answers: ["better"], explanation: "Good es irregular: good → better." },
  { question: "Escribe el comparativo de bad.", answers: ["worse"], explanation: "Bad es irregular: bad → worse." },
  { question: "Completa: A rabbit is bigger ___ a hamster.", options: ["than", "that", "then"], answers: ["than"], explanation: "En las comparaciones, «que» se dice than." },
  { question: "¿Cuál es correcta?", options: ["Dogs are better than birds.", "Dogs are more better than birds.", "Dogs are gooder than birds."], answers: ["Dogs are better than birds."], explanation: "Better ya es comparativo: no se combina con more." },
  { question: "Escribe el comparativo de fast.", answers: ["faster"], explanation: "Regla general: agrega -er." },
  { question: "Escribe el comparativo de wet.", answers: ["wetter"], explanation: "Wet es CVC: duplica la t y agrega -er." },
  { question: "Escribe el comparativo de slow.", answers: ["slower"], explanation: "Slow termina en w y la w no se duplica: solo agrega -er." },
  { question: "Escribe un comparativo de far.", answers: ["farther", "further"], explanation: "Far tiene dos comparativos, farther y further; los dos significan «más lejos»." },
  { question: "Completa con el comparativo de sunny: Today is ___ than yesterday.", answers: ["sunnier"], explanation: "Sunny termina en -y: sunnier." },
  { question: "Completa: A motorcycle is ___ expensive than a car. (menos)", answers: ["less"], explanation: "Less + adjetivo + than = menos … que." },
  { question: "¿Cuál es correcta?", options: ["Israel is as tall as Eduardo.", "Israel is as taller as Eduardo.", "Israel is as tall than Eduardo."], answers: ["Israel is as tall as Eduardo."], explanation: "En as … as el adjetivo va en su forma base." },
  { question: "Traduce: Los caracoles son más lentos que las hormigas.", answers: ["Snails are slower than ants."], explanation: "Snails are slower than ants. Slow es corto: slower + than." },
  { question: "Traduce: Una araña es más venenosa que una serpiente.", answers: ["A spider is more poisonous than a snake."], explanation: "A spider is more poisonous than a snake. Poisonous es largo: more + poisonous + than." },
  { question: "Traduce: Yo estoy más feliz que tú.", answers: ["I am happier than you.", "I'm happier than you."], explanation: "I am happier than you. Happy → happier." },
];
