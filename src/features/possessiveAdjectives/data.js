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
  { pts: ["They forgot ", poss("their"), " keys."],         esp: "Ellos olvidaron sus llaves." },
  { pts: ["Is this ", poss("your"), " backpack?"],          esp: "¿Esta es tu mochila?" },
];

// Ejercicio — 15 oraciones resueltas (banco: my×2, your×3, his×2, her×2, its×2, our×2, their×2)
export const POSSESSIVE_EXERCISE = [
  { pts: ["I forgot ", poss("my"), " keys."],                          esp: "Olvidé mis llaves." },
  { pts: ["What is ", poss("your"), " name?"],                         esp: "¿Cuál es tu nombre?" },
  { pts: ["He has a dog. ", poss("His"), " name is Max."],             esp: "Él tiene un perro. Su nombre es Max." },
  { pts: ["She loves reading. ", poss("Her"), " books are on the table."], esp: "A ella le encanta leer. Sus libros están en la mesa." },
  { pts: ["We have a house. ", poss("Our"), " house is big."],         esp: "Tenemos una casa. Nuestra casa es grande." },
  { pts: ["They are friends. ", poss("Their"), " classroom is colorful."], esp: "Son amigos. Su salón es colorido." },
  { pts: ["The cat is eating ", poss("its"), " food."],                esp: "El gato está comiendo su comida." },
  { pts: ["I love ", poss("my"), " new shoes!"],                       esp: "¡Amo mis zapatos nuevos!" },
  { pts: ["Are those ", poss("your"), " markers?"],                    esp: "¿Esos son tus marcadores?" },
  { pts: ["He forgot ", poss("his"), " homework at home."],            esp: "Él olvidó su tarea en casa." },
  { pts: ["She is cleaning ", poss("her"), " room."],                  esp: "Ella está limpiando su cuarto." },
  { pts: ["The dog is wagging ", poss("its"), " tail."],                esp: "El perro está moviendo su cola." },
  { pts: ["We are going to ", poss("our"), " favorite park."],         esp: "Vamos a nuestro parque favorito." },
  { pts: ["The kids are drawing ", poss("their"), " family."],         esp: "Los niños están dibujando a su familia." },
  { pts: ["Don't forget ", poss("your"), " jacket or you'll freeze."], esp: "No olvides tu chamarra o te congelarás." },
];
