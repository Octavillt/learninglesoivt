import { MODULE_QUESTIONS } from "./moduleQuestions";
import { getAvailableTopics } from "../../constants/topicAvailability";
import { LEVELS } from "../../constants/levels";

// Cada pregunta tiene:
//   question  — texto que se muestra al estudiante
//   answers   — array de respuestas aceptadas (case-insensitive)
//   hint      — pista en español
//   topic     — categoría para filtrar por tema
//   explanation — se muestra al revelar la respuesta correcta

export const QUESTIONS = [
  ...MODULE_QUESTIONS,
  // ── Verb To Be ────────────────────────────────────────────────
  {
    topic: "tobe",
    question: "Fill in: I ___ a student.",
    answers: ["am"],
    hint: "Solo 'yo' usa esta forma",
    explanation: "I AM a student. Solo 'I' usa AM.",
  },
  {
    topic: "tobe",
    question: "Fill in: She ___ my friend.",
    answers: ["is"],
    hint: "He / She / It → ___",
    explanation: "She IS my friend. He, She, It usan IS.",
  },
  {
    topic: "tobe",
    question: "Fill in: They ___ happy.",
    answers: ["are"],
    hint: "They / We / You → ___",
    explanation: "They ARE happy. They, We, You usan ARE.",
  },
  {
    topic: "tobe",
    question: "Fill in: We ___ in school.",
    answers: ["are"],
    hint: "They / We / You → ___",
    explanation: "We ARE in school.",
  },
  {
    topic: "tobe",
    question: "Fill in: He ___ a teacher.",
    answers: ["is"],
    hint: "He / She / It → IS",
    explanation: "He IS a teacher.",
  },
  {
    topic: "tobe",
    question: "Fill in: It ___ a big house.",
    answers: ["is"],
    hint: "He / She / It → IS",
    explanation: "It IS a big house.",
  },
  {
    topic: "tobe",
    question: "Fill in: You ___ my friend.",
    answers: ["are"],
    hint: "They / We / You → ARE",
    explanation: "You ARE my friend.",
  },
  {
    topic: "tobe",
    question: "Negative (short form): She ___ happy.",
    answers: ["isn't", "is not"],
    hint: "is + not = ___",
    explanation: "She ISN'T happy. is + not = isn't.",
  },
  {
    topic: "tobe",
    question: "Negative (short form): They ___ my friends.",
    answers: ["aren't", "are not"],
    hint: "are + not = ___",
    explanation: "They AREN'T my friends. are + not = aren't.",
  },
  {
    topic: "tobe",
    question: "Question: ___ she a student? (Yes, she is.)",
    answers: ["is"],
    hint: "En preguntas el verbo va AL INICIO",
    explanation: "IS she a student? El verbo To Be va primero en preguntas.",
  },
  {
    topic: "tobe",
    question: "Question: ___ you my friend? (Yes, I am.)",
    answers: ["are"],
    hint: "You → ARE. El verbo va al inicio",
    explanation: "ARE you my friend?",
  },

  // ── Plurales ──────────────────────────────────────────────────
  {
    topic: "plural",
    question: "Write the plural of: cat",
    answers: ["cats"],
    hint: "Consonante normal → + S",
    explanation: "cat → cats. Consonante normal: solo agrega S.",
  },
  {
    topic: "plural",
    question: "Write the plural of: box",
    answers: ["boxes"],
    hint: "Termina en x → + ES",
    explanation: "box → boxes. Termina en x: agrega ES.",
  },
  {
    topic: "plural",
    question: "Write the plural of: baby",
    answers: ["babies"],
    hint: "Consonante + Y → quita Y, pon IES",
    explanation: "baby → babies. Consonante + Y: quita la Y y pon IES.",
  },
  {
    topic: "plural",
    question: "Write the plural of: toy",
    answers: ["toys"],
    hint: "Vocal + Y → solo + S",
    explanation: "toy → toys. Vocal + Y: solo agrega S.",
  },
  {
    topic: "plural",
    question: "Write the plural of: tomato",
    answers: ["tomatoes"],
    hint: "Consonante + O → + ES",
    explanation: "tomato → tomatoes. Consonante + O: agrega ES.",
  },
  {
    topic: "plural",
    question: "Write the plural of: wolf",
    answers: ["wolves"],
    hint: "Termina en F → cambia a VES",
    explanation: "wolf → wolves. Termina en F: cambia F por VES.",
  },
  {
    topic: "plural",
    question: "Write the plural of: watch",
    answers: ["watches"],
    hint: "Termina en ch → + ES",
    explanation: "watch → watches. Termina en ch: agrega ES.",
  },
  {
    topic: "plural",
    question: "Write the plural of: child (irregular)",
    answers: ["children"],
    hint: "¡Este es irregular! Hay que memorizarlo",
    explanation: "child → children. Es un plural irregular.",
  },
  {
    topic: "plural",
    question: "Write the plural of: man (irregular)",
    answers: ["men"],
    hint: "¡Este es irregular!",
    explanation: "man → men. Es un plural irregular.",
  },
  {
    topic: "plural",
    question: "Write the plural of: book",
    answers: ["books"],
    hint: "Consonante normal → + S",
    explanation: "book → books. Solo agrega S.",
  },

  // ── This / That / These / Those ───────────────────────────────
  {
    topic: "demonstratives",
    question: "Near, 1 thing: ___ is my apple.",
    answers: ["this"],
    hint: "Cerca + 1 cosa = ___",
    explanation: "THIS is my apple. Cerca (near) + 1 cosa → THIS.",
  },
  {
    topic: "demonstratives",
    question: "Far, 1 thing: ___ is a car.",
    answers: ["that"],
    hint: "Lejos + 1 cosa = ___",
    explanation: "THAT is a car. Lejos (far) + 1 cosa → THAT.",
  },
  {
    topic: "demonstratives",
    question: "Near, 2+ things: ___ are my books.",
    answers: ["these"],
    hint: "Cerca + 2 o más cosas = ___",
    explanation: "THESE are my books. Cerca + 2+ cosas → THESE.",
  },
  {
    topic: "demonstratives",
    question: "Far, 2+ things: ___ are my friends.",
    answers: ["those"],
    hint: "Lejos + 2 o más cosas = ___",
    explanation: "THOSE are my friends. Lejos + 2+ cosas → THOSE.",
  },
  {
    topic: "demonstratives",
    question: "What is the plural of THIS?",
    answers: ["these"],
    hint: "This → ___",
    explanation: "THIS → THESE (plural, cerca).",
  },
  {
    topic: "demonstratives",
    question: "What is the plural of THAT?",
    answers: ["those"],
    hint: "That → ___",
    explanation: "THAT → THOSE (plural, lejos).",
  },

  // ── Preposiciones ─────────────────────────────────────────────
  {
    topic: "prepositions",
    question: "The cat is ___ the box. (inside)",
    answers: ["in"],
    hint: "Dentro de = ___",
    explanation: "The cat is IN the box. IN = dentro de.",
  },
  {
    topic: "prepositions",
    question: "The book is ___ the table. (on top of)",
    answers: ["on"],
    hint: "Encima de / sobre = ___",
    explanation: "The book is ON the table. ON = encima / sobre.",
  },
  {
    topic: "prepositions",
    question: "The ball is ___ the chair. (below it)",
    answers: ["under"],
    hint: "Debajo de = ___",
    explanation: "The ball is UNDER the chair. UNDER = debajo de.",
  },
  {
    topic: "prepositions",
    question: "The dog is ___ the house. (at the back)",
    answers: ["behind"],
    hint: "Detrás de = ___",
    explanation: "The dog is BEHIND the house. BEHIND = detrás de.",
  },
  {
    topic: "prepositions",
    question: "The cat is ___ the door. (facing it)",
    answers: ["in front of"],
    hint: "Enfrente de = ___",
    explanation: "The cat is IN FRONT OF the door.",
  },
  {
    topic: "prepositions",
    question: "The dog is ___ the bowl. (beside it)",
    answers: ["next to"],
    hint: "Al lado de = ___",
    explanation: "The dog is NEXT TO the bowl.",
  },
  {
    topic: "prepositions",
    question: "The ball is ___ the two boxes. (in the middle)",
    answers: ["between"],
    hint: "Entre dos cosas = ___",
    explanation: "The ball is BETWEEN the boxes. BETWEEN = entre.",
  },

  // ── Forma -ING ────────────────────────────────────────────────
  {
    topic: "progressive",
    question: "Write the -ING form of: play",
    answers: ["playing"],
    hint: "Regla 1: solo agrega -ING",
    explanation: "play → playing. Solo se agrega -ING.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: run",
    answers: ["running"],
    hint: "Regla 3 (CVC): dobla la última letra",
    explanation: "run → running. Patrón CVC: dobla la N.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: dance",
    answers: ["dancing"],
    hint: "Regla 2: termina en E → quita la E",
    explanation: "dance → dancing. Termina en E: quita la E y agrega -ING.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: swim",
    answers: ["swimming"],
    hint: "Regla 3 (CVC): dobla la última letra",
    explanation: "swim → swimming. Patrón CVC: dobla la M.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: eat",
    answers: ["eating"],
    hint: "Regla 1: solo agrega -ING",
    explanation: "eat → eating.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: write",
    answers: ["writing"],
    hint: "Regla 2: termina en E → quita la E",
    explanation: "write → writing. Termina en E: quita la E.",
  },
  {
    topic: "progressive",
    question: "Write the -ING form of: sit",
    answers: ["sitting"],
    hint: "Regla 3 (CVC): dobla la última letra",
    explanation: "sit → sitting. Patrón CVC: dobla la T.",
  },
  {
    topic: "progressive",
    question: "Fill in: She is ___ (read) a book right now.",
    answers: ["reading"],
    hint: "Verbo + ING = está haciendo algo ahora",
    explanation: "She is READING a book. read → reading.",
  },

  // ── Verbos (traducción) ───────────────────────────────────────
  {
    topic: "verbs",
    question: "What does COOK mean in Spanish?",
    answers: ["cocinar"],
    hint: "Acción de preparar comida",
    explanation: "COOK = Cocinar.",
  },
  {
    topic: "verbs",
    question: "What does SLEEP mean in Spanish?",
    answers: ["dormir"],
    hint: "Lo que haces de noche",
    explanation: "SLEEP = Dormir.",
  },
  {
    topic: "verbs",
    question: "What does RUN mean in Spanish?",
    answers: ["correr"],
    hint: "Moverte muy rápido con las piernas",
    explanation: "RUN = Correr.",
  },
  {
    topic: "verbs",
    question: "What does DRINK mean in Spanish?",
    answers: ["beber", "tomar"],
    hint: "Lo que haces con agua o jugo",
    explanation: "DRINK = Beber / Tomar.",
  },
  {
    topic: "verbs",
    question: "Translate to English: Estudiar",
    answers: ["study"],
    hint: "Lo que haces en la escuela",
    explanation: "Estudiar = STUDY.",
  },
  {
    topic: "verbs",
    question: "Translate to English: Caminar",
    answers: ["walk"],
    hint: "Moverte a pie, sin correr",
    explanation: "Caminar = WALK.",
  },
  {
    topic: "verbs",
    question: "Translate to English: Cantar",
    answers: ["sing"],
    hint: "Lo que hace un cantante",
    explanation: "Cantar = SING.",
  },
  {
    topic: "verbs",
    question: "What does WRITE mean in Spanish?",
    answers: ["escribir"],
    hint: "Lo que haces con un lápiz o teclado",
    explanation: "WRITE = Escribir.",
  },

  // ── Números ───────────────────────────────────────────────────
  {
    topic: "numbers",
    question: "Write the number 13 in English.",
    answers: ["thirteen"],
    hint: "Termina en -teen",
    explanation: "13 = THIRTEEN.",
  },
  {
    topic: "numbers",
    question: "Write the number 15 in English.",
    answers: ["fifteen"],
    hint: "Termina en -teen (ojo: no es 'fiveteen')",
    explanation: "15 = FIFTEEN. Es una excepción, no se dice 'fiveteen'.",
  },
  {
    topic: "numbers",
    question: "Write the number 21 in English.",
    answers: ["twenty-one", "twenty one"],
    hint: "Decena + guion + unidad",
    explanation: "21 = TWENTY-ONE. Decena + guion + unidad.",
  },
  {
    topic: "numbers",
    question: "Write the number 30 in English.",
    answers: ["thirty"],
    hint: "Decena redonda",
    explanation: "30 = THIRTY.",
  },
  {
    topic: "numbers",
    question: "Write the number 50 in English.",
    answers: ["fifty"],
    hint: "Ojo: no es 'fivety'",
    explanation: "50 = FIFTY. Es una excepción, no se dice 'fivety'.",
  },
  {
    topic: "numbers",
    question: "Write the number 80 in English.",
    answers: ["eighty"],
    hint: "Decena redonda",
    explanation: "80 = EIGHTY.",
  },
  {
    topic: "numbers",
    question: "Write the number 99 in English.",
    answers: ["ninety-nine", "ninety nine"],
    hint: "Decena + guion + unidad",
    explanation: "99 = NINETY-NINE.",
  },
  {
    topic: "numbers",
    question: "Write the number 100 in English.",
    answers: ["one hundred", "a hundred"],
    hint: "Centena básica",
    explanation: "100 = ONE HUNDRED.",
  },
  {
    topic: "numbers",
    question: "Write the number 252 in English.",
    answers: ["two hundred fifty-two", "two hundred fifty two", "two hundred and fifty-two", "two hundred and fifty two"],
    hint: "hundred + decena-unidad (sin 'and' en inglés americano)",
    explanation: "252 = TWO HUNDRED FIFTY-TWO.",
  },
  {
    topic: "numbers",
    question: "What comes AFTER 79? (write the word)",
    answers: ["eighty"],
    hint: "79 + 1 = ___",
    explanation: "El 'after' (siguiente) de 79 es 80 → EIGHTY.",
  },
  {
    topic: "numbers",
    question: "How do you say '0' when reading a phone or room number?",
    answers: ["oh", "zero"],
    hint: "Puedes usar el nombre del número o el sonido de la letra O.",
    explanation: "En números de teléfono o habitación, el 0 puede decirse 'oh' [oʊ] o 'zero'.",
  },

  // ── Letras (mismo tema que Numbers & Letters) ────────────────
  {
    topic: "numbers",
    question: "¿Cuántas letras tiene el abecedario inglés?",
    answers: ["26", "veintiseis", "veintiséis", "twenty-six", "twenty six"],
    hint: "Las mismas del español, menos una",
    explanation: "El alphabet tiene 26 letras: las del español sin la Ñ.",
  },
  {
    topic: "numbers",
    question: "Escribe las 5 vocales del inglés (separadas por espacio).",
    answers: ["a e i o u", "aeiou", "a, e, i, o, u"],
    hint: "Son las mismas del español",
    explanation: "Vowels: A E I O U. Las otras 21 letras son consonants.",
  },
  {
    topic: "numbers",
    question: "¿Cómo se llama la letra W al deletrear?",
    answers: ["double u", "double-u", "dabliu", "dábliu"],
    hint: "Literalmente 'doble u'",
    explanation: "W se dice DOUBLE U /ˈdʌbəljuː/.",
  },
  {
    topic: "numbers",
    question: "¿Cómo se llama la letra H al deletrear?",
    answers: ["aitch", "eitch", "eich", "aich"],
    hint: "Suena 'eich'",
    explanation: "H se dice AITCH /eɪtʃ/, no 'hache'.",
  },
  {
    topic: "numbers",
    question: "Spell the word 'HELLO' out loud: H-E-___-O",
    answers: ["double l", "double-l", "doble l", "l l", "ll"],
    hint: "Dos letras iguales seguidas se dicen juntas",
    explanation: "Las letras repetidas se deletrean con 'double': H-E-DOUBLE L-O.",
  },
  {
    topic: "numbers",
    question: "En 'cake', ¿la A tiene sonido largo o corto?",
    answers: ["largo", "long", "sonido largo", "long sound"],
    hint: "Suena igual que el nombre de la letra: 'ei'",
    explanation: "Sonido LARGO /eɪ/: cake suena 'keik'. El corto sería 'cat' /æ/.",
  },

  // ── What time is it? ─────────────────────────────────────────
  {
    topic: "time",
    question: "How do you say 03:25 in English?",
    answers: ["it's twenty-five past three", "twenty-five past three", "it is twenty-five past three"],
    hint: "Primero minutos, luego hora. Antes de la media → PAST",
    explanation: "03:25 = IT'S TWENTY-FIVE PAST THREE.",
  },
  {
    topic: "time",
    question: "How do you say 02:15 in English?",
    answers: ["it's a quarter past two", "a quarter past two", "it is a quarter past two"],
    hint: ":15 se dice 'a quarter past', no 'fifteen past'",
    explanation: "02:15 = IT'S A QUARTER PAST TWO.",
  },
  {
    topic: "time",
    question: "How do you say 05:30 in English?",
    answers: ["it's half past five", "half past five", "it is half past five"],
    hint: ":30 se dice 'half past', no 'thirty past'",
    explanation: "05:30 = IT'S HALF PAST FIVE.",
  },
  {
    topic: "time",
    question: "How do you say 09:45 in English? (use 'to')",
    answers: ["it's a quarter to ten", "a quarter to ten", "it is a quarter to ten"],
    hint: "Después de la media → TO + la siguiente hora",
    explanation: "09:45 = IT'S A QUARTER TO TEN. Faltan 15 minutos para las 10.",
  },
  {
    topic: "time",
    question: "How do you say 12:00 in English?",
    answers: ["it's twelve o'clock", "twelve o'clock", "it is twelve o'clock"],
    hint: "Hora en punto = ___",
    explanation: "12:00 = IT'S TWELVE O'CLOCK.",
  },
  {
    topic: "time",
    question: "How do you say 9:50 in English? (use 'to')",
    answers: ["it's ten to ten", "ten to ten", "it is ten to ten"],
    hint: "Faltan 10 minutos para las 10 → TEN TO TEN",
    explanation: "9:50 = IT'S TEN TO TEN. Faltan 10 minutos para las 10.",
  },
  {
    topic: "time",
    question: "Fill in: at 9:45, we say 'a quarter ___ ten'.",
    answers: ["to"],
    hint: "Después de la media hora se usa TO, no PAST",
    explanation: "A QUARTER TO TEN. Después del minuto 30 se usa TO.",
  },
  {
    topic: "time",
    question: "Fill in: at 2:15, we say 'a quarter ___ two'.",
    answers: ["past"],
    hint: "Antes de la media hora se usa PAST",
    explanation: "A QUARTER PAST TWO. Antes del minuto 30 se usa PAST.",
  },

  // ── Family Members ───────────────────────────────────────────
  {
    topic: "family",
    question: "What is HIJO in English?",
    answers: ["son"],
    hint: "Hijo varón",
    explanation: "Hijo = SON.",
  },
  {
    topic: "family",
    question: "What is HIJA in English?",
    answers: ["daughter"],
    hint: "Hija mujer",
    explanation: "Hija = DAUGHTER.",
  },
  {
    topic: "family",
    question: "What is ABUELA in English?",
    answers: ["grandma", "grandmother"],
    hint: "La mamá de tu mamá o papá",
    explanation: "Abuela = GRANDMA / GRANDMOTHER.",
  },
  {
    topic: "family",
    question: "What is TÍO in English?",
    answers: ["uncle"],
    hint: "Hermano de tu papá o mamá",
    explanation: "Tío = UNCLE.",
  },
  {
    topic: "family",
    question: "What is SUEGRA in English?",
    answers: ["mother-in-law", "mother in law"],
    hint: "La mamá de tu esposo/a",
    explanation: "Suegra = MOTHER-IN-LAW.",
  },
  {
    topic: "family",
    question: "What is CUÑADO in English?",
    answers: ["brother-in-law", "brother in law"],
    hint: "El hermano de tu esposo/a",
    explanation: "Cuñado = BROTHER-IN-LAW.",
  },
  {
    topic: "family",
    question: "What is NIETO in English?",
    answers: ["grandson"],
    hint: "El hijo de tu hijo/a",
    explanation: "Nieto = GRANDSON.",
  },
  {
    topic: "family",
    question: "What is SOBRINA in English?",
    answers: ["niece"],
    hint: "La hija de tu hermano/a",
    explanation: "Sobrina = NIECE.",
  },
  {
    topic: "family",
    question: "What is HERMANOS in English? (plural, both genders)",
    answers: ["siblings"],
    hint: "Hermanos y hermanas juntos",
    explanation: "Hermanos = SIBLINGS.",
  },
  {
    topic: "family",
    question: "What is PADRASTRO in English?",
    answers: ["stepfather"],
    hint: "El esposo de tu mamá (no tu papá biológico)",
    explanation: "Padrastro = STEPFATHER.",
  },
  {
    topic: "family",
    question: "What is YERNO in English?",
    answers: ["son-in-law", "son in law"],
    hint: "El esposo de tu hija",
    explanation: "Yerno = SON-IN-LAW.",
  },
  {
    topic: "family",
    question: "What is MADRINA in English?",
    answers: ["godmother"],
    hint: "No es pariente de sangre, pero es parte de la familia",
    explanation: "Madrina = GODMOTHER.",
  },

  // ── Dates: Days & Months ─────────────────────────────────────
  {
    topic: "dates",
    question: "What is MIÉRCOLES in English?",
    answers: ["wednesday"],
    hint: "Día entre martes y jueves",
    explanation: "Miércoles = WEDNESDAY.",
  },
  {
    topic: "dates",
    question: "What is the first day of the weekend?",
    answers: ["saturday"],
    hint: "Sábado",
    explanation: "SATURDAY es el primer día del weekend.",
  },
  {
    topic: "dates",
    question: "What is FEBRERO in English?",
    answers: ["february"],
    hint: "El mes más corto del año",
    explanation: "Febrero = FEBRUARY.",
  },
  {
    topic: "dates",
    question: "What is DICIEMBRE in English?",
    answers: ["december"],
    hint: "Último mes del año",
    explanation: "Diciembre = DECEMBER.",
  },
  {
    topic: "dates",
    question: "Write the ordinal number for 1 (e.g. 1___).",
    answers: ["1st", "first"],
    hint: "Excepción especial, no es '1th'",
    explanation: "1 = 1ST (first).",
  },
  {
    topic: "dates",
    question: "Write the ordinal number for 3 (e.g. 3___).",
    answers: ["3rd", "third"],
    hint: "Excepción especial, no es '3th'",
    explanation: "3 = 3RD (third).",
  },
  {
    topic: "dates",
    question: "How do you say the date 12/25 (December 25th)?",
    answers: ["december twenty-fifth", "december twenty fifth"],
    hint: "Mes primero, después el día en ordinal",
    explanation: "12/25 = DECEMBER TWENTY-FIFTH.",
  },
  {
    topic: "dates",
    question: "Which season includes June, July, and August?",
    answers: ["summer"],
    hint: "La estación más calurosa",
    explanation: "June, July, August = SUMMER (verano).",
  },

  // ── Jobs & Professions ───────────────────────────────────────
  {
    topic: "jobs",
    question: "Fill in: What's his profession? He ___ a doctor.",
    answers: ["is"],
    hint: "He → IS (Verb To Be)",
    explanation: "He IS a doctor. Se usa Verb To Be para decir la profesión.",
  },
  {
    topic: "jobs",
    question: "Fill in: Where does she work? She ___ in the hospital.",
    answers: ["works"],
    hint: "She/He + verbo + S (Simple Present)",
    explanation: "She WORKS in the hospital. Con he/she el verbo lleva S.",
  },
  {
    topic: "jobs",
    question: "Fill in: What is he doing? He is ___ (examine) a patient.",
    answers: ["examining"],
    hint: "Verbo + ING (Present Progressive)",
    explanation: "He is EXAMINING a patient. examine → examining.",
  },
  {
    topic: "jobs",
    question: "What does NURSE mean in Spanish?",
    answers: ["enfermero", "enfermera", "enfermero/a"],
    hint: "Asiste a los pacientes en el hospital",
    explanation: "Nurse = Enfermero/a.",
  },
  {
    topic: "jobs",
    question: "What does FIREFIGHTER mean in Spanish?",
    answers: ["bombero", "bombera", "bombero/a"],
    hint: "Apaga incendios",
    explanation: "Firefighter = Bombero/a.",
  },
  {
    topic: "jobs",
    question: "Translate to English: Abogado",
    answers: ["lawyer"],
    hint: "Trabaja en la corte (court)",
    explanation: "Abogado = LAWYER.",
  },
  {
    topic: "jobs",
    question: "Translate to English: Carpintero",
    answers: ["carpenter"],
    hint: "Trabaja con madera",
    explanation: "Carpintero = CARPENTER.",
  },
  {
    topic: "jobs",
    question: "Where does a teacher work? He/She works in the ___.",
    answers: ["school"],
    hint: "Lugar donde se enseña",
    explanation: "A teacher works in the SCHOOL.",
  },
  {
    topic: "jobs",
    question: "Where does a judge work? He/She works in the ___.",
    answers: ["court"],
    hint: "Lugar donde se hacen juicios",
    explanation: "A judge works in the COURT.",
  },
  {
    topic: "jobs",
    question: "What does MAIL MAN mean in Spanish?",
    answers: ["cartero"],
    hint: "Reparte cartas y paquetes",
    explanation: "Mail man = Cartero.",
  },

  // ── Frutas y Verduras ─────────────────────────────────────────
  {
    topic: "fruits",
    question: "What is APPLE in Spanish?",
    answers: ["manzana"],
    hint: "Fruta roja o verde 🍎",
    explanation: "Apple = Manzana.",
  },
  {
    topic: "fruits",
    question: "What is BANANA in Spanish?",
    answers: ["plátano", "banana"],
    hint: "Fruta amarilla y curva 🍌",
    explanation: "Banana = Plátano.",
  },
  {
    topic: "fruits",
    question: "What is ORANGE in Spanish?",
    answers: ["naranja"],
    hint: "Fruta cítrica anaranjada 🍊",
    explanation: "Orange = Naranja.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Fresa",
    answers: ["strawberry"],
    hint: "Fruta pequeña roja con puntitos 🍓",
    explanation: "Fresa = Strawberry.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Sandía",
    answers: ["watermelon"],
    hint: "Grande, verde por fuera, roja por dentro 🍉",
    explanation: "Sandía = Watermelon.",
  },
  {
    topic: "fruits",
    question: "What is GRAPE in Spanish?",
    answers: ["uva"],
    hint: "Fruta pequeña que crece en racimos 🍇",
    explanation: "Grape = Uva.",
  },
  {
    topic: "fruits",
    question: "What is PINEAPPLE in Spanish?",
    answers: ["piña"],
    hint: "Fruta tropical con corona de hojas 🍍",
    explanation: "Pineapple = Piña.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Limón",
    answers: ["lemon"],
    hint: "Fruta amarilla y muy ácida 🍋",
    explanation: "Limón = Lemon.",
  },
  {
    topic: "fruits",
    question: "What is COCONUT in Spanish?",
    answers: ["coco"],
    hint: "Fruta tropical dura por fuera, blanca por dentro 🥥",
    explanation: "Coconut = Coco.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Aguacate",
    answers: ["avocado"],
    hint: "Fruta verde, cremosa, muy popular en guacamole 🥑",
    explanation: "Aguacate = Avocado.",
  },
  {
    topic: "fruits",
    question: "What is CARROT in Spanish?",
    answers: ["zanahoria"],
    hint: "Verdura naranja y alargada 🥕",
    explanation: "Carrot = Zanahoria.",
  },
  {
    topic: "fruits",
    question: "What is ONION in Spanish?",
    answers: ["cebolla"],
    hint: "Verdura que te hace llorar al cortarla 🧅",
    explanation: "Onion = Cebolla. Lleva AN: an onion.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Lechuga",
    answers: ["lettuce"],
    hint: "Verdura de hojas verdes para la ensalada 🥬",
    explanation: "Lechuga = Lettuce.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Papa",
    answers: ["potato"],
    hint: "Con ella se hacen las papas fritas 🥔",
    explanation: "Papa = Potato. Su plural es potatoes.",
  },
  {
    topic: "fruits",
    question: "What is BROCCOLI in Spanish?",
    answers: ["brócoli", "brocoli"],
    hint: "Verdura verde con forma de arbolito 🥦",
    explanation: "Broccoli = Brócoli.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Chícharos",
    answers: ["peas", "pea"],
    hint: "Bolitas verdes pequeñas 🫛",
    explanation: "Chícharos = Peas.",
  },
  {
    topic: "fruits",
    question: "What is CORN in Spanish?",
    answers: ["elote", "maíz", "maiz"],
    hint: "Amarillo, se come en la calle con limón 🌽",
    explanation: "Corn = Elote / Maíz.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Pepino",
    answers: ["cucumber"],
    hint: "Verde, largo y muy fresco 🥒",
    explanation: "Pepino = Cucumber.",
  },
  {
    topic: "fruits",
    question: "What is GARLIC in Spanish?",
    answers: ["ajo"],
    hint: "Pequeño, blanco y de olor fuerte 🧄",
    explanation: "Garlic = Ajo.",
  },
  {
    topic: "fruits",
    question: "Fill in: I eat ___ (una zanahoria) every day.",
    answers: ["a carrot"],
    hint: "Carrot empieza con consonante",
    explanation: "A carrot: se usa A porque carrot empieza con sonido consonante.",
  },
  {
    topic: "fruits",
    question: "What is MUSHROOM in Spanish?",
    answers: ["champiñón", "champinon", "hongo", "seta"],
    hint: "Crece en lugares húmedos, va en la pizza 🍄",
    explanation: "Mushroom = Champiñón / Hongo.",
  },
  {
    topic: "fruits",
    question: "Translate to English: Jitomate (el rojo)",
    answers: ["tomato"],
    hint: "Rojo, va en la salsa 🍅",
    explanation: "Jitomate = Tomato. Su plural es tomatoes.",
  },
  {
    topic: "fruits",
    question: "What is TOMATILLO in Spanish?",
    answers: ["tomate verde", "tomate", "tomatillo"],
    hint: "Es el verde, para la salsa verde 🍏",
    explanation: "Tomatillo = Tomate verde. Ojo: el rojo es tomato (jitomate).",
  },
  {
    topic: "fruits",
    question: "Translate to English: Nopales",
    answers: ["nopales", "cactus paddles", "nopal"],
    hint: "Verdura de cactus, se come con huevo 🌵",
    explanation: "Nopales = Nopales / Cactus paddles. En inglés se usa mucho la palabra en español.",
  },

  // ── Countries & Nationalities ─────────────────────────────────
  {
    topic: "countries",
    question: "Fill in: Where ___ you from? I'm from Mexico.",
    answers: ["are"],
    hint: "You → ARE (Verb To Be)",
    explanation: "Where ARE you from? Se usa Verb To Be para preguntar origen.",
  },
  {
    topic: "countries",
    question: "What's the nationality for someone from Mexico?",
    answers: ["mexican"],
    hint: "País → Mexico, nacionalidad → ___",
    explanation: "Mexico → MEXICAN.",
  },
  {
    topic: "countries",
    question: "What's the nationality for someone from Spain?",
    answers: ["spanish"],
    hint: "País → Spain, nacionalidad → ___",
    explanation: "Spain → SPANISH.",
  },
  {
    topic: "countries",
    question: "What's the nationality for someone from Japan?",
    answers: ["japanese"],
    hint: "País → Japan, nacionalidad → ___",
    explanation: "Japan → JAPANESE.",
  },
  {
    topic: "countries",
    question: "What's the nationality for someone from France?",
    answers: ["french"],
    hint: "País → France, nacionalidad → ___",
    explanation: "France → FRENCH.",
  },
  {
    topic: "countries",
    question: "Translate to English: Estados Unidos",
    answers: ["united states", "the united states"],
    hint: "País donde está Nueva York",
    explanation: "Estados Unidos = UNITED STATES.",
  },
  {
    topic: "countries",
    question: "Fill in: I ___ from Argentina. (Verb To Be)",
    answers: ["am"],
    hint: "I → AM",
    explanation: "I AM from Argentina.",
  },
  {
    topic: "countries",
    question: "Fill in: She's from Brazil. She's ___.",
    answers: ["brazilian"],
    hint: "País → Brazil, nacionalidad → ___",
    explanation: "Brazil → BRAZILIAN.",
  },
  {
    topic: "countries",
    question: "Fill in: Where do you ___? I live in Mexico City.",
    answers: ["live"],
    hint: "Verbo para decir dónde resides",
    explanation: "Where do you LIVE? I live in Mexico City.",
  },
  {
    topic: "countries",
    question: "What is PAÍS in English?",
    answers: ["country"],
    hint: "Ej. Mexico, Spain, Japan son ejemplos de esto",
    explanation: "País = COUNTRY.",
  },
];

