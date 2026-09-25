export const FOOD_GROUPS = [
  { name: "Dairy", translation: "Lácteos", icon: "🥛", foods: [
    ["yogurt", "yogur"], ["cheese", "queso"], ["milk", "leche"], ["ice cream", "helado"],
  ], example: "I have yogurt and milk for breakfast.", meaning: "Desayuno yogur y leche." },
  { name: "Fats and sugars", translation: "Grasas y azúcares", icon: "🧈", foods: [
    ["chocolate", "chocolate"], ["butter", "mantequilla"], ["soda", "refresco"], ["oil", "aceite"],
  ], example: "I need a little butter and some oil.", meaning: "Necesito un poco de mantequilla y algo de aceite." },
  { name: "Fruit and vegetables", translation: "Frutas y verduras", icon: "🍎", foods: [
    ["apples", "manzanas"], ["bananas", "plátanos"], ["corn", "maíz"], ["potatoes", "papas"],
  ], example: "She likes apples, bananas, corn and potatoes.", meaning: "A ella le gustan las manzanas, los plátanos, el maíz y las papas." },
  { name: "Carbohydrates", translation: "Carbohidratos", icon: "🍞", foods: [
    ["bread", "pan"], ["pasta", "pasta"], ["cereal", "cereal"], ["rice", "arroz"],
  ], example: "We have some bread and rice.", meaning: "Tenemos un poco de pan y arroz." },
  { name: "Protein", translation: "Proteína / alimentos con proteína", icon: "🥚", foods: [
    ["eggs", "huevos"], ["fish", "pescado"], ["chicken", "pollo"], ["beans", "frijoles"],
  ], example: "I eat chicken with beans for lunch.", meaning: "Como pollo con frijoles en el almuerzo." },
];

export const FOOD_ADJECTIVES = [
  ["delicious", "delicioso/a", "This soup is delicious.", "Esta sopa está deliciosa."],
  ["disgusting", "asqueroso/a; repugnante", "This tastes disgusting.", "Esto sabe asqueroso."],
  ["healthy", "saludable", "A varied diet can be healthy.", "Una dieta variada puede ser saludable."],
  ["unhealthy", "poco saludable", "Too much sugar can be unhealthy.", "Demasiada azúcar puede ser poco saludable."],
  ["sweet", "dulce", "These bananas are sweet.", "Estos plátanos son dulces."],
  ["spicy", "picante", "This sauce is spicy.", "Esta salsa está picante."],
];

export const EXTRA_WORDS = [
  ["snack", "botana / tentempié", "I have an apple as a snack.", "Como una manzana como tentempié."],
  ["try", "probar", "Try this cheese.", "Prueba este queso."],
  ["snow cone", "raspado", "I want a snow cone.", "Quiero un raspado."],
  ["salty", "salado/a", "These beans are salty.", "Estos frijoles están salados."],
  ["sour", "ácido/a; agrio/a", "This lemon is sour.", "Este limón es ácido."],
  ["bitter", "amargo/a", "This coffee is bitter.", "Este café está amargo."],
];

export const CONVERSATION = [
  ["What do you usually eat for breakfast?", "¿Qué desayunas normalmente?"],
  ["I usually have cereal with milk and a banana.", "Normalmente desayuno cereal con leche y un plátano."],
  ["Do you like spicy food?", "¿Te gusta la comida picante?"],
  ["Yes, I do, but I don't like very sweet food.", "Sí, pero no me gusta la comida muy dulce."],
  ["How many eggs do we need?", "¿Cuántos huevos necesitamos?"],
  ["We need two eggs and a little butter.", "Necesitamos dos huevos y un poco de mantequilla."],
];

export const PRACTICE = [
  ...FOOD_GROUPS.flatMap(group => group.foods.map(([en, es]) => ({
    question: `Traduce al inglés: ${es}.`,
    answers: en === "yogurt" ? [en, "yoghurt"] : en === "soda" ? [en, "soft drink"] : [en],
    explanation: `${en} = ${es}. Grupo del pizarrón: ${group.name} (${group.translation}).`,
  }))),
  { question: "¿Cómo se llama en inglés el grupo de los lácteos?", options: ["Dairy", "Fats and sugars", "Fruit and vegetables"], answers: ["Dairy"], explanation: "Dairy significa lácteos: milk, cheese y yogurt son ejemplos." },
  { question: "Según el pizarrón, ¿a qué grupo pertenecen bread, pasta, cereal y rice?", options: ["Protein", "Carbohydrates", "Dairy"], answers: ["Carbohydrates"], explanation: "En esta clasificación se agrupan como Carbohydrates, por ser fuentes de carbohidratos." },
  { question: "Traduce al inglés: picante.", answers: ["spicy"], explanation: "Spicy = picante. I like spicy food = Me gusta la comida picante." },
  { question: "Traduce al inglés: dulce (adjetivo de sabor).", answers: ["sweet"], explanation: "Sweet = dulce. These bananas are sweet." },
  { question: "Elige la forma más amable de decir que no te gusta un alimento.", options: ["It's disgusting!", "It's not my favorite.", "It's delicious!"], answers: ["It's not my favorite."], explanation: "It's not my favorite significa «No es mi favorito». Disgusting es una expresión fuerte de desagrado." },
  { question: "Completa con like o likes: She ___ fish.", answers: ["likes"], explanation: "She likes fish. En presente simple afirmativo, he/she/it usa likes." },
  { question: "Completa con How many o How much: ___ bread do you need?", answers: ["How much"], explanation: "Bread es incontable: How much bread…? Para contar porciones: two slices of bread." },
  { question: "Ordena: you / Do / like / vegetables / ?", answers: ["Do you like vegetables?"], explanation: "Do + sujeto + like + alimento: Do you like vegetables?" },
];
