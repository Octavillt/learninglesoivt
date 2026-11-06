// Review of Tenses de Básico V: identifica el tiempo verbal por su expresión
// de tiempo (time expression) y por su auxiliar. Sección temporal del examen.

// forms = [tipo, fórmula, ejemplo, traducción]; board = ejemplos del pizarrón [inglés, español].
export const TENSES = [
  {
    id: "simplePresent", name: "Simple Present", esp: "Presente simple", icon: "🔁", color: "#38BDF8",
    levelId: "basico2", topicId: "simplePresent",
    use: "routines, habits, general activities", useEsp: "rutinas, hábitos y actividades generales",
    ask: "¿Pasa siempre, cada día o en general?",
    aux: "do / does · don't / doesn't",
    boardExpressions: [["every day", "todos los días"], ["every week / every month", "cada semana / cada mes"], ["today", "hoy"]],
    moreExpressions: [["on Saturdays / every Saturday", "los sábados / cada sábado"], ["always / usually / sometimes / never", "siempre / normalmente / a veces / nunca"], ["in the morning / at night", "en la mañana / en la noche"], ["once a week / twice a month", "una vez a la semana / dos veces al mes"]],
    forms: [
      ["Afirmativa", "I / you / we / they + verbo base · he / she / it + verbo + -s / -es", "She works every day.", "Ella trabaja todos los días."],
      ["Negativa", "Sujeto + don't / doesn't + verbo base", "He doesn't do yoga.", "Él no hace yoga."],
      ["Pregunta", "Do / Does + sujeto + verbo base + ?", "Does she work every day? — Yes, she does. / No, she doesn't.", "¿Ella trabaja todos los días? — Sí. / No."],
      ["Pregunta WH", "WH + do / does + sujeto + verbo base + ?", "Why does she work every day? — Because she likes money.", "¿Por qué trabaja todos los días? — Porque le gusta el dinero."],
    ],
    board: [["We come to American Team.", "Venimos a American Team."], ["You don't come on Saturdays.", "Tú no vienes los sábados."], ["My dog plays with its toys.", "Mi perro juega con sus juguetes: my dog = it, por eso plays."], ["Do you study Italian? — No, I don't. / Yes, I do.", "¿Estudias italiano? — No. / Sí."], ["What do you study? — English.", "¿Qué estudias? — Inglés."]],
    tip: "Con he / she / it el verbo lleva -s (works, plays). Cuando aparece does o doesn't, la -s se va del verbo: Does she work? / He doesn't do yoga.",
  },
  {
    id: "presentProgressive", name: "Present Progressive", esp: "Presente progresivo", icon: "⏱️", color: "#A855F7",
    levelId: "basico1", topicId: "progressive",
    use: "activities happening at the moment", useEsp: "actividades que están pasando en este momento",
    ask: "¿Está pasando ahora mismo?",
    aux: "am / is / are + verbo-ing · am not / isn't / aren't",
    boardExpressions: [["now", "ahora"], ["right now", "ahora mismo"], ["at this moment", "en este momento"]],
    moreExpressions: [["at the moment", "en este momento"], ["Look! / Listen!", "¡Mira! / ¡Escucha!: algo está pasando frente a ti"]],
    forms: [
      ["Afirmativa", "I + am · he / she / it + is · you / we / they + are + verbo-ing", "We are studying English now.", "Estamos estudiando inglés ahora."],
      ["Negativa", "Sujeto + am not / isn't / aren't + verbo-ing", "I'm not sleeping right now.", "No estoy durmiendo ahora mismo."],
      ["Pregunta", "Am / Is / Are + sujeto + verbo-ing + ?", "Are we studying English now? — Yes, we are. / No, we aren't.", "¿Estamos estudiando inglés ahora? — Sí. / No."],
      ["Pregunta WH", "WH + am / is / are + sujeto + verbo-ing + ?", "What are you doing at this moment? — I am studying English.", "¿Qué estás haciendo en este momento? — Estoy estudiando inglés."],
    ],
    board: [["Octa is paying attention.", "Octa está poniendo atención."], ["I am explaining the topic.", "Estoy explicando el tema."], ["We aren't studying Chinese.", "No estamos estudiando chino."]],
    tip: "Son dos piezas y las dos son obligatorias: am / is / are + verbo-ing. ✗ We studying → ✓ We are studying.",
  },
  {
    id: "simplePast", name: "Simple Past", esp: "Pasado simple", icon: "⏪", color: "#FB7185",
    levelId: "basico5", topicId: "simplePast",
    use: "past activities", useEsp: "actividades que ya pasaron y terminaron",
    ask: "¿Ya pasó y terminó?",
    aux: "did / didn't + verbo base",
    boardExpressions: [["yesterday", "ayer"], ["two weeks ago", "hace dos semanas: ago va después de la cantidad"], ["last night", "anoche"]],
    moreExpressions: [["last week / last month / last year", "la semana pasada / el mes pasado / el año pasado"], ["last weekend / last Monday", "el fin de semana pasado / el lunes pasado"], ["the day before yesterday", "anteayer"], ["in 2020 / when I was a child", "en 2020 / cuando era niño"]],
    forms: [
      ["Afirmativa", "Sujeto + verbo en pasado (regular con -ed o irregular)", "He went to Six Flags two weeks ago.", "Él fue a Six Flags hace dos semanas."],
      ["Negativa", "Sujeto + didn't + verbo base", "I didn't eat pizza.", "No comí pizza."],
      ["Pregunta", "Did + sujeto + verbo base + ?", "Did you drink milk? — Yes, I did. / No, I didn't.", "¿Tomaste leche? — Sí. / No."],
      ["Pregunta WH", "WH + did + sujeto + verbo base + ?", "What did you do yesterday? — I did my homework.", "¿Qué hiciste ayer? — Hice mi tarea."],
    ],
    board: [["I ate pizza yesterday.", "Comí pizza ayer."], ["You fell asleep.", "Te quedaste dormido."], ["You didn't fall asleep.", "No te quedaste dormido."], ["He didn't go to Six Flags.", "Él no fue a Six Flags."]],
    tip: "Did y didn't ya marcan el pasado: el verbo vuelve a su forma base. ✗ I didn't ate → ✓ I didn't eat. En la afirmativa no hay auxiliar: el verbo va en pasado (ate, fell, went).",
  },
  {
    id: "goingTo", name: "Going to", esp: "Futuro con going to", icon: "🗓️", color: "#34D399",
    levelId: "basico5", topicId: "goingTo",
    use: "future plans, intentions and predictions", useEsp: "planes e intenciones futuras y predicciones",
    ask: "¿Es un plan o algo que todavía no pasa?",
    aux: "am / is / are + going to + verbo base",
    boardExpressions: [],
    moreExpressions: [["tomorrow", "mañana"], ["tonight", "esta noche"], ["next week / next month / next year", "la próxima semana / el próximo mes / el próximo año"], ["next weekend / next Monday", "el próximo fin de semana / el próximo lunes"], ["the day after tomorrow", "pasado mañana"], ["later / soon", "más tarde / pronto"]],
    forms: [
      ["Afirmativa", "Sujeto + am / is / are + going to + verbo base", "I'm going to visit my family tomorrow.", "Voy a visitar a mi familia mañana."],
      ["Negativa", "Sujeto + am not / isn't / aren't + going to + verbo base", "We aren't going to arrive late next week.", "No vamos a llegar tarde la próxima semana."],
      ["Pregunta", "Am / Is / Are + sujeto + going to + verbo base + ?", "Are you going to study tonight? — Yes, I am. / No, I'm not.", "¿Vas a estudiar esta noche? — Sí. / No."],
      ["Pregunta WH", "WH + am / is / are + sujeto + going to + verbo base + ?", "What are you going to do next weekend? — I'm going to clean the house.", "¿Qué vas a hacer el próximo fin de semana? — Voy a limpiar la casa."],
    ],
    board: [],
    note: "No venía en el pizarrón del repaso, pero es el futuro de Básico V y sus expresiones se confunden fácil con las del pasado: last week (pasado) ↔ next week (futuro).",
    tip: "Después de going to el verbo va en forma base: ✗ going to went → ✓ going to go.",
  },
];

