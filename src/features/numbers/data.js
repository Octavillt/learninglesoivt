export const NUMBERS_0_20 = [
  [0, "zero"], [1, "one"], [2, "two"], [3, "three"], [4, "four"],
  [5, "five"], [6, "six"], [7, "seven"], [8, "eight"], [9, "nine"],
  [10, "ten"], [11, "eleven"], [12, "twelve"], [13, "thirteen"],
  [14, "fourteen"], [15, "fifteen"], [16, "sixteen"], [17, "seventeen"],
  [18, "eighteen"], [19, "nineteen"], [20, "twenty"],
];

export const TEENS = ["thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

export const NUMBERS_21_29 = [
  [21, "twenty-one"], [22, "twenty-two"], [23, "twenty-three"], [24, "twenty-four"],
  [25, "twenty-five"], [26, "twenty-six"], [27, "twenty-seven"], [28, "twenty-eight"],
  [29, "twenty-nine"],
];

export const TENS = [
  [30, "thirty"], [40, "forty"], [50, "fifty"], [60, "sixty"],
  [70, "seventy"], [80, "eighty"], [90, "ninety"],
];

export const BIG_NUMBERS = [
  ["100", "one hundred"],
  ["1,000", "one thousand"],
  ["10,000", "ten thousand"],
  ["100,000", "one hundred thousand"],
  ["1,000,000", "one million"],
  ["1,000,000,000", "one billion"],
];

export const COMPOUND_EXAMPLES = [
  ["200", "two hundred"],
  ["252", "two hundred fifty-two"],
  ["999", "nine hundred ninety-nine"],
];

export const BEFORE_AFTER = [
  { n: 79, hint: "→ it's eighty", label: "after" },
];

export const ROOM_NUMBERS = [
  { label: "Cell", value: "55" },
  { label: "Room", value: "013" },
  { label: "Room", value: "103" },
];

// ── Letters ──────────────────────────────────────────────────────────
// El abecedario inglés tiene las mismas 26 letras del español menos la Ñ.
// De cada letra guardamos su NOMBRE (cómo se dice al deletrear, que es
// distinto del sonido que hace dentro de una palabra), en IPA y en una
// aproximación escrita como la leería un hispanohablante, más una palabra
// de ejemplo.
export const ALPHABET = [
  { letter: "A", ipa: "/eɪ/",         say: "ei",      word: "Apple",    vowel: true },
  { letter: "B", ipa: "/biː/",        say: "bi",      word: "Book" },
  { letter: "C", ipa: "/siː/",        say: "si",      word: "Cat" },
  { letter: "D", ipa: "/diː/",        say: "di",      word: "Dog" },
  { letter: "E", ipa: "/iː/",         say: "i",       word: "Elephant", vowel: true },
  { letter: "F", ipa: "/ef/",         say: "ef",      word: "Fish" },
  { letter: "G", ipa: "/dʒiː/",       say: "yi",      word: "Girl" },
  { letter: "H", ipa: "/eɪtʃ/",       say: "eich",    word: "House" },
  { letter: "I", ipa: "/aɪ/",         say: "ai",      word: "Ice",      vowel: true },
  { letter: "J", ipa: "/dʒeɪ/",       say: "yei",     word: "Juice" },
  { letter: "K", ipa: "/keɪ/",        say: "kei",     word: "Key" },
  { letter: "L", ipa: "/el/",         say: "el",      word: "Lion" },
  { letter: "M", ipa: "/em/",         say: "em",      word: "Milk" },
  { letter: "N", ipa: "/en/",         say: "en",      word: "Night" },
  { letter: "O", ipa: "/oʊ/",         say: "ou",      word: "Orange",   vowel: true },
  { letter: "P", ipa: "/piː/",        say: "pi",      word: "Pen" },
  { letter: "Q", ipa: "/kjuː/",       say: "kiu",     word: "Queen" },
  { letter: "R", ipa: "/ɑːr/",        say: "ar",      word: "Red" },
  { letter: "S", ipa: "/es/",         say: "es",      word: "Sun" },
  { letter: "T", ipa: "/tiː/",        say: "ti",      word: "Table" },
  { letter: "U", ipa: "/juː/",        say: "iu",      word: "Umbrella", vowel: true },
  { letter: "V", ipa: "/viː/",        say: "vi",      word: "Van" },
  { letter: "W", ipa: "/ˈdʌbəljuː/",  say: "dábliu",  word: "Water" },
  { letter: "X", ipa: "/eks/",        say: "eks",     word: "Box" },
  { letter: "Y", ipa: "/waɪ/",        say: "uai",     word: "Yellow" },
  { letter: "Z", ipa: "/ziː/",        say: "zi",      word: "Zebra" },
];

export const VOWELS = ALPHABET.filter(l => l.vowel);
export const CONSONANTS = ALPHABET.filter(l => !l.vowel);

// El nombre de la letra no siempre coincide con el sonido que hace dentro de
// la palabra: cada vocal tiene un sonido largo (suena como su nombre) y uno
// corto, y de ahí salen la mayoría de los errores de pronunciación.
export const VOWEL_SOUNDS = [
  { letter: "A", long: { ipa: "/eɪ/", word: "cake",  esp: "pastel" },  short: { ipa: "/æ/",  word: "cat",  esp: "gato" } },
  { letter: "E", long: { ipa: "/iː/", word: "he",    esp: "él" },      short: { ipa: "/e/",  word: "bed",  esp: "cama" } },
  { letter: "I", long: { ipa: "/aɪ/", word: "bike",  esp: "bici" },    short: { ipa: "/ɪ/",  word: "sit",  esp: "sentarse" } },
  { letter: "O", long: { ipa: "/oʊ/", word: "home",  esp: "casa" },    short: { ipa: "/ɒ/",  word: "hot",  esp: "caliente" } },
  { letter: "U", long: { ipa: "/juː/", word: "use",  esp: "usar" },    short: { ipa: "/ʌ/",  word: "cup",  esp: "taza" } },
];

export const SPELLING_EXAMPLES = [
  { q: "How do you spell your name?", a: "M-A-R-I-A", esp: "¿Cómo se escribe tu nombre?" },
  { q: "Can you spell that, please?", a: "Sure: S-M-I-T-H", esp: "¿Puedes deletrearlo, por favor?" },
  { q: "How do you spell 'hello'?", a: "H-E-double L-O", esp: "Las letras repetidas se dicen con «double»" },
];