// Compara lo que escribe el alumno sin castigar detalles de teclado: mayúsculas,
// acentos (cómo = como), apóstrofos curvos o ´, comas, paréntesis, guiones y
// diagonales. La ɪ de /ɪd/ se acepta escrita como i.
export function normalize(value) {
  return value
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[’‘´`]/g, "'")
    .replace(/ɪ/g, "i")
    .replace(/[.!?¿¡…]+/g, "")
    .replace(/[,;:"“”«»()/-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function checkAnswer(userAnswer, acceptedAnswers) {
  const given = normalize(userAnswer);
  // Las aclaraciones entre paréntesis son opcionales: «Buenas noches (al llegar)».
  return acceptedAnswers.some(a => normalize(a) === given || normalize(a.replace(/\s*\([^)]*\)/g, "")) === given);
}

// Las guías de examen reutilizan preguntas de las lecciones. La clave las
// identifica para que, dentro de una misma mezcla, cuenten como una sola. Si
// varias preguntas comparten el enunciado pero tienen opciones distintas
// («Elige la oración correcta.»), las opciones forman parte de la clave.
const QUESTION_KEYS = new Map();
{
  const optionSets = new Map();
  for (const q of QUESTIONS) {
    const text = normalize(q.question);
    if (!optionSets.has(text)) optionSets.set(text, new Set());
    if (q.options) optionSets.get(text).add(q.options.map(normalize).join("|"));
  }
  for (const q of QUESTIONS) {
    const text = normalize(q.question);
    const distinctOptions = optionSets.get(text).size > 1;
    QUESTION_KEYS.set(q, distinctOptions && q.options ? `${text}|${q.options.map(normalize).join("|")}` : text);
  }
}

export function questionKey(question) {
  return QUESTION_KEYS.get(question);
}

export function getByTopic(topic, levelId = "all", now = Date.now()) {
  // El nivel de consulta (Verbos) no es una lección: no entra al banco del Quiz.
  const studyTopics = LEVELS
    .filter(level => level.id !== "quiz" && !level.reference)
    .flatMap(level => level.topics);
  const available = new Set(getAvailableTopics(studyTopics, now).map(item => item.id));
  const selected = levelId === "all" ? null : LEVELS.find(level => level.id === levelId);
  if (selected?.reference) return [];
  const topics = selected?.topics;
  const seen = new Set();
  return QUESTIONS.filter(q => available.has(q.topic) && (topic === "mixed" || q.topic === topic) &&
    (levelId === "all" || topics?.some(t => t.id === q.topic)))
    // Se queda la primera aparición: la de la lección, que acepta más variantes.
    .filter(q => !seen.has(questionKey(q)) && seen.add(questionKey(q)));
}

export function getRandom(pool) {
  return pool[Math.floor(Math.random() * pool.length)];
}
