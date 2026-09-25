import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { FORMATION_RULES, CONTRASTS, EXAMPLES } from "./data";

const COLOR = "#F472B6";
const card = { background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function AdverbsMannerSection() {
  return (
    <div>
      <TopicHeading topicId="adverbsManner" />
      <p style={{ ...card, ...text }}>🎶 Los <strong>adverbs of manner</strong> explican <strong>cómo se realiza una acción</strong>: <span lang="en">how someone does an action</span>. Responden a <strong>How?</strong> (¿Cómo?): <span lang="en">How does he sing? — Beautifully.</span> (¿Cómo canta él? — Maravillosamente.)</p>

      <SectionTitle color={COLOR}>🔎 Adjetivo vs. adverbio</SectionTitle>
      <RuleBox icon="💡" rule="¿Describes a alguien o describes cómo hace algo?" color={COLOR}>
        <p style={text}>Un <strong>adjetivo</strong> describe un sustantivo: una persona, un animal, un lugar o una cosa. Puede ir antes del sustantivo (<span lang="en">a good singer</span>) o después de to be para describir al sujeto (<span lang="en">He is good</span>).</p>
        <p style={text}>Un <strong>adverbio de modo</strong> describe cómo ocurre una acción: <span lang="en">He sings well</span>. No basta con colocar el adjetivo después del verbo de acción: para decir «canta hermosamente», usa <strong>He sings beautifully</strong>, no «He sings beautiful».</p>
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y su posición" />
      </RuleBox>
      {CONTRASTS.map(([adj, adjEs, adv, advEs]) => (
        <div key={adj} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{adj}</div>
          <div style={translation}>Adjetivo: {adjEs}</div>
          <div lang="en" style={{ ...text, fontWeight: 700, marginTop: "8px" }}>{adv}</div>
          <div style={translation}>Adverbio: {advEs}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✍️ Cómo formar adverbios de modo</SectionTitle>
      {FORMATION_RULES.map(rule => (
        <RuleBox key={rule.title} icon="📖" rule={rule.title} color={COLOR}>
          <p style={text}>{rule.description}</p>
          {rule.examples.map(([en, es]) => (
            <div key={en} style={{ marginBottom: "10px" }}>
              <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
              <div style={translation}>🇲🇽 {es}</div>
            </div>
          ))}
        </RuleBox>
      ))}

      <SectionTitle color={COLOR}>📍 ¿Dónde va el adverbio?</SectionTitle>
      <RuleBox icon="🧩" rule="Después del verbo o después del objeto" color={COLOR}>
        <p style={text}>Sin objeto: <span lang="en">He runs fast</span>. Con objeto: <span lang="en">She lifts the weights carefully</span>. En este orden, no separes el verbo de su objeto: evita «She lifts carefully the weights».</p>
        <p style={text}>También puede ir antes del verbo principal para cambiar el énfasis: <span lang="en">She carefully lifts the weights</span>. Para empezar, usa el patrón con el adverbio al final.</p>
        <p style={text}>Con <strong>can</strong>: <span lang="en">He can sing beautifully</span>. En presente simple sin can: <span lang="en">He sings beautifully</span>. El adverbio no cambia con el sujeto: <span lang="en">I sing beautifully / She sings beautifully</span>.</p>
        <RelatedTopic levelId="basico4" topicId="can" label="Repasar el verbo base después de can" />
      </RuleBox>

      <SectionTitle color={COLOR}>🎤 Ejemplos del pizarrón y de uso diario</SectionTitle>
      {EXAMPLES.map(([en, es]) => (
        <div key={en} style={card}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico4" topicId="exerciseWords" label="Combinar movimientos con slowly, carefully y gently" />

      <RuleBox icon="❓" rule="Preguntar con how" color={COLOR}>
        <p style={text}><span lang="en">How does Octavio play soccer? — He plays well.</span><br />¿Cómo juega Octavio al fútbol? — Juega bien.</p>
        <p style={text}><span lang="en">How do dogs learn tricks? — They learn easily.</span><br />¿Cómo aprenden trucos los perros? — Aprenden fácilmente.</p>
        <p style={text}>Usa <strong>does</strong> con he/she/it y <strong>do</strong> con I/you/we/they. Después del auxiliar, el verbo va en forma base: <span lang="en">How does he play?</span>, no «How does he plays?».</p>
        <p style={text}><strong>How</strong> pregunta cómo; <strong>how often</strong> pregunta con qué frecuencia. Compara <span lang="en">She sings beautifully</span> (modo) con <span lang="en">She often sings</span> (frecuencia).</p>
      </RuleBox>

      <SectionTitle color={COLOR}>⚠️ Excepciones y errores frecuentes</SectionTitle>
      <RuleBox icon="🔑" rule="No todas las palabras siguen la regla de -ly" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><strong>Fast</strong> ya funciona como adverbio: <span lang="en">He runs fast</span>. No uses «fastly».</li>
          <li><strong>Hard ≠ hardly:</strong> <span lang="en">He works hard</span> = Trabaja con esfuerzo. <span lang="en">He hardly works</span> = Apenas trabaja. Hardly no es el adverbio de modo de hard.</li>
          <li><strong>Late ≠ lately:</strong> <span lang="en">He arrives late</span> = Llega tarde. <strong>Lately</strong> significa últimamente; ambos se relacionan con el tiempo, no con el modo.</li>
          <li><strong>Little</strong> aparece en los apuntes como forma que no cambia, pero en <span lang="en">He sleeps little</span> (Duerme poco) expresa cantidad, no cómo duerme. No es un ejemplo típico de adverbio de modo.</li>
          <li><strong>Friendly</strong> termina en -ly, pero es un adjetivo. Para describir una acción: <span lang="en">She speaks in a friendly way</span> (Habla de manera amable).</li>
          <li><strong>Good / well:</strong> <span lang="en">He is a good singer / He sings well</span>. Well también puede ser adjetivo con el sentido de estar bien de salud: <span lang="en">I am well</span>.</li>
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Escribe dos habilidades con can y un adverbio, describe cómo canta o corre alguien y añade un adverbio a una instrucción de ejercicio. Después convierte un ejemplo en pregunta con how. Comprueba tus respuestas con la autoevaluación y el Quiz.</p>
    </div>
  );
}