export const STEPS = [
  { title: "1. Busca la expresión de tiempo", text: "Subráyala como en el pizarrón: every day, now, yesterday, tomorrow… Casi siempre va al final de la oración." },
  { title: "2. Decide el tiempo", text: "¿Siempre o en general? → Simple Present. ¿Ahora mismo? → Present Progressive. ¿Ya pasó? → Simple Past. ¿Es un plan para después? → Going to." },
  { title: "3. Revisa el auxiliar y el verbo", text: "do / does + verbo base · am / is / are + verbo-ing · did / didn't + verbo base · am / is / are + going to + verbo base." },
  { title: "Sin expresión de tiempo", text: "Mira el auxiliar o la forma del verbo: does → presente simple; is + -ing → progresivo; did o un verbo en pasado (went) → pasado simple; going to → futuro." },
];

// Detector: cada expresión apunta a un solo tiempo (tense = id de TENSES).
export const DETECTOR = [
  { expression: "every day", tense: "simplePresent", example: "She works every day.", esp: "Ella trabaja todos los días." },
  { expression: "every week", tense: "simplePresent", example: "We come to American Team every week.", esp: "Venimos a American Team cada semana." },
  { expression: "every month", tense: "simplePresent", example: "I pay the rent every month.", esp: "Pago la renta cada mes." },
  { expression: "on Saturdays", tense: "simplePresent", example: "You don't come on Saturdays.", esp: "Tú no vienes los sábados." },
  { expression: "usually", tense: "simplePresent", example: "Leslie usually drinks coffee in the morning.", esp: "Leslie normalmente toma café en la mañana." },
  { expression: "now", tense: "presentProgressive", example: "We are studying English now.", esp: "Estamos estudiando inglés ahora." },
  { expression: "right now", tense: "presentProgressive", example: "I'm not sleeping right now.", esp: "No estoy durmiendo ahora mismo." },
  { expression: "at this moment", tense: "presentProgressive", example: "What are you doing at this moment?", esp: "¿Qué estás haciendo en este momento?" },
  { expression: "Look!", tense: "presentProgressive", example: "Look! Octa is paying attention.", esp: "¡Mira! Octa está poniendo atención." },
  { expression: "yesterday", tense: "simplePast", example: "I ate pizza yesterday.", esp: "Comí pizza ayer." },
  { expression: "two weeks ago", tense: "simplePast", example: "He went to Six Flags two weeks ago.", esp: "Él fue a Six Flags hace dos semanas." },
  { expression: "last night", tense: "simplePast", example: "You fell asleep last night.", esp: "Te quedaste dormido anoche." },
  { expression: "last week", tense: "simplePast", example: "Eduardo visited his family last week.", esp: "Eduardo visitó a su familia la semana pasada." },
  { expression: "tomorrow", tense: "goingTo", example: "I'm going to visit my family tomorrow.", esp: "Voy a visitar a mi familia mañana." },
  { expression: "next week", tense: "goingTo", example: "Argelia is going to travel next week.", esp: "Argelia va a viajar la próxima semana." },
  { expression: "tonight", tense: "goingTo", example: "Are you going to study tonight?", esp: "¿Vas a estudiar esta noche?" },
];

