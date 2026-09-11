import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import RelatedTopic from "../../../components/RelatedTopic";
import { VocabGrid } from "../../examReview/ExamReviewSection";
import { Callout, COLOR, Guide, Mistakes, Pattern } from "../ui";
import {
  ASK_PHRASES, DIRECTIONS, DIRECTION_DIALOGUE, DIRECTION_MISTAKES,
  DIRECTION_MOVES, DIRECTION_PLACES, ROUTE_PLACES, ROUTE_STEPS,
} from "../data";

// Mapa de 4x4 cuadras. La ruta se recorre paso a paso para ver qué significa
// cada instrucción antes de leerla en inglés.
function RouteMap() {
  const [step, setStep] = useState(0);
  const current = ROUTE_STEPS[step];
  const visited = ROUTE_STEPS.slice(0, step + 1).map(item => item.at.join(","));

  return (
    <div className="exam-map-block">
      <div className="exam-map" role="img" aria-label={`Mapa de la ruta. Paso ${step + 1}: ${current.esp}`}>
        {Array.from({ length: 16 }, (_, index) => {
          const column = index % 4;
          const row = Math.floor(index / 4);
          const key = `${column},${row}`;
          const place = ROUTE_PLACES.find(item => item[2] === column && item[3] === row);
          const isCurrent = current.at.join(",") === key;
          return (
            <div key={key} className={`exam-map-cell${visited.includes(key) ? " is-visited" : ""}${isCurrent ? " is-current" : ""}`}>
              {place && <span className="exam-map-place"><span className="exam-map-icon">{place[0]}</span><span className="exam-map-name">{place[1]}</span></span>}
              {isCurrent && <span className="exam-map-you" aria-hidden="true">🚶</span>}
            </div>
          );
        })}
      </div>

      <div className="exam-map-controls">
        <button type="button" className="exam-chip" onClick={() => setStep(value => Math.max(0, value - 1))} disabled={step === 0}>← Anterior</button>
        <span className="exam-map-counter">Paso {step + 1} de {ROUTE_STEPS.length}</span>
        <button type="button" className="exam-chip" onClick={() => setStep(value => Math.min(ROUTE_STEPS.length - 1, value + 1))} disabled={step === ROUTE_STEPS.length - 1}>Siguiente →</button>
      </div>

      <ol className="exam-route-list">
        {ROUTE_STEPS.map((item, index) => (
          <li key={item.en}>
            <button type="button" className={`exam-route-step${index === step ? " is-current" : ""}`} onClick={() => setStep(index)} aria-current={index === step}>
              <strong>{item.en}</strong>
              <span>🇲🇽 {item.esp}</span>
              <span className="exam-route-note">💡 {item.note}</span>
            </button>
          </li>
        ))}
      </ol>
      <p className="exam-route-full"><strong>Todo junto:</strong> Go straight for two blocks. Turn right at the traffic light. Go past the bank. The pharmacy is on your left, next to the café.</p>
    </div>
  );
}

