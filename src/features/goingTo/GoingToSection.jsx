import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { EXAMPLES, QUESTIONS, TIME_EXPRESSIONS, VOCABULARY } from "./data";

const COLOR = "#34D399";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function GoingToSection() {
  return (
    <div>
      <TopicHeading topicId="goingTo" />
      <div style={{ ...card, ...text }}>
        💡 <strong>Going to</strong> expresa planes e intenciones futuras (<span lang="en">future plans & intentions</span>)
        y también predicciones basadas en lo que vemos o creemos (<span lang="en">predictions</span>):
        <span lang="en"> It's not going to be very sunny today.</span> Por ejemplo: <span lang="en">I'm going to eat seafood</span> significa «Voy a comer mariscos».
      </div>

      <RuleBox icon="🔑" rule="Elige am/is/are según el sujeto" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>I → am; he/she/it → is; you/we/they → are: <span lang="en">She is going to visit her family.</span></li>
          <li>Después de <strong>going to</strong> el verbo va en forma base: ✗ going to went / going to eats → ✓ going to go / going to eat.</li>
          <li>En la negación agrega <strong>not</strong> después de am/is/are: <span lang="en">We aren't going to arrive late.</span></li>
        </ul>
        <RelatedTopic levelId="basico1" topicId="tobe" label="Repasar las formas de to be" />
        <RelatedTopic levelId="basico1" topicId="progressive" label="Comparar con la estructura del presente progresivo" />
      </RuleBox>

      <RuleBox icon="🔁" rule="Going to go: la repetición es correcta" color={COLOR}>
        <p style={text}><strong>Going to</strong> es la estructura de futuro y <strong>go</strong> es el verbo principal («ir»), por eso se repite: <span lang="en">I'm going to go to Acapulco</span> = «Voy a ir a Acapulco». Lo mismo ocurre con otros verbos: <span lang="en">going to eat</span>, <span lang="en">going to swim</span>, <span lang="en">going to visit</span>.</p>
      </RuleBox>

      <RuleBox icon="🗣️" rule="Gonna: la forma informal y oral" color={COLOR}>
        <p style={text}><strong>Gonna</strong> es la contracción informal y oral de <strong>going to</strong>, y solo aparece antes de un verbo: <span lang="en">Is Octavio gonna sell his motorcycle?</span> Evítala en textos formales; escribe <span lang="en">going to</span>.</p>
      </RuleBox>

      <SectionTitle color={COLOR}>📖 Ejemplos con traducción</SectionTitle>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas</SectionTitle>
      <RuleBox icon="💬" rule="Preguntas con going to y respuestas cortas" color={COLOR}>
        <p style={text}>Para preguntar, coloca <strong>am/is/are</strong> antes del sujeto: <span lang="en">Are you going to study your verbs in simple past?</span>. Responde con to be: <strong>Yes, I am. / No, I'm not. / Yes, he is. / No, he isn't.</strong></p>
        <p style={text}>Para pedir información, coloca la palabra WH al principio: <span lang="en">Where are you going to study?</span> (¿Dónde vas a estudiar?).</p>
        <RelatedTopic levelId="basico5" topicId="simplePast" label="Repasar las preguntas con did del pasado simple" />
      </RuleBox>
      {QUESTIONS.map(([q, a, es]) => (
        <div key={q} style={card}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{q}</div>
          <div lang="en" style={text}>→ {a}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>⏰ Expresiones de futuro</SectionTitle>
      <RuleBox icon="🗓️" rule="Ubican el plan en el futuro" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          {TIME_EXPRESSIONS.map(([en, es]) => (
            <li key={en}><span lang="en">{en}</span> — {es}</li>
          ))}
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>📚 Vocabulario al margen</SectionTitle>
      {VOCABULARY.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Escribe dos planes para el fin de semana y uno que no vas a hacer. Después pregunta a otra persona «What are you going to do this weekend?» y responde con respuestas cortas. Usa el Quiz para practicar afirmaciones, negaciones y preguntas.</p>
    </div>
  );
}