export const TRAPS = [
  { expression: "today", title: "Today puede ir con varios tiempos", text: "En el pizarrón today aparece con el presente simple, pero también se usa con los otros tiempos. Decide por el verbo y su auxiliar.", examples: [["I work today.", "Presente simple: hoy trabajo."], ["I'm working today.", "Presente progresivo: hoy estoy trabajando."], ["I worked a lot today.", "Pasado simple: hoy trabajé mucho."], ["I'm going to work today.", "Going to: hoy voy a trabajar."]] },
  { expression: "every day / everyday", title: "Every day se escribe separado", text: "Como expresión de tiempo son dos palabras: every day (todos los días). Everyday junto es un adjetivo: everyday clothes (ropa de diario). En el pizarrón aparece junto; en el examen escríbelo separado.", examples: [["She works every day.", "Ella trabaja todos los días."], ["These are my everyday shoes.", "Estos son mis zapatos de diario."]] },
  { expression: "last / next", title: "Last mira atrás, next mira adelante", text: "Last week, last night y last Monday ya pasaron → pasado simple. Next week y next Monday todavía no llegan → going to.", examples: [["I visited my family last week.", "Visité a mi familia la semana pasada."], ["I'm going to visit my family next week.", "Voy a visitar a mi familia la próxima semana."]] },
  { expression: "ago", title: "Ago va después de la cantidad", text: "Ago significa «hace» y va al final de la cantidad de tiempo: two weeks ago, three days ago. ✗ ago two weeks.", examples: [["He went to Six Flags two weeks ago.", "Él fue a Six Flags hace dos semanas."]] },
  { expression: "yesterday / last night", title: "Para «ayer» usa yesterday", text: "Last va con night, week, weekend, month, year o un día de la semana (last Monday). Para el día anterior di yesterday: last day significa «el último día».", examples: [["I ate pizza yesterday.", "Comí pizza ayer."], ["You fell asleep last night.", "Te quedaste dormido anoche."]] },
  { expression: "this morning / this weekend", title: "This depende de si ya pasó", text: "This morning, this week y this weekend pueden ser pasado o futuro: si ya terminó, pasado simple; si todavía no llega, going to.", examples: [["I drank coffee this morning.", "Tomé café esta mañana (ya pasó)."], ["I'm going to rest this weekend.", "Voy a descansar este fin de semana (todavía no llega)."]] },
];

