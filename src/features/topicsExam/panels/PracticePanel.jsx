import { useMemo, useState } from "react";
import { Practice } from "../../examReview/ExamReviewSection";
import { Callout } from "../ui";
import { PRACTICE } from "../data";

const FILTERS = [
  ["all", "Todas"],
  ["there", "There is / are"],
  ["tenses", "Presentes"],
  ["directions", "Directions"],
  ["technology", "Technology"],
  ["social", "Social media"],
  ["extras", "Extras"],
];

export default function PracticePanel() {
  const [filter, setFilter] = useState("all");
  const questions = useMemo(
    () => filter === "all" ? PRACTICE : PRACTICE.filter(item => item.topic === filter),
    [filter],
  );

  return (
    <>
      <Callout icon="🎯" title="Cómo aprovecharlo">
        Responde sin ver los apuntes. Cada respuesta te dice la solución y <strong>por qué</strong>. Si fallas una, vuelve a su tema y repite el ejercicio.
      </Callout>
      <div className="exam-filters" role="group" aria-label="Filtrar preguntas por tema">
        {FILTERS.map(([id, label]) => {
          const count = id === "all" ? PRACTICE.length : PRACTICE.filter(item => item.topic === id).length;
          return (
            <button key={id} type="button" className={`exam-chip${filter === id ? " is-active" : ""}`} aria-pressed={filter === id} onClick={() => setFilter(id)}>
              {label} <span className="exam-chip-count">{count}</span>
            </button>
          );
        })}
      </div>
      <Practice key={filter} questions={questions} />
    </>
  );
}
