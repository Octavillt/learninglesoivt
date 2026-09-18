export const JOB_CATEGORIES = [
  {
    label: "Salud", icon: "🩺", color: "#f87171",
    jobs: [
      ["Doctor", "Doctor", "hospital"],
      ["Nurse", "Enfermero/a", "hospital"],
      ["Dentist", "Dentista", "dental clinic"],
      ["Surgeon", "Cirujano/a", "hospital"],
      ["Veterinarian", "Veterinario/a", "veterinary clinic"],
    ],
  },
  {
    label: "Casa y servicios", icon: "🏠", color: "#fbbf24",
    jobs: [
      ["Cleaner", "Limpiador/a", "-"],
      ["Maid", "Sirvienta / empleada doméstica", "house"],
      ["Housewife", "Ama de casa", "house"],
      ["Delivery man", "Repartidor", "-"],
      ["Mail carrier", "Cartero", "post office"],
      ["Barber / Hairdresser", "Barbero / Estilista", "salon"],
      ["Cashier", "Cajero/a", "store"],
    ],
  },
  {
    label: "Arte y espectáculo", icon: "🎭", color: "#c084fc",
    jobs: [
      ["Director", "Director/a", "studio"],
      ["Producer", "Productor/a", "studio"],
      ["Singer", "Cantante", "studio"],
      ["Ballerina", "Bailarina de ballet", "theater"],
      ["Clown", "Payaso", "-"],
      ["Drummer", "Baterista", "studio"],
      ["Photographer", "Fotógrafo/a", "studio"],
      ["Musician", "Músico", "studio"],
      ["Actor / Actress", "Actor / Actriz", "theater"],
    ],
  },
  {
    label: "Construcción y técnica", icon: "🛠️", color: "#fb923c",
    jobs: [
      ["Carpenter", "Carpintero/a", "workshop"],
      ["Builder", "Constructor/a", "construction site"],
      ["Civil engineer", "Ingeniero/a civil", "construction site"],
      ["Electrician", "Electricista", "-"],
      ["Engineer", "Ingeniero/a", "office"],
      ["Technician", "Técnico/a", "-"],
      ["Mechanic", "Mecánico/a", "workshop"],
    ],
  },
  {
    label: "Seguridad y emergencias", icon: "🚨", color: "#f472b6",
    jobs: [
      ["Firefighter", "Bombero/a", "fire station"],
      ["Police officer", "Policía", "police station"],
      ["Pilot", "Piloto", "airport"],
    ],
  },
  {
    label: "Ley y oficina", icon: "💼", color: "#60a5fa",
    jobs: [
      ["Lawyer", "Abogado/a", "court"],
      ["Judge", "Juez", "court"],
      ["Accountant", "Contador/a", "office"],
      ["Programmer", "Programador/a", "office"],
      ["Journalist", "Periodista", "office"],
    ],
  },
  {
    label: "Educación y comida", icon: "🍳", color: "#34d399",
    jobs: [
      ["Teacher", "Maestro/a", "school"],
      ["Athlete", "Atleta", "stadium"],
      ["Chef / Cook", "Chef / Cocinero", "restaurant"],
      ["Waiter / Waitress", "Mesero/a", "restaurant"],
      ["Farmer", "Granjero/a", "farm"],
    ],
  },
];

export const JOBS = JOB_CATEGORIES.flatMap((c) => c.jobs);

export const WORKPLACES = [
  ["Hospital", "Hospital"],
  ["Court", "Corte / Juzgado"],
  ["Stadium", "Estadio"],
  ["School", "Escuela"],
  ["Office", "Oficina"],
  ["Restaurant", "Restaurante"],
  ["Construction site", "Obra de construcción"],
  ["Studio", "Estudio"],
  ["Police station", "Estación de policía"],
  ["Fire station", "Estación de bomberos"],
  ["Airport", "Aeropuerto"],
  ["Workshop", "Taller"],
  ["Theater", "Teatro"],
  ["Farm", "Granja"],
];

export const JOB_ACTIONS = [
  ["Doctor", "examining", "a patient", "examinando a un paciente"],
  ["Nurse", "assisting", "people", "asistiendo a personas"],
  ["Teacher", "teaching", "a class", "enseñando una clase"],
  ["Chef", "cooking", "dinner", "cocinando la cena"],
  ["Firefighter", "putting out", "a fire", "apagando un incendio"],
  ["Mechanic", "fixing", "a car", "arreglando un carro"],
  ["Singer", "singing", "a song", "cantando una canción"],
  ["Programmer", "writing", "code", "escribiendo código"],
];

export const DIALOG_HE = [
  { q: "What's his profession?", qEsp: "¿Cuál es su profesión?", a: "He is a doctor.", aEsp: "Él es doctor." },
  { q: "Where does he work?", qEsp: "¿Dónde trabaja?", a: "He works in the hospital.", aEsp: "Él trabaja en el hospital." },
  { q: "What is he doing at the moment?", qEsp: "¿Qué está haciendo en este momento?", a: "He is examining a patient.", aEsp: "Él está examinando a un paciente." },
];

export const DIALOG_SHE = [
  { q: "What's her profession?", qEsp: "¿Cuál es su profesión?", a: "She is a nurse.", aEsp: "Ella es enfermera." },
  { q: "Where does she work?", qEsp: "¿Dónde trabaja?", a: "She works in the hospital.", aEsp: "Ella trabaja en el hospital." },
  { q: "What is she doing at the moment?", qEsp: "¿Qué está haciendo en este momento?", a: "She is assisting people.", aEsp: "Ella está asistiendo a personas." },
];
