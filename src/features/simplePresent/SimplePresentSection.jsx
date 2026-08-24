import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  SP_USES, SP_AFF, THIRD_PERSON_RULES, SP_NEG, SP_INT, SP_WH,
  FREQUENCY_ADVERBS, FREQUENCY_EXAMPLES, SP_VS_PROG, COMMON_MISTAKES, EXERCISE,
} from "./data";

const COLOR = "#38bdf8";

const CONJUGATIONS = [
  { subj: "I / You / We / They", form: "verbo", esp: "sin cambios — work, eat, live", color: "#4ade80" },
  { subj: "He / She / It",       form: "verbo + s", esp: "works, eats, lives",        color: "#f472b6" },
];

function QaCard({ q, a, esp }) {
  return (
    <div style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
      <div style={{ lineHeight: 2 }}><Sentence pts={q} /></div>
      <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
      <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
    </div>
  );
}

export default function SimplePresentSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>⏰ Simple Present — Presente Simple</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Es el tiempo de lo que haces <strong style={{ color: "#f8fafc" }}>siempre, todos los días o en general</strong> — no de lo que estás haciendo justo ahora. Tiene dos particularidades: con <Token t="he / she / it" r="subject" /> el verbo lleva <Token t="s" r="s3" />, y para negar o preguntar aparece el auxiliar <Token t="do" r="aux" /> / <Token t="does" r="aux" />.<br />
        🇲🇽 <em>Ella trabaja aquí.</em> → 🇺🇸 <em>She works here.</em>
      </div>
      <Legend roles={["subject", "verb", "s3", "aux", "neg", "wh"]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "18px" }}>
        {CONJUGATIONS.map(r => (
          <div key={r.subj} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px" }}>{r.subj}</div>
            <div style={{ fontSize: "24px", fontWeight: 900, color: r.color, margin: "6px 0" }}>{r.form}</div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>{r.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>🎬 ¿Cuándo se usa?</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "10px" }}>
        {SP_USES.map(({ icon, title, subtitle, example }) => (
          <div key={title} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", borderLeft: `4px solid ${COLOR}` }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{icon} {title}</div>
            <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "8px" }}>{subtitle}</div>
            <div style={{ lineHeight: 2 }}><Sentence pts={example.pts} /></div>
            <div style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {example.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="✅" rule="Afirmativo — el verbo va tal cual (menos con he / she / it)" color="#34d399">
        <Formula
          label="I / You / We / They"
          parts={[{ t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "They", r: "subject" }, { t: "work", r: "verb" }, { t: "here.", color: "#94a3b8" }]}
        />
        <Formula
          label="He / She / It"
          parts={[{ t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "s", r: "s3" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "work", r: "verb" }, { t: "s", r: "s3" }, { t: "here.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 En español el verbo cambia con cada persona (trabajo, trabajas, trabaja...). En inglés solo cambia una vez: la <strong style={{ color: "#f472b6" }}>-s</strong> de he / she / it.
        </div>
      </RuleBox>
      {SP_AFF.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>📐 Cómo se escribe la -s de he / she / it</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Son las mismas reglas de ortografía que ya usas para formar el plural de los sustantivos — solo que aquí se aplican al verbo.
      </div>
      <RelatedTopic levelId="basico1" topicId="plural" label="Repasar las reglas del plural" />
      {THIRD_PERSON_RULES.map(rule => (
        <div key={rule.rule} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "10px", borderLeft: `4px solid ${rule.color}` }}>
          <div style={{ fontWeight: 700, color: rule.color, marginBottom: "4px", fontSize: "14px" }}>{rule.rule}</div>
          <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "10px" }}>{rule.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rule.words.map(([base, suf, orig]) => (
              <div key={base + suf} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {orig && <div style={{ color: "#475569", fontSize: "11px", marginBottom: "2px" }}>{orig} →</div>}
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "16px" }}>{base}</span>
                <span style={{ color: "#f472b6", fontWeight: 800, background: "#3b0764", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }}>{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <SectionTitle color={COLOR}>❌ Negativo</SectionTitle>
      <RuleBox icon="❌" rule="Negativo — aparece el auxiliar do / does + not" color="#f87171">
        <Formula
          label="I / You / We / They"
          parts={[{ t: "Sujeto", r: "subject" }, { t: "do", r: "aux" }, { t: "not", r: "neg" }, { t: "verbo", r: "verb" }]}
          example={[{ t: "I", r: "subject" }, { t: "do", r: "aux" }, { t: "not", r: "neg" }, { t: "work", r: "verb" }, { t: "here.", color: "#94a3b8" }]}
        />
        <Formula
          label="He / She / It"
          parts={[{ t: "Sujeto", r: "subject" }, { t: "does", r: "aux" }, { t: "not", r: "neg" }, { t: "verbo", r: "verb" }]}
          example={[{ t: "She", r: "subject" }, { t: "does", r: "aux" }, { t: "not", r: "neg" }, { t: "work", r: "verb" }, { t: "here.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>do not = don&apos;t</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>does not = doesn&apos;t</strong>
        </div>
      </RuleBox>
      <RuleBox icon="⚠️" rule="La trampa más común: doesn't + verbo SIN -s" color="#fbbf24">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          La <Token t="s" r="s3" /> de la tercera persona ya se la quedó el auxiliar (<Token t="does" r="aux" />), así que el verbo vuelve a su forma base. Solo se pone una vez.
        </div>
        <div style={{ color: "#f87171", fontSize: "14px", marginTop: "8px" }}>❌ She doesn&apos;t works here.</div>
        <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ She doesn&apos;t work here.</div>
      </RuleBox>
      {SP_NEG.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>❓ Interrogativo</SectionTitle>
      <RuleBox icon="❓" rule="Interrogativo — Do / Does va AL INICIO" color="#60a5fa">
        <Formula
          parts={[{ t: "Do / Does", r: "aux" }, { t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Does", r: "aux" }, { t: "she", r: "subject" }, { t: "work", r: "verb" }, { t: "here?", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 <strong style={{ color: "#a78bfa" }}>Does</strong> solo con he / she / it; <strong style={{ color: "#a78bfa" }}>Do</strong> con todos los demás. Igual que en el negativo, el verbo va sin -s.
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "6px" }}>🇲🇽 ¿Ella trabaja aquí?</div>
      </RuleBox>
      {SP_INT.map((ex, i) => <QaCard key={i} q={ex.q} a={ex.a} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🔎 WH Questions con do / does</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Si quieres pedir información (no un sí/no), la palabra <Token t="WH" r="wh" /> se pone antes del auxiliar y todo lo demás se queda igual. 📐 <strong style={{ color: "#f8fafc" }}>WH word + do/does + sujeto + verbo?</strong>
      </div>
      {SP_WH.map((ex, i) => <QaCard key={i} q={ex.q} a={ex.a} esp={ex.esp} />)}
      <RelatedTopic levelId="basico2" topicId="whQuestions" />

      <SectionTitle color={COLOR}>🔁 Adverbios de frecuencia</SectionTitle>
      <RuleBox icon="📍" rule="Van ANTES del verbo principal (pero después de am / is / are)" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "8px", marginBottom: "10px" }}>
          {FREQUENCY_ADVERBS.map(([word, esp, pct]) => (
            <div key={word} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 12px" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{word}</div>
              <div style={{ color: "#64748b", fontSize: "12px" }}>{esp}</div>
              <div style={{ color: COLOR, fontSize: "11px", fontWeight: 700, marginTop: "2px" }}>{pct}</div>
            </div>
          ))}
        </div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ She <strong>always</strong> drinks coffee.</div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ She is <strong>always</strong> late.</div>
        <div style={{ color: "#f87171", fontSize: "13px" }}>❌ She drinks always coffee.</div>
      </RuleBox>
      {FREQUENCY_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🆚 Simple Present vs. Present Progressive</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
        {SP_VS_PROG.map(({ icon, title, subtitle, when, markers, example }) => (
          <div key={title} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{icon} {title}</div>
            <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "8px" }}>{subtitle}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", lineHeight: 1.7, marginBottom: "8px" }}>{when}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "8px" }}>
              {markers.map(m => (
                <span key={m} style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "20px", padding: "3px 10px", color: "#e2e8f0", fontSize: "12px", fontWeight: 700 }}>{m}</span>
              ))}
            </div>
            <div style={{ lineHeight: 2 }}><Sentence pts={example.pts} /></div>
            <div style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {example.esp}</div>
          </div>
        ))}
      </div>
      <RelatedTopic levelId="basico1" topicId="progressive" label="Repasar el Presente Progresivo" />

      <SectionTitle color={COLOR}>⚠️ Errores típicos</SectionTitle>
      {COMMON_MISTAKES.map((m, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#f87171", fontSize: "14px" }}>❌ {m.wrong}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {m.right}</div>
          <div style={{ color: "#64748b", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {m.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto — afirmativo, negativo e interrogativo</SectionTitle>
      {EXERCISE.map((ex, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "6px" }}>{ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
    </div>
  );
}
