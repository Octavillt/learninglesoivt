// Helper builders — shorthand para armar tokens
const su = t => ({ t, r: "subject" });
const pastForm = t => ({ t, r: "past" });
const pp = t => ({ t, r: "participle" });

export const PAST_SENTENCES = [
  { pts: [su("I"), " ", pastForm("went"), " to the store yesterday."], esp: "Yo fui a la tienda ayer." },
  { pts: [su("She"), " ", pastForm("ate"), " breakfast at 7."],         esp: "Ella desayunó a las 7." },
  { pts: [su("We"), " ", pastForm("saw"), " a great movie."],           esp: "Nosotros vimos una gran película." },
  { pts: [su("He"), " ", pastForm("wrote"), " a letter."],              esp: "Él escribió una carta." },
];

export const PERFECT_SENTENCES = [
  { pts: [su("I"), " have ", pp("eaten"), " already."],       esp: "Yo ya he comido." },
  { pts: [su("She"), " has ", pp("written"), " the email."],  esp: "Ella ha escrito el correo." },
  { pts: [su("They"), " have ", pp("gone"), " home."],        esp: "Ellos se han ido a casa." },
  { pts: [su("We"), " have ", pp("seen"), " that place before."], esp: "Nosotros hemos visto ese lugar antes." },
];

// [infinitive, simple past, past participle, español]
export const IRREGULAR_VERBS = [
  ["be", "was/were", "been", "ser / estar"],
  ["become", "became", "become", "convertirse en"],
  ["begin", "began", "begun", "comenzar"],
  ["break", "broke", "broken", "romper"],
  ["bring", "brought", "brought", "traer"],
  ["build", "built", "built", "construir"],
  ["buy", "bought", "bought", "comprar"],
  ["catch", "caught", "caught", "atrapar"],
  ["choose", "chose", "chosen", "elegir"],
  ["come", "came", "come", "venir"],
  ["cost", "cost", "cost", "costar"],
  ["cut", "cut", "cut", "cortar"],
  ["do", "did", "done", "hacer"],
  ["draw", "drew", "drawn", "dibujar"],
  ["drink", "drank", "drunk", "beber"],
  ["drive", "drove", "driven", "manejar"],
  ["eat", "ate", "eaten", "comer"],
  ["fall", "fell", "fallen", "caer"],
  ["feed", "fed", "fed", "alimentar"],
  ["feel", "felt", "felt", "sentir"],
  ["find", "found", "found", "encontrar"],
  ["fly", "flew", "flown", "volar"],
  ["get", "got", "gotten", "obtener"],
  ["give", "gave", "given", "dar"],
  ["go", "went", "gone", "ir"],
  ["grow", "grew", "grown", "crecer"],
  ["hang", "hung", "hung", "colgar"],
  ["have", "had", "had", "tener"],
  ["hear", "heard", "heard", "oír"],
  ["hit", "hit", "hit", "golpear"],
  ["hold", "held", "held", "sostener"],
  ["hurt", "hurt", "hurt", "lastimar"],
  ["keep", "kept", "kept", "guardar / mantener"],
  ["know", "knew", "known", "saber / conocer"],
  ["leave", "left", "left", "dejar / salir"],
  ["let", "let", "let", "dejar / permitir"],
  ["lose", "lost", "lost", "perder"],
  ["make", "made", "made", "hacer"],
  ["meet", "met", "met", "conocer / encontrarse con"],
  ["pay", "paid", "paid", "pagar"],
  ["put", "put", "put", "poner"],
  ["read", "read", "read", "leer"],
  ["ride", "rode", "ridden", "montar"],
  ["ring", "rang", "rung", "sonar"],
  ["rise", "rose", "risen", "levantarse / salir (el sol)"],
  ["run", "ran", "run", "correr"],
  ["say", "said", "said", "decir"],
  ["see", "saw", "seen", "ver"],
  ["sell", "sold", "sold", "vender"],
  ["send", "sent", "sent", "enviar"],
  ["set", "set", "set", "colocar / fijar"],
  ["sing", "sang", "sung", "cantar"],
  ["sit", "sat", "sat", "sentarse"],
  ["speak", "spoke", "spoken", "hablar"],
  ["stand", "stood", "stood", "pararse"],
  ["stick", "stuck", "stuck", "pegar"],
  ["take", "took", "taken", "tomar"],
  ["teach", "taught", "taught", "enseñar"],
  ["tell", "told", "told", "contar / decir"],
  ["think", "thought", "thought", "pensar"],
  ["throw", "threw", "thrown", "lanzar"],
  ["understand", "understood", "understood", "entender"],
  ["wake", "woke", "woken", "despertar"],
  ["wear", "wore", "worn", "usar / vestir"],
  ["win", "won", "won", "ganar"],
  ["write", "wrote", "written", "escribir"],
];

// Grupos fonéticos — cada uno con su color de acento y sus pares [símbolo, ejemplo]
export const IPA_GROUPS = [
  {
    title: "Vocales cortas", icon: "🔸", color: "#fbbf24",
    rows: [
      ["ɪ", "did"], ["ɛ", "bed"], ["æ", "bad"], ["ʌ", "cup"], ["ʊ", "book"], ["ə", "banana"],
    ],
  },
  {
    title: "Vocales largas", icon: "🔶", color: "#38bdf8",
    rows: [
      ["i", "feed"], ["ɑ", "father, box"], ["ɔ", "tall"], ["u", "student, food"], ["ɜ", "shirt, birthday"],
    ],
  },
  {
    title: "Diptongos", icon: "🌀", color: "#c084fc",
    rows: [
      ["eɪ", "date, table"], ["aɪ", "cry, eye"], ["ɔɪ", "boy"], ["oʊ", "comb, post"], ["aʊ", "about, how"],
    ],
  },
  {
    title: "Oclusivas", icon: "💥", color: "#4ade80",
    rows: [
      ["p", "park, happy"], ["b", "back, hobby"], ["t", "tea"], ["d", "die"], ["k", "came, kitchen, quarter"], ["g", "game, go"],
    ],
  },
  {
    title: "Fricativas", icon: "💨", color: "#f472b6",
    rows: [
      ["f", "face, photographer"], ["v", "vegetable"], ["θ", "thing, math"], ["ð", "then, that"],
      ["s", "city, summer"], ["z", "please, goes"], ["ʃ", "she, shop"], ["ʒ", "leisure"], ["h", "hot, who"],
    ],
  },
  {
    title: "Africadas", icon: "⚡", color: "#fb923c",
    rows: [
      ["tʃ", "chicken, watch"], ["dʒ", "jacket, orange"],
    ],
  },
  {
    title: "Nasales", icon: "🎵", color: "#34d399",
    rows: [
      ["m", "men"], ["n", "sun, know"], ["ŋ", "sung, singer"],
    ],
  },
  {
    title: "Aproximantes", icon: "〰️", color: "#60a5fa",
    rows: [
      ["w", "week, white"], ["r", "rain, writer"], ["l", "light, long"], ["j", "yes, use, music"],
    ],
  },
];
