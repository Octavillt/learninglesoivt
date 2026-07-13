import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";
import { CLOCK_PAST, CLOCK_TO, TIME_EXAMPLES, TIME_DIGITAL } from "./data";

export default function TimeSection() {
  return (
    <div>
      <h2 style={{ color: "#38bdf8", marginTop: 0 }}>🕐 What time is it?</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En inglés, para decir la hora primero se dicen los <strong style={{ color: "#f8fafc" }}>minutos</strong> y después la <strong style={{ color: "#f8fafc" }}>hora</strong>: <strong style={{ color: "#38bdf8" }}>PAST</strong> = después de la hora en punto (minutos 1–30), <strong style={{ color: "#fb923c" }}>TO</strong> = antes de la siguiente hora (minutos 31–59).
      </div>

      <RuleBox icon="🔁" rule="Orden para leer la hora" color="#94a3b8">
        <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "6px", flexWrap: "wrap" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
            <div style={{ color: "#475569", fontSize: "11px", fontWeight: 700, marginBottom: "3px" }}>1º</div>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "14px" }}>minutes</div>
          </div>
          <span style={{ color: "#475569", fontSize: "18px" }}>→</span>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 16px", textAlign: "center" }}>
            <div style={{ color: "#475569", fontSize: "11px", fontWeight: 700, marginBottom: "3px" }}>2º</div>
            <div style={{ color: "#e2e8f0", fontWeight: 800, fontSize: "14px" }}>hour</div>
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "10px" }}>
          Ej: 3:25 → primero "twenty-five", después "three" → <strong style={{ color: "#e2e8f0" }}>it's twenty-five past three</strong>
          <div style={{ marginTop: "2px" }}>🇲🇽 son las tres y veinticinco</div>
        </div>
      </RuleBox>

      <SectionTitle color="#38bdf8">⏱️ PAST — de la hora en punto a la media (minuto 1-30)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "10px" }}>
        {CLOCK_PAST.map(({ min, label }) => (
          <div key={min} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "4px 8px" }}>
            <span style={{ color: "#38bdf8", fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>:{String(min).padStart(2, "0")}</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px", textAlign: "right" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>
        A las 12 en punto no se usa "zero past" — se dice <strong style={{ color: "#e2e8f0" }}>o'clock</strong>.
        <div style={{ marginTop: "2px" }}>🇲🇽 "o'clock" significa "en punto"</div>
      </div>

      <SectionTitle color="#fb923c">⏱️ TO — de la media a la siguiente hora (minuto 31-59)</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "6px", marginBottom: "10px" }}>
        {CLOCK_TO.map(({ min, label }) => (
          <div key={min} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "4px 8px" }}>
            <span style={{ color: "#fb923c", fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>:{String(60 - min).padStart(2, "0")}</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px", textAlign: "right" }}>{label}</span>
          </div>
        ))}
      </div>
      <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "16px" }}>
        "TO" cuenta los minutos que <strong style={{ color: "#e2e8f0" }}>faltan</strong> para la siguiente hora. Ej: 9:50 → faltan 10 → <strong style={{ color: "#e2e8f0" }}>ten to ten</strong>.
        <div style={{ marginTop: "2px" }}>🇲🇽 son diez para las diez</div>
      </div>

      <RuleBox icon="🕐" rule="Casos especiales" color="#c084fc">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:00</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>o'clock</span>
            <span style={{ color: "#64748b", fontSize: "11px" }}>🇲🇽 en punto</span>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:15</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>a quarter past</span>
            <span style={{ color: "#64748b", fontSize: "11px" }}>🇲🇽 y cuarto</span>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:30</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>half past</span>
            <span style={{ color: "#64748b", fontSize: "11px" }}>🇲🇽 y media</span>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#c084fc", fontWeight: 800, fontSize: "13px" }}>:45</span>
            <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "13px" }}>a quarter to</span>
            <span style={{ color: "#64748b", fontSize: "11px" }}>🇲🇽 menos cuarto</span>
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: "12px", marginTop: "8px" }}>
          No se dice "fifteen past/to" ni "thirty past" — siempre "a quarter" y "half".
        </div>
      </RuleBox>

      <SectionTitle color="#34d399">📋 Ejemplos — reloj (analog time)</SectionTitle>
      {TIME_EXAMPLES.map((ex, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#475569", fontWeight: 800, fontSize: "14px", background: "#0f172a", borderRadius: "6px", padding: "2px 8px" }}>{ex.time}</span>
            <span style={{ color: "#475569" }}>→</span>
            <span style={{ color: "#f8fafc", fontWeight: 600, fontSize: "15px" }}>
              {ex.phrase[0]}<strong style={{ color: "#38bdf8" }}>{ex.phrase[1]}</strong>{ex.phrase[2]}
            </span>
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color="#94a3b8">🔢 Forma digital (directa)</SectionTitle>
      {TIME_DIGITAL.map((ex, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <span style={{ color: "#475569", fontWeight: 800, fontSize: "14px", background: "#0f172a", borderRadius: "6px", padding: "2px 8px" }}>{ex.time}</span>
            <span style={{ color: "#475569" }}>→</span>
            <span style={{ color: "#f8fafc", fontWeight: 600, fontSize: "15px" }}>{ex.phrase}</span>
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {ex.esp}</div>
        </div>
      ))}

      <SectionTitle color="#38bdf8">🕹️ Práctica interactiva</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "6px" }}>
        <AnalogClock />
        <DigitalClock />
      </div>
    </div>
  );
}
