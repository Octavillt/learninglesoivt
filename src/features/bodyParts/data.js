// Vocabulario de las notas de clase, con ortografía y plurales revisados.
export const BODY_GROUPS = [
  { title: "Cabeza y rostro", icon: "🙂", words: [
    ["head", "cabeza", "heads"],
    ["face", "rostro / cara", "faces"],
    ["hair", "cabello", null],
    ["eye", "ojo", "eyes"],
    ["eyebrow", "ceja", "eyebrows"],
    ["eyelash", "pestaña", "eyelashes"],
    ["ear", "oreja", "ears"],
    ["mouth", "boca", "mouths"],
    ["lip", "labio", "lips"],
    ["tooth", "diente", "teeth"],
    ["tongue", "lengua", "tongues"],
  ] },
  { title: "Tronco", icon: "🧍", words: [
    ["body", "cuerpo", "bodies"],
    ["neck", "cuello", "necks"],
    ["shoulder", "hombro", "shoulders"],
    ["chest", "pecho", "chests"],
    ["back", "espalda", "backs"],
    ["waist", "cintura", "waists"],
  ] },
  { title: "Brazos y manos", icon: "✋", words: [
    ["arm", "brazo", "arms"],
    ["elbow", "codo", "elbows"],
    ["wrist", "muñeca", "wrists"],
    ["hand", "mano", "hands"],
    ["finger", "dedo de la mano", "fingers"],
    ["thumb", "pulgar", "thumbs"],
    ["index finger", "dedo índice", "index fingers"],
    ["middle finger", "dedo medio", "middle fingers"],
    ["ring finger", "dedo anular", "ring fingers"],
    ["pinky", "dedo meñique", "pinkies"],
  ] },
  { title: "Piernas y pies", icon: "🦶", words: [
    ["leg", "pierna", "legs"],
    ["thigh", "muslo", "thighs"],
    ["knee", "rodilla", "knees"],
    ["ankle", "tobillo", "ankles"],
    ["foot", "pie", "feet"],
    ["toe", "dedo del pie", "toes"],
  ] },
];

export const BODY_WORDS = BODY_GROUPS.flatMap(group => group.words);

export const EXAMPLES = [
  ["This is my head.", "Esta es mi cabeza."],
  ["I have two hands.", "Tengo dos manos."],
  ["These are my feet.", "Estos son mis pies."],
  ["She has brown eyes.", "Ella tiene ojos cafés."],
  ["Raise your arms.", "Levanta los brazos."],
  ["Bend your knees.", "Dobla las rodillas."],
  ["Touch your toes.", "Tócate los dedos de los pies."],
  ["Brush your teeth.", "Cepíllate los dientes."],
];
