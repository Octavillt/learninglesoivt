import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { SOCIAL_LIFE, COLLOCATION_GROUPS, TIME_EXAMPLES, CONVERSATION } from "./data";

const COLOR = "#FBBF24";
const EXPERIENCE_COLORS = { positiva: "#4ade80", negativa: "#f87171", "positiva o negativa": "#fbbf24" };
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function SocialCollocationsSection() {
  return (
    <div>
      <TopicHeading topicId="socialCollocations" />
      <div style={{ ...card, ...text }}>
        💡 Una <strong>colocación</strong> es una combinación fija de palabras que suena natural en inglés y no siempre
        se traduce palabra por palabra: <span lang="en">make a decision</span> significa «tomar una decisión», no «hacer una decisión».
        Aprende cada colocación como una sola unidad.
      </div>

      <SectionTitle color={COLOR}>🎉 Vida social</SectionTitle>
      <RuleBox icon="⚠️" rule="Cuidado con las partículas" color={COLOR}>
        <p style={text}>Las partículas son parte de la colocación: <span lang="en">go <strong>out</strong> danc<strong>ing</strong></span> lleva la partícula out y el verbo con -ing; <span lang="en">go <strong>on</strong> a date</span> usa on, no «go in a date».</p>
      </RuleBox>
      {SOCIAL_LIFE.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🔑 Colocaciones con get, have y make</SectionTitle>
      <p style={text}>Agrúpalas por verbo y fíjate si la experiencia es positiva, negativa o puede ser ambas.</p>
      {COLLOCATION_GROUPS.map(({ verb, items }) => (
        <RuleBox key={verb} icon="🧩" rule={`Colocaciones con ${verb}`} color={COLOR}>
          {items.map(([en, es, experience]) => (
            <div key={en} style={{ marginBottom: "10px" }}>
              <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
              <div style={translation}>🇲🇽 {es}</div>
              <div style={{ ...translation, marginTop: "2px" }}>Experiencia: <strong style={{ color: EXPERIENCE_COLORS[experience] }}>{experience}</strong></div>
            </div>
          ))}
        </RuleBox>
      ))}

      <SectionTitle color={COLOR}>⏪⏩ Úsalas en pasado y futuro</SectionTitle>
      <RuleBox icon="🔗" rule="Las colocaciones también se conjugan" color={COLOR}>
        <p style={text}>En pasado simple cambia el verbo de la colocación: make → made, get → got, have → had, hang → hung, see → saw, go → went. Con going to, la colocación se conserva en su forma base.</p>
        <RelatedTopic levelId="basico5" topicId="simplePast" label="Repasar el pasado simple" />
        <RelatedTopic levelId="basico5" topicId="goingTo" label="Repasar los planes con going to" />
      </RuleBox>
      {TIME_EXAMPLES.map(([en, es]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>💬 Conversación del libro</SectionTitle>
      {CONVERSATION.map(([en, es]) => (
        <div key={en} style={card}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Cuenta qué hiciste la última vez que saliste con amigos usando dos colocaciones en pasado y un plan con going to. Después pregunta a otra persona «Did you have fun?» y comenta si la experiencia fue positiva o negativa. Usa el Quiz para repasar las colocaciones.</p>
    </div>
  );
}
