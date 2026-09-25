import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { EXAMPLES, QUESTIONS } from "./data";

const COLOR = "#38BDF8";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };

export default function CanSection() {
  return (
    <div>
      <TopicHeading topicId="can" />
      <div style={{ ...card, ...text }}>
        💡 <strong>Can</strong> es un verbo modal que usamos para expresar habilidades o destrezas:
        lo que alguien puede o sabe hacer, ya sea una capacidad natural o algo aprendido.
        Por ejemplo: <span lang="en">I can swim</span> significa «Sé nadar».
      </div>

      <RuleBox icon="🔑" rule="La misma forma para todos los sujetos" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>I / you / he / she / it / we / they usan <strong>can</strong>.</li>
          <li>El verbo siguiente va en forma base, sin <strong>to</strong> y sin <strong>-s / -es</strong>: He can sing, no «He can sings» ni «He can to sing».</li>
          <li>El sujeto puede ser un nombre, un sustantivo o un pronombre: Bad Bunny can sing → He can sing.</li>
        </ul>
        <RelatedTopic levelId="basico1" topicId="verbs" label="Repasar los verbos y la forma base" />
      </RuleBox>

      <RuleBox icon="🚫" rule="Negación: cannot = can't" color={COLOR}>
        <p style={text}>Para expresar que alguien no puede o no sabe hacer algo, usa <strong>cannot</strong> (una sola palabra) o su contracción <strong>can't</strong>. Ejemplo: Cats cannot bark = Cats can't bark. No uses don't/doesn't con can.</p>
      </RuleBox>

      <SectionTitle color={COLOR}>📖 Ejemplos con traducción</SectionTitle>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas</SectionTitle>
      <RuleBox icon="💬" rule="Preguntas de sí/no y preguntas con WH" color={COLOR}>
        <p style={text}>Para preguntar, coloca <strong>can antes del sujeto</strong>, sin do/does. Responde con <strong>Yes, sujeto + can</strong> o <strong>No, sujeto + can't</strong>.</p>
        <p style={text}>Para pedir información, coloca la palabra WH al principio: <span lang="en">What can you do?</span> (¿Qué sabes hacer?). Aquí <strong>do</strong> es el verbo principal «hacer».</p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" label="Repasar el significado de las palabras WH" />
      </RuleBox>
      {QUESTIONS.map(([q, a, es]) => (
        <div key={q} style={card}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{q}</div>
          <div lang="en" style={text}>→ {a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "4px" }}>🇲🇽 {es}</div>
        </div>
      ))}
      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Escribe dos cosas que sabes hacer y una que no sabes hacer. Después pregunta a otra persona «Can you…?» y «What can you do?». Usa el Quiz para practicar afirmaciones, negaciones y preguntas.</p>
    </div>
  );
}
