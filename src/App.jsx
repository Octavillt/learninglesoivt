import { useEffect, useRef, useState } from "react";
import { LEVELS } from "./constants/levels";
import { useTheme } from "./styles/useTheme";
import ThemePicker from "./components/ThemePicker";
import VerbsSection       from "./features/verbs/VerbsSection";
import FruitsSection      from "./features/fruits/FruitsSection";
import PluralSection      from "./features/plural/PluralSection";
import NumbersSection     from "./features/numbers/NumbersSection";
import TimeSection        from "./features/time/TimeSection";
import DatesSection       from "./features/dates/DatesSection";
import CountriesSection   from "./features/countries/CountriesSection";
import FamilySection      from "./features/family/FamilySection";
import JobsSection        from "./features/jobs/JobsSection";
import ToBeSection        from "./features/tobe/ToBeSection";
import DemosSection       from "./features/demonstratives/DemosSection";
import PrepSection        from "./features/prepositions/PrepSection";
import ProgressiveSection from "./features/progressive/ProgressiveSection";
import QuizSection        from "./features/quiz/QuizSection";
import IrregularVerbsSection from "./features/irregularVerbs/IrregularVerbsSection";
import Footer              from "./components/Footer";

const SECTIONS = {
  verbs:          VerbsSection,
  irregularVerbs: IrregularVerbsSection,
  fruits:         FruitsSection,
  plural:         PluralSection,
  numbers:        NumbersSection,
  time:           TimeSection,
  dates:          DatesSection,
  countries:      CountriesSection,
  family:         FamilySection,
  jobs:           JobsSection,
  tobe:           ToBeSection,
  demonstratives: DemosSection,
  prepositions:   PrepSection,
  progressive:    ProgressiveSection,
  quiz:           QuizSection,
};

export default function App() {
  const { theme, themeId, selectTheme } = useTheme();
  const [levelId, setLevelId] = useState(LEVELS[0].id);
  const [active, setActive] = useState("verbs");
  const level = LEVELS.find(l => l.id === levelId);
  const Section = SECTIONS[active];
  const navRef = useRef(null);
  const btnRefs = useRef({});

  function selectLevel(l) {
    if (!l.available || l.id === levelId) return;
    setLevelId(l.id);
    setActive(l.topics[0]?.id ?? null);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [active]);

  useEffect(() => {
    const btn = btnRefs.current[active];
    if (btn) {
      btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [active]);

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: theme.bg, color: theme.text }}>
      <div style={{ background: theme.headerGradient, padding: "18px 20px", textAlign: "center", position: "relative" }}>
        <div style={{ position: "absolute", top: "14px", right: "16px" }}>
          <ThemePicker themeId={themeId} onSelect={selectTheme} />
        </div>

        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800, color: "#fff" }}>🎓 English — {level.label}</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.8, fontSize: "13px", color: "#fff" }}>Cada ejemplo tiene su 🇲🇽 traducción y su 📐 fórmula</p>

        <div style={{ marginTop: "12px", display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
          {LEVELS.map(l => (
            <button
              key={l.id}
              onClick={() => selectLevel(l)}
              disabled={!l.available}
              title={l.available ? l.label : "Próximamente"}
              style={{
                padding: "6px 14px", borderRadius: "20px",
                border: l.id === levelId ? "1px solid rgba(255,255,255,0.9)" : "1px solid rgba(255,255,255,0.3)",
                background: l.id === levelId ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.06)",
                color: "#fff", fontSize: "12px", fontWeight: l.id === levelId ? 700 : 500,
                cursor: l.available ? "pointer" : "not-allowed",
                opacity: l.available ? 1 : 0.45,
              }}
            >
              {l.label}{!l.available && " 🔒"}
            </button>
          ))}
        </div>
      </div>

      {level.topics.length > 0 && (
        <div className="nav-wrap" style={{ position: "sticky", top: 0, zIndex: 10, background: theme.surface, borderBottom: `1px solid ${theme.border}` }}>
          <nav ref={navRef} className="nav-scroller" style={{ display: "flex", flexWrap: "nowrap", gap: "6px", padding: "10px 14px", overflowX: "auto" }}>
            {level.topics.map(t => (
              <button
                key={t.id}
                ref={el => { btnRefs.current[t.id] = el; }}
                onClick={() => setActive(t.id)}
                style={{
                  flex: "0 0 auto", scrollSnapAlign: "center",
                  padding: "7px 12px", borderRadius: "20px", border: "none", cursor: "pointer",
                  fontSize: "13px", fontWeight: 600, whiteSpace: "nowrap",
                  background: active === t.id ? t.color : theme.navPillIdle,
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
        </div>
      )}

      <main key={active ?? level.id} className="section-transition" style={{ padding: "20px", maxWidth: "860px", margin: "0 auto" }}>
        {Section ? (
          <Section />
        ) : (
          <div style={{ textAlign: "center", padding: "60px 20px" }}>
            <div style={{ fontSize: "52px", marginBottom: "14px" }}>🚧</div>
            <h2 style={{ margin: "0 0 8px", color: theme.text }}>Estamos preparando {level.label}</h2>
            <p style={{ margin: 0, color: theme.textMuted, fontSize: "14px" }}>
              Muy pronto encontrarás aquí nuevos temas para seguir avanzando.
            </p>
          </div>
        )}
      </main>

      <Footer theme={theme} />
    </div>
  );
}
