import Token from "../../components/Token";
import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import Sentence from "../../components/Sentence";
import SectionTitle from "../../components/SectionTitle";
import {
  TWO_USES, SPELLING_RULES, AS_SUBJECT, VERBS_ING,
  AFTER_PREP, ING_VS_TO, COMMON_MISTAKES, EXERCISE,
} from "./data";

const COLOR = "#f472b6";

export default function GerundsSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>🔄 Gerunds — El uso del -ING</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 El <Token t="-ING" r="ing" /> no solo sirve para decir "estoy haciendo algo". También convierte un verbo en <strong style={{ color: "#f8fafc" }}>sustantivo</strong>: eso se llama <strong style={{ color: "#f8fafc" }}>gerundio</strong>, y en español lo traduces con el verbo en infinitivo — no con "-ando / -iendo".<br />
        🇲🇽 <em>Nadar es bueno para tu salud.</em> → 🇺🇸 <em>Swimming is good for your health.</em>
      </div>
      <Legend roles={["subject", "verb_be", "verb", "ing", "inf", "prep"]} />

      <SectionTitle color={COLOR}>🎬 Los dos usos del -ING</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "10px" }}>
        {TWO_USES.map(({ icon, title, subtitle, example }) => (
          <div key={title} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", borderLeft: `4px solid ${COLOR}` }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{icon} {title}</div>
            <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "8px" }}>{subtitle}</div>
            <div style={{ lineHeight: 2 }}><Sentence pts={example.pts} /></div>
            <div style={{ color: "#64748b", fontSize: "12px", marginTop: "4px" }}>🇲🇽 {example.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="📐" rule="Las dos fórmulas — el mismo -ING con dos trabajos distintos" color={COLOR}>
        <Formula
          label="Presente Progresivo"
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "swimm", r: "verb" }, { t: "ing", r: "ing" }, { t: "right now.", color: "#94a3b8" }]}
        />
        <Formula
          label="Gerundio (verbo como sustantivo)"
          parts={[{ t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "funciona como sustantivo", color: "#e2e8f0" }]}
          example={[{ t: "Swimm", r: "verb" }, { t: "ing", r: "ing" }, { t: "is good for your health.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 La diferencia está en el <strong style={{ color: "#f8fafc" }}>to be</strong>: si hay am / is / are, es progresivo; si el verbo-ING va solo, es gerundio.
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>📐 Cómo se escribe el -ING</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Son las mismas tres reglas de ortografía que ya usaste en el Presente Progresivo — aquí se aplican igual, aunque el verbo-ING funcione como sustantivo.
      </div>
      <RelatedTopic levelId="basico1" topicId="progressive" label="Repasar el Presente Progresivo" />
      {SPELLING_RULES.map(rule => (
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

      <SectionTitle color={COLOR}>🧱 El -ING como sujeto de la oración</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Cuando la actividad es de quien habla la oración, el verbo lleva <Token t="-ING" r="ing" /> y se comporta como sustantivo. 📐 <strong style={{ color: "#f8fafc" }}>verbo-ING + is / are + ...</strong>
      </div>
      {AS_SUBJECT.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>❤️ Después de ciertos verbos</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Hay verbos que, cuando van seguidos de otro verbo, piden que el segundo lleve <Token t="-ING" r="ing" />. No hay que razonarlos: se aprenden por grupos.
      </div>
      {VERBS_ING.map(({ icon, title, verbs, examples }) => (
        <RuleBox key={title} icon={icon} rule={title} color={COLOR}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "10px" }}>
            {verbs.map(v => (
              <span key={v} style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "20px", padding: "3px 10px", color: "#e2e8f0", fontSize: "12px", fontWeight: 700 }}>
                {v} + <span style={{ color: COLOR }}>-ing</span>
              </span>
            ))}
          </div>
          {examples.map((ex, i) => (
            <div key={i} style={{ marginBottom: "6px" }}>
              <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
              <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
            </div>
          ))}
        </RuleBox>
      ))}

      <SectionTitle color={COLOR}>📍 Después de una preposición SIEMPRE va -ING</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "8px" }}>
        Esta es la regla más fácil de recordar: si antes del verbo hay una <Token t="preposición" r="prep" /> (at, in, of, for, without, before, after, instead of...), el verbo que sigue lleva <Token t="-ING" r="ing" />. Nunca "to + verbo".
      </div>
      {AFTER_PREP.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
      <RelatedTopic levelId="basico1" topicId="prepositions" />

      <SectionTitle color={COLOR}>🆚 -ING vs. to + verbo</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
        {[ING_VS_TO.ing, ING_VS_TO.to].map(({ icon, title, subtitle, verbs, examples }) => (
          <div key={title} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{icon} {title}</div>
            <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "8px" }}>{subtitle}</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "8px" }}>
              {verbs.map(v => (
                <span key={v} style={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "20px", padding: "3px 10px", color: "#e2e8f0", fontSize: "12px", fontWeight: 700 }}>{v}</span>
              ))}
            </div>
            {examples.map((ex, i) => (
              <div key={i} style={{ marginBottom: "6px" }}>
                <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
                <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <RuleBox icon="🤝" rule="Verbos que aceptan las dos formas (like, love, start, continue)" color={COLOR}>
        {ING_VS_TO.both.map((ex, i) => (
          <div key={i} style={{ marginBottom: "6px" }}>
            <div style={{ lineHeight: 1.9 }}><Sentence pts={ex.pts} /></div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 {ex.esp}</div>
          </div>
        ))}
      </RuleBox>

      <SectionTitle color={COLOR}>⚠️ Errores típicos</SectionTitle>
      {COMMON_MISTAKES.map((m, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#f87171", fontSize: "14px" }}>❌ {m.wrong}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {m.right}</div>
          <div style={{ color: "#64748b", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {m.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto — completa con -ING o to + verbo</SectionTitle>
      {EXERCISE.map((ex, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "6px" }}>{ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <RuleBox icon="⏰" rule="Bonus — no confundir el gerundio con el Simple Present" color={COLOR}>
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          <Token t="-ING" r="ing" /> nombra la actividad o dice lo que pasa ahora; para hablar de lo que haces <strong style={{ color: "#f8fafc" }}>siempre o todos los días</strong> el verbo va en su forma base (con <Token t="s" r="s3" /> en he / she / it).
        </div>
        <div style={{ color: "#e2e8f0", fontSize: "13px", marginTop: "8px" }}>She is cooking right now. → She cooks every Sunday.</div>
        <div style={{ color: "#64748b", fontSize: "12px" }}>🇲🇽 Ella está cocinando ahora mismo. → Ella cocina todos los domingos.</div>
        <RelatedTopic levelId="basico2" topicId="simplePresent" />
      </RuleBox>
    </div>
  );
}
