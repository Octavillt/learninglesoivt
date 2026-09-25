import { FOOD_GROUPS, FOOD_ADJECTIVES } from "../foodGroups/data";
import { EXERCISE_WORDS } from "../exerciseWords/data";
import { FORMATION_RULES } from "../adverbsManner/data";

export const STUDY_TOPICS = [
  {
    id: "can", title: "Can / Can't", levelId: "basico4", topicId: "can",
    rules: [
      "Can expresa habilidad: poder o saber hacer algo. Todos los sujetos usan can + verbo base, sin to ni -s: He can sing, no He can sings.",
      "Negación: cannot (una palabra) o can't. Pregunta: Can + sujeto + verbo base? No uses do/does junto con can.",
      "Respuestas cortas: Yes, I can / No, I can't; Yes, she can / No, she can't. Sustituye nombres plurales por they.",
    ],
    vocab: [["can", "puede / sabe hacer"], ["can't = cannot", "no puede / no sabe hacer"], ["What can you do?", "¿Qué sabes hacer?"]],
    examples: [["He can sing, but he can't fly.", "Él puede cantar, pero no puede volar."], ["Can dogs fly? — No, they can't.", "¿Pueden los perros volar? — No."], ["What can you do? — I can swim.", "¿Qué sabes hacer? — Sé nadar."]],
    mistake: "No: Does she can dance? → Sí: Can she dance?",
  },
  {
    id: "countable", title: "Countable / Uncountable nouns", levelId: "basico4", topicId: "countable",
    rules: [
      "Contables: a taco, an egg; two tacos, three eggs. A/an depende del sonido inicial. Incontables: water, rice, milk, bread, money; no llevan a/an ni plural en este uso.",
      "How many + contable plural; how much + incontable. Con do/does usa verbo base: How much rice does she need?",
      "Some es frecuente en afirmaciones y ofrecimientos; any, en preguntas y negaciones. Many / a few con plurales contables; much / a little con incontables; a lot of con ambos.",
      "Para contar porciones usa una unidad: two bottles of water, three slices of bread. Se pluraliza bottles o slices, no water ni bread.",
    ],
    vocab: [["eggs / apples / lentils / noodles", "contables: huevos / manzanas / lentejas / fideos"], ["rice / spaghetti / milk / money", "incontables: arroz / espagueti / leche / dinero"], ["some / any", "cantidad no exacta; el uso depende del tipo de oración"]],
    examples: [["How many apples do you need? — Three.", "¿Cuántas manzanas necesitas? — Tres."], ["How much water do you want? — A glass.", "¿Cuánta agua quieres? — Un vaso."], ["I don't have any milk, but I have some eggs.", "No tengo leche, pero tengo algunos huevos."]],
    mistake: "No: two breads → Sí: two slices of bread (dos rebanadas de pan). Money es incontable; coins y bills son contables.",
  },
  {
    id: "food", title: "Food groups", levelId: "basico4", topicId: "foodGroups",
    rules: [
      "Memoriza los cinco grupos de la actividad: Dairy, Fats and sugars, Fruit and vegetables, Carbohydrates y Protein. Es la clasificación del pizarrón; un alimento puede aportar varios nutrientes.",
      "Para gustos generales usa I like + plural contable o incontable: I like apples / I like rice. Con he/she/it: likes; en negación: doesn't like.",
      "Sweet y spicy describen sabores; delicious y disgusting expresan una valoración. Para un desagrado amable puedes decir It's not my favorite.",
    ],
    vocab: [...FOOD_GROUPS.map(group => [group.name, `${group.translation}: ${group.foods.map(([en, es]) => `${en} (${es})`).join(", ")}`]), ...FOOD_ADJECTIVES.map(([en, es]) => [en, es])],
    examples: [["Milk and cheese are dairy products.", "La leche y el queso son productos lácteos."], ["She likes spicy food.", "A ella le gusta la comida picante."], ["Do you like fish? — Yes, I do.", "¿Te gusta el pescado? — Sí."]],
    mistake: "No: She doesn't likes rice → Sí: She doesn't like rice. Después de doesn't, el verbo va en forma base.",
  },
  {
    id: "exercise", title: "Exercise words", levelId: "basico4", topicId: "exerciseWords",
    rules: [
      "Aprende los ocho verbos de las fotografías: stretch, pull, lift, bend, push, turn, stand y twist.",
      "Para instrucciones usa verbo base, normalmente sin you: Bend your knees. Negación: Don't + verbo base. Your acompaña las partes del cuerpo.",
      "Push = empujar; pull = jalar. Bend = flexionar; stretch = estirar. Stand = estar de pie; stand up = ponerse de pie. Turn cambia orientación; twist destaca la rotación del torso.",
      "Para describir una acción actual usa am/is/are + -ing: She is lifting. Con can usa la base: She can lift.",
    ],
    vocab: EXERCISE_WORDS.map(word => [word.en, word.es]),
    examples: [["Stretch your arms slowly.", "Estira los brazos despacio."], ["Pull the handles toward you.", "Jala las agarraderas hacia ti."], ["She is lifting a weight.", "Ella está levantando una pesa."]],
    mistake: "No: She can lifting → Sí: She can lift. No: She lifting → Sí: She is lifting.",
  },
  {
    id: "frequency", title: "Frequency adverbs", levelId: "basico3", topicId: "simplePresentAdvanced",
    rules: [
      "Los adverbios de frecuencia responden a How often? (¿Con qué frecuencia?). El orden aproximado va de always a never; no son porcentajes exactos.",
      "Antes del verbo principal: I usually exercise. Después de am/is/are: She is always active. Con can, una posición habitual es después del modal: I can usually train on Saturdays.",
      "Never ya tiene sentido negativo: I never drink soda, no I don't never drink soda. Sometimes también puede ir al principio: Sometimes I walk to school.",
      "How often + do/does + sujeto + verbo base? También puedes responder con once a week, twice a week o three times a week.",
    ],
    vocab: [["always", "siempre"], ["usually", "normalmente / por lo general"], ["often", "a menudo"], ["sometimes", "a veces"], ["rarely / seldom", "rara vez"], ["hardly ever", "casi nunca"], ["never", "nunca"], ["once / twice / three times a week", "una vez / dos veces / tres veces por semana"]],
    examples: [["I usually eat vegetables.", "Normalmente como verduras."], ["She is always on time.", "Ella siempre llega a tiempo."], ["How often does he exercise? — Twice a week.", "¿Con qué frecuencia hace ejercicio él? — Dos veces por semana."]],
    mistake: "No: She are always tired → Sí: She is always tired. El adverbio no cambia la concordancia: she usa is. Frecuencia: how often; modo: how.",
  },
  {
    id: "manner", title: "Adverbs of manner", levelId: "basico4", topicId: "adverbsManner",
    rules: [
      "Los adverbios de modo responden a How? (¿Cómo?). El adjetivo describe un sustantivo: a good singer; el adverbio describe la acción: He sings well.",
      "Muchos se forman con -ly: quick → quickly. Consonante + y: happy → happily. Consonante + -le: gentle → gently. Good → well es irregular; fast y hard no cambian.",
      "Coloca el adverbio después del verbo o del objeto: He runs fast / She lifts the weights carefully. Evita separar el verbo de su objeto en este patrón.",
      "Hard = con esfuerzo; hardly = apenas. No uses fastly. Combina frecuencia y modo: She often sings beautifully (a menudo / maravillosamente).",
    ],
    vocab: FORMATION_RULES.flatMap(rule => rule.examples),
    examples: [["He sings beautifully.", "Él canta maravillosamente."], ["Dogs can learn tricks easily.", "Los perros pueden aprender trucos fácilmente."], ["How does Octavio play soccer? — He plays well.", "¿Cómo juega Octavio al fútbol? — Juega bien."]],
    mistake: "No: He sings good → Sí: He sings well. No: He runs fastly → Sí: He runs fast.",
  },
];

