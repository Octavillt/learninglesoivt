import TopicHeading from "../../components/TopicHeading";
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
    ["🚌", "Bus stop", 84, 278],
    ["🏥", "Hospital", 84, 100],
    ["☕", "Coffee shop", 330, 130],
    ["🏢", "Apartments", 330, 278],
    ["🏫", "High school", 548, 100],
    ["🏋️", "Gym", 548, 278],
  ];

  return (
    <figure style={{ margin: "0 0 14px" }}>
      <svg viewBox="0 0 640 350" role="img" aria-labelledby="city-map-title city-map-description" style={{ width: "100%", display: "block", background: "#dbeafe", border: "2px solid #334155", borderRadius: "14px" }}>
        <title id="city-map-title">Mapa de práctica: River Street, Main Street y Park Avenue</title>
        <desc id="city-map-description">El norte está arriba. River Street, al oeste, y Park Avenue, al este, cruzan Main Street. Al oeste de River Street están el hospital al norte y la parada al sur. Entre ambas calles están la cafetería al norte y los apartamentos al sur. Al este de Park Avenue están la preparatoria al norte y el gimnasio al sur.</desc>
        <path d="M190 42V350 M470 42V350 M0 200H640" stroke="#94a3b8" strokeWidth="38" />
        <path d="M190 42V350 M470 42V350 M0 200H640" stroke="#f8fafc" strokeWidth="2" strokeDasharray="10 9" />
        <g fill="#0f172a" fontSize="16" fontWeight="800" textAnchor="middle">
          <text x="190" y="27">River Street ↕</text>
          <text x="470" y="27">Park Avenue ↕</text>
          <text x="330" y="206" stroke="#94a3b8" strokeWidth="6" paintOrder="stroke">Main Street ↔</text>
          <text x="32" y="35">N ↑</text>
        </g>
        {places.map(([icon, name, x, y]) => (
          <g key={name} transform={`translate(${x} ${y})`} textAnchor="middle">
            <rect x="-62" y="-35" width="124" height="70" rx="9" fill="#0f172a" />
            <text y="-3" fontSize="26">{icon}</text>
            <text y="22" fill="#f8fafc" fontSize="16" fontWeight="700">{name}</text>
          </g>
        ))}
      </svg>
      <figcaption style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.6, marginTop: "8px" }}>El norte está arriba (↑). Izquierda y derecha dependen de hacia dónde caminas. Cada recorrido indica dónde empezar y hacia dónde mirar.</figcaption>
    </figure>
  );
}

export default function DirectionsSection() {
  return (
    <div>
      <TopicHeading topicId="directions" />
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
        <div style={{ color: "#94a3b8", fontSize: "13px" }}>🇲🇽 Da vuelta a la derecha en Park Avenue.</div>
      </RuleBox>

      <SectionTitle color={COLOR}>🧭 Movimientos esenciales</SectionTitle>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "8px", marginBottom: "16px" }}>
        {DIRECTION_PHRASES.map(item => (
          <div key={item.phrase} style={{ display: "flex", gap: "10px", alignItems: "center", background: "#1e293b", borderRadius: "10px", padding: "11px 12px", borderLeft: `3px solid ${COLOR}` }}>
            <span style={{ fontSize: "25px", minWidth: "34px", textAlign: "center" }}>{item.icon}</span>
            <div>
              <div style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 800 }}>{item.phrase}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>{item.esp}</div>
            </div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>📍 Para ubicar el destino</SectionTitle>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
        {PLACE_PHRASES.map(item => (
          <div key={item.phrase} style={{ background: "#1e293b", border: "1px solid #334155", borderRadius: "20px", padding: "7px 12px" }}>
            <span style={{ color: COLOR, fontWeight: 800, fontSize: "13px" }}>{item.phrase}</span>
            <span style={{ color: "#94a3b8", fontSize: "12px" }}> · {item.esp}</span>
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
          <div style={{ color: "#94a3b8", fontSize: "12px", marginBottom: "8px" }}>🇲🇽 {route.esp}</div>
          <p style={{ color: "#cbd5e1", fontSize: "13px", lineHeight: 1.6 }}>Punto de partida: {route.start}</p>
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
          <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "6px", paddingTop: "6px", borderTop: "1px solid #334155" }}>💡 {item.note}</div>
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
