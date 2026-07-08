export const PLURAL_RULES = [
  { rule: "1. Consonante normal → + S",           color: "#34d399", words: [["cat","s","gato"],["book","s","libro"],["car","s","carro"],["dog","s","perro"],["apple","s","manzana"]] },
  { rule: "2. Termina en s, sh, ch, x, z → + ES", color: "#60a5fa", words: [["box","es","caja"],["watch","es","reloj"],["bus","es","autobús"],["dish","es","plato"]] },
  { rule: "3. Consonante + Y → quita Y, pon IES", color: "#f472b6", words: [["cherr","ies","cherry → cereza"],["cit","ies","city → ciudad"],["bab","ies","baby → bebé"]] },
  { rule: "4. Vocal + Y → solo agrega S",          color: "#fbbf24", words: [["boy","s","niño"],["toy","s","juguete"],["day","s","día"]] },
  { rule: "5. Consonante + O → + ES",              color: "#fb923c", words: [["potato","es","papa"],["tomato","es","jitomate"]] },
  { rule: "6. Vocal + O → + S",                    color: "#c084fc", words: [["shampoo","s","shampoo"],["radio","s","radio"]] },
  { rule: "7. Termina en F / FE → cambia a VES",   color: "#f87171", words: [["wol","ves","wolf → lobo"],["wi","ves","wife → esposa"],["lea","ves","leaf → hoja"]] },
  { rule: "8. Termina en FF → solo + S",            color: "#94a3b8", words: [["cliff","s","acantilado"]] },
];

export const IRREG_SAME = [
  ["fish → fish","pez → peces"],
  ["sheep → sheep","oveja → ovejas"],
  ["deer → deer","venado → venados"],
];

export const IRREG_DIFF = [
  ["man → men","hombre → hombres"],
  ["woman → women","mujer → mujeres"],
  ["child → children","niño → niños"],
  ["tooth → teeth","diente → dientes"],
  ["foot → feet","pie → pies"],
  ["mouse → mice","ratón → ratones"],
];
