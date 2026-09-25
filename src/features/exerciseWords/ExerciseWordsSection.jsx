import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { EXERCISE_WORDS, MOVEMENT_PHRASES, EXAMPLES } from "./data";

const COLOR = "#A78BFA";
const card = { background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function ExerciseWordsSection() {
  return (
    <div>
      <TopicHeading topicId="exerciseWords" />
      <p style={{ ...card, ...text }}>🏋️ <strong>Exercise words</strong> son palabras para hablar de ejercicio y movimiento. En la lección <strong>Exercising</strong> aparecen ocho verbos que puedes combinar con partes del cuerpo, objetos y direcciones.</p>

      <SectionTitle color={COLOR}>📖 Los ocho verbos de la imagen</SectionTitle>
      <p style={text}>La numeración sigue las fotografías de la actividad A: 1 stretch, 2 pull, 3 lift, 4 bend, 5 push, 6 turn, 7 stand y 8 twist.</p>
      {EXERCISE_WORDS.map((word, index) => (
        <RuleBox key={word.en} icon="🏃" rule={`${index + 1}. ${word.en} — ${word.es}`} color={COLOR}>
          <p style={text}>{word.note}</p>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{word.instruction}</div>
          <div style={translation}>🇲🇽 {word.meaning}</div>
          <p style={text}>Forma <strong>-ing</strong>: <span lang="en">{word.en} → {word.ing}</span>.</p>
        </RuleBox>
      ))}

      <RuleBox icon="🔎" rule="Diferencias que ayudan a recordarlos" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><strong>Push / pull:</strong> empujar / jalar. También aparecen en puertas: PUSH = empuje; PULL = jale.</li>
          <li><strong>Bend / stretch:</strong> flexionar / estirar. Compara <span lang="en">Bend your arms</span> (Flexiona los brazos) con <span lang="en">Stretch your arms</span> (Estira los brazos).</li>
          <li><strong>Turn / twist:</strong> ambos pueden traducirse como girar. Turn suele indicar un cambio de orientación; twist destaca la rotación de una parte respecto a otra, como el torso respecto a las caderas. El contexto ayuda a elegir.</li>
          <li><strong>Stand / stand up:</strong> estar de pie / ponerse de pie. <span lang="en">He is standing</span> describe su postura; <span lang="en">Stand up</span> pide que se levante.</li>
          <li><strong>Lift / stand up:</strong> <span lang="en">lift a weight</span> es levantar una pesa; <span lang="en">stand up</span> es levantarse uno mismo.</li>
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>📣 Dar instrucciones: el imperativo</SectionTitle>
      <RuleBox icon="💬" rule="Verbo base, normalmente sin you" color={COLOR}>
        <p style={text}>Para dar una instrucción, empieza con el verbo: <span lang="en">Lift your arms</span> (Levanta los brazos). Para indicar qué no hacer, usa <strong>don't + verbo base</strong>: <span lang="en">Don't push the door</span> (No empujes la puerta). Puedes añadir <strong>please</strong>: <span lang="en">Please stand up</span> (Ponte de pie, por favor).</p>
        <p style={text}>Con partes del cuerpo se usa mucho <strong>your</strong>, aunque en español digamos «los» o «las»: <span lang="en">Bend your knees</span> = Flexiona las rodillas. Aprende también <strong>arms</strong> (brazos), <strong>legs</strong> (piernas), <strong>head</strong> (cabeza), <strong>feet</strong> (pies), <strong>hips</strong> (caderas) y <strong>upper body</strong> (parte superior del cuerpo).</p>
        <RelatedTopic levelId="basico4" topicId="bodyParts" label="Repasar las partes del cuerpo" />
      </RuleBox>

      <SectionTitle color={COLOR}>↔️ Direcciones y expresiones útiles</SectionTitle>
      {MOVEMENT_PHRASES.map(([en, es]) => (
        <div key={en} style={card}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <p style={text}>Combina estas expresiones con los verbos: <span lang="en">Turn to the right</span> (Gira a la derecha), <span lang="en">Bend forward</span> (Inclínate hacia adelante) y <span lang="en">Lift your arms slowly</span> (Levanta los brazos despacio).</p>

      <SectionTitle color={COLOR}>🌀 Describir lo que ocurre ahora</SectionTitle>
      <p style={text}>Usa <strong>am/is/are + verbo-ing</strong>. Los ocho verbos de esta lección forman -ing añadiendo esa terminación sin cambiar su base: stretch → stretching, pull → pulling. No omitas to be: <span lang="en">She is lifting</span>, no «She lifting».</p>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico1" topicId="progressive" label="Repasar el presente progresivo" />

      <RuleBox icon="💪" rule="Habilidad con can; acción actual con be + -ing" color={COLOR}>
        <p style={text}><span lang="en">I can lift this weight</span> = Puedo levantar esta pesa (capacidad). <span lang="en">I am lifting this weight</span> = Estoy levantando esta pesa (acción actual).</p>
        <p style={text}><span lang="en">Can you bend your knees? — Yes, I can.</span> = ¿Puedes flexionar las rodillas? — Sí. Después de can usa <strong>bend</strong>, no «bending» ni «to bend».</p>
        <RelatedTopic levelId="basico4" topicId="can" label="Repasar can, can't y respuestas cortas" />
      </RuleBox>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Vuelve a la imagen y nombra los ocho movimientos sin mirar la lista. Después escribe tres instrucciones con partes del cuerpo, describe dos fotografías con is + -ing y formula una pregunta con can. Usa la autoevaluación de abajo y el Quiz para comprobar tus respuestas.</p>
    </div>
  );
}
