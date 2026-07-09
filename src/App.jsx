import { useEffect, useState } from "react";
import { TOPICS } from "./constants/topics";
import VerbsSection       from "./features/verbs/VerbsSection";
import FruitsSection      from "./features/fruits/FruitsSection";
import PluralSection      from "./features/plural/PluralSection";
import NumbersSection     from "./features/numbers/NumbersSection";
import TimeSection        from "./features/time/TimeSection";
import DatesSection       from "./features/dates/DatesSection";
import FamilySection      from "./features/family/FamilySection";
import JobsSection        from "./features/jobs/JobsSection";
import ToBeSection        from "./features/tobe/ToBeSection";
import DemosSection       from "./features/demonstratives/DemosSection";
import PrepSection        from "./features/prepositions/PrepSection";
import ProgressiveSection from "./features/progressive/ProgressiveSection";
import QuizSection        from "./features/quiz/QuizSection";

const SECTIONS = {
  verbs:          VerbsSection,
  fruits:         FruitsSection,
  plural:         PluralSection,
  numbers:        NumbersSection,
  time:           TimeSection,
  dates:          DatesSection,
  family:         FamilySection,
  jobs:           JobsSection,
  tobe:           ToBeSection,
  demonstratives: DemosSection,
  prepositions:   PrepSection,
  progressive:    ProgressiveSection,
  quiz:           QuizSection,
};

export default function App() {
  const [active, setActive] = useState("verbs");
  const Section = SECTIONS[active];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#0f172a", color: "#f8fafc" }}>
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#7c3aed)", padding: "18px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>🎓 English — Básico I</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.75, fontSize: "13px" }}>Cada ejemplo tiene su 🇲🇽 traducción y su 📐 fórmula</p>
      </div>

      <nav style={{ display: "flex", flexWrap: "wrap", gap: "5px", padding: "10px 12px", background: "#1e293b", position: "sticky", top: 0, zIndex: 10, borderBottom: "1px solid #334155" }}>
        {TOPICS.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            style={{
              padding: "7px 12px", borderRadius: "20px", border: "none", cursor: "pointer",
              fontSize: "13px", fontWeight: 600,
              background: active === t.id ? t.color : "#334155",
              color: "#fff",
              boxShadow: active === t.id ? `0 0 12px ${t.color}55` : "none",
              transform: active === t.id ? "scale(1.04)" : "scale(1)",
              transition: "all 0.15s",
            }}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <main key={active} className="section-transition" style={{ padding: "20px", maxWidth: "860px", margin: "0 auto" }}>
        <Section />
      </main>
    </div>
  );
}
