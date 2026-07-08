export const FAMILY_TREE = [
  {
    gen: "Abuelos",
    color: "#c084fc",
    members: [
      ["Abuelo", "Grandpa, Grandfather"],
      ["Abuela", "Grandma, Grandmother"],
    ],
  },
  {
    gen: "Padres, tíos y padrinos",
    color: "#60a5fa",
    members: [
      ["Papá", "Dad, Father"],
      ["Mamá", "Mom, Mother"],
      ["Tío", "Uncle"],
      ["Tía", "Aunt"],
      ["Suegro", "Father-in-law"],
      ["Suegra", "Mother-in-law"],
      ["Padrastro", "Stepfather"],
      ["Madrastra", "Stepmother"],
      ["Padrino", "Godfather"],
      ["Madrina", "Godmother"],
    ],
  },
  {
    gen: "Mi generación",
    color: "#fbbf24",
    highlight: true,
    members: [
      ["Hermano", "Brother"],
      ["Hermana", "Sister"],
      ["Hermanos", "Siblings"],
      ["Primo / Prima", "Cousin"],
      ["Esposo", "Husband"],
      ["Esposa", "Wife"],
      ["Cuñado", "Brother-in-law"],
      ["Cuñada", "Sister-in-law"],
      ["Novio", "Boyfriend"],
      ["Novia", "Girlfriend"],
    ],
  },
  {
    gen: "Hijos, sobrinos y yernos",
    color: "#34d399",
    members: [
      ["Hijo", "Son"],
      ["Hija", "Daughter"],
      ["Sobrino", "Nephew"],
      ["Sobrina", "Niece"],
      ["Yerno", "Son-in-law"],
      ["Nuera", "Daughter-in-law"],
      ["Hijastro", "Stepson"],
      ["Hijastra", "Stepdaughter"],
    ],
  },
  {
    gen: "Nietos",
    color: "#f472b6",
    members: [
      ["Nieto", "Grandson"],
      ["Nieta", "Granddaughter"],
      ["Nietos", "Grandchildren"],
    ],
  },
];

export const FAMILY_GROUPS = [
  { label: "Children", color: "#34d399", words: ["Hijo → Son", "Hija → Daughter"] },
  { label: "Parents", color: "#60a5fa", words: ["Papá → Dad, Father", "Mamá → Mom, Mother"] },
];

export const FAMILY_OTHER = [
  ["Mascota", "Pet"],
];
