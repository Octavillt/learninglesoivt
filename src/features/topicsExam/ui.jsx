import RuleBox from "../../components/RuleBox";
import Token from "../../components/Token";

export const COLOR = "#ec4899";

export function Guide({ title, icon = "📌", color = COLOR, children }) {
  return <RuleBox icon={icon} rule={title} color={color}><div className="exam-text">{children}</div></RuleBox>;
}

// Tabla responsiva: en pantallas chicas cada fila se convierte en tarjeta y
// cada celda muestra su encabezado con el atributo data-label.
export function Table({ headings, rows, caption }) {
  return (
    <div className="exam-table-wrap">
      <table className="exam-table">
        {caption && <caption>{caption}</caption>}
        <thead><tr>{headings.map(heading => <th key={heading} scope="col">{heading}</th>)}</tr></thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => <td key={cellIndex} data-label={headings[cellIndex]}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Mistakes({ items }) {
  return (
    <div className="exam-mistakes">
      {items.map(item => (
        <div key={item.wrong} className="exam-mistake">
          <div className="exam-mistake-wrong">❌ {item.wrong}</div>
          <div className="exam-mistake-right">✅ {item.right}</div>
          <div className="exam-mistake-note">💡 {item.note}</div>
        </div>
      ))}
    </div>
  );
}

export function Steps({ items }) {
  return (
    <ol className="exam-steps">
      {items.map(([number, title, detail]) => (
        <li key={number}>
          <span className="exam-step-number" aria-hidden="true">{number}</span>
          <div>
            <div className="exam-step-title">{title}</div>
            <div className="exam-step-detail">{detail}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

// Fórmula con las piezas de colores del resto de la página.
export function Pattern({ label, parts, example, esp }) {
  return (
    <div className="exam-pattern">
      {label && <div className="exam-pattern-label">{label}</div>}
      <div className="exam-pattern-parts">
        {parts.map((part, index) => (
          <span key={index} className="exam-pattern-part">
            {index > 0 && <span className="exam-plus">+</span>}
            {part.r ? <Token t={part.t} r={part.r} /> : <span className="exam-pattern-plain">{part.t}</span>}
          </span>
        ))}
      </div>
      {example && <div className="exam-pattern-example"><strong>{example}</strong>{esp && <span> — {esp}</span>}</div>}
    </div>
  );
}

// Tarjetas de reglas de ortografía: [raíz, terminación, palabra original].
export function SpellingRules({ rules }) {
  return (
    <div className="exam-rule-grid">
      {rules.map(rule => (
        <div key={rule.rule} className="exam-rule-card" style={{ borderTopColor: rule.color }}>
          <div className="exam-rule-title" style={{ color: rule.color }}>{rule.rule}</div>
          <div className="exam-rule-desc">{rule.desc}</div>
          <div className="exam-rule-words">
            {rule.words.map(([stem, ending, original]) => (
              <span key={stem + ending} className="exam-rule-word">
                {original && <em>{original} → </em>}{stem}<b style={{ color: rule.color }}>{ending}</b>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Callout({ icon = "💡", title, children, tone = "info" }) {
  return (
    <div className={`exam-callout exam-callout-${tone}`}>
      <div className="exam-callout-icon" aria-hidden="true">{icon}</div>
      <div>
        {title && <div className="exam-callout-title">{title}</div>}
        <div className="exam-text">{children}</div>
      </div>
    </div>
  );
}
