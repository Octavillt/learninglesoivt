// Lugares naturales (natural features) de Básico V: ocho palabras clave,
// un ejemplo de México para cada una y frases para compararlas.

// [emoji, inglés, español, ejemplo en inglés, traducción]
export const FEATURES = [
  ["🏜️", "desert", "desierto", "The Altar Desert is in Sonora.", "El Desierto de Altar está en Sonora."],
  ["🌲", "forest", "bosque", "Chapultepec Forest is in Mexico City.", "El Bosque de Chapultepec está en la Ciudad de México."],
  ["⛰️", "hill", "colina, cerro", "Tepeyac Hill is in Mexico City.", "El Cerro del Tepeyac está en la Ciudad de México."],
  ["🛶", "lake", "lago", "Lake Chapala is in Jalisco.", "El Lago de Chapala está en Jalisco."],
  ["🏔️", "mountain", "montaña", "The Sierra Madre Oriental has very high mountains.", "La Sierra Madre Oriental tiene montañas muy altas."],
  ["🏞️", "river", "río", "The Usumacinta River is between Mexico and Guatemala.", "El río Usumacinta está entre México y Guatemala."],
  ["🌋", "volcano", "volcán", "Popocatépetl is an active volcano.", "El Popocatépetl es un volcán activo."],
  ["💦", "waterfall", "cascada, catarata", "Basaseachi Falls is in Chihuahua.", "La cascada de Basaseachi está en Chihuahua."],
];

// [inglés, español]
export const NAME_RULES = [
  ["Lake Chapala", "Lake va antes del nombre y sin the."],
  ["the Usumacinta River", "River va después del nombre y con the."],
  ["Basaseachi Falls", "Las cascadas famosas se nombran con Falls."],
  ["volcano → volcanoes", "Plural con -es; los demás solo agregan -s: deserts, forests, hills, lakes, mountains, rivers, waterfalls (también se acepta volcanos)."],
  ["desert ≠ dessert", "Desert (desierto) lleva una s; dessert (postre) lleva dos."],
];

// [inglés, español]
export const COUNTRY_EXAMPLES = [
  ["An example of a volcano here in Mexico is Popocatépetl.", "Un ejemplo de volcán aquí en México es el Popocatépetl."],
  ["An example of a waterfall here in Mexico is Basaseachi Falls.", "Un ejemplo de cascada aquí en México es la de Basaseachi."],
  ["An example of a lake here in Mexico is Lake Chapala.", "Un ejemplo de lago aquí en México es el Lago de Chapala."],
];

// [inglés, español, regla]
export const COMPARE = [
  ["A mountain is higher than a hill.", "Una montaña es más alta que una colina.", "high → higher"],
  ["Pico de Orizaba is higher than Popocatépetl.", "El Pico de Orizaba es más alto que el Popocatépetl.", "high → higher"],
  ["A desert is hotter than a forest.", "Un desierto es más caluroso que un bosque.", "hot → hotter (CVC)"],
  ["The Amazon is longer than the Usumacinta.", "El Amazonas es más largo que el Usumacinta.", "long → longer"],
  ["Lake Chapala is bigger than Lake Pátzcuaro.", "El Lago de Chapala es más grande que el Lago de Pátzcuaro.", "big → bigger (CVC)"],
  ["A volcano is more dangerous than a hill.", "Un volcán es más peligroso que una colina.", "more + adjetivo largo"],
  ["A hill isn't as high as a mountain.", "Una colina no es tan alta como una montaña.", "as … as"],
];

// [tiempo, inglés, español]
export const IN_TENSES = [
  ["Simple Present", "Many tourists visit the Altar Desert every year.", "Muchos turistas visitan el Desierto de Altar cada año."],
  ["Present Progressive", "Look! Popocatépetl is smoking right now.", "¡Mira! El Popocatépetl está echando humo ahora mismo."],
  ["Simple Past", "We visited Basaseachi Falls last summer.", "Visitamos la cascada de Basaseachi el verano pasado."],
  ["Going to", "I'm going to climb a hill tomorrow.", "Voy a subir una colina mañana."],
];

// [inglés, español]
export const EXTRA = [
  ["beach", "playa"], ["island", "isla"], ["ocean / sea", "océano / mar"], ["valley", "valle"],
  ["canyon", "cañón: Copper Canyon = Barranca del Cobre"], ["jungle", "selva"], ["cave", "cueva"],
];

export const PRACTICE = [
  { question: "Traduce: volcán.", answers: ["volcano", "a volcano"], explanation: "Volcano = volcán. Su plural es volcanoes." },
  { question: "Traduce: cascada.", answers: ["waterfall", "a waterfall"], explanation: "Waterfall = cascada o catarata. En nombres se usa Falls: Basaseachi Falls." },
  { question: "Traduce: lago.", answers: ["lake", "a lake"], explanation: "Lake = lago. En nombres va antes: Lake Chapala." },
  { question: "Traduce: río.", answers: ["river", "a river"], explanation: "River = río. En nombres va después y con the: the Usumacinta River." },
  { question: "Traduce: montaña.", answers: ["mountain", "a mountain"], explanation: "Mountain = montaña: es más alta que una hill." },
  { question: "¿Qué significa hill?", options: ["colina", "lago", "bosque"], answers: ["colina"], explanation: "Hill = colina o cerro: más baja que una mountain." },
  { question: "¿Qué significa forest?", options: ["desierto", "bosque", "río"], answers: ["bosque"], explanation: "Forest = bosque: un lugar con muchos árboles." },
  { question: "¿Qué lugar natural es seco y tiene mucha arena?", options: ["lake", "desert", "river"], answers: ["desert"], explanation: "Desert = desierto. Ojo: desert (desierto) lleva una s; dessert (postre) lleva dos." },
  { question: "Completa: A mountain is ___ than a hill. (high)", answers: ["higher"], explanation: "High es corto: high → higher + than." },
  { question: "Completa: A desert is ___ than a forest. (hot)", options: ["hoter", "hotter", "more hot"], answers: ["hotter"], explanation: "Hot es CVC: duplica la t y agrega -er: hotter." },
  { question: "Completa: A volcano is ___ than a hill. (dangerous)", options: ["dangerouser", "more dangerous", "most dangerous"], answers: ["more dangerous"], explanation: "Dangerous es largo: more + dangerous + than." },
  { question: "¿Cuál oración usa bien last weekend?", options: ["We visited a waterfall last weekend.", "We visit a waterfall last weekend.", "We are visiting a waterfall last weekend."], answers: ["We visited a waterfall last weekend."], explanation: "Last weekend → pasado simple: visited." },
];
