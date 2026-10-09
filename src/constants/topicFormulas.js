// Las fórmulas describen estructuras; los ejemplos son oraciones completas.
// En vocabulario se muestran patrones de uso, no reglas para formar palabras.
const row = (label, pattern, example, translation) => ({ label, pattern, example, translation });
const be = [
  row("Afirmación", "Sujeto + am/is/are + complemento", "She is a student.", "Ella es estudiante."),
  row("Negación", "Sujeto + am/is/are + not + complemento", "She is not a student.", "Ella no es estudiante."),
  row("Pregunta", "Am/Is/Are + sujeto + complemento + ?", "Is she a student?", "¿Ella es estudiante?"),
];
const progressive = [
  row("Afirmación", "Sujeto + am/is/are + verbo-ing + complemento", "She is reading a book.", "Ella está leyendo un libro."),
  row("Negación", "Sujeto + am/is/are + not + verbo-ing + complemento", "She is not reading a book.", "Ella no está leyendo un libro."),
  row("Pregunta", "Am/Is/Are + sujeto + verbo-ing + complemento + ?", "Is she reading a book?", "¿Ella está leyendo un libro?"),
];
const simplePresent = [
  row("Afirmación: I/you/we/they", "Sujeto + verbo base + complemento", "They work here.", "Ellos trabajan aquí."),
  row("Afirmación: he/she/it", "Sujeto + verbo en tercera persona + complemento", "She works here.", "Ella trabaja aquí."),
  row("Negación", "Sujeto + do/does + not + verbo base + complemento", "She does not work here.", "Ella no trabaja aquí."),
  row("Pregunta", "Do/Does + sujeto + verbo base + complemento + ?", "Does she work here?", "¿Ella trabaja aquí?"),
];
const frequency = [
  row("Pedir información", "WH + do/does + sujeto + verbo base + complemento + ?", "Where does she work?", "¿Dónde trabaja ella?"),
  row("Frecuencia con un verbo principal", "Sujeto + adverbio de frecuencia + verbo + complemento", "She usually works at home.", "Ella normalmente trabaja en casa."),
  row("Frecuencia con to be", "Sujeto + am/is/are + adverbio de frecuencia + complemento", "She is always busy.", "Ella siempre está ocupada."),
];
const existence = [
  row("Hay: singular / incontable", "There is + sustantivo singular o incontable + lugar", "There is a keyboard on the desk.", "Hay un teclado sobre el escritorio."),
  row("Hay: plural", "There are + sustantivo plural + lugar", "There are two monitors on the desk.", "Hay dos monitores sobre el escritorio."),
  row("Pregunta de existencia", "Is/Are + there + sustantivo + lugar + ?", "Are there any headphones here?", "¿Hay audífonos aquí?"),
];

