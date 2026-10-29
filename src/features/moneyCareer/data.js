// Vocabulario de dinero y de planes de carrera de Básico V: pares de opuestos,
// colocaciones y ejemplos con going to. El inglés se aprende como unidad fija.

export const MONEY_OPPOSITES = [
  { a: ["buy", "comprar"], b: ["sell", "vender"], example: ["Octavio sold his motorcycle and bought a car.", "Octavio vendió su motocicleta y compró un coche."] },
  { a: ["spend", "gastar"], b: ["save", "ahorrar"], example: ["Don't spend all your money. Save some for next month.", "No gastes todo tu dinero. Ahorra un poco para el próximo mes."] },
  { a: ["rich", "rico / rica"], b: ["poor", "pobre"], example: ["He was poor when he was young, but now he is rich.", "Él era pobre cuando era joven, pero ahora es rico."] },
];

export const MONEY_EXTRA = [
  ["earn money", "ganar dinero (trabajando)"],
  ["waste money", "desperdiciar / malgastar dinero"],
  ["borrow money from someone", "pedirle dinero prestado a alguien"],
  ["lend money to someone", "prestarle dinero a alguien"],
  ["pay for something", "pagar algo"],
  ["How much does it cost?", "¿Cuánto cuesta?"],
  ["cheap / expensive", "barato / caro"],
  ["for sale", "en venta"],
  ["a bank account", "una cuenta bancaria"],
  ["savings", "ahorros"],
  ["a salary", "un salario, un sueldo"],
];

export const MONEY_PREPOSITIONS = [
  ["spend money on clothes", "gastar dinero en ropa — se usa on, no in"],
  ["save money for a trip", "ahorrar dinero para un viaje — se usa for"],
  ["borrow from / lend to", "pedir prestado a / prestar a — borrow recibe, lend da"],
  ["spend time with my family", "pasar tiempo con mi familia — spend también se usa con el tiempo"],
];

export const CAREER_PLANS = [
  ["🏗️", "work outdoors", "trabajar al aire libre"],
  ["👥", "manage people", "dirigir personal, supervisar a otras personas"],
  ["🏢", "work in an office", "trabajar en una oficina"],
  ["🏪", "start a business", "emprender / iniciar un negocio"],
  ["🏠", "work from home", "trabajar desde casa"],
  ["✈️", "work overseas", "trabajar en el extranjero"],
];

export const CAREER_EXTRA = [
  ["work for a large company", "trabajar para una empresa grande"],
  ["work part-time / full-time", "trabajar medio tiempo / tiempo completo"],
  ["get a job", "conseguir un trabajo"],
  ["get a promotion", "conseguir un ascenso"],
  ["earn a good salary", "ganar un buen sueldo"],
  ["travel for work", "viajar por trabajo"],
];

export const FUTURE_EXAMPLES = [
  ["I'm going to save money for a new car.", "Voy a ahorrar dinero para un coche nuevo."],
  ["Leslie is going to start a business next year.", "Leslie va a emprender un negocio el próximo año."],
  ["Israel isn't going to work in an office. He's going to work outdoors.", "Israel no va a trabajar en una oficina. Va a trabajar al aire libre."],
  ["Argelia is probably going to manage people.", "Argelia probablemente va a dirigir personal."],
  ["Eduardo wants to work overseas.", "Eduardo quiere trabajar en el extranjero."],
  ["Are you going to work from home tomorrow? — Yes, I am.", "¿Vas a trabajar desde casa mañana? — Sí."],
  ["We spent too much money last weekend.", "Gastamos demasiado dinero el fin de semana pasado."],
  ["I want to work for a large company. I'm probably going to manage other people.", "Quiero trabajar para una empresa grande. Probablemente voy a dirigir a otras personas."],
];

export const PRACTICE = [
  { question: "¿Cuál es el opuesto de buy?", options: ["sell", "spend", "save"], answers: ["sell"], explanation: "Buy (comprar) ↔ sell (vender)." },
  { question: "¿Cuál es el opuesto de spend?", options: ["save", "buy", "sell"], answers: ["save"], explanation: "Spend (gastar) ↔ save (ahorrar)." },
  { question: "Escribe el opuesto de rich.", answers: ["poor"], explanation: "Rich (rico) ↔ poor (pobre)." },
  { question: "Escribe el pasado de spend.", answers: ["spent"], explanation: "Spend es irregular: spend → spent." },
  { question: "Traduce: trabajar desde casa.", answers: ["work from home"], explanation: "Work from home. Se usa from, no in: ✗ work in home." },
  { question: "Traduce: trabajar en el extranjero.", answers: ["work overseas", "work abroad"], explanation: "Work overseas (o work abroad), sin preposición antes de overseas." },
  { question: "¿Cuál es correcta?", options: ["work outdoors", "work in outdoors", "work at outdoors"], answers: ["work outdoors"], explanation: "Outdoors no lleva preposición: work outdoors = trabajar al aire libre." },
  { question: "Completa: Leslie wants to ___ a business. (emprender)", answers: ["start"], explanation: "Start a business = emprender / iniciar un negocio." },
  { question: "Completa: I'm going to ___ money for a new car. (ahorrar)", answers: ["save"], explanation: "Save money for = ahorrar dinero para algo." },
  { question: "Completa: Octavio spends a lot of money ___ clothes.", options: ["on", "in", "for"], answers: ["on"], explanation: "Spend money on = gastar dinero en algo." },
  { question: "Ganar dinero trabajando: ¿cuál es correcta?", options: ["earn money", "win money"], answers: ["earn money"], explanation: "Earn money = ganar dinero trabajando. Win es ganar un juego o un premio." },
  { question: "Traduce: Argelia probablemente va a dirigir personal.", answers: ["Argelia is probably going to manage people.", "Argelia's probably going to manage people."], explanation: "Argelia is probably going to manage people. Probably va entre is y going to." },
];
