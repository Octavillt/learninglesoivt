import TopicHeading from "../../components/TopicHeading";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { DAYS, WEEKEND, MONTHS, ORDINALS, DATE_EXAMPLES, SEASONS } from "./data";

export default function DatesSection() {
  return (
    <div>
      <TopicHeading topicId="dates" />
      <div style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Los días de la semana y los meses <strong style={{ color: "#f8fafc" }}>siempre se escriben con mayúscula</strong> en inglés. Al decir el día del mes se usa un <strong style={{ color: "#f8fafc" }}>ordinal</strong> (first, second, third...). Por escrito también es habitual July 4. Aquí los ejemplos numéricos siguen el formato de Estados Unidos: mes/día.
      </div>

      <SectionTitle color="#22d3ee">📆 Days of the week</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))", gap: "6px", marginBottom: "10px" }}>
        {DAYS.map(([en, es]) => (
          <div key={en} style={{
            background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px",
            display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px",
            borderLeft: `3px solid ${WEEKEND.includes(en) ? "#f472b6" : "#22d3ee"}`,
          }}>
            <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "13px" }}>{en}</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}>{es}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "14px", fontSize: "12px", marginBottom: "16px" }}>
        <span style={{ color: "#22d3ee", fontWeight: 700 }}>■ Weekdays (entre semana)</span>
        <span style={{ color: "#f472b6", fontWeight: 700 }}>■ Weekend (fin de semana)</span>
      </div>

      <SectionTitle color="#fbbf24">🗓️ Months of the year</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {MONTHS.map(([en, es], i) => (
          <div key={en} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px", minWidth: 0 }}>
            <span style={{ color: "#fbbf24", fontWeight: 800, fontSize: "12px", minWidth: "16px", flexShrink: 0 }}>{i + 1}</span>
            <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "12px", flex: 1, textAlign: "left", whiteSpace: "nowrap" }}>{en}</span>
            <span style={{ color: "#94a3b8", fontSize: "11px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "70px" }}>{es}</span>
          </div>
        ))}
      </div>

      <RuleBox icon="🔢" rule="Números ordinales — para decir el día del mes" color="#c084fc">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 125px), 1fr))", gap: "6px", marginTop: "6px" }}>
          {ORDINALS.map(([n, short, word]) => (
            <div key={n} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "6px 10px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "12px" }}>{short}</span>
              <span style={{ color: "#e2e8f0", fontSize: "12px" }}>{word}</span>
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "10px" }}>
          Patrón: 1→<strong style={{ color: "#e2e8f0" }}>st</strong>, 2→<strong style={{ color: "#e2e8f0" }}>nd</strong>, 3→<strong style={{ color: "#e2e8f0" }}>rd</strong>, el resto→<strong style={{ color: "#e2e8f0" }}>th</strong> (11th, 12th y 13th siempre llevan th). Observa la última cifra: 21st, 22nd, 23rd.
        </div>
      </RuleBox>

      <SectionTitle color="#34d399">📋 Ejemplos — cómo decir una fecha</SectionTitle>
      {DATE_EXAMPLES.map((ex) => (
        <div key={ex.date} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#94a3b8", fontWeight: 800, fontSize: "14px", background: "var(--surface-deep, #0f172a)", borderRadius: "6px", padding: "2px 8px" }}>{ex.date}</span>
            <span style={{ color: "#94a3b8" }}>→</span>
            <span style={{ color: "#f8fafc", fontWeight: 700, fontSize: "15px" }}>{ex.phrase}</span>
          </div>
          <div style={{ color: "#94a3b8", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color="#fb923c">🍂 Estaciones — Seasons (hemisferio norte)</SectionTitle>
      <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, marginBottom: "10px" }}>Estos meses son una referencia del hemisferio norte. En el hemisferio sur las estaciones se invierten. Los nombres de las estaciones se escriben normalmente con minúscula dentro de una oración.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
        {SEASONS.map(([en, es, months]) => (
          <div key={en} style={{ background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 14px" }}>
            <div style={{ color: "#fb923c", fontWeight: 800, fontSize: "13px" }}>{en}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "6px" }}>{es}</div>
            <div style={{ color: "#e2e8f0", fontSize: "11px" }}>{months.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
