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

export const VEGETABLES = [
  { name: "Carrot",       esp: "Zanahoria",   emoji: "🥕", color: "#f97316" },
  { name: "Broccoli",     esp: "Brócoli",     emoji: "🥦", color: "#16a34a" },
  { name: "Lettuce",      esp: "Lechuga",     emoji: "🥬", color: "#4ade80" },
  { name: "Cucumber",     esp: "Pepino",      emoji: "🥒", color: "#22c55e" },
  { name: "Onion",        esp: "Cebolla",     emoji: "🧅", color: "#c084fc" },
  { name: "Garlic",       esp: "Ajo",         emoji: "🧄", color: "#cbd5e1" },
  { name: "Potato",       esp: "Papa",        emoji: "🥔", color: "#ca8a04" },
  { name: "Sweet potato", esp: "Camote",      emoji: "🍠", color: "#fb923c" },
  { name: "Corn",         esp: "Elote / Maíz",emoji: "🌽", color: "#facc15" },
  { name: "Chili",        esp: "Chile",       emoji: "🌶️", color: "#dc2626" },
  { name: "Bell pepper",  esp: "Pimiento",    emoji: "🫑", color: "#15803d" },
  { name: "Mushroom",     esp: "Champiñón",   emoji: "🍄", color: "#b45309" },
  { name: "Eggplant",     esp: "Berenjena",   emoji: "🍆", color: "#a855f7" },
  { name: "Peas",         esp: "Chícharos",   emoji: "🫛", color: "#65a30d" },
  { name: "Beans",        esp: "Frijoles",    emoji: "🫘", color: "#92400e" },
  { name: "Pumpkin",      esp: "Calabaza",    emoji: "🎃", color: "#ea580c" },
  { name: "Olive",        esp: "Aceituna",    emoji: "🫒", color: "#84cc16" },
  { name: "Ginger",       esp: "Jengibre",    emoji: "🫚", color: "#d97706" },
  { name: "Tomato",       esp: "Jitomate (rojo)",   emoji: "🍅", color: "#dc2626" },
  { name: "Tomatillo",    esp: "Tomate verde",      emoji: "🍏", color: "#4d7c0f" },
  { name: "Nopales",      esp: "Nopales (cactus)",  emoji: "🌵", color: "#15803d" },
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

export const VEGETABLE_SENTENCES = [
  { pts: [su("I"), " ", vv("eat"), " carrots."],                  esp: "Yo como zanahorias." },
  { pts: [su("She"), " ", vv("cooks"), " broccoli on Sundays."],  esp: "Ella cocina brócoli los domingos." },
  { pts: [su("This"), " ", vb("is"), " an onion."],               esp: "Ésta es una cebolla." },
  { pts: [su("Those"), " ", vb("are"), " potatoes."],             esp: "Ésas son papas." },
  { pts: [su("We"), " ", vv("buy"), " vegetables at the market."],esp: "Nosotros compramos verduras en el mercado." },
  { pts: [su("He"), " ", vv("makes"), " a salad with lettuce."],  esp: "Él hace una ensalada con lechuga." },
  { pts: [su("This"), " ", vb("is"), " a red tomato."],           esp: "Éste es un jitomate rojo." },
  { pts: [su("Those"), " ", vb("are"), " tomatillos."],           esp: "Ésos son tomates verdes." },
  { pts: [su("My mom"), " ", vv("cooks"), " nopales with eggs."], esp: "Mi mamá cocina nopales con huevo." },
];