export default function DirectionsPanel() {
  return (
    <>
      <Callout icon="🎯" title="Qué te van a pedir en el examen">
        Traducir y ordenar instrucciones (<strong>go, turn, take, cross</strong>), decir dónde está un lugar (<strong>next to, between, across from</strong>) y completar un diálogo para pedir indicaciones.
      </Callout>

      <SectionTitle color={COLOR}>La clave: movimiento o ubicación</SectionTitle>
      <p>Todo el vocabulario de este tema se divide en dos grupos. Si los separas, ya no se te confunden.</p>
      <div className="exam-split">
        <div className="exam-split-card">
          <div className="exam-split-head">🚶 Movimiento — qué HACER para llegar</div>
          <p>Son <strong>instrucciones</strong>. Verbo en forma base y <strong>sin sujeto</strong> (es imperativo).</p>
          <div className="exam-move-list">
            {DIRECTION_MOVES.map(([icon, phrase, esp]) => (
              <div key={phrase} className="exam-move">
                <span className="exam-move-icon" aria-hidden="true">{icon}</span>
                <span><b>{phrase}</b><span>{esp}</span></span>
              </div>
            ))}
          </div>
        </div>
        <div className="exam-split-card">
          <div className="exam-split-head">📍 Ubicación — DÓNDE está el lugar</div>
          <p>Son <strong>descripciones</strong>. Van con el verbo <strong>be</strong>: The bank <b>is</b> next to the park.</p>
          <div className="exam-move-list">
            {DIRECTION_PLACES.map(([icon, phrase, esp, example]) => (
              <div key={phrase} className="exam-move">
                <span className="exam-move-icon" aria-hidden="true">{icon}</span>
                <span><b>{phrase}</b><span>{esp}</span><em>{example}</em></span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RelatedTopic levelId="basico1" topicId="prepositions" label="Repasar preposiciones de lugar" />

      <SectionTitle color={COLOR}>Las fórmulas</SectionTitle>
      <Pattern
        label="Dar una instrucción (imperativo, sin sujeto)"
        parts={[{ t: "verbo base", r: "verb" }, { t: "dirección", r: "prep" }, { t: "referencia", r: "subject" }]}
        example="Turn right at the traffic light." esp="Gira a la derecha en el semáforo."
      />
      <Pattern
        label="Decir dónde está un lugar"
        parts={[{ t: "The + lugar", r: "subject" }, { t: "is", r: "verb_be" }, { t: "preposición", r: "prep" }, { t: "referencia", r: "art" }]}
        example="The pharmacy is next to the café." esp="La farmacia está junto a la cafetería."
      />
      <Callout icon="🔑" title="Turn right ≠ on your right" tone="warn">
        <strong>Turn right</strong> = gira a la derecha (te mueves). <strong>On your right</strong> = a tu derecha (está ahí).<br />
        <strong>Go straight</strong> = sigue derecho, NO significa “gira a la derecha”. Es el error más común porque en español “derecho” y “derecha” se parecen.
      </Callout>

      <SectionTitle color={COLOR}>Camina la ruta paso a paso</SectionTitle>
      <p>Sales de la escuela 🏫 y vas a la farmacia 💊. Avanza con los botones y fíjate qué hace cada instrucción en el mapa.</p>
      <RouteMap />

      <Guide title="Cómo se arma una indicación completa" icon="🧭">
        <ol>
          <li><strong>Avance y distancia:</strong> Go straight for two blocks. — Sigue derecho dos cuadras.</li>
          <li><strong>Giro y punto de referencia:</strong> Turn right at the traffic light. — Gira a la derecha en el semáforo.</li>
          <li><strong>Continuar:</strong> Go past the bank. — Pasa el banco y sigue.</li>
          <li><strong>Ubicación final:</strong> The pharmacy is on your left. — La farmacia está a tu izquierda.</li>
        </ol>
        <p>Después de un giro, <strong>“tu izquierda” cambia</strong>: siempre es según la dirección en la que estás caminando ahora, no la del inicio.</p>
      </Guide>

      <SectionTitle color={COLOR}>Cómo pedir indicaciones</SectionTitle>
      <div className="exam-pills">
        {ASK_PHRASES.map(([en, esp]) => <span key={en} className="exam-pill"><b>{en}</b><span>🇲🇽 {esp}</span></span>)}
      </div>
      <Callout icon="🤝" title="Sé amable">
        Empieza con <strong>Excuse me</strong> y cierra con <strong>Thank you</strong>. Para confirmar: <strong>Is it far from here?</strong> — ¿Está lejos de aquí?
      </Callout>

      <SectionTitle color={COLOR}>Diálogo completo</SectionTitle>
      <div className="exam-dialogue">
        {DIRECTION_DIALOGUE.map(([speaker, en, esp], index) => (
          <div key={index} className={`exam-line exam-line-${speaker.toLowerCase()}`}>
            <span className="exam-speaker">{speaker}</span>
            <div><strong>{en}</strong><span>🇲🇽 {esp}</span></div>
          </div>
        ))}
      </div>

      <SectionTitle color={COLOR}>Vocabulario para memorizar</SectionTitle>
      <VocabGrid entries={DIRECTIONS} />

      <SectionTitle color={COLOR}>Errores típicos</SectionTitle>
      <Mistakes items={DIRECTION_MISTAKES} />
    </>
  );
}
