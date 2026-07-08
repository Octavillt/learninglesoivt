const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const no = t => ({ t, r: "neg" });

export const TOBE_AFF = [
  { pts: [su("I"), " ", vb("am"), " a student."],          esp: "Yo soy estudiante." },
  { pts: [su("I"), " ", vb("am"), " happy."],              esp: "Yo estoy feliz." },
  { pts: [su("You"), " ", vb("are"), " my friend."],       esp: "Tú eres mi amigo/a." },
  { pts: [su("He"), " ", vb("is"), " a teacher."],         esp: "Él es maestro." },
  { pts: [su("She"), " ", vb("is"), " a student."],        esp: "Ella es estudiante." },
  { pts: [su("It"), " ", vb("is"), " a big house."],       esp: "Es una casa grande." },
  { pts: [su("We"), " ", vb("are"), " in school."],        esp: "Nosotros estamos en la escuela." },
  { pts: [su("They"), " ", vb("are"), " my friends."],     esp: "Ellos son mis amigos." },
];

export const TOBE_NEG = [
  { pts: [su("I"), " ", vb("am"), " ", no("not"), " sad."],         esp: "Yo no estoy triste." },
  { pts: [su("You"), " ", vb("are"), " ", no("not"), " late."],     esp: "Tú no llegas tarde." },
  { pts: [su("He"), " is", no("n't"), " my teacher."],              esp: "Él no es mi maestro." },
  { pts: [su("She"), " is", no("n't"), " happy."],                  esp: "Ella no está feliz." },
  { pts: [su("It"), " is", no("n't"), " a cat."],                   esp: "No es un gato." },
  { pts: [su("We"), " are", no("n't"), " in class."],               esp: "Nosotros no estamos en clase." },
  { pts: [su("They"), " are", no("n't"), " my friends."],           esp: "Ellos no son mis amigos." },
];

export const TOBE_INT = [
  { q: [vb("Am"), " ", su("I"), " late?"],           a: "Yes, you are. / No, you aren't.",   esp: "¿Llego tarde?" },
  { q: [vb("Are"), " ", su("you"), " a student?"],   a: "Yes, I am. / No, I'm not.",         esp: "¿Eres estudiante?" },
  { q: [vb("Is"), " ", su("he"), " a teacher?"],     a: "Yes, he is. / No, he isn't.",       esp: "¿Él es maestro?" },
  { q: [vb("Is"), " ", su("she"), " happy?"],        a: "Yes, she is. / No, she isn't.",     esp: "¿Ella está feliz?" },
  { q: [vb("Are"), " ", su("they"), " your friends?"], a: "Yes, they are. / No, they aren't.", esp: "¿Son tus amigos?" },
  { q: [vb("Is"), " ", su("it"), " a big house?"],   a: "Yes, it is. / No, it isn't.",       esp: "¿Es una casa grande?" },
];
