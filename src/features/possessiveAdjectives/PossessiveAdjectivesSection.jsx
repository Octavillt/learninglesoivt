import { Fragment } from "react";
import TopicHeading from "../../components/TopicHeading";
import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  PRONOUN_TO_POSSESSIVE, EXAMPLE_SENTENCES, POSSESSIVE_EXERCISE,
  POSSESSIVE_PRONOUNS, PRONOUN_CONTRAST, ITS_VS_ITS,
} from "./data";

const COLOR = "#e879f9";

export default function PossessiveAdjectivesSection() {
  return (
    <div>
      <TopicHeading topicId="possessiveAdjectives" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los <Token t="Possessive Adjectives" r="poss" /> se colocan <strong style={{ color: "#f8fafc" }}>antes de un sustantivo</strong> para mostrar de quién es algo: <Token t="my" r="poss" />, <Token t="your" r="poss" />, <Token t="his" r="poss" />, <Token t="her" r="poss" />, <Token t="its" r="poss" />, <Token t="our" r="poss" />, <Token t="their" r="poss" />.
      </div>
      <Legend roles={["poss", "subject"]} />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: "8px", marginBottom: "18px" }}>
        {PRONOUN_TO_POSSESSIVE.map((r, i) => (
          <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px" }}>{r.subj}</div>
            <div style={{ fontSize: "22px", fontWeight: 900, color: r.color, margin: "4px 0" }}>{r.form}</div>
            <div style={{ color: "#94a3b8", fontSize: "11px" }}>{r.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="📐" rule="Fórmula — nunca cambia, sin importar el sustantivo" color={COLOR}>
        <Formula
          parts={[{ t: "Possessive Adjective", r: "poss" }, { t: "Sustantivo", color: "#e2e8f0" }]}
          example={[{ t: "her", r: "poss" }, { t: "books", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>
          💡 A diferencia de otros adjetivos en inglés, estos <strong style={{ color: "#f8fafc" }}>acompañan a un sustantivo, aunque haya un adjetivo entre ambos: my new book</strong> — nunca solos.
        </div>
        <RelatedTopic levelId="basico2" topicId="articles" label="¿Qué es un sustantivo?" />
      </RuleBox>

      <SectionTitle color={COLOR}>📝 Ejemplos</SectionTitle>
      {EXAMPLE_SENTENCES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto</SectionTitle>
      {POSSESSIVE_EXERCISE.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🪞 Possessive Pronouns — cuando el sustantivo ya no hace falta</SectionTitle>
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un <Token t="Possessive Pronoun" r="poss" /> significa lo mismo que "possessive adjective + sustantivo", pero <strong style={{ color: "#f8fafc" }}>reemplaza al sustantivo por completo</strong> para no repetirlo. Por eso nunca va seguido de un sustantivo — puede ir al final (This is mine) o como sujeto (Mine is blue).
      </div>

      <div style={{ overflowX: "auto", marginBottom: "14px" }}>
        <div style={{ minWidth: "480px", display: "grid", gridTemplateColumns: "0.8fr 1fr 1fr 1.3fr", gap: "6px" }}>
          {["Pronombre", "Possessive Adjective", "Possessive Pronoun", "Español"].map(h => (
            <div key={h} style={{ background: "var(--surface-deep, #0f172a)", borderBottom: "2px solid #475569", color: "#94a3b8", fontWeight: 800, fontSize: "12px", padding: "8px 10px" }}>{h}</div>
          ))}
          {POSSESSIVE_PRONOUNS.map((r, i) => (
            <Fragment key={i}>
              <div key={`s${i}`} style={{ padding: "8px 10px", background: i % 2 === 0 ? "#1e293b" : "#172033", color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{r.subj}</div>
              <div key={`a${i}`} style={{ padding: "8px 10px", background: i % 2 === 0 ? "#1e293b" : "#172033", color: r.color, fontWeight: 700, fontSize: "13px" }}>{r.adj}</div>
              <div key={`p${i}`} style={{ padding: "8px 10px", background: i % 2 === 0 ? "#1e293b" : "#172033", color: r.color, fontWeight: 900, fontSize: "13px" }}>{r.pron}</div>
              <div key={`e${i}`} style={{ padding: "8px 10px", background: i % 2 === 0 ? "#1e293b" : "#172033", color: "#94a3b8", fontSize: "12px" }}>{r.esp}</div>
            </Fragment>
          ))}
        </div>
      </div>

      <RuleBox icon="📐" rule="Fórmula — SIN sustantivo después" color={COLOR}>
        <Formula
          parts={[{ t: "Possessive Pronoun", r: "poss" }, { t: "(nada más)", color: "#94a3b8" }]}
          example={[{ t: "This book is", color: "#94a3b8" }, { t: "mine", r: "poss" }, { t: ".", color: "#94a3b8" }]}
        />
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 Este libro es mío.</div>
      </RuleBox>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "14px" }}>
        {PRONOUN_CONTRAST.map((ex, i) => (
          <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px" }}>
            <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.before} /></div>
            <div style={{ color: "#94a3b8", fontSize: "12px", margin: "2px 0" }}>↓</div>
            <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.after} /></div>
            <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="⚠️" rule={`Cuidado — "its" vs "it's" (el error más común)`} color="#f87171">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
          {ITS_VS_ITS.map(({ form, why, examples }) => (
            <div key={form} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "12px" }}>
              <div style={{ color: form === "its" ? COLOR : "#f87171", fontWeight: 900, fontSize: "18px" }}>{form}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>{why}</div>
              {examples.map((ex, i) => (
                <div key={i} style={{ marginBottom: "6px" }}>
                  <div style={{ color: "#e2e8f0", fontSize: "13px" }}><Sentence pts={ex.pts} /></div>
                  <div style={{ color: "#94a3b8", fontSize: "11px" }}>🇲🇽 {ex.esp}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px" }}>
          💡 Truco: si puedes reemplazarlo por "it is" o "it has", lleva apóstrofe (it's). Si no, no lo lleva (its).
        </div>
      </RuleBox>

      <RuleBox icon="🔑" rule="Bonus — no confundir con Whose" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <Token t="Whose" r="wh" /> pregunta de quién es algo; puedes responder con un nombre y <Token t="'s" r="gen" /> (It is Ana’s), un pronombre (It is mine) o un posesivo con sustantivo (It is my backpack).
        </div>
        <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "8px" }}>Whose is that backpack? → It's Israel's.</div>
        <div style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 ¿De quién es esa mochila? → Es de Israel.</div>
        <RelatedTopic levelId="basico2" topicId="possessiveNouns" />
      </RuleBox>
    </div>
  );
}
