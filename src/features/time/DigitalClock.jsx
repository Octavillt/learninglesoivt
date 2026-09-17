import { useState } from "react";
import { timeToDigital } from "./timeToWords";

const StepperButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{
      width: "34px", height: "34px", borderRadius: "8px", border: "none",
      background: "#334155", color: "#f8fafc", fontSize: "16px", fontWeight: 700,
      cursor: "pointer", lineHeight: 1,
    }}
  >
    {children}
  </button>
);

export default function DigitalClock() {
  const [hour, setHour] = useState(3);
  const [minute, setMinute] = useState(39);

  const changeHour = (delta) => setHour((h) => (h + delta + 12) % 12 || 12);
  const changeMinute = (delta) => setMinute((m) => (m + delta + 60) % 60);

  const phrase = timeToDigital(hour, minute);

  return (
    <div style={{ background: "#1e293b", borderRadius: "14px", padding: "18px", marginBottom: "14px", textAlign: "center" }}>
      <div style={{ color: "#94a3b8", fontSize: "12px", fontWeight: 700, marginBottom: "10px" }}>
        🔢 Ajusta la hora y los minutos
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "18px", marginBottom: "12px" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <StepperButton onClick={() => changeHour(1)}>▲</StepperButton>
          <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: "34px", width: "56px" }}>
            {String(hour).padStart(2, "0")}
          </div>
          <StepperButton onClick={() => changeHour(-1)}>▼</StepperButton>
          <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700 }}>HOUR</div>
        </div>

        <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: "34px" }}>:</div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
          <StepperButton onClick={() => changeMinute(5)}>▲</StepperButton>
          <div style={{ color: "#f8fafc", fontWeight: 800, fontSize: "34px", width: "56px" }}>
            {String(minute).padStart(2, "0")}
          </div>
          <StepperButton onClick={() => changeMinute(-5)}>▼</StepperButton>
          <div style={{ color: "#94a3b8", fontSize: "11px", fontWeight: 700 }}>MIN</div>
        </div>
      </div>

      <div style={{ background: "#0f172a", borderRadius: "10px", padding: "12px" }}>
        <div style={{ color: "#f8fafc", fontWeight: 700, fontSize: "17px" }}>{phrase}</div>
      </div>
    </div>
  );
}
