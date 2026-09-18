// [frase, español, "formal" | "informal" | "neutral"]
export const GREETINGS = [
  ["Hello.", "Hola.", "neutral"],
  ["Hi.", "Hola.", "informal"],
  ["Good morning.", "Buenos días.", "formal"],
  ["Good afternoon.", "Buenas tardes.", "formal"],
  ["Good evening.", "Buenas noches (al llegar).", "formal"],
  ["How are you?", "¿Cómo estás?", "neutral"],
  ["How's it going?", "¿Cómo te va?", "neutral"],
  ["What's up?", "¿Qué onda?", "informal"],
  ["How are you doing?", "¿Cómo andas?", "informal"],
  ["What's new?", "¿Qué hay de nuevo?", "informal"],
  ["Hey!", "¡Oye! / ¡Hola!", "informal"],
];

export const INTRODUCTIONS = [
  ["I'm [name].", "Soy [nombre].", "neutral"],
  ["My name is [name].", "Mi nombre es [nombre].", "formal"],
  ["This is [name].", "Él / Ella es [nombre].", "neutral"],
  ["Nice to meet you.", "Mucho gusto.", "neutral"],
  ["It's nice to meet you.", "Es un placer conocerte.", "formal"],
  ["Pleased to meet you.", "Un placer conocerte.", "formal"],
];

export const GOODBYES = [
  ["Bye.", "Adiós.", "neutral"],
  ["Goodbye.", "Adiós.", "formal"],
  ["See you later.", "Nos vemos luego.", "neutral"],
  ["Take care.", "Cuídate.", "neutral"],
  ["Have a good day.", "Que tengas buen día.", "formal"],
  ["Later!", "¡Al rato!", "informal"],
  ["Catch you later.", "Nos vemos al rato.", "informal"],
  ["See ya!", "¡Nos vemos!", "informal"],
];

export const SAMPLE_DIALOGUE = [
  { who: "Kara", line: "What's up, Josie? How's it going?", esp: "¿Qué onda, Josie? ¿Cómo te va?" },
  { who: "Josie", line: "Hi, Kara. I'm good. How about you?", esp: "Hola, Kara. Estoy bien. ¿Y tú?" },
  { who: "Kara", line: "Fine, thanks. Josie, this is my friend Michelle Kim.", esp: "Bien, gracias. Josie, ella es mi amiga Michelle Kim." },
  { who: "Josie", line: "Hi, Michelle. I'm Josie Grayson. It's nice to meet you.", esp: "Hola, Michelle. Soy Josie Grayson. Un placer conocerte." },
  { who: "Michelle", line: "Nice to meet you too, Josie.", esp: "Igualmente, Josie." },
  { who: "Kara", line: "Well, it's good to see you, Josie. Later!", esp: "Bueno, qué gusto verte, Josie. ¡Al rato!" },
  { who: "Josie", line: "Nice to see you, too. See ya!", esp: "Igualmente. ¡Nos vemos!" },
];

export const BUSINESS_CATEGORIES = [
  {
    label: "Personas", icon: "👤", color: "#60a5fa",
    words: [
      ["Business owner", "Dueño/a del negocio"],
      ["Employee", "Empleado/a"],
      ["Employer", "Empleador/a"],
      ["Manager", "Gerente"],
      ["Coworker", "Compañero/a de trabajo"],
      ["Customer / Client", "Cliente"],
      ["Supplier", "Proveedor/a"],
      ["Shareholder", "Accionista"],
    ],
  },
  {
    label: "Producto y ventas", icon: "📦", color: "#4ade80",
    words: [
      ["Product", "Producto"],
      ["Service", "Servicio"],
      ["Sale", "Venta"],
      ["Price", "Precio"],
      ["Discount", "Descuento"],
      ["Order", "Pedido"],
      ["Invoice", "Factura"],
      ["Brand", "Marca"],
    ],
  },
  {
    label: "Dinero y finanzas", icon: "💰", color: "#fbbf24",
    words: [
      ["Profit", "Ganancia"],
      ["Loss", "Pérdida"],
      ["Income", "Ingreso"],
      ["Expense", "Gasto"],
      ["Salary / Wage", "Sueldo"],
      ["Budget", "Presupuesto"],
      ["Investment", "Inversión"],
      ["Tax", "Impuesto"],
    ],
  },
  {
    label: "Organización del trabajo", icon: "🏢", color: "#c084fc",
    words: [
      ["Office", "Oficina"],
      ["Warehouse", "Almacén"],
      ["Meeting", "Junta / Reunión"],
      ["Contract", "Contrato"],
      ["Deadline", "Fecha límite"],
      ["Report", "Reporte"],
      ["Schedule", "Horario"],
      ["Email", "Correo electrónico"],
    ],
  },
];

// Resumen — la lista completa por categoría vive en Jobs (Básico I)
export const JOBS_SUMMARY = [
  ["Pilot", "Piloto"],
  ["Architect", "Arquitecto/a"],
  ["Journalist", "Periodista"],
  ["Pharmacist", "Farmacéutico/a"],
  ["Nurse", "Enfermero/a"],
  ["Interpreter", "Intérprete"],
  ["Accountant", "Contador/a"],
  ["Computer technician", "Técnico/a en computación"],
];

// Resumen — el árbol familiar completo vive en Family (Básico I)
export const FAMILY_SUMMARY = [
  ["Mom / Mother", "Mamá"],
  ["Dad / Father", "Papá"],
  ["Brother", "Hermano"],
  ["Sister", "Hermana"],
  ["Grandma", "Abuela"],
  ["Grandpa", "Abuelo"],
  ["Aunt", "Tía"],
  ["Uncle", "Tío"],
  ["Cousin", "Primo/a"],
  ["Son", "Hijo"],
  ["Daughter", "Hija"],
  ["Husband", "Esposo"],
  ["Wife", "Esposa"],
];

export const TAG_COLORS = {
  formal: "#60a5fa",
  informal: "#fb923c",
  neutral: "#94a3b8",
};

export const TAG_LABELS = {
  formal: "formal",
  informal: "informal",
  neutral: "neutro",
};
