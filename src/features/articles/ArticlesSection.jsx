import Token from "../../components/Token";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import { NOUN_EXAMPLES, ZERO_RULES, SOUND_EXCEPTIONS, ARTICLE_EXERCISE } from "./data";

const COLOR = "#a3e635";

export default function ArticlesSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>📖 Articles — a / an / Ø</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un artículo (a / an / the) siempre va pegado a un <strong style={{ color: "#f8fafc" }}>sustantivo</strong> — nunca aparece solo. En español ese sustantivo casi siempre lleva artículo (un, una, el, la...). En inglés hay tres opciones: <Token t="a" r="art" /> / <Token t="an" r="art" /> (un/una) o <Token t="Ø" r="zero" /> — que significa que <strong style={{ color: "#f8fafc" }}>ahí no va ninguna palabra</strong>, el espacio queda vacío.
      </div>
      <Legend roles={["art", "zero"]} />

      <RuleBox icon="📌" rule="¿Qué es un sustantivo?" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          Un <strong style={{ color: "#f8fafc" }}>sustantivo</strong> es cualquier palabra que nombra a una persona, un lugar, un animal, una cosa o una idea. Es la palabra a la que se le pega el artículo — en <Token t="a" r="art" /> <span style={{ color: "#e2e8f0", fontWeight: 700 }}>dog</span>, la palabra <strong style={{ color: "#f8fafc" }}>dog</strong> es el sustantivo.
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "8px" }}>
          {NOUN_EXAMPLES.map(({ icon, title, words }) => (
            <div key={title} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: COLOR, fontWeight: 800, fontSize: "12px", marginBottom: "6px" }}>{icon} {title}</div>
              {words.map(([en, es]) => (
                <div key={en} style={{ fontSize: "12px", padding: "1px 0" }}>
                  <span style={{ color: "#e2e8f0", fontWeight: 700 }}>{en}</span>
                  <span style={{ color: "#64748b" }}> — {es}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🔤" rule={`"a" o "an" — depende del SONIDO, no de la letra`} color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#a3e635", fontWeight: 900, fontSize: "26px" }}>A</div>
            <div style={{ color: "#a3e635", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de SONIDO consonante</div>
            {["a car", "a student", "a university"].map(ex => (
              <div key={ex} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#a3e635", fontWeight: 900, fontSize: "26px" }}>AN</div>
            <div style={{ color: "#a3e635", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de SONIDO vocal</div>
            {["an apple", "an umbrella", "an hour"].map(ex => (
              <div key={ex} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: "12px", marginTop: "10px" }}>
          💡 Ya viste una primera versión de esta regla en Verb To Be de Básico I — aquí la repasamos junto con sus excepciones.
        </div>
        <RelatedTopic levelId="basico1" topicId="tobe" />
      </RuleBox>

      <RuleBox icon="🎯" rule="Excepciones — el sonido no siempre es lo que esperas" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "8px" }}>
          {SOUND_EXCEPTIONS.map(({ word, why, icon }) => (
            <div key={word} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{icon} {word}</div>
              <div style={{ color: "#64748b", fontSize: "12px", marginTop: "2px" }}>{why}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <RuleBox icon="🚫" rule="Ø — cuándo NO se usa artículo" color="#64748b">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
          <Token t="Ø" r="zero" /> no es una palabra: significa que <strong style={{ color: "#f8fafc" }}>no escribes nada</strong> antes del sustantivo — ni "a", ni "an", ni "the". Hay 5 casos comunes donde pasa esto:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "8px" }}>
          {ZERO_RULES.map(({ icon, title, why, examples }) => (
            <div key={title} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px", borderLeft: "3px solid #64748b" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px", marginBottom: "5px" }}>{icon} {title}</div>
              <div style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.6, marginBottom: "6px" }}>{why}</div>
              {examples.map(ex => (
                <div key={ex} style={{ color: "#94a3b8", fontSize: "12px", padding: "1px 0" }}>✅ {ex}</div>
              ))}
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>📋 Ejercicio resuelto — A, An or Nothing</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "34px 1fr", gap: "0" }}>
        <div style={{ background: "#0f172a", borderBottom: "2px solid #475569" }} />
        <div style={{ background: "#0f172a", borderBottom: "2px solid #475569", color: "#94a3b8", fontWeight: 800, fontSize: "13px", padding: "9px 12px" }}>
          Oración
        </div>
        {ARTICLE_EXERCISE.map((ex, i) => (
          <>
            <div key={`n${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: i % 2 === 0 ? "#1e293b" : "#172033", color: "#475569", fontSize: "12px", fontWeight: 700 }}>
              {i + 1}
            </div>
            <div key={`s${i}`} style={{ background: i % 2 === 0 ? "#1e293b" : "#172033", padding: "9px 12px" }}>
              <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              <div style={{ color: "#64748b", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {ex.esp}</div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
