import Token from "../../components/Token";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { WH_WORDS, WH_QA } from "./data";

const COLOR = "#22d3ee";

function WhWordCard({ word, use, example, esp }) {
  return (
    <div style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 14px", borderLeft: `3px solid ${COLOR}` }}>
      <div style={{ color: COLOR, fontWeight: 900, fontSize: "18px", marginBottom: "2px" }}>{word}?</div>
      <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{use}</div>
      <div style={{ color: "#e2e8f0", fontSize: "13px" }}>{example}</div>
      <div style={{ color: "#64748b", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {esp}</div>
    </div>
  );
}

export default function WhQuestionsSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>❓ WH Questions</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Las <Token t="WH Questions" r="wh" /> se usan para pedir información específica (no se responden con sí/no). Casi todas empiezan con <strong style={{ color: "#f8fafc" }}>W</strong> o <strong style={{ color: "#f8fafc" }}>H</strong>: what, where, why, how, when, who, which, whose.
      </div>
      <Legend roles={["wh", "verb_be", "subject"]} />

      <RuleBox icon="📐" rule="Fórmula general (con Verb To Be)" color={COLOR}>
        <Formula
          parts={[{ t: "WH word", r: "wh" }, { t: "am / is / are", r: "verb_be" }, { t: "Sujeto", r: "subject" }, { t: "?", color: "#e2e8f0" }]}
          example={[{ t: "Where", r: "wh" }, { t: "is", r: "verb_be" }, { t: "he", r: "subject" }, { t: "?", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 ¿Dónde está él?</div>
        <RelatedTopic levelId="basico1" topicId="tobe" />
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Las 8 palabras WH</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "10px" }}>
        {WH_WORDS.map(([word, use, example, esp]) => (
          <WhWordCard key={word} word={word} use={use} example={example} esp={esp} />
        ))}
      </div>

      <SectionTitle color={COLOR}>❓ Preguntas y respuestas</SectionTitle>
      {WH_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <RuleBox icon="🔑" rule="Bonus — Whose (¿de quién?)" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <Token t="Whose" r="wh" /> pregunta a quién le pertenece algo. La respuesta normalmente usa un <Token t="posesivo" r="gen" /> con <strong style={{ color: "#f8fafc" }}>'s</strong>.
        </div>
        <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "8px" }}>Whose backpack is this? → It's Israel's.</div>
        <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 ¿De quién es esta mochila? → Es de Israel.</div>
        <RelatedTopic levelId="basico2" topicId="possessiveNouns" />
      </RuleBox>
    </div>
  );
}
