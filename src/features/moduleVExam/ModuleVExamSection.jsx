import { useEffect, useRef, useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import { Practice, VocabGrid } from "../examReview/ExamReviewSection";
import { STUDY_TOPICS, PRACTICE, findStudyTab } from "./data";
import "../topicsExam/topicsExam.css";

const COLOR = "#A855F7";
const TABS = [{ id: "overview", title: "Guía" }, ...STUDY_TOPICS, { id: "practice", title: "Práctica" }];

function ExamPractice() {
  const [filter, setFilter] = useState("all");
  const questions = filter === "all" ? PRACTICE : PRACTICE.filter(item => item.topic === filter);
  return (
    <>
      <p>Responde sin mirar los apuntes. Cada respuesta muestra la solución y su explicación. Practica los 30 reactivos o elige uno de los tres temas.</p>
      <div className="exam-filters" role="group" aria-label="Filtrar preguntas por tema">
        {[{ id: "all", title: "Todos" }, ...STUDY_TOPICS].map(topic => (
          <button key={topic.id} type="button" className={`exam-chip${filter === topic.id ? " is-active" : ""}`} aria-pressed={filter === topic.id} onClick={() => setFilter(topic.id)}>{topic.title}</button>
        ))}
      </div>
      <Practice key={filter} questions={questions} />
    </>
  );
}

export default function ModuleVExamSection({ highlightTerm, highlightSeq }) {
  const [active, setActive] = useState("overview");
  const tabsRef = useRef(null);
  const index = TABS.findIndex(tab => tab.id === active);
  const tab = TABS[index];

  useEffect(() => {
    const target = findStudyTab(highlightTerm);
    if (target) setActive(target);
  }, [highlightTerm, highlightSeq]);

  useEffect(() => {
    tabsRef.current?.querySelector(`#module-v-exam-tab-${active}`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  function onTabKeyDown(event) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % TABS.length;
    if (event.key === "ArrowLeft") next = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = TABS.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    setActive(TABS[next].id);
    tabsRef.current?.querySelector(`#module-v-exam-tab-${TABS[next].id}`)?.focus();
  }

  return (
    <div className="topics-exam" style={{ "--exam-accent": COLOR }}>
      <TopicHeading topicId="moduleVExam" />
      <div className="exam-header">
        <p>Repasa los tres temas del examen del módulo V: pasado simple, futuro con going to y colocaciones de vida social con have, make, get, do, go y take.</p>
        <div className="exam-header-meta"><span>⏳ Disponible hasta el domingo 25 de octubre de 2026, 23:59 (Ciudad de México, UTC−6)</span></div>
      </div>
      <div className="exam-tabs" role="tablist" aria-label="Temas de la guía de examen del Módulo V" ref={tabsRef} onKeyDown={onTabKeyDown}>
        {TABS.map(item => (
          <button key={item.id} id={`module-v-exam-tab-${item.id}`} type="button" role="tab" aria-selected={active === item.id} aria-controls="module-v-exam-panel" tabIndex={active === item.id ? 0 : -1} className={`exam-tab${active === item.id ? " is-active" : ""}`} onClick={() => setActive(item.id)}>{item.title}</button>
        ))}
      </div>
      <div id="module-v-exam-panel" role="tabpanel" aria-labelledby={`module-v-exam-tab-${active}`} className="exam-panel" key={active}>
        <h3 className="exam-panel-title" style={{ color: COLOR }}>{tab.title === "Guía" ? "Tu ruta de estudio" : tab.title}</h3>
        {active === "overview" ? (
          <>
            <p>En cada pestaña encontrarás reglas y fórmulas, vocabulario bilingüe, ejemplos traducidos, errores típicos y un enlace a la lección completa.</p>
            <ol className="exam-steps">
              {STUDY_TOPICS.map((topic, topicIndex) => (
                <li key={topic.id}><span className="exam-step-number">{topicIndex + 1}</span><button type="button" className="exam-chip" onClick={() => setActive(topic.id)}>{topic.title}</button></li>
              ))}
            </ol>
            <RuleBox icon="🧠" rule="Tres preguntas para no confundir tiempos" color={COLOR}>
              <p><strong>¿Pasado o futuro?</strong> Busca el marcador: last weekend → pasado simple con did (What did you do last weekend?); next weekend → going to (What are you going to do next weekend?).</p>
              <p><strong>¿Verbo en pasado o en forma base?</strong> Con didn't y did el verbo vuelve a su base: He didn't go / Did she eat?; con going to también: going to go, going to eat.</p>
              <p><strong>¿Qué verbo lleva la colocación?</strong> have a party, make friends, take photos, get together, do homework, go out dancing: se aprenden como bloques fijos.</p>
              <p>El pasado simple cuenta lo que pasó; going to anuncia planes o predicciones; las colocaciones suenan natural solo en su combinación fija.</p>
            </RuleBox>
            <RuleBox icon="✅" rule="Antes de terminar" color={COLOR}>
              <p>Comprueba que puedes: escribir los pasados de doce verbos regulares e irregulares, pronunciar la -ed en /t/, /d/ y /ɪd/, formar las cuatro estructuras de going to (y el caso going to go), y usar quince colocaciones de vida social en pasado y con going to.</p>
              <p>Después responde el simulador, revisa los errores y repite solo los temas que necesites reforzar.</p>
            </RuleBox>
            <button type="button" className="exam-chip" onClick={() => setActive("practice")}>Abrir simulador de 30 preguntas</button>
          </>
        ) : active === "practice" ? <ExamPractice /> : (
          <>
            <RuleBox icon="📖" rule="Reglas que debes recordar" color={COLOR}><ul>{tab.rules.map(rule => <li key={rule}>{rule}</li>)}</ul></RuleBox>
            <h4>Vocabulario y formas clave</h4>
            <VocabGrid entries={tab.vocab} />
            <h4>Ejemplos con traducción</h4>
            <VocabGrid entries={tab.examples} />
            <RuleBox icon="🔎" rule="Evita este error" color="#F59E0B"><p>{tab.mistake}</p></RuleBox>
            <RelatedTopic levelId={tab.levelId} topicId={tab.topicId} label="Abrir la lección completa" />
          </>
        )}
      </div>
      <nav className="exam-pager" aria-label="Navegación entre temas de la guía de examen del Módulo V">
        <button type="button" className="exam-chip" disabled={index === 0} onClick={() => setActive(TABS[index - 1].id)}>← Anterior</button>
        <button type="button" className="exam-chip" disabled={index === TABS.length - 1} onClick={() => setActive(TABS[index + 1].id)}>Siguiente →</button>
      </nav>
    </div>
  );
}
