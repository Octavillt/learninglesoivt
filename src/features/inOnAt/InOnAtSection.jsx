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
  ZOOM, TIME_USES, TIME_EXAMPLES, SAME_WORD, PLACE_USES, TRANSPORT_NOTE,
  FIXED, MISTAKES, EXERCISE, HOW_OFTEN, FREQUENCY_WORDS, EVERY_WORDS, FREQUENCY_EXAMPLES,
  AT, ON, IN,
} from "./data";

const COLOR = "#fb923c";

function PrepCard({ prep, icon, color, tagline, idea, children }) {
  return (
    <div style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px", borderLeft: `4px solid ${color}` }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "22px", fontWeight: 900, color }}>{icon} {prep}</span>
        <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{tagline}</span>
      </div>
      <div style={{ color: "#94a3b8", fontSize: "13px", margin: "4px 0 10px", lineHeight: 1.7 }}>{idea}</div>
      {children}
    </div>
  );
}

function Chip({ text, color }) {
  return (
    <span style={{ background: "var(--surface-deep, #0f172a)", border: `1px solid ${color}44`, borderRadius: "20px", padding: "4px 11px", color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>
      {text}
    </span>
  );
}

export default function InOnAtSection() {
  return (
    <div>
      <TopicHeading topicId="inOnAt" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En español casi todo se dice con <strong style={{ color: "#f8fafc" }}>&quot;en&quot;</strong>: en la mañana, en lunes, en 1995, en la mesa. El inglés reparte ese mismo &quot;en&quot; entre tres preposiciones —{" "}
        <Token t="at" r="prep" />, <Token t="on" r="prep" /> e <Token t="in" r="prep" /> — y la que elijas depende de{" "}
        <strong style={{ color: "#f8fafc" }}>qué tan específico eres</strong>.<br />
        🇲🇽 <em>Estudio inglés en la mañana.</em> → 🇺🇸 <em>I study English in the morning.</em>
      </div>
      <Legend roles={["subject", "verb", "prep", "wh", "aux"]} />

      <RuleBox icon="🔍" rule="Primera orientación: hora, día y periodo" color={COLOR}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "8px" }}>
          {ZOOM.map(z => (
            <div key={z.prep} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "10px", padding: "12px", textAlign: "center", border: `1px solid ${z.color}33` }}>
              <div style={{ fontSize: "20px" }}>{z.icon}</div>
              <div style={{ fontSize: "22px", fontWeight: 900, color: z.color, margin: "2px 0" }}>{z.prep}</div>
              <div style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 700 }}>{z.size}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px" }}>{z.esp}</div>
              <div style={{ color: z.color, fontSize: "12px", fontWeight: 700, marginTop: "4px" }}>{z.sample}</div>
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px" }}>
          💡 Usa esta guía para empezar; después revisa las expresiones fijas. <strong style={{ color: AT }}>AT</strong> = una hora,{" "}
          <strong style={{ color: ON }}>ON</strong> = un día, <strong style={{ color: IN }}>IN</strong> = un mes o más.
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🕐 Expresiones de tiempo</SectionTitle>
      {TIME_USES.map(u => (
        <PrepCard key={u.prep} prep={u.prep} icon={u.icon} color={u.color} tagline={u.tagline} idea={u.idea}>
          {u.groups.map(g => (
            <div key={g.title} style={{ marginBottom: "8px" }}>
              <div style={{ color: u.color, fontSize: "12px", fontWeight: 700, marginBottom: "5px" }}>{g.title}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {g.items.map(item => <Chip key={item} text={item} color={u.color} />)}
              </div>
            </div>
          ))}
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #334155", lineHeight: 1.7 }}>
            ⚠️ {u.note}
          </div>
        </PrepCard>
      ))}

      <SectionTitle color={COLOR}>📐 Dónde va la expresión de tiempo</SectionTitle>
      <Formula
        label="Orden normal de la oración"
        parts={[{ t: "Sujeto", r: "subject" }, { t: "Verbo", r: "verb" }, { t: "Complemento", color: "#e2e8f0" }, { t: "Expresión de tiempo", r: "prep" }]}
        example={[{ t: "You", r: "subject" }, { t: "watch", r: "verb" }, { t: "TV", color: "#94a3b8" }, { t: "at night", r: "prep" }]}
      />
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        También la puedes mandar al inicio si quieres darle énfasis, separándola con coma: <em style={{ color: "#e2e8f0" }}>In the morning, I study English.</em>
      </div>
      {TIME_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🔄 La misma palabra con las tres preposiciones</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Aquí es donde se ve claro que no se trata de memorizar palabras sueltas, sino de qué tan preciso estás siendo.
      </div>
      {SAME_WORD.map(block => (
        <div key={block.word} style={{ background: "var(--surface, #1e293b)", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px" }}>
          <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px", marginBottom: "8px" }}>{block.word}</div>
          {block.rows.map(r => (
            <div key={r.phrase} style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", padding: "6px 0", borderTop: "1px solid #334155" }}>
              <span style={{ color: r.color, fontWeight: 900, fontSize: "14px", minWidth: "28px" }}>{r.prep}</span>
              <span style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{r.phrase}</span>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>🇲🇽 {r.esp}</span>
            </div>
          ))}
        </div>
      ))}

      <SectionTitle color={COLOR}>🗺️ Las mismas tres, pero para lugares</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        La lógica se repite: <strong style={{ color: AT }}>AT</strong> es un punto, <strong style={{ color: ON }}>ON</strong> es una superficie y{" "}
        <strong style={{ color: IN }}>IN</strong> indica el interior de un espacio o los límites de una zona.
      </div>
      {PLACE_USES.map(u => (
        <PrepCard key={u.prep} prep={u.prep} icon={u.icon} color={u.color} tagline={u.tagline} idea={u.idea}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {u.items.map(item => <Chip key={item} text={item} color={u.color} />)}
          </div>
        </PrepCard>
      ))}
      <RuleBox icon="🚌" rule="El detalle del transporte" color="#fbbf24">
        {TRANSPORT_NOTE.map(t => (
          <div key={t.right} style={{ marginBottom: "6px" }}>
            <div style={{ color: "#4ade80", fontSize: "14px", fontWeight: 700 }}>✅ {t.right}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{t.esp}</div>
          </div>
        ))}
      </RuleBox>
      <RelatedTopic levelId="basico1" topicId="prepositions" label="Repasar las preposiciones de lugar" />

      <SectionTitle color={COLOR}>📌 Expresiones fijas — estas se memorizan</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Aprende estas expresiones como unidades. El sentido puede cambiar con la preposición: on time y in time no significan exactamente lo mismo.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "8px", marginBottom: "10px" }}>
        {FIXED.map(f => (
          <div key={f.phrase} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 12px" }}>
            <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{f.phrase}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{f.esp}</div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>🔁 ¿Cada cuánto? — How often</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8, marginBottom: "10px" }}>
        Para preguntar la frecuencia se usa <Token t="How often" r="wh" /> + <Token t="do / does" r="aux" /> + sujeto + verbo. Una forma de responder usa{" "}
        <strong style={{ color: "#f8fafc" }}>una cantidad de veces + a + periodo</strong>.
      </div>
      {HOW_OFTEN.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.q} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "2px" }}>→ {ex.a}</div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
      <Formula
        label="Cómo se arma la respuesta"
        parts={[{ t: "Once / Twice / Three times", color: "#e2e8f0" }, { t: "a", r: "art" }, { t: "day / week / month / year", color: "#e2e8f0" }]}
        example={[{ t: "I", r: "subject" }, { t: "take", r: "verb" }, { t: "the taxi once a year.", color: "#94a3b8" }]}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {FREQUENCY_WORDS.map(f => (
          <div key={f.word} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "10px 14px" }}>
            <div style={{ color: COLOR, fontWeight: 800, fontSize: "14px" }}>{f.word}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px" }}>{f.esp}</div>
          </div>
        ))}
      </div>
      <RuleBox icon="🔂" rule="EVERY — sin preposición, pegado directo al periodo" color="#4ade80">
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "8px" }}>
          {EVERY_WORDS.map(w => <Chip key={w} text={w} color="#4ade80" />)}
        </div>
        <div style={{ color: "#f87171", fontSize: "13px" }}>❌ He brushes his teeth <strong>in</strong> every day.</div>
        <div style={{ color: "#4ade80", fontSize: "13px" }}>✅ He brushes his teeth every day.</div>
      </RuleBox>
      {FREQUENCY_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}
      <RelatedTopic levelId="basico3" topicId="simplePresentAdvanced" label="Repasar los adverbios de frecuencia" />

      <SectionTitle color={COLOR}>⚠️ Errores típicos</SectionTitle>
      {MISTAKES.map((m, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#f87171", fontSize: "14px" }}>❌ {m.wrong}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {m.right}</div>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {m.esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto — completa con in, on o at</SectionTitle>
      {EXERCISE.map((ex, i) => (
        <div key={i} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{ex.q}</div>
          <div style={{ lineHeight: 2 }}><Sentence pts={ex.pts} /></div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}
    </div>
  );
}