// [tiempo, afirmativa, negativa, pregunta, respuesta corta]
export const SAME_VERB = [
  ["Simple Present", "Leslie studies English every day.", "Leslie doesn't study English every day.", "Does Leslie study English every day?", "Yes, she does. / No, she doesn't."],
  ["Present Progressive", "Leslie is studying English right now.", "Leslie isn't studying English right now.", "Is Leslie studying English right now?", "Yes, she is. / No, she isn't."],
  ["Simple Past", "Leslie studied English yesterday.", "Leslie didn't study English yesterday.", "Did Leslie study English yesterday?", "Yes, she did. / No, she didn't."],
  ["Going to", "Leslie is going to study English tomorrow.", "Leslie isn't going to study English tomorrow.", "Is Leslie going to study English tomorrow?", "Yes, she is. / No, she isn't."],
];

// [inglés, español]
export const SAME_VERB_WH = [
  ["What does Leslie study every day?", "¿Qué estudia Leslie todos los días?"],
  ["What is Leslie doing right now?", "¿Qué está haciendo Leslie ahora mismo?"],
  ["What did Leslie do yesterday?", "¿Qué hizo Leslie ayer?"],
  ["What is Leslie going to do tomorrow?", "¿Qué va a hacer Leslie mañana?"],
];

// [incorrecto, correcto, por qué]
export const MISTAKES = [
  ["She work every day.", "She works every day.", "Con he / she / it el presente simple lleva -s."],
  ["Does she works every day?", "Does she work every day?", "Does ya marca la tercera persona: el verbo va en forma base."],
  ["We studying English now.", "We are studying English now.", "El progresivo necesita am / is / are + verbo-ing."],
  ["I eat pizza yesterday.", "I ate pizza yesterday.", "Yesterday pide pasado simple: eat → ate."],
  ["I didn't ate pizza.", "I didn't eat pizza.", "Después de didn't el verbo vuelve a su forma base."],
  ["Did you drank milk?", "Did you drink milk?", "Did + sujeto + verbo base."],
  ["He goes to Six Flags two weeks ago.", "He went to Six Flags two weeks ago.", "Ago señala pasado: go → went."],
  ["I'm going to went to the beach tomorrow.", "I'm going to go to the beach tomorrow.", "Después de going to, verbo base."],
];

const TENSE_OPTIONS = ["Simple Present", "Present Progressive", "Simple Past", "Going to"];

