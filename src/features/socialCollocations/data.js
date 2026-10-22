export const SOCIAL_LIFE = [
  ["Go out dancing", "Salir a bailar"],
  ["Visit family", "Visitar a la familia"],
  ["Have a party", "Hacer una fiesta"],
  ["Go on a date", "Salir en una cita"],
  ["Hang out with friends", "Pasar el rato con amigos"],
  ["Go to a concert", "Ir a un concierto"],
  ["See a movie", "Ver una película"],
  ["Eat out at a restaurant", "Comer fuera en un restaurante"],
];

export const COLLOCATION_GROUPS = [
  { verb: "get", items: [
    ["get upset", "enojarse / molestarse", "negativa"],
    ["get lost", "perderse", "negativa"],
    ["get married", "casarse", "positiva"],
  ] },
  { verb: "have", items: [
    ["have an argument", "discutir / tener una discusión", "negativa"],
    ["have fun", "divertirse", "positiva"],
    ["have a party", "hacer una fiesta", "positiva"],
  ] },
  { verb: "make", items: [
    ["make a mistake", "cometer un error", "negativa"],
    ["make a new friend", "hacer un nuevo amigo", "positiva"],
    ["make a decision", "tomar una decisión", "positiva o negativa"],
  ] },
];

export const TIME_EXAMPLES = [
  ["She made a mistake.", "Ella cometió un error."],
  ["He got upset.", "Él se enojó."],
  ["I made a new friend.", "Hice un nuevo amigo."],
  ["They had an argument.", "Ellos tuvieron una discusión."],
  ["We made a decision.", "Tomamos una decisión."],
  ["We had fun at the club.", "Nos divertimos en el club."],
  ["We got lost on the way.", "Nos perdimos en el camino."],
  ["I hung out with friends.", "Pasé el rato con amigos."],
  ["We saw a movie.", "Vimos una película."],
  ["She went on a date.", "Ella salió en una cita."],
  ["I'm going to go out dancing on Friday.", "Voy a salir a bailar el viernes."],
  ["We're going to eat out at a restaurant tonight.", "Vamos a comer fuera en un restaurante esta noche."],
];

export const CONVERSATION = [
  ["How was last night? Did you have fun at the club?", "¿Qué tal estuvo anoche? ¿Se divirtieron en el club?"],
  ["Yes, we did. But at first Zac and I went to the wrong place! We got lost!", "Sí. ¡Pero al principio Zac y yo fuimos al lugar equivocado! ¡Nos perdimos!"],
  ["Oh, no! How did you make a mistake like that?", "¡Oh, no! ¿Cómo cometieron un error así?"],
  ["I don't know! I thought Zac knew the location. But we didn't get upset or have an argument. We asked a woman and finally found the club. It's a great place!", "¡No sé! Pensé que Zac conocía la ubicación. Pero no nos enojamos ni discutimos. Le preguntamos a una mujer y finalmente encontramos el club. ¡Es un lugar increíble!"],
];

export const PRACTICE = [
  { question: "Traduce: pasar el rato con amigos.", answers: ["hang out with friends"], explanation: "Hang out with friends = pasar el rato con amigos." },
  { question: "Traduce: salir en una cita.", answers: ["go on a date"], explanation: "Go on a date. La partícula es on: no digas go in a date." },
  { question: "Completa: Let's go out ___ (dance).", answers: ["dancing"], explanation: "Let's go out dancing. Después de go out el verbo lleva -ing." },
  { question: "Completa la conversación: Did you have ___ at the club? — Yes, we did.", answers: ["fun"], explanation: "Did you have fun at the club? Have fun = divertirse." },
  { question: "Completa: We got ___ on the way to the club. (perderse)", answers: ["lost"], explanation: "We got lost on the way to the club. Get lost = perderse; en pasado, got lost." },
  { question: "Escribe en pasado: make a mistake.", answers: ["made a mistake"], explanation: "Make → made: made a mistake = cometió un error." },
  { question: "¿Cuál colocación significa tomar una decisión?", options: ["make a decision", "do a decision", "have a decision"], answers: ["make a decision"], explanation: "Make a decision = tomar una decisión. En inglés se usa make, no do ni have." },
  { question: "Traduce: Voy a salir a bailar el viernes.", answers: ["I'm going to go out dancing on Friday.", "I am going to go out dancing on Friday."], explanation: "I'm going to go out dancing on Friday. La colocación conserva su forma fija después de going to." },
  { question: "¿Cuál experiencia es positiva?", options: ["make a mistake", "have an argument", "make a new friend"], answers: ["make a new friend"], explanation: "Make a new friend es positiva; make a mistake y have an argument son negativas." },
  { question: "Completa: They ___ married two years later. (get)", answers: ["got"], explanation: "They got married two years later. Get married = casarse; en pasado, got married." },
];
