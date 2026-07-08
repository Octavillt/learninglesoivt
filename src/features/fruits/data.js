export const FRUITS = [
  { name: "Apple",       esp: "Manzana",    emoji: "🍎", color: "#ef4444" },
  { name: "Banana",      esp: "Plátano",    emoji: "🍌", color: "#eab308" },
  { name: "Orange",      esp: "Naranja",    emoji: "🍊", color: "#f97316" },
  { name: "Strawberry",  esp: "Fresa",      emoji: "🍓", color: "#ec4899" },
  { name: "Grape",       esp: "Uva",        emoji: "🍇", color: "#a855f7" },
  { name: "Watermelon",  esp: "Sandía",     emoji: "🍉", color: "#22c55e" },
  { name: "Pineapple",   esp: "Piña",       emoji: "🍍", color: "#ca8a04" },
  { name: "Mango",       esp: "Mango",      emoji: "🥭", color: "#f59e0b" },
  { name: "Pear",        esp: "Pera",       emoji: "🍐", color: "#84cc16" },
  { name: "Cherry",      esp: "Cereza",     emoji: "🍒", color: "#dc2626" },
  { name: "Peach",       esp: "Durazno",    emoji: "🍑", color: "#fb923c" },
  { name: "Lemon",       esp: "Limón",      emoji: "🍋", color: "#facc15" },
  { name: "Coconut",     esp: "Coco",       emoji: "🥥", color: "#78716c" },
  { name: "Melon",       esp: "Melón",      emoji: "🍈", color: "#65a30d" },
  { name: "Kiwi",        esp: "Kiwi",       emoji: "🥝", color: "#4ade80" },
  { name: "Blueberry",   esp: "Arándano",   emoji: "🫐", color: "#6366f1" },
  { name: "Avocado",     esp: "Aguacate",   emoji: "🥑", color: "#16a34a" },
  { name: "Tomato",      esp: "Jitomate",   emoji: "🍅", color: "#b91c1c" },
  { name: "Lime",        esp: "Lima",       emoji: "🍋‍🟩", color: "#4ade80" },
  { name: "Pomegranate", esp: "Granada",    emoji: "🍎", color: "#be123c" },
];

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const vv = t => ({ t, r: "verb" });

export const FRUIT_SENTENCES = [
  { pts: [su("I"), " ", vv("like"), " apples."],             esp: "Me gustan las manzanas." },
  { pts: [su("She"), " ", vv("eats"), " a banana every day."],esp: "Ella come un plátano cada día." },
  { pts: [su("This"), " ", vb("is"), " a mango."],            esp: "Éste es un mango." },
  { pts: [su("These"), " ", vb("are"), " grapes."],           esp: "Éstas son uvas." },
  { pts: [su("He"), " ", vv("drinks"), " orange juice."],     esp: "Él toma jugo de naranja." },
  { pts: [su("We"), " ", vv("buy"), " strawberries."],        esp: "Nosotros compramos fresas." },
];
