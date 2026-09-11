// El módulo muestra un tema a la vez, así que el texto de las pestañas
// cerradas no existe en el DOM. Cuando se llega desde el buscador global hay
// que abrir primero la pestaña que contiene el término para que
// scrollToAndHighlight pueda encontrarlo y resaltarlo.
import {
  ADJECTIVE_ORDER, DIRECTIONS, DIRECTION_MOVES, DIRECTION_PLACES,
  FEELINGS, SOCIAL_MEDIA, TECHNOLOGY, VERB_FORMS,
} from "./data";

const normalize = value => value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

const columns = (rows, indexes) => rows.flatMap(row => indexes.map(index => row[index]));

// El orden importa: primero el vocabulario (términos concretos) y al final la
// gramática, cuyas palabras clave son más generales.
const TAB_TERMS = [
  ["technology", columns(TECHNOLOGY, [0, 1]).concat(["tecnologia", "technology equipment", "aparatos"])],
  ["social", columns(SOCIAL_MEDIA, [0, 1]).concat(["social media", "redes sociales"])],
  ["directions", columns(DIRECTIONS, [0, 1])
    .concat(columns(DIRECTION_MOVES, [1, 2]), columns(DIRECTION_PLACES, [1, 2]))
    .concat(["directions", "indicaciones", "como llegar", "mapa", "ruta"])],
  ["extras", columns(FEELINGS, [0, 1]).concat(columns(ADJECTIVE_ORDER, [0, 1]), [
    "sentimientos", "ed ing", "-ed", "-ing", "orden de adjetivos", "adjective order", "cinta verde",
  ])],
  ["there", ["there is", "there are", "there isn't", "there aren't", "is there", "are there",
    "hay", "incontable", "contable", "some", "any", "a an", "singular", "plural", "how many"]],
  ["tenses", columns(VERB_FORMS, [0, 1, 2, 3, 4]).concat([
    "simple present", "present progressive", "present continuous", "presente simple", "presente progresivo",
    "rutina", "rutinas", "habito", "ahora", "right now", "tercera persona", "-s -es", "terminacion",
    "adverbios de frecuencia", "frequency adverbs", "expresion de tiempo", "time expression",
    "participio", "participle", "pasado", "auxiliar", "do does", "am is are", "verbo de estado",
  ])],
];

export function findTabForTerm(term) {
  const target = normalize(term ?? "").trim();
  if (target.length < 3) return null;
  const match = TAB_TERMS.find(([, terms]) => terms.some(item => {
    const keyword = normalize(item);
    return keyword.includes(target) || target.includes(keyword);
  }));
  return match?.[0] ?? null;
}
