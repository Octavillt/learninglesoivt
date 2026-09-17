// Helper builders — shorthand para armar tokens
const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const adj = t => ({ t, r: "adj" });

export const BEFORE_NOUN_SENTENCES = [
  { pts: ["I have a ", adj("red"), " car."],              esp: "Yo tengo un carro rojo." },
  { pts: ["She lives in a ", adj("big"), " house."],       esp: "Ella vive en una casa grande." },
  { pts: ["He is a ", adj("kind"), " person."],            esp: "Él es una persona amable." },
  { pts: ["They have an ", adj("expensive"), " watch."],    esp: "Ellos tienen un reloj caro." },
];

export const AFTER_VERB_SENTENCES = [
  { pts: [su("The car"), " ", vb("is"), " ", adj("red"), "."] ,           esp: "El carro es rojo." },
  { pts: [su("This soup"), " ", vb("is"), " ", adj("hot"), "."],          esp: "Esta sopa está caliente." },
  { pts: [su("My parents"), " ", vb("are"), " ", adj("happy"), "."],      esp: "Mis padres están felices." },
  { pts: [su("The exam"), " ", vb("is"), " ", adj("difficult"), "."],    esp: "El examen es difícil." },
];

// Categorías de adjetivos — cada una con su color de acento
export const ADJECTIVE_CATEGORIES = [
  { key: "size",  title: "Tamaño y Edad",       icon: "📏", color: "#fbbf24" },
  { key: "look",  title: "Apariencia",          icon: "👀", color: "#c084fc" },
  { key: "pers",  title: "Personalidad",        icon: "🧠", color: "#60a5fa" },
  { key: "feel",  title: "Sentimientos",        icon: "😊", color: "#fb923c" },
  { key: "weath", title: "Temperatura y Clima", icon: "🌡️", color: "#38bdf8" },
  { key: "diff",  title: "Velocidad y Dificultad", icon: "⚡", color: "#4ade80" },
  { key: "value", title: "Calidad y Valor",     icon: "💰", color: "#34d399" },
];

// [adjetivo, español, contrario, español del contrario, categoría]
export const ADJECTIVES = [
  ["big", "grande", "small", "pequeño", "size"],
  ["tall", "alto", "short", "bajo", "size"],
  ["long", "largo", "short", "corto", "size"],
  ["wide", "ancho", "narrow", "angosto", "size"],
  ["thick", "grueso", "thin", "delgado", "size"],
  ["heavy", "pesado", "light", "ligero", "size"],
  ["young", "joven", "old", "viejo", "size"],
  ["new", "nuevo", "old", "viejo (usado)", "size"],

  ["beautiful", "hermoso", "ugly", "feo", "look"],
  ["clean", "limpio", "dirty", "sucio", "look"],
  ["bright", "brillante", "dark", "oscuro", "look"],
  ["straight", "lacio", "curly", "rizado", "look"],
  ["neat", "ordenado", "messy", "desordenado", "look"],

  ["kind", "amable", "mean", "cruel", "pers"],
  ["friendly", "amigable", "unfriendly", "poco amigable", "pers"],
  ["funny", "gracioso", "serious", "serio", "pers"],
  ["smart", "inteligente", "silly", "tonto", "pers"],
  ["brave", "valiente", "cowardly", "cobarde", "pers"],
  ["honest", "honesto", "dishonest", "deshonesto", "pers"],
  ["patient", "paciente", "impatient", "impaciente", "pers"],
  ["generous", "generoso", "selfish", "egoísta", "pers"],
  ["polite", "cortés", "rude", "grosero", "pers"],

  ["happy", "feliz", "sad", "triste", "feel"],
  ["excited", "emocionado", "bored", "aburrido", "feel"],
  ["calm", "tranquilo", "nervous", "nervioso", "feel"],
  ["proud", "orgulloso", "ashamed", "avergonzado", "feel"],
  ["tired", "cansado", "energetic", "enérgico", "feel"],
  ["confident", "seguro de sí mismo", "shy", "tímido", "feel"],

  ["hot", "caliente", "cold", "frío", "weath"],
  ["warm", "cálido", "cool", "fresco", "weath"],
  ["sunny", "soleado", "cloudy", "nublado", "weath"],
  ["wet", "mojado", "dry", "seco", "weath"],
  ["windy", "ventoso", "calm", "en calma", "weath"],

  ["fast", "rápido", "slow", "lento", "diff"],
  ["easy", "fácil", "difficult", "difícil", "diff"],
  ["simple", "simple", "complicated", "complicado", "diff"],
  ["quiet", "silencioso", "loud", "ruidoso", "diff"],

  ["good", "bueno", "bad", "malo", "value"],
  ["cheap", "barato", "expensive", "caro", "value"],
  ["strong", "fuerte", "weak", "débil", "value"],
  ["full", "lleno", "empty", "vacío", "value"],
  ["rich", "rico", "poor", "pobre", "value"],
  ["safe", "seguro", "dangerous", "peligroso", "value"],
  ["soft", "suave", "hard", "duro", "value"],
];
