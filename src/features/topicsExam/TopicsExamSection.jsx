import TopicHeading from "../../components/TopicHeading";
import { useCallback, useEffect, useRef, useState } from "react";
import Legend from "../../components/Legend";
import OverviewPanel from "./panels/OverviewPanel";
import ThereIsPanel from "./panels/ThereIsPanel";
import TensesPanel from "./panels/TensesPanel";
import DirectionsPanel from "./panels/DirectionsPanel";
import ExtrasPanel from "./panels/ExtrasPanel";
import PracticePanel from "./panels/PracticePanel";
import { SocialMediaPanel, TechnologyPanel } from "./panels/VocabPanels";
import { findTabForTerm } from "./tabSearch";
import { COLOR } from "./ui";
import "./topicsExam.css";

// Cada tema del examen es una pestaña dentro del mismo módulo: se estudia uno
// a la vez en vez de un solo texto larguísimo.
const TABS = [
  { id: "overview", icon: "🗂️", label: "Guía", full: "Guía del examen", Panel: OverviewPanel },
  { id: "there", icon: "1️⃣", label: "There is / are", full: "There is / There are", Panel: ThereIsPanel, legend: ["verb_be", "art", "subject", "prep"] },
  { id: "tenses", icon: "2️⃣", label: "Presentes", full: "Simple present / Present progressive", Panel: TensesPanel, legend: ["subject", "verb", "verb_be", "ing", "aux", "wh"] },
  { id: "technology", icon: "3️⃣", label: "Technology", full: "Vocab. Technology equipment", Panel: TechnologyPanel },
  { id: "social", icon: "4️⃣", label: "Social media", full: "Vocab. Social media", Panel: SocialMediaPanel },
  { id: "directions", icon: "5️⃣", label: "Directions", full: "Vocab. Directions", Panel: DirectionsPanel, legend: ["verb", "prep", "subject", "verb_be"] },
  { id: "extras", icon: "➕", label: "Extras", full: "Extras del salón: -ed / -ing y orden de adjetivos", Panel: ExtrasPanel },
  { id: "practice", icon: "🎯", label: "Práctica", full: "Práctica — 32 preguntas", Panel: PracticePanel },
];

export default function TopicsExamSection({ highlightTerm, highlightSeq }) {
  const [active, setActive] = useState("overview");
  const topRef = useRef(null);
  const tabsRef = useRef(null);

  const index = TABS.findIndex(tab => tab.id === active);
  const tab = TABS[index];
  const { Panel } = tab;

  // Al llegar desde el buscador global, abre la pestaña donde vive el término
  // buscado: si no, el resaltado no encontraría nada en el DOM.
  useEffect(() => {
    const target = findTabForTerm(highlightTerm);
    if (target) setActive(target);
  }, [highlightTerm, highlightSeq]);

  const goTo = useCallback((id, { scroll = true } = {}) => {
    setActive(id);
    if (scroll) topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  // La pestaña activa siempre visible dentro de la tira horizontal.
  useEffect(() => {
    tabsRef.current?.querySelector(`#exam-tab-${active}`)
      ?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  function onTabKeyDown(event) {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = TABS[(index + step + TABS.length) % TABS.length];
    setActive(next.id);
    tabsRef.current?.querySelector(`#exam-tab-${next.id}`)?.focus();
  }

  return (
    <div className="topics-exam" ref={topRef}>
      <header className="exam-header">
        <TopicHeading topicId="topicsExam" />
        <p>Todo lo que viene en el examen, dividido por tema y explicado en español: fórmulas, ejemplos traducidos, errores típicos y práctica.</p>
        <div className="exam-header-meta">
          <span>🗓️ Examen: jueves 10 de septiembre de 2026</span>
          <span>⏳ Disponible hasta el domingo 13 de septiembre, 23:59 (CDMX)</span>
        </div>
      </header>

      <div className="exam-tabs" role="tablist" aria-label="Temas del examen" ref={tabsRef} onKeyDown={onTabKeyDown}>
        {TABS.map(item => (
          <button
            key={item.id}
            id={`exam-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={item.id === active}
            aria-controls="exam-panel"
            tabIndex={item.id === active ? 0 : -1}
            className={`exam-tab${item.id === active ? " is-active" : ""}`}
            onClick={() => goTo(item.id, { scroll: false })}
          >
            <span aria-hidden="true">{item.icon}</span> {item.label}
          </button>
        ))}
      </div>

      <div id="exam-panel" role="tabpanel" aria-labelledby={`exam-tab-${active}`} className="exam-panel" key={active}>
        <h3 className="exam-panel-title" style={{ color: COLOR }}>{tab.icon} {tab.full}</h3>
        {tab.legend && <Legend roles={tab.legend} />}
        <Panel onGo={goTo} />
      </div>

      <nav className="exam-pager" aria-label="Navegación entre temas">
        <button type="button" className="exam-chip" disabled={index === 0} onClick={() => goTo(TABS[index - 1]?.id)}>
          ← {index > 0 ? TABS[index - 1].label : "Inicio"}
        </button>
        <button type="button" className="exam-chip" disabled={index === TABS.length - 1} onClick={() => goTo(TABS[index + 1]?.id)}>
          {index < TABS.length - 1 ? TABS[index + 1].label : "Fin"} →
        </button>
      </nav>
    </div>
  );
}
