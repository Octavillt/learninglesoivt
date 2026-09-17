import SectionTitle from "../../../components/SectionTitle";
import { Callout, COLOR, Guide } from "../ui";

const PLAN = [
  ["there", "1", "There is / There are", "Decir qué hay en un lugar: singular, plural, incontable, negativo y preguntas.", "Alta"],
  ["tenses", "2", "Simple present / Present progressive", "Rutinas contra lo que pasa ahora, terminaciones -s/-es y -ing, negativas y preguntas.", "Alta"],
  ["technology", "3", "Vocab. Technology equipment", "Aparatos y sus traducciones, usados dentro de oraciones.", "Media"],
  ["social", "4", "Vocab. Social media", "Palabras de redes sociales que funcionan como sustantivo y verbo.", "Media"],
  ["directions", "5", "Vocab. Directions", "Dar y pedir indicaciones, y decir dónde está un lugar.", "Alta"],
];

export default function OverviewPanel({ onGo }) {
  return (
    <>
      <Callout icon="🗓️" title="Examen: jueves 10 de septiembre de 2026">
        Esta guía reúne <strong>cinco temas de las notas de clase</strong>. Cada uno tiene su propia pestaña aquí arriba, con explicación en español, fórmulas, ejemplos traducidos, errores típicos y práctica.
      </Callout>

      <SectionTitle color={COLOR}>Los temas del examen</SectionTitle>
      <div className="exam-plan">
        {PLAN.map(([id, number, title, detail, priority]) => (
          <button key={id} type="button" className="exam-plan-card" onClick={() => onGo(id)}>
            <span className="exam-plan-number" aria-hidden="true">{number}</span>
            <span className="exam-plan-body">
              <span className="exam-plan-title">{title}</span>
              <span className="exam-plan-detail">{detail}</span>
              <span className={`exam-priority exam-priority-${priority.toLowerCase()}`}>Prioridad sugerida: {priority.toLowerCase()}</span>
            </span>
            <span className="exam-plan-go" aria-hidden="true">→</span>
          </button>
        ))}
      </div>
      <p>También hay una pestaña <strong>Extras</strong> con lo demás que quedó escrito en el salón: los adjetivos <strong>-ed / -ing</strong> y el <strong>orden de adjetivos</strong> de la cinta verde.</p>

      <SectionTitle color={COLOR}>Cómo estudiar con este módulo</SectionTitle>
      <Guide title="Plan de 4 pasos" icon="🧭">
        <ol>
          <li>Abre el tema y lee la tarjeta <strong>🎯 Qué te van a pedir</strong>: así sabes qué buscar.</li>
          <li>Estudia las <strong>fórmulas de colores</strong> y di en voz alta los ejemplos con su traducción.</li>
          <li>Revisa los <strong>errores típicos</strong>: comprueba por qué cambia la estructura.</li>
          <li>Ve a <strong>🎯 Práctica</strong>, filtra por ese tema y responde sin ver los apuntes.</li>
        </ol>
      </Guide>

      <Guide title="Tres estructuras para comprobar" icon="⭐">
        <ol>
          <li><strong>Concordancia:</strong> is con singular, are con plural (there is a dog / there are three buses).</li>
          <li><strong>La tercera persona:</strong> he/she/it lleva -s o -es… salvo cuando ya está does/doesn't.</li>
          <li><strong>El verbo be en el progresivo:</strong> am/is/are + verbo-ing, nunca uno solo.</li>
        </ol>
      </Guide>

      <Callout icon="⏳" title="Disponibilidad">
        Este módulo se oculta solo el domingo <time dateTime="2026-09-13T23:59:00-06:00">13 de septiembre de 2026 a las 23:59</time>, hora de Ciudad de México.
      </Callout>
    </>
  );
}
