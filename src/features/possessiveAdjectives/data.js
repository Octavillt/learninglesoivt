const poss = t => ({ t, r: "poss" });

// [pronombre, adjetivo posesivo, español, color de acento]
export const PRONOUN_TO_POSSESSIVE = [
  { subj: "I",           form: "my",    esp: "mi / mis",         color: "#f87171" },
  { subj: "You",         form: "your",  esp: "tu / tus",         color: "#fbbf24" },
  { subj: "He",          form: "his",   esp: "su / sus (de él)", color: "#60a5fa" },
  { subj: "She",         form: "her",   esp: "su / sus (de ella)", color: "#f472b6" },
  { subj: "It",          form: "its",   esp: "su / sus (de eso)", color: "#4ade80" },
  { subj: "We",          form: "our",   esp: "nuestro/a(s)",     color: "#34d399" },
  { subj: "They",        form: "their", esp: "su / sus (de ellos)", color: "#c084fc" },
];

export const EXAMPLE_SENTENCES = [
  { pts: ["This is ", poss("my"), " mom."],                esp: "Esta es mi mamá." },
  { pts: [poss("Her"), " name is Maria."],                  esp: "Su nombre es María." },
  { pts: ["This is ", poss("his"), " helmet."],             esp: "Este es su casco (de él)." },
  { pts: ["The cat is eating ", poss("its"), " food."],     esp: "El gato está comiendo su comida." },
  { pts: ["We love ", poss("our"), " house."],              esp: "Nosotros amamos nuestra casa." },
  { pts: ["They have ", poss("their"), " keys."],         esp: "Ellos tienen sus llaves." },
  { pts: ["Is this ", poss("your"), " backpack?"],          esp: "¿Esta es tu mochila?" },
];

// [pronombre, adjetivo posesivo, pronombre posesivo, español, color de acento]
export const POSSESSIVE_PRONOUNS = [
  { subj: "I",    adj: "my",    pron: "mine",   esp: "mío / mía / míos / mías", color: "#f87171" },
  { subj: "You",  adj: "your",  pron: "yours",  esp: "tuyo / tuya(s)",          color: "#fbbf24" },
  { subj: "He",   adj: "his",   pron: "his",    esp: "suyo (de él)",           color: "#60a5fa" },
  { subj: "She",  adj: "her",   pron: "hers",   esp: "suyo (de ella)",         color: "#f472b6" },
  { subj: "It",   adj: "its",   pron: "—",      esp: "sin forma independiente habitual",     color: "#4ade80" },
  { subj: "We",   adj: "our",   pron: "ours",   esp: "nuestro/a(s)",           color: "#34d399" },
  { subj: "They", adj: "their", pron: "theirs", esp: "suyo (de ellos)",        color: "#c084fc" },
];

// Adjetivo + sustantivo  →  Pronombre solo (el sustantivo desaparece)
export const PRONOUN_CONTRAST = [
  { before: ["This is ", poss("my"), " book."],          after: ["This book is ", poss("mine"), "."],    esp: "Este libro es mío." },
  { before: ["Is that ", poss("your"), " car?"],          after: ["Is that car ", poss("yours"), "?"],    esp: "¿Ese carro es tuyo?" },
  { before: ["These are ", poss("her"), " shoes."],       after: ["These shoes are ", poss("hers"), "."], esp: "Estos zapatos son de ella." },
  { before: ["That is ", poss("our"), " house."],         after: ["That house is ", poss("ours"), "."],   esp: "Esa casa es nuestra." },
  { before: ["Those are ", poss("their"), " bags."],      after: ["Those bags are ", poss("theirs"), "."], esp: "Esas bolsas son de ellos." },
];

// El error más común: "its" (posesivo) vs "it's" (contracción de "it is" / "it has")
export const ITS_VS_ITS = [
  { form: "its", why: "Posesivo — de eso/él/ella. Sin apóstrofe.", examples: [
    { pts: ["The dog wagged ", poss("its"), " tail."], esp: "El perro movió su cola." },
    { pts: ["The company changed ", poss("its"), " name."], esp: "La empresa cambió su nombre." },
  ] },
  { form: "it's", why: `Contracción de "it is" o "it has". Con apóstrofe.`, examples: [
    { pts: ["It's raining."], esp: "Está lloviendo. (it is)" },
    { pts: ["It's been a long day."], esp: "Ha sido un día largo. (it has)" },
  ] },
];

// Ejercicio — 15 oraciones resueltas (banco: my×2, your×3, his×2, her×2, its×2, our×2, their×2)
export const POSSESSIVE_EXERCISE = [
  { pts: ["I have ", poss("my"), " keys."],                          esp: "Tengo mis llaves." },
  { pts: ["What is ", poss("your"), " name?"],                         esp: "¿Cuál es tu nombre?" },
  { pts: ["He has a dog. ", poss("His"), " name is Max."],             esp: "Él tiene un perro. Su nombre es Max." },
  { pts: ["She loves reading. ", poss("Her"), " books are on the table."], esp: "A ella le encanta leer. Sus libros están en la mesa." },
  { pts: ["We have a house. ", poss("Our"), " house is big."],         esp: "Tenemos una casa. Nuestra casa es grande." },
  { pts: ["They are friends. ", poss("Their"), " classroom is colorful."], esp: "Son amigos. Su salón es colorido." },
  { pts: ["The cat is eating ", poss("its"), " food."],                esp: "El gato está comiendo su comida." },
  { pts: ["I love ", poss("my"), " new shoes!"],                       esp: "¡Amo mis zapatos nuevos!" },
  { pts: ["Are those ", poss("your"), " markers?"],                    esp: "¿Esos son tus marcadores?" },
  { pts: ["He is doing ", poss("his"), " homework at home."],            esp: "Él está haciendo su tarea en casa." },
  { pts: ["She is cleaning ", poss("her"), " room."],                  esp: "Ella está limpiando su cuarto." },
  { pts: ["The dog is wagging ", poss("its"), " tail."],                esp: "El perro está moviendo su cola." },
  { pts: ["We are going to ", poss("our"), " favorite park."],         esp: "Vamos a nuestro parque favorito." },
  { pts: ["The kids are drawing ", poss("their"), " family."],         esp: "Los niños están dibujando a su familia." },
  { pts: ["Don't forget ", poss("your"), " jacket or you'll freeze."], esp: "No olvides tu chamarra o te congelarás." },
];
