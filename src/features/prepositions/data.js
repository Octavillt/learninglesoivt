const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const pp = t => ({ t, r: "prep" });

export const PREP_LIST = [
  { prep: "IN",         esp: "Dentro de",              icon: "📦" },
  { prep: "ON",         esp: "Encima / sobre",          icon: "⬆️" },
  { prep: "UNDER",      esp: "Debajo de",               icon: "⬇️" },
  { prep: "BEHIND",     esp: "Detrás de",               icon: "🔙" },
  { prep: "IN FRONT OF",esp: "Enfrente de",             icon: "👀" },
  { prep: "NEXT TO",    esp: "Al lado de",              icon: "↔️" },
  { prep: "BETWEEN",    esp: "Entre (dos cosas)",       icon: "↕️" },
  { prep: "ABOVE",      esp: "Por encima (sin tocar)",  icon: "🔼" },
];

export const PREP_EX = [
  { pts: [su("The cat"), " ", vb("is"), " ", pp("in"), " the box."],       esp: "El gato está DENTRO DE la caja." },
  { pts: [su("The book"), " ", vb("is"), " ", pp("on"), " the table."],    esp: "El libro está SOBRE la mesa." },
  { pts: [su("The ball"), " ", vb("is"), " ", pp("under"), " the chair."], esp: "La pelota está DEBAJO DE la silla." },
  { pts: [su("The dog"), " ", vb("is"), " ", pp("behind"), " the house."], esp: "El perro está DETRÁS DE la casa." },
  { pts: [su("The cat"), " ", vb("is"), " ", pp("in front of"), " the door."],  esp: "El gato está ENFRENTE DE la puerta." },
  { pts: [su("The dog"), " ", vb("is"), " ", pp("next to"), " the bowl."],       esp: "El perro está AL LADO DEL tazón." },
  { pts: [su("The ball"), " ", vb("is"), " ", pp("between"), " the boxes."],     esp: "La pelota está ENTRE las cajas." },
  { pts: [su("The bird"), " ", vb("is"), " ", pp("above"), " the house."],       esp: "El pájaro está POR ENCIMA DE la casa." },
];