const q = (topic, question, options, correct, explanation) => ({ topic, question, options, correct, explanation });

export const PRACTICE = [
  q("can", "Completa: She can ___ very well.", ["swims", "swim", "to swim"], 1, "Después de can se usa el verbo base: swim."),
  q("can", "Elige la pregunta correcta.", ["Does he can dance?", "Can he dances?", "Can he dance?"], 2, "Can + sujeto + verbo base, sin do/does."),
  q("can", "Respuesta corta negativa: Can cats bark?", ["No, they can't.", "No, they don't.", "No, it can't."], 0, "Cats es plural: they. Conserva el modal can en la respuesta."),
  q("can", "¿Cuál equivale a cannot?", ["don't can", "can't", "can nots"], 1, "Cannot se escribe junto; su contracción es can't."),
  q("countable", "Completa: ___ eggs do you need?", ["How much", "How often", "How many"], 2, "Eggs es contable plural: How many eggs?"),
  q("countable", "Completa: ___ rice does she need?", ["How much", "How many", "How often"], 0, "Rice es incontable: How much rice?"),
  q("countable", "Completa: I don't have ___ milk.", ["a", "any", "an"], 1, "Any es habitual en negaciones; milk es incontable."),
  q("countable", "Elige la expresión correcta para dos rebanadas de pan.", ["two breads", "two slice of breads", "two slices of bread"], 2, "La unidad slices lleva plural; bread conserva su forma."),
  q("food", "Según el pizarrón, milk, cheese y yogurt pertenecen a…", ["Dairy", "Protein", "Carbohydrates"], 0, "Dairy significa lácteos."),
  q("food", "Según el pizarrón, bread, pasta, cereal y rice pertenecen a…", ["Dairy", "Carbohydrates", "Fats and sugars"], 1, "Se agrupan como fuentes de carbohidratos en esta actividad."),
  q("food", "¿Qué palabra significa picante?", ["sweet", "salty", "spicy"], 2, "Spicy = picante; sweet = dulce; salty = salado."),
  q("food", "Según el pizarrón, ¿qué lista corresponde a Protein?", ["eggs, fish, chicken, beans", "oil, soda, butter, chocolate", "apples, bananas, corn, potatoes"], 0, "Eggs, fish, chicken y beans son los ejemplos del grupo Protein."),
  q("exercise", "¿Qué verbo significa estirar?", ["bend", "stretch", "push"], 1, "Stretch = estirar; bend = flexionar; push = empujar."),
  q("exercise", "Completa: ___ the handles toward you.", ["Push", "Stand", "Pull"], 2, "Pull = jalar hacia ti; push = empujar."),
  q("exercise", "¿Qué instrucción significa flexiona las rodillas?", ["Bend your knees.", "Lift your arms.", "Turn your head."], 0, "Bend your knees: bend = flexionar, knees = rodillas."),
  q("exercise", "Elige la descripción de una acción en curso.", ["She lifting a weight.", "She is lifting a weight.", "She can lifting a weight."], 1, "Presente progresivo: sujeto + is + lifting."),
  q("frequency", "Elige el orden habitual con to be.", ["She always tired is.", "She always tired.", "She is always tired."], 2, "El adverbio de frecuencia normalmente va después de is."),
  q("frequency", "Elige el orden habitual con un verbo principal.", ["I usually exercise.", "I exercise usually every.", "I am usually exercise."], 0, "Usually va antes del verbo principal exercise."),
  q("frequency", "¿Qué pregunta se responde con Twice a week?", ["How do you exercise?", "How often do you exercise?", "How much water do you drink?"], 1, "How often pregunta frecuencia. Twice a week = dos veces por semana."),
  q("frequency", "Elige la oración correcta con never.", ["I don't never drink soda.", "I never drinks soda.", "I never drink soda."], 2, "Never ya expresa negación; con I se usa drink."),
  q("manner", "Completa: He sings ___.", ["well", "good", "beautiful"], 0, "Well es el adverbio de good y describe cómo canta."),
  q("manner", "Completa: Dogs learn tricks ___ (easy).", ["easyly", "easily", "easy"], 1, "Easy termina en consonante + y: cambia y por i y añade -ly."),
  q("manner", "Elige la oración correcta.", ["He runs fastly.", "He run fast.", "He runs fast."], 2, "Fast no cambia como adverbio. He requiere runs en presente simple afirmativo."),
  q("manner", "En She often sings beautifully, ¿qué palabra expresa modo?", ["beautifully", "often", "she"], 0, "Beautifully dice cómo canta; often dice con qué frecuencia."),
];

export function findStudyTab(term) {
  if (!term?.trim()) return null;
  const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const query = normalize(term.trim());
  const match = STUDY_TOPICS.find(topic => normalize(topic.title).includes(query))
    ?? STUDY_TOPICS.find(topic => normalize([topic.rules, topic.vocab, topic.examples, topic.mistake].flat(Infinity).join(" ")).includes(query));
  return match?.id ?? "overview";
}
