// El orden corresponde a las fotografías 1–8 de la actividad A.
export const EXERCISE_WORDS = [
  { en: "stretch", es: "estirar", ing: "stretching", instruction: "Stretch your arms.", meaning: "Estira los brazos.", note: "Extender una parte del cuerpo; la palabra se escribe stretch, con -tch." },
  { en: "pull", es: "jalar / tirar de", ing: "pulling", instruction: "Pull the handles toward you.", meaning: "Jala las agarraderas hacia ti.", note: "Acercar algo hacia ti; es lo contrario de push." },
  { en: "lift", es: "levantar / elevar", ing: "lifting", instruction: "Lift the weights.", meaning: "Levanta las pesas.", note: "Mover algo hacia arriba: lift a weight = levantar una pesa." },
  { en: "bend", es: "doblar / flexionar / inclinarse", ing: "bending", instruction: "Bend your knees.", meaning: "Flexiona las rodillas.", note: "Doblar una articulación o inclinar el cuerpo: bend forward = inclinarse hacia adelante." },
  { en: "push", es: "empujar", ing: "pushing", instruction: "Push the tire.", meaning: "Empuja la llanta.", note: "Aplicar fuerza para alejar o mover algo; es lo contrario de pull." },
  { en: "turn", es: "girar / darse la vuelta", ing: "turning", instruction: "Turn your head to the left.", meaning: "Gira la cabeza hacia la izquierda.", note: "Cambiar de orientación o dirección: turn around = darse la vuelta." },
  { en: "stand", es: "estar de pie", ing: "standing", instruction: "Stand with your feet apart.", meaning: "Ponte de pie con los pies separados.", note: "Stand describe estar de pie; stand up enfatiza levantarse desde una posición sentada." },
  { en: "twist", es: "rotar / girar el torso", ing: "twisting", instruction: "Twist your upper body to the right.", meaning: "Gira la parte superior del cuerpo hacia la derecha.", note: "En ejercicio describe una rotación del torso respecto a las caderas. En otros contextos puede significar torcer." },
];

export const MOVEMENT_PHRASES = [
  ["to the left / to the right", "hacia la izquierda / hacia la derecha"],
  ["up / down", "hacia arriba / hacia abajo"],
  ["forward / backward", "hacia adelante / hacia atrás"],
  ["slowly", "despacio / lentamente"],
  ["stand up / sit down", "ponerse de pie / sentarse"],
  ["stand still", "quedarse quieto de pie"],
  ["warm up / cool down", "calentar / bajar la intensidad al terminar"],
  ["work out", "hacer ejercicio / entrenar"],
];

export const EXAMPLES = [
  ["She is stretching her arms.", "Ella está estirando los brazos."],
  ["He is pulling the handles.", "Él está jalando las agarraderas."],
  ["She is lifting two weights.", "Ella está levantando dos pesas."],
  ["They are bending their knees.", "Ellos están flexionando las rodillas."],
  ["He is pushing a tire.", "Él está empujando una llanta."],
  ["She is turning her head.", "Ella está girando la cabeza."],
  ["He is standing with his arms crossed.", "Él está de pie con los brazos cruzados."],
  ["She is twisting her upper body.", "Ella está girando la parte superior del cuerpo."],
];

export const PRACTICE = [
  ...EXERCISE_WORDS.map(word => ({
    question: `Escribe el verbo de la lección que significa «${word.es}».`,
    answers: [word.en],
    explanation: `${word.en} = ${word.es}. ${word.instruction} — ${word.meaning}`,
  })),
  { question: "Completa con push o pull: ___ the handles toward you.", answers: ["pull"], explanation: "Pull the handles toward you. Pull acerca algo hacia ti; push lo empuja." },
  { question: "Completa con bend o stretch: ___ your knees (flexiona las rodillas).", answers: ["bend"], explanation: "Bend your knees. Bend significa doblar o flexionar; stretch significa estirar." },
  { question: "Completa: She is ___ (lift) a weight.", answers: ["lifting"], explanation: "She is lifting a weight. El presente progresivo usa is + lifting." },
  { question: "Completa: They ___ standing (am / is / are).", answers: ["are"], explanation: "They are standing. Con they usa are en el presente progresivo." },
  { question: "Completa: He can ___ (push) the tire.", answers: ["push"], explanation: "He can push the tire. Después de can se usa el verbo base, sin -s ni -ing." },
  { question: "Convierte en instrucción negativa: Pull the door.", answers: ["Don't pull the door.", "Do not pull the door."], explanation: "Don't + verbo base: Don't pull the door = No jales la puerta." },
  { question: "Ordena: you / Can / lift / this weight / ?", answers: ["Can you lift this weight?"], explanation: "Can + sujeto + verbo base: Can you lift this weight?" },
  { question: "¿Qué expresión indica levantarse de una silla?", options: ["Stand up", "Stand still", "Sit down"], answers: ["Stand up"], explanation: "Stand up = ponerse de pie. Stand still = quedarse quieto de pie; sit down = sentarse." },
];
