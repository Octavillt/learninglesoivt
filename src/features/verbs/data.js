// Helper builders — shorthand para armar tokens
const su = t => ({ t, r: "subject" });
const vv = t => ({ t, r: "verb" });

export const VERBS = [
  ["Answer","Contestar"],["Ask","Preguntar"],["Be","Ser / Estar"],["Break","Romper"],
  ["Buy","Comprar"],["Carry","Cargar"],["Clean","Limpiar"],["Close","Cerrar"],
  ["Cook","Cocinar"],["Come","Venir"],["Cry","Llorar"],["Cut","Cortar"],
  ["Dance","Bailar"],["Do","Hacer"],["Draw","Dibujar"],["Drink","Beber"],
  ["Drive","Manejar"],["Eat","Comer"],["Erase","Borrar"],["Find","Encontrar"],
  ["Fly","Volar"],["Get up","Levantarse"],["Give","Dar"],["Go","Ir"],
  ["Have","Tener"],["Help","Ayudar"],["Jump","Saltar"],["Learn","Aprender"],
  ["Listen to","Escuchar"],["Live","Vivir"],["Look up","Buscar"],["Make","Hacer"],
  ["Open","Abrir"],["Paint","Pintar"],["Pay","Pagar"],["Push","Empujar"],
  ["Play","Jugar"],["Read","Leer"],["Run","Correr"],["See","Ver"],
  ["Sell","Vender"],["Sing","Cantar"],["Sit","Sentarse"],["Sleep","Dormir"],
  ["Speak","Hablar"],["Swim","Nadar"],["Study","Estudiar"],["Take","Tomar"],
  ["Teach","Enseñar"],["Think","Pensar"],["Visit","Visitar"],["Want","Querer"],
  ["Walk","Caminar"],["Wake up","Despertarse"],["Wash","Lavar"],["Watch","Ver / Mirar"],
  ["Work","Trabajar"],["Write","Escribir"],
];

export const VERB_SENTENCES = [
  { pts: [su("I"), " ", vv("eat"), " an apple."],       esp: "Yo como una manzana." },
  { pts: [su("She"), " ", vv("reads"), " a book."],      esp: "Ella lee un libro." },
  { pts: [su("He"), " ", vv("sleeps"), " a lot."],       esp: "Él duerme mucho." },
  { pts: [su("We"), " ", vv("play"), " soccer."],        esp: "Nosotros jugamos fútbol." },
  { pts: [su("They"), " ", vv("study"), " English."],    esp: "Ellos estudian inglés." },
  { pts: [su("I"), " ", vv("walk"), " to school."],      esp: "Yo camino a la escuela." },
  { pts: [su("She"), " ", vv("sings"), " a song."],      esp: "Ella canta una canción." },
  { pts: [su("He"), " ", vv("runs"), " fast."],          esp: "Él corre rápido." },
];
