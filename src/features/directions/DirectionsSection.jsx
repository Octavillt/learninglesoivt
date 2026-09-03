import ExampleCard from "../../components/ExampleCard";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import {
  ASKING_DIRECTIONS,
  DIRECTION_PHRASES,
  EXAMPLES,
  MISTAKES,
  PLACE_PHRASES,
  PRACTICE,
  ROUTES,
} from "./data";

const COLOR = "#14b8a6";

function CityMap() {
  const places = [
    ["🚌", "Bus stop", 8, 78],
    ["🏥", "Hospital", 8, 13],
    ["☕", "Coffee shop", 43, 30],
    ["🏢", "Apartments", 43, 62],
    ["🏫", "High school", 76, 13],
    ["🏋️", "Gym", 76, 62],
  ];

  return (
    <div style={{ position: "relative", height: "270px", borderRadius: "14px", overflow: "hidden", background: "#dbeafe", border: "3px solid #334155", marginBottom: "10px" }} role="img" aria-label="Mapa de práctica con calles y lugares">
      <div style={{ position: "absolute", inset: "0 31%", background: "#94a3b8", borderLeft: "4px dashed #f8fafc", borderRight: "4px dashed #f8fafc" }} />
      <div style={{ position: "absolute", inset: "37% 0", background: "#94a3b8", borderTop: "4px dashed #f8fafc", borderBottom: "4px dashed #f8fafc" }} />
      <div style={{ position: "absolute", top: "4px", left: "50%", transform: "translateX(-50%)", color: "#334155", fontSize: "11px", fontWeight: 800 }}>River Street ↕</div>
      <div style={{ position: "absolute", top: "50%", left: "4px", transform: "translateY(-50%)", color: "#334155", fontSize: "11px", fontWeight: 800 }}>Main Street →</div>
      {places.map(([icon, name, left, top]) => (
        <div key={name} style={{ position: "absolute", left: `${left}%`, top: `${top}%`, transform: "translateY(-50%)", width: "20%", minWidth: "74px", padding: "7px 5px", borderRadius: "9px", background: "#0f172a", color: "#f8fafc", textAlign: "center", boxShadow: "0 3px 8px #0f172a44" }}>
          <div style={{ fontSize: "20px" }}>{icon}</div>
          <div style={{ fontSize: "10px", fontWeight: 800 }}>{name}</div>
        </div>
      ))}
    </div>
  );
}

export default function DirectionsSection() {
  return (
    <div>
      <h2 style={{ color: COLOR, marginTop: 0 }}>🗺️ Giving Directions — Dar indicaciones</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Para dar indicaciones usamos el verbo en forma base: <strong style={{ color: "#f8fafc" }}>go, turn, take</strong>. No hace falta agregar un sujeto: estas instrucciones son imperativos.<br />
        🇲🇽 <em>Sigue derecho y da vuelta a la izquierda.</em> → 🇺🇸 <em>Go straight ahead and turn left.</em>
      </div>
      <Legend roles={["subject", "verb", "prep", "wh", "aux"]} />

      <RuleBox icon="📐" rule="Fórmula para dar una indicación" color={COLOR}>
        <Formula
          parts={[{ t: "Verbo base", r: "verb" }, { t: "dirección", r: "prep" }, { t: "lugar / referencia", color: "#e2e8f0" }]}
          example={[{ t: "Turn", r: "verb" }, { t: "right", r: "prep" }, { t: "on Park Avenue.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 Da vuelta a la derecha en Park Avenue.</div>
      </RuleBox>

      <SectionTitle color={COLOR}>🧭 Movimientos esenciales</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {DIRECTION_PHRASES.map(item => (
          <div key={item.phrase} style={{ display: "flex", gap: "10px", alignItems: "center", background: "#1e293b", borderRadius: "10px", padding: "11px 12px", borderLeft: `3px solid ${COLOR}` }}>
            <span style={{ fontSize: "25px", minWidth: "34px", textAlign: "center" }}>{item.icon}</span>
            <div>
              <div style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 800 }}>{item.phrase}</div>
              <div style={{ color: "#64748b", fontSize: "12px", marginTop: "2px" }}>{item.esp}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📍 Para ubicar el destino</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {PLACE_PHRASES.map(item => (
          <div key={item.phrase} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: "20px", padding: "7px 12px" }}>
            <span style={{ color: COLOR, fontWeight: 800, fontSize: "13px" }}>{item.phrase}</span>
            <span style={{ color: "#64748b", fontSize: "12px" }}> · {item.esp}</span>
          </div>
        ))}
      </div>
      <RelatedTopic levelId="basico1" topicId="prepositions" label="Repasar las preposiciones de lugar" />

      <SectionTitle color={COLOR}>❓ Cómo pedir indicaciones</SectionTitle>
      {ASKING_DIRECTIONS.map((item, index) => <ExampleCard key={index} pts={item.pts} esp={item.esp} />)}
      <RuleBox icon="🤝" rule="Sé amable" color="#fbbf24">
        <div style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.8 }}>
          Empieza con <strong style={{ color: "#e2e8f0" }}>Excuse me</strong> y termina con <strong style={{ color: "#e2e8f0" }}>Thank you</strong>. Para confirmar, pregunta: <em style={{ color: "#e2e8f0" }}>Is it far from here?</em> (¿Está lejos de aquí?).
        </div>
      </RuleBox>

      <SectionTitle color={COLOR}>🏙️ Practica con el mapa</SectionTitle>
      <CityMap />
      {ROUTES.map(route => (
        <div key={route.title} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px 16px", marginBottom: "10px", borderTop: `3px solid ${route.color}` }}>
          <div style={{ color: route.color, fontWeight: 800, fontSize: "14px" }}>{route.title}</div>
          <div style={{ color: "#64748b", fontSize: "12px", marginBottom: "8px" }}>🇲🇽 {route.esp}</div>
          <ol style={{ color: "#e2e8f0", fontSize: "13px", lineHeight: 1.8, margin: 0, paddingLeft: "22px" }}>
            {route.steps.map(step => <li key={step}>{step}</li>)}
          </ol>
        </div>
      ))}

      <SectionTitle color={COLOR}>📖 Más ejemplos con traducción</SectionTitle>
      {EXAMPLES.map((item, index) => <ExampleCard key={index} pts={item.pts} esp={item.esp} />)}

      <SectionTitle color={COLOR}>⚠️ Errores típicos</SectionTitle>
      {MISTAKES.map(item => (
        <div key={item.wrong} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#f87171", fontSize: "14px" }}>❌ {item.wrong}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", marginTop: "2px" }}>✅ {item.right}</div>
          <div style={{ color: "#64748b", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {item.note}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>✅ Ejercicio resuelto — traduce la indicación</SectionTitle>
      {PRACTICE.map((item, index) => (
        <div key={item.q} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ color: "#94a3b8", fontSize: "13px" }}>{index + 1}. 🇲🇽 {item.q}</div>
          <div style={{ color: "#4ade80", fontSize: "14px", fontWeight: 700, marginTop: "5px" }}>→ {item.answer}</div>
        </div>
      ))}
    </div>
  );
}
