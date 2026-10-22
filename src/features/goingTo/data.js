export const EXAMPLES = [
  ["I am going to go to Acapulco in December.", "Voy a ir a Acapulco en diciembre."],
  ["I'm going to eat seafood.", "Voy a comer mariscos."],
  ["My family and I are going to swim.", "Mi familia y yo vamos a nadar."],
  ["I'm going to take a summer class.", "Voy a tomar una clase de verano."],
  ["It's not going to be very sunny today.", "No va a estar muy soleado hoy."],
  ["She thinks she's going to fail her exam.", "Ella cree que va a reprobar su examen."],
  ["I'm not going to teach you tomorrow.", "No te voy a enseñar mañana."],
  ["We aren't going to arrive late to class tomorrow.", "No vamos a llegar tarde a la clase de mañana."],
  ["Octavio isn't going to sell a bike.", "Octavio no va a vender una bicicleta."],
  ["We're not going to travel this summer.", "No vamos a viajar este verano."],
];

export const QUESTIONS = [
  ["Am I going to go to Acapulco tomorrow?", "No, you aren't.", "¿Voy a ir a Acapulco mañana? — No."],
  ["Is Octavio gonna sell his motorcycle?", "Yes, he is.", "¿Octavio va a vender su motocicleta? — Sí."],
  ["Are you going to study your verbs in simple past?", "Yes, I am. / Yes, we are.", "¿Vas a estudiar tus verbos en pasado simple? — Sí."],
  ["Is he going to visit his family?", "Yes, he is. / No, he isn't.", "¿Va a visitar a su familia? — Sí. / No."],
  ["Where are you going to study?", "In London.", "¿Dónde vas a estudiar? — En Londres."],
  ["When is she going to see Matt?", "This winter.", "¿Cuándo va a ver a Matt? — Este invierno."],
  ["What are you going to do this weekend?", "I'm going to clean the house.", "¿Qué vas a hacer este fin de semana? — Voy a limpiar la casa."],
];

export const TIME_EXPRESSIONS = [
  ["tomorrow", "mañana"],
  ["tonight", "esta noche"],
  ["after the class", "después de la clase"],
  ["this weekend", "este fin de semana"],
  ["this summer", "este verano"],
  ["next week", "la próxima semana"],
  ["next winter", "el próximo invierno"],
  ["in December", "en diciembre"],
  ["later on", "más tarde"],
];

export const VOCABULARY = [
  ["seafood", "mariscos"],
  ["visit", "visitar"],
  ["take a nap", "tomar una siesta"],
];

export const BOOK_DIALOGS = {
  prompt: "Completa los diálogos con la forma correcta de going to (Unit 11 A, p. 157).",
  items: [
    {
      blanks: ["A: What ___ you ___ (do) this weekend?", "B: I'm not sure. I think I ___ (clean) the house."],
      answers: ["A: What are you going to do this weekend?", "B: I'm not sure. I think I'm going to clean the house."],
    },
    {
      blanks: ["A: ___ the weather ___ (be) nice tomorrow?", "B: No, it isn't. It ___ (rain) all day."],
      answers: ["A: Is the weather going to be nice tomorrow?", "B: No, it isn't. It's going to rain all day."],
    },
    {
      blanks: ["A: Gina ___ (not work) on the project with me.", "B: Oh, no! ___ anyone ___ (help) you?"],
      answers: ["A: Gina isn't going to work on the project with me.", "B: Oh, no! Is anyone going to help you?"],
    },
    {
      blanks: ["A: When ___ your parents ___ (visit)?", "B: On Friday. They ___ (spend) the weekend with me."],
      answers: ["A: When are your parents going to visit?", "B: On Friday. They're going to spend the weekend with me."],
    },
    {
      blanks: ["A: ___ you and Rex ___ (get) married?", "B: Yes, we are, but we ___ (not have) a big wedding."],
      answers: ["A: Are you and Rex going to get married?", "B: Yes, we are, but we aren't going to have a big wedding."],
    },
  ],
};

export const PRACTICE = [
  { question: "Completa: I ___ going to eat seafood. (am / is / are)", answers: ["am"], explanation: "I am going to eat seafood. Con I usa am." },
  { question: "Completa: She ___ going to visit her family. (am / is / are)", answers: ["is"], explanation: "She is going to visit her family. Con she usa is." },
  { question: "Completa: They ___ going to swim. (am / is / are)", answers: ["are"], explanation: "They are going to swim. Con they usa are." },
  { question: "Traduce: Voy a ir a Acapulco en diciembre.", answers: ["I am going to go to Acapulco in December.", "I'm going to go to Acapulco in December."], explanation: "I am going to go to Acapulco in December. Going to es la estructura de futuro y go es el verbo principal." },
  { question: "Convierte en negativa: We are going to travel this summer.", answers: ["We aren't going to travel this summer.", "We are not going to travel this summer.", "We're not going to travel this summer."], explanation: "We aren't going to travel this summer. Agrega not después de am/is/are." },
  { question: "Convierte en pregunta: He is going to visit his family.", answers: ["Is he going to visit his family?"], explanation: "Is he going to visit his family? Coloca is antes del sujeto." },
  { question: "Responde afirmativamente con una respuesta corta: Is Octavio going to sell his motorcycle?", answers: ["Yes, he is."], explanation: "Yes, he is. Las respuestas cortas usan am/is/are, no going to." },
  { question: "Ordena: you / What / going to / are / do / this weekend / ?", answers: ["What are you going to do this weekend?"], explanation: "WH + am/is/are + sujeto + going to + verbo base: What are you going to do this weekend?" },
  { question: "¿Cuál es la contracción informal y oral de going to?", answers: ["gonna"], explanation: "Gonna es la forma oral e informal de going to; úsala solo antes de un verbo y evítala en textos formales." },
  { question: "Corrige: I'm going to went to the beach.", answers: ["I'm going to go to the beach.", "I am going to go to the beach."], explanation: "I'm going to go to the beach. Después de going to el verbo va en forma base, no went." },
  { question: "Completa el diálogo: What ___ you going to do this weekend?", answers: ["are"], explanation: "What are you going to do this weekend? Con you usa are." },
  { question: "Completa el diálogo: I think I'm going to ___ the house. (clean)", answers: ["clean"], explanation: "I'm going to clean the house. Después de going to el verbo va en forma base: clean." },
  { question: "Completa el diálogo: It's going to ___ all day. (rain)", answers: ["rain"], explanation: "It's going to rain all day. Es una predicción con going to; rain queda en forma base." },
];
