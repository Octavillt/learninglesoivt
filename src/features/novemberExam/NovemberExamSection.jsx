import { useEffect, useRef, useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import { Practice, VocabGrid } from "../examReview/ExamReviewSection";
import { STUDY_TOPICS, PRACTICE, findStudyTab } from "./data";
import "../topicsExam/topicsExam.css";

const COLOR = "#06B6D4";
const TABS = [{ id: "overview", title: "Guía" }, ...STUDY_TOPICS, { id: "practice", title: "Práctica" }];

function ExamPractice() {
  const [filter, setFilter] = useState("all");
  const questions = filter === "all" ? PRACTICE : PRACTICE.filter(item => item.topic === filter);
  return (
    <>
      <p>Responde sin mirar los apuntes. Cada respuesta muestra la solución y su explicación. Practica los 40 reactivos o elige uno de los cuatro temas.</p>
      <div className="exam-filters" role="group" aria-label="Filtrar preguntas por tema">
        {[{ id: "all", title: "Todos" }, ...STUDY_TOPICS].map(topic => (
          <button key={topic.id} type="button" className={`exam-chip${filter === topic.id ? " is-active" : ""}`} aria-pressed={filter === topic.id} onClick={() => setFilter(topic.id)}>{topic.title}</button>
        ))}
      </div>
      <Practice key={filter} questions={questions} />
    </>
  );
}

export default function NovemberExamSection({ highlightTerm, highlightSeq }) {
  const [active, setActive] = useState("overview");
  const tabsRef = useRef(null);
  const index = TABS.findIndex(tab => tab.id === active);
  const tab = TABS[index];

  useEffect(() => {
    const target = findStudyTab(highlightTerm);
    if (target) setActive(target);
  }, [highlightTerm, highlightSeq]);

  useEffect(() => {
    tabsRef.current?.querySelector(`#november-exam-tab-${active}`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
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
    tabsRef.current?.querySelector(`#november-exam-tab-${TABS[next].id}`)?.focus();
  }

  return (
    <div className="topics-exam" style={{ "--exam-accent": COLOR }}>
      <TopicHeading topicId="novemberExam" />
      <div className="exam-header">
        <p>Repasa los cuatro temas del examen: comparativos, los cuatro tiempos verbales (Review of Tenses), vocabulario de dinero y lugares naturales.</p>
        <div className="exam-header-meta"><span>⏳ Disponible hasta el domingo 8 de noviembre de 2026, 23:59 (Ciudad de México, UTC−6)</span></div>
      </div>
      <div className="exam-tabs" role="tablist" aria-label="Temas de la guía de examen de noviembre" ref={tabsRef} onKeyDown={onTabKeyDown}>
        {TABS.map(item => (
          <button key={item.id} id={`november-exam-tab-${item.id}`} type="button" role="tab" aria-selected={active === item.id} aria-controls="november-exam-panel" tabIndex={active === item.id ? 0 : -1} className={`exam-tab${active === item.id ? " is-active" : ""}`} onClick={() => setActive(item.id)}>{item.title}</button>
        ))}
      </div>
      <div id="november-exam-panel" role="tabpanel" aria-labelledby={`november-exam-tab-${active}`} className="exam-panel" key={active}>
        <h3 className="exam-panel-title" style={{ color: COLOR }}>{tab.title === "Guía" ? "Tu ruta de estudio" : tab.title}</h3>
        {active === "overview" ? (
          <>
            <p>En cada pestaña encontrarás reglas y fórmulas, vocabulario bilingüe, ejemplos traducidos, errores típicos y un enlace a la lección completa.</p>
            <ol className="exam-steps">
              {STUDY_TOPICS.map((topic, topicIndex) => (
                <li key={topic.id}><span className="exam-step-number">{topicIndex + 1}</span><button type="button" className="exam-chip" onClick={() => setActive(topic.id)}>{topic.title}</button></li>
              ))}
            </ol>
            <RuleBox icon="🧠" rule="Cuatro pistas para no confundirte" color={COLOR}>
              <p><strong>¿Qué tiempo pide la oración?</strong> Busca la time expression: every day → presente simple, right now → progresivo, yesterday / ago / last night → pasado simple, tomorrow / next week → going to.</p>
              <p><strong>¿-er o more?</strong> Cuenta las sílabas: adjetivo corto → -er + than (bigger, happier); adjetivo largo → more + adjetivo + than (more dangerous).</p>
              <p><strong>Escribe than</strong>, nunca that ni then: A rabbit is bigger than a hamster.</p>
              <p><strong>Dinero con preposición fija:</strong> spend money on (gastar en) y save money for (ahorrar para).</p>
            </RuleBox>
            <RuleBox icon="✅" rule="Antes de terminar" color={COLOR}>
              <p>Comprueba que puedas: identificar los cuatro tiempos por su expresión de tiempo y su auxiliar, escribir ocho comparativos cortos, largos e irregulares, usar seis palabras de dinero con sus pasados y nombrar los ocho lugares naturales con un ejemplo de México.</p>
              <p>Después responde el simulador, revisa los errores y repite solo los temas que necesites reforzar.</p>
            </RuleBox>
            <button type="button" className="exam-chip" onClick={() => setActive("practice")}>Abrir simulador de 40 preguntas</button>
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
      <nav className="exam-pager" aria-label="Navegación entre temas de la guía de examen de noviembre">
        <button type="button" className="exam-chip" disabled={index === 0} onClick={() => setActive(TABS[index - 1].id)}>← Anterior</button>
        <button type="button" className="exam-chip" disabled={index === TABS.length - 1} onClick={() => setActive(TABS[index + 1].id)}>Siguiente →</button>
      </nav>
    </div>
  );
}