export const PRACTICE = [
  { question: "Completa: She ___ every day. (work)", options: ["works", "is working", "worked", "is going to work"], answers: ["works"], explanation: "Every day indica rutina → Simple Present. Con she el verbo lleva -s: works." },
  { question: "Completa: My dog ___ with its toys every day. (play)", options: ["play", "plays", "played", "are playing"], answers: ["plays"], explanation: "My dog = it y every day indica rutina: con it el verbo lleva -s, plays." },
  { question: "Completa: We ___ English right now. (study)", options: ["study", "are studying", "studied", "are going to study"], answers: ["are studying"], explanation: "Right now indica algo que pasa en este momento → Present Progressive: are + studying." },
  { question: "Completa: Octa ___ attention now. (pay)", options: ["pays", "is paying", "paid", "is going to pay"], answers: ["is paying"], explanation: "Now → Present Progressive: is + paying. Pay termina en vocal + y: solo agrega -ing." },
  { question: "Completa: I ___ pizza yesterday. (eat)", options: ["eat", "am eating", "ate", "am going to eat"], answers: ["ate"], explanation: "Yesterday indica pasado → Simple Past. Eat es irregular: eat → ate." },
  { question: "Completa: You ___ asleep last night. (fall)", options: ["fall", "falled", "fell", "are falling"], answers: ["fell"], explanation: "Last night → Simple Past. Fall es irregular: fall → fell; no existe «falled»." },
  { question: "Completa: Argelia ___ her family next week. (visit)", options: ["visits", "visited", "is going to visit", "visit"], answers: ["is going to visit"], explanation: "Next week indica un plan → Going to: is going to + verbo base." },
  { question: "¿Qué tiempo pide every week?", options: TENSE_OPTIONS, answers: ["Simple Present"], explanation: "Every + day / week / month indica una rutina → Simple Present con do / does." },
  { question: "¿Qué tiempo pide at this moment?", options: TENSE_OPTIONS, answers: ["Present Progressive"], explanation: "At this moment = en este momento: la acción está pasando → am / is / are + verbo-ing." },
  { question: "¿Qué tiempo pide last night?", options: TENSE_OPTIONS, answers: ["Simple Past"], explanation: "Last night = anoche: ya pasó → Simple Past con did / didn't." },
  { question: "¿Qué tiempo pide tomorrow?", options: TENSE_OPTIONS, answers: ["Going to"], explanation: "Tomorrow = mañana: todavía no pasa → am / is / are + going to + verbo base." },
  { question: "Elige la expresión de tiempo del pasado simple.", options: ["every month", "right now", "two weeks ago", "next week"], answers: ["two weeks ago"], explanation: "Ago significa «hace» y siempre señala pasado: two weeks ago = hace dos semanas." },
  { question: "Completa: ___ she work every day? — Yes, she does.", options: ["Do", "Does", "Is", "Did"], answers: ["Does"], explanation: "Every day → Simple Present; con she el auxiliar es does, y la respuesta corta lo repite: Yes, she does." },
  { question: "Completa: ___ you drink milk yesterday? — No, I didn't.", options: ["Do", "Are", "Did", "Does"], answers: ["Did"], explanation: "Yesterday → Simple Past: Did + sujeto + verbo base. Respuesta corta: No, I didn't." },
  { question: "Completa: What ___ you doing at this moment?", options: ["do", "are", "did", "is"], answers: ["are"], explanation: "Doing + at this moment → Present Progressive: What are you doing? Con you usa are." },
  { question: "Elige la negativa correcta en pasado.", options: ["He didn't went to Six Flags.", "He didn't go to Six Flags.", "He doesn't went to Six Flags.", "He isn't go to Six Flags."], answers: ["He didn't go to Six Flags."], explanation: "En pasado la negativa es didn't + verbo base: didn't go. Didn't ya marca el pasado." },
  { question: "Elige la oración correcta con right now.", options: ["I'm not sleep right now.", "I don't sleeping right now.", "I'm not sleeping right now.", "I not sleeping right now."], answers: ["I'm not sleeping right now."], explanation: "Right now → Present Progressive negativo: am not + verbo-ing: I'm not sleeping." },
  { question: "Elige la negativa correcta en presente simple.", options: ["He don't do yoga.", "He doesn't do yoga.", "He doesn't does yoga.", "He isn't do yoga."], answers: ["He doesn't do yoga."], explanation: "Con he la negativa es doesn't + verbo base: doesn't do, sin -es." },
  { question: "Completa: We ___ late to class next week. (not / arrive)", options: ["don't arrive", "didn't arrive", "aren't going to arrive", "aren't arrive"], answers: ["aren't going to arrive"], explanation: "Next week → Going to. Negativa: aren't going to + verbo base." },
  { question: "«I'm working today.» ¿Qué tiempo es?", options: TENSE_OPTIONS, answers: ["Present Progressive"], explanation: "Today va con varios tiempos; aquí lo decide el verbo: am + working es Present Progressive." },
];
