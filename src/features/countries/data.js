export const COUNTRIES = [
  { flag: "🇲🇽", en: "Mexico", es: "México", nationalityEn: "Mexican", nationalityEs: "mexicano/a" },
  { flag: "🇺🇸", en: "United States", es: "Estados Unidos", nationalityEn: "American", nationalityEs: "estadounidense" },
  { flag: "🇨🇦", en: "Canada", es: "Canadá", nationalityEn: "Canadian", nationalityEs: "canadiense" },
  { flag: "🇧🇷", en: "Brazil", es: "Brasil", nationalityEn: "Brazilian", nationalityEs: "brasileño/a" },
  { flag: "🇦🇷", en: "Argentina", es: "Argentina", nationalityEn: "Argentinian", nationalityEs: "argentino/a" },
  { flag: "🇨🇴", en: "Colombia", es: "Colombia", nationalityEn: "Colombian", nationalityEs: "colombiano/a" },
  { flag: "🇪🇸", en: "Spain", es: "España", nationalityEn: "Spanish", nationalityEs: "español/a" },
  { flag: "🇫🇷", en: "France", es: "Francia", nationalityEn: "French", nationalityEs: "francés/a" },
  { flag: "🇮🇹", en: "Italy", es: "Italia", nationalityEn: "Italian", nationalityEs: "italiano/a" },
  { flag: "🇩🇪", en: "Germany", es: "Alemania", nationalityEn: "German", nationalityEs: "alemán/a" },
  { flag: "🇬🇧", en: "United Kingdom", es: "Reino Unido", nationalityEn: "British", nationalityEs: "británico/a" },
  { flag: "🇵🇹", en: "Portugal", es: "Portugal", nationalityEn: "Portuguese", nationalityEs: "portugués/a" },
  { flag: "🇷🇺", en: "Russia", es: "Rusia", nationalityEn: "Russian", nationalityEs: "ruso/a" },
  { flag: "🇨🇳", en: "China", es: "China", nationalityEn: "Chinese", nationalityEs: "chino/a" },
  { flag: "🇯🇵", en: "Japan", es: "Japón", nationalityEn: "Japanese", nationalityEs: "japonés/a" },
  { flag: "🇰🇷", en: "South Korea", es: "Corea del Sur", nationalityEn: "Korean", nationalityEs: "coreano/a" },
  { flag: "🇮🇳", en: "India", es: "India", nationalityEn: "Indian", nationalityEs: "indio/a" },
  { flag: "🇦🇺", en: "Australia", es: "Australia", nationalityEn: "Australian", nationalityEs: "australiano/a" },
  { flag: "🇨🇭", en: "Switzerland", es: "Suiza", nationalityEn: "Swiss", nationalityEs: "suizo/a" },
  { flag: "🇳🇱", en: "Netherlands", es: "Países Bajos", nationalityEn: "Dutch", nationalityEs: "neerlandés/a" },
  { flag: "🇬🇷", en: "Greece", es: "Grecia", nationalityEn: "Greek", nationalityEs: "griego/a" },
  { flag: "🇹🇷", en: "Turkey", es: "Turquía", nationalityEn: "Turkish", nationalityEs: "turco/a" },
  { flag: "🇪🇬", en: "Egypt", es: "Egipto", nationalityEn: "Egyptian", nationalityEs: "egipcio/a" },
  { flag: "🇨🇺", en: "Cuba", es: "Cuba", nationalityEn: "Cuban", nationalityEs: "cubano/a" },
  { flag: "🇵🇪", en: "Peru", es: "Perú", nationalityEn: "Peruvian", nationalityEs: "peruano/a" },
  { flag: "🇨🇱", en: "Chile", es: "Chile", nationalityEn: "Chilean", nationalityEs: "chileno/a" },
  { flag: "🇻🇪", en: "Venezuela", es: "Venezuela", nationalityEn: "Venezuelan", nationalityEs: "venezolano/a" },
];

export const CITIES = [
  ["Mexico City", "Ciudad de México"],
  ["New York", "Nueva York"],
  ["Los Angeles", "Los Ángeles"],
  ["Toronto", "Toronto"],
  ["Bogotá", "Bogotá"],
  ["Madrid", "Madrid"],
  ["Paris", "París"],
  ["Rome", "Roma"],
  ["London", "Londres"],
  ["Tokyo", "Tokio"],
];

export const ORIGIN_DIALOG = [
  {
    q: "Where are you from?",
    qEsp: "¿De dónde eres?",
    a: "I'm from Mexico.",
    aEsp: "Soy de México.",
  },
  {
    q: "What's your nationality?",
    qEsp: "¿Cuál es tu nacionalidad?",
    a: "I'm Mexican.",
    aEsp: "Soy mexicano/a.",
  },
  {
    q: "Where do you live?",
    qEsp: "¿Dónde vives?",
    a: "I live in Mexico City.",
    aEsp: "Vivo en Ciudad de México.",
  },
  {
    q: "Where were you born?",
    qEsp: "¿Dónde naciste?",
    a: "I was born in Guadalajara.",
    aEsp: "Nací en Guadalajara.",
  },
];

export const OTHERS_DIALOG = [
  {
    q: "Where is he from?",
    qEsp: "¿De dónde es él?",
    a: "He's from Spain. He's Spanish.",
    aEsp: "Él es de España. Él es español.",
  },
  {
    q: "Where is she from?",
    qEsp: "¿De dónde es ella?",
    a: "She's from Japan. She's Japanese.",
    aEsp: "Ella es de Japón. Ella es japonesa.",
  },
  {
    q: "Where are they from?",
    qEsp: "¿De dónde son ellos?",
    a: "They're from Brazil. They're Brazilian.",
    aEsp: "Ellos son de Brasil. Ellos son brasileños.",
  },
];

export const FORMULA_STEPS = [
  {
    step: "1", label: "Origen", color: "#60a5fa",
    en: "Where are you from? → I'm from + país.",
    esp: "Pregunta de dónde eres y respondes con 'I'm from' + el país.",
  },
  {
    step: "2", label: "Nacionalidad", color: "#4ade80",
    en: "What's your nationality? → I'm + nacionalidad.",
    esp: "Pregunta tu nacionalidad y respondes con 'I'm' + el gentilicio.",
  },
  {
    step: "3", label: "Residencia", color: "#f472b6",
    en: "Where do you live? → I live in + ciudad/país.",
    esp: "Pregunta dónde vives y respondes con 'I live in' + el lugar.",
  },
];