export const TOPIC_FORMULAS = {
  octoberExam: { title: "Fórmulas clave del examen de octubre", note: "Cada pestaña desarrolla un tema con vocabulario, ejemplos y errores frecuentes. El simulador incluye seis preguntas por tema.", rows: [
    row("Cocina", "Verbo de cocina + el alimento", "She is boiling two hundred grams of rice.", "Ella está hirviendo doscientos gramos de arroz."),
    row("Colocaciones de turismo", "Verbo fijo + sustantivo", "We always take photos when we travel abroad.", "Siempre tomamos fotos cuando viajamos al extranjero."),
    row("Ropa", "Sujeto + wear/put on/take off/try on + prenda", "Put on your coat; it's cold outside.", "Ponte el abrigo; hace frío afuera."),
    row("Demostrativos: singular", "This/That + is + complemento singular", "This is my bag.", "Esta es mi bolsa."),
    row("Demostrativos: plural", "These/Those + are + complemento plural", "Those are my keys.", "Esas son mis llaves."),
    row("Posibilidad y consejo", "Sujeto + could/should + verbo base", "You should stay hydrated.", "Deberías mantenerte hidratado."),
    row("Should: afirmación", "Sujeto + should + verbo base + complemento", "He should know what his talent is.", "Él debería saber cuál es su talento."),
    row("Should: negación", "Sujeto + should not / shouldn't + verbo base + complemento", "He shouldn't believe bad comments.", "Él no debería creer los malos comentarios."),
    row("Could: afirmación", "Sujeto + could + verbo base + complemento", "They could go to Las Grutas de Tolantongo.", "Ellos podrían ir a Las Grutas de Tolantongo."),
    row("Could: negación", "Sujeto + could not / couldn't + verbo base + complemento", "They couldn't eat spicy food.", "Ellos no podrían comer comida picante."),
    row("Gerundio", "Sujeto + enjoy/avoid/suggest + verbo-ing", "I enjoy cooking.", "Disfruto cocinar."),
    row("Infinitivo", "Sujeto + want/need/plan/would like + to + verbo base", "I want to cook rice.", "Quiero cocinar arroz."),
  ] },
  moduleIVExam: { title: "Fórmulas clave del examen", note: "Cada pestaña desarrolla un tema con vocabulario, ejemplos y errores frecuentes. El simulador incluye cuatro preguntas por tema.", rows: [
    row("Habilidad", "Sujeto + can/can't + verbo base", "She can swim.", "Ella sabe nadar."),
    row("Cantidad contable", "How many + contable plural + do/does + sujeto + verbo base + ?", "How many eggs do you need?", "¿Cuántos huevos necesitas?"),
    row("Cantidad incontable", "How much + incontable + do/does + sujeto + verbo base + ?", "How much milk do you need?", "¿Cuánta leche necesitas?"),
    row("Gustos y comida", "Sujeto + like/likes + alimento", "I like vegetables.", "Me gustan las verduras."),
    row("Movimiento", "Verbo base + parte del cuerpo u objeto", "Bend your knees.", "Flexiona las rodillas."),
    row("Frecuencia", "Sujeto + adverbio de frecuencia + verbo principal", "I usually exercise.", "Normalmente hago ejercicio."),
    row("Modo", "Sujeto + verbo + (objeto) + adverbio de modo", "She lifts the weights carefully.", "Ella levanta las pesas con cuidado."),
  ] },
  adverbsManner: { note: "El adverbio de modo responde a how (¿cómo?). En estos patrones va después del verbo o de su objeto. Con can usa el verbo base; con he/she/it en presente simple afirmativo, conjuga el verbo.", rows: [
    row("Describir una acción", "Sujeto + verbo + adverbio de modo", "He sings beautifully.", "Él canta maravillosamente."),
    row("Con objeto", "Sujeto + verbo + objeto + adverbio de modo", "She lifts the weights carefully.", "Ella levanta las pesas con cuidado."),
    row("Habilidad y modo", "Sujeto + can + verbo base + (objeto) + adverbio de modo", "Octavio can play soccer well.", "Octavio puede jugar fútbol bien."),
    row("Preguntar cómo", "How + do/does + sujeto + verbo base + (objeto) + ?", "How does he play soccer?", "¿Cómo juega él al fútbol?"),
    row("Instrucción con modo", "Verbo base + (objeto) + adverbio de modo", "Bend your knees slowly.", "Flexiona las rodillas despacio."),
  ] },
  exerciseWords: { note: "Las instrucciones usan el verbo base y normalmente omiten you. En el progresivo usa am/is/are + verbo-ing; después de can conserva el verbo base.", rows: [
    row("Dar una instrucción", "Verbo base + (complemento)", "Bend your knees.", "Flexiona las rodillas."),
    row("Indicar qué no hacer", "Don't + verbo base + (complemento)", "Don't pull the door.", "No jales la puerta."),
    row("Describir una acción en curso", "Sujeto + am/is/are + verbo-ing + (complemento)", "She is lifting a weight.", "Ella está levantando una pesa."),
    row("Expresar una habilidad", "Sujeto + can/can't + verbo base + (complemento)", "I can bend my knees.", "Puedo flexionar las rodillas."),
    row("Preguntar por una habilidad", "Can + sujeto + verbo base + (complemento) + ?", "Can you lift this weight?", "¿Puedes levantar esta pesa?"),
  ] },
  foodGroups: { title: "Patrones para hablar de comida", note: "Para hablar de gustos generales usa plurales contables o incontables sin a/an: I like apples. I like rice. Con he/she/it usa likes; después de does, like.", rows: [
    row("Identificar un grupo", "Alimento + is/are + clasificación", "Milk is a dairy product.", "La leche es un producto lácteo."),
    row("Describir", "Alimento + is/are + adjetivo", "These apples are sweet.", "Estas manzanas son dulces."),
    row("Expresar gustos", "Sujeto + like/likes + alimento", "I like spicy food.", "Me gusta la comida picante."),
    row("Expresar desagrado", "Sujeto + don't/doesn't + like + alimento", "She doesn't like fish.", "A ella no le gusta el pescado."),
    row("Preguntar por gustos", "Do/Does + sujeto + like + alimento + ?", "Do you like vegetables?", "¿Te gustan las verduras?"),
    row("Pedir comida", "Can I have + alimento o cantidad + please + ?", "Can I have some rice, please?", "¿Me das un poco de arroz, por favor?"),
  ] },
  countable: { note: "How many acompaña a contables plurales; how much, a incontables. Usa do con I/you/we/they y does con he/she/it; el verbo principal queda en forma base.", rows: [
    row("Contable singular", "A/An + sustantivo contable singular", "I want an egg.", "Quiero un huevo."),
    row("Contable plural", "Número + sustantivo contable plural", "I need three apples.", "Necesito tres manzanas."),
    row("Cantidad no exacta", "Some + contable plural o incontable", "I need some water.", "Necesito un poco de agua."),
    row("Preguntar: contables", "How many + sustantivo plural + do/does + sujeto + verbo base + (complemento) + ?", "How many tacos do you usually eat?", "¿Cuántos tacos comes normalmente?"),
    row("Preguntar: incontables", "How much + sustantivo incontable + do/does + sujeto + verbo base + (complemento) + ?", "How much rice does she need?", "¿Cuánto arroz necesita ella?"),
  ] },
  can: { note: "Can expresa habilidad: poder o saber hacer algo. Usa el verbo base sin to ni -s/-es. El complemento es opcional según el verbo.", rows: [
    row("Afirmación", "Sujeto + can + verbo base + complemento", "He can produce music.", "Él puede producir música."),
    row("Negación", "Sujeto + cannot / can't + verbo base + complemento", "Cats can't bark.", "Los gatos no pueden ladrar."),
    row("Pregunta sí/no", "Can + sujeto + verbo base + complemento + ?", "Can you swim?", "¿Sabes nadar?"),
    row("Pregunta de información", "WH + can + sujeto + verbo base + complemento + ?", "What can dogs do?", "¿Qué pueden hacer los perros?"),
  ] },
  numbers: {
    note: "El guion une decenas y unidades del 21 al 99 cuando la unidad no es cero. Al deletrear, di el nombre de cada letra.",
    rows: [
      row("Número compuesto", "Decena + guion + unidad", "Twenty-five", "Veinticinco"),
      row("Pedir deletreo", "How do you spell + palabra o nombre + ?", "How do you spell your name?", "¿Cómo se escribe tu nombre?"),
    ],
  },
  tobe: { note: "I → am; he/she/it → is; you/we/they → are. El complemento puede describir identidad, estado o lugar.", rows: be },
  countries: { title: "Patrones para hablar de origen", rows: [
    row("País de origen", "Sujeto + am/is/are + from + país", "She is from Mexico.", "Ella es de México."),
    row("Nacionalidad", "Sujeto + am/is/are + nacionalidad", "She is Mexican.", "Ella es mexicana."),
    row("Residencia", "Sujeto + live/lives + in + ciudad o país", "I live in Mexico City.", "Vivo en Ciudad de México."),
  ], note: "From va con el origen, no delante de la nacionalidad. Live/lives anticipa el presente simple de Básico II." },
  family: { title: "Patrones para presentar a la familia", rows: [
    row("Una persona", "This is + posesivo + familiar en singular", "This is my sister.", "Esta es mi hermana."),
    row("Varias personas", "These are + posesivo + familiares en plural", "These are my parents.", "Estos son mis padres."),
  ] },
  plural: { note: "Son patrones frecuentes, no reglas sin excepciones: child → children, man → men. Consulta las excepciones de la lección.", rows: [
    row("Regla general", "Sustantivo singular + -s", "Book → books", "Libro → libros"),
    row("Terminaciones -s, -sh, -ch, -x, -z", "Sustantivo + -es (con ajustes de escritura cuando corresponda)", "Box → boxes", "Caja → cajas"),
    row("Consonante + y", "Quitar y + añadir -ies", "Baby → babies", "Bebé → bebés"),
    row("Vocal + y", "Conservar y + añadir -s", "Toy → toys", "Juguete → juguetes"),
  ] },
  demonstratives: { note: "This/these señalan cerca; that/those señalan lejos. En preguntas invierte is/are y el demostrativo: Is this your book?", rows: [
    row("Singular", "This/That + is + complemento singular", "This is a book.", "Este es un libro."),
    row("Plural", "These/Those + are + complemento plural", "Those are books.", "Esos son libros."),
  ] },
  fruits: { title: "Patrones para usar el vocabulario", note: "Usa a/an con nombres contables singulares; elige según el sonido que sigue. En plural, cambia también is por are.", rows: [
    row("Identificar una fruta o verdura", "This is + a/an + nombre singular", "This is an onion.", "Esta es una cebolla."),
    row("Identificar varias", "These are + cantidad + nombre plural", "These are three apples.", "Estas son tres manzanas."),
  ] },
  prepositions: { rows: [
    row("Ubicar", "Sujeto + am/is/are + preposición de lugar + referencia", "The book is on the table.", "El libro está sobre la mesa."),
    row("Preguntar por ubicación", "Where + am/is/are + sujeto + ?", "Where are the books?", "¿Dónde están los libros?"),
  ] },
  time: { note: "Con to se nombra la hora siguiente. Usa o'clock en horas exactas; a quarter equivale a 15 minutos y half a 30.", rows: [
    row("Lectura directa", "It's + hora + minutos", "It's nine forty-five.", "Son las nueve cuarenta y cinco."),
    row("Minutos transcurridos", "It's + minutos + past + hora actual", "It's ten past nine.", "Son las nueve y diez."),
    row("Minutos que faltan", "It's + minutos restantes + to + hora siguiente", "It's a quarter to ten.", "Son las diez menos cuarto."),
  ] },
  dates: { note: "Este patrón de fecha usa mes antes del día. El día se lee como ordinal; el número escrito puede ser cardinal: July 21.", rows: [
    row("Día de la semana", "Today is + día", "Today is Monday.", "Hoy es lunes."),
    row("Fecha al hablar", "Mes + número ordinal", "July twenty-first", "Veintiuno de julio"),
    row("Evento en una fecha", "Evento + is + on + fecha", "My birthday is on July 21.", "Mi cumpleaños es el veintiuno de julio."),
  ] },
  verbs: { title: "Patrón para usar los verbos", note: "Este modelo introductorio usa I/you/we/they en presente simple. He/she/it requiere la forma de tercera persona, desarrollada en Básico II.", rows: [
    row("Acción y complemento", "I/You/We/They + verbo base + complemento", "They study English.", "Ellos estudian inglés."),
  ] },
  progressive: { note: "Elige am/is/are según el sujeto. La forma -ing sigue las reglas de escritura de la lección; no omitas to be.", rows: progressive },
  jobs: { title: "Patrones para hablar del trabajo", note: "A/an depende del sonido del oficio. Works expresa un hábito; is + -ing, una acción en curso.", rows: [
    row("Profesión", "Sujeto + am/is/are + a/an + profesión", "She is an engineer.", "Ella es ingeniera."),
    row("Lugar habitual de trabajo", "Sujeto + work/works + expresión de lugar", "She works in an office.", "Ella trabaja en una oficina."),
    row("Acción actual", "Sujeto + am/is/are + verbo-ing + complemento", "She is writing a report.", "Ella está escribiendo un informe."),
  ] },
  articles: { note: "A/an: contable singular y sonido inicial. The: referente identificado por el contexto. Ø significa que no se escribe artículo.", rows: [
    row("Presentar un referente", "A/An + (adjetivo) + sustantivo contable singular", "An interesting book", "Un libro interesante"),
    row("Identificar un referente", "The + (adjetivo) + sustantivo", "The book on the table", "El libro sobre la mesa"),
    row("Generalizar", "Ø + plural o sustantivo incontable", "Books are useful. Water is important.", "Los libros son útiles. El agua es importante."),
  ] },
  adjectives: { note: "El adjetivo mantiene su forma aunque el sustantivo sea plural. El artículo depende del contexto.", rows: [
    row("Antes de un sustantivo", "Determinante + adjetivo + sustantivo", "A red car", "Un carro rojo"),
    row("Después de to be", "Sujeto + am/is/are + adjetivo", "The cars are red.", "Los carros son rojos."),
  ] },
  possessiveAdjectives: { note: "El posesivo depende del poseedor. My/your/his/her/its/our/their acompañan al sustantivo; mine/yours/his/hers/ours/theirs lo sustituyen.", rows: [
    row("Con sustantivo", "Adjetivo posesivo + (adjetivo) + sustantivo", "My new book", "Mi libro nuevo"),
    row("Sin repetir el sustantivo", "Sujeto + am/is/are + pronombre posesivo", "This book is mine.", "Este libro es mío."),
  ] },
  possessiveNouns: { rows: [
    row("Poseedor singular", "Poseedor + 's + cosa poseída", "The student's book", "El libro del estudiante"),
    row("Poseedores: plural terminado en s", "Poseedores + apóstrofe (') + cosa poseída", "The students' books", "Los libros de los estudiantes"),
    row("Plural irregular sin s", "Poseedores + 's + cosa poseída", "The children's toys", "Los juguetes de los niños"),
  ] },
  whQuestions: { note: "Modelo para preguntas con to be en las que el sujeto se expresa después del verbo. Who como sujeto tiene otro orden: Who is here?", rows: [
    row("Información con to be", "WH + am/is/are + sujeto + (complemento) + ?", "Where is Ana?", "¿Dónde está Ana?"),
    row("Pertenencia", "Whose + sustantivo + is/are + this/that/these/those + ?", "Whose backpack is this?", "¿De quién es esta mochila?"),
  ] },
  simplePresent: { note: "Do: I/you/we/they. Does: he/she/it. Tras do/does el verbo vuelve a su forma base. To be usa am/is/are y no necesita do/does.", rows: simplePresent },
  gerunds: { note: "La elección depende del primer verbo o de la preposición. Like admite -ing o to + verbo; enjoy exige -ing en este patrón. Un infinitivo también puede funcionar como sujeto.", rows: [
    row("Actividad como sujeto", "Verbo-ing + verbo conjugado + complemento", "Reading is fun.", "Leer es divertido."),
    row("Después de enjoy", "Sujeto + enjoy/enjoys + verbo-ing + complemento", "I enjoy reading books.", "Disfruto leer libros."),
    row("Después de una preposición", "Preposición + verbo-ing", "She is good at drawing.", "Ella es buena dibujando."),
    row("Infinitivo con want", "Sujeto + want/wants + to + verbo base", "I want to read.", "Quiero leer."),
  ] },
  irregularVerbs: { title: "Referencia de formas y estructuras", note: "No hay una fórmula única para formar los verbos irregulares: aprende sus tres formas. Los siguientes usos son una ampliación, no una regla de transformación.", rows: [
    row("Tres formas", "Forma base → pasado simple → participio pasado", "Go → went → gone", "Ir: forma base, pasado y participio"),
    row("Pasado afirmativo", "Sujeto + verbo en pasado + complemento", "She went home.", "Ella fue a casa."),
    row("Presente perfecto afirmativo", "Sujeto + have/has + participio pasado + complemento", "She has gone home.", "Ella se ha ido a casa."),
  ] },
  vocabulary: { title: "Patrones para una conversación", note: "Los saludos y despedidas se aprenden como expresiones completas; estos patrones ayudan a enlazarlos con tu presentación.", rows: [
    row("Decir tu nombre", "My name is + nombre", "My name is Ana.", "Me llamo Ana."),
    row("Presentarte por profesión", "I'm + a/an + profesión", "I'm a teacher.", "Soy maestra."),
    row("Despedirte", "See you + momento", "See you tomorrow.", "Nos vemos mañana."),
  ] },
  simplePresentAdvanced: { note: "Estos son órdenes habituales. Si who pregunta por el sujeto, no uses do/does: Who works here? Los complementos dependen de lo que quieras comunicar.", rows: frequency },
  inOnAt: { note: "Son usos frecuentes, no una regla universal de tamaño. Aprende las expresiones de lugar: at home, in a room, on the wall.", rows: [
    row("Hora", "Oración + at + hora", "I start work at eight.", "Empiezo a trabajar a las ocho."),
    row("Día o fecha", "Oración + on + día/fecha", "I study on Mondays.", "Estudio los lunes."),
    row("Mes o año", "Oración + in + mes/año", "My birthday is in July.", "Mi cumpleaños es en julio."),
    row("Cantidad de veces", "Once/twice + a + periodo; o número + times + a + periodo", "I exercise three times a week.", "Hago ejercicio tres veces por semana."),
  ] },
  directions: { note: "El imperativo normalmente omite el sujeto. Usa left/right desde la perspectiva de quien camina, según el punto de partida.", rows: [
    row("Pedir una ruta", "How do I get to + destino + ?", "How do I get to the hospital?", "¿Cómo llego al hospital?"),
    row("Dar una instrucción", "Verbo base + dirección o referencia", "Turn right onto Main Street.", "Gira a la derecha para entrar a Main Street."),
    row("Ubicar el destino", "Lugar + is + expresión de ubicación", "The hospital is on your left.", "El hospital está a tu izquierda."),
  ] },
  examReview: { title: "Fórmulas de repaso", rows: [...frequency,
    row("Describir un sentimiento", "Sujeto + am/is/are + adjetivo", "I am excited.", "Estoy emocionado/a."),
  ] },
  topicsExam: { title: "Fórmulas centrales del repaso", note: "En las pestañas encontrarás las formas negativas, preguntas y usos de cada estructura. There isn't / there aren't expresan que no hay algo.", rows: [...existence, simplePresent[1], progressive[0],
    row("Indicaciones", "Verbo base + dirección o referencia", "Turn left at the intersection.", "Gira a la izquierda en la intersección."),
  ] },
  bodyParts: { title: "Patrones para hablar del cuerpo", note: "Combina los nombres con posesivos y plurales. Algunos plurales son irregulares: foot → feet, tooth → teeth.", rows: [
    row("Identificar", "This is / These are + posesivo + parte(s) del cuerpo", "These are my feet.", "Estos son mis pies."),
    row("Describir", "Parte(s) del cuerpo + is/are + adjetivo", "My eyes are brown.", "Mis ojos son cafés."),
    row("Dar una instrucción", "Verbo base + your + parte(s) del cuerpo", "Raise your arms.", "Levanta los brazos."),
  ] },
};
