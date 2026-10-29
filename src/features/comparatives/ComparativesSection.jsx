import { useState } from "react";
import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import Formula from "../../components/Formula";
import Legend from "../../components/Legend";
import ExampleCard from "../../components/ExampleCard";
import FilterableList from "../../components/FilterableList";
import { SHORT_EXAMPLES, LONG_EXAMPLES, SPELLING_RULES, IRREGULARS, LESS_EXAMPLES, EQUAL_EXAMPLES, QUESTIONS, INTENSIFIERS, PAST_EXAMPLES, ADJECTIVE_BANK, RULE_LABELS } from "./data";

const COLOR = "#60A5FA";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

// Sin acentos ni mayúsculas, para buscar «facil» y encontrar «fácil».
const normalize = value => value.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

function BankTable({ rows }) {
  if (rows.length === 0) return <p style={{ ...text, padding: "12px 4px" }}>Sin resultados.</p>;
  return rows.map(([word, comparative, esp, ruleKey], i) => (
    <div key={word} style={{ ...card, borderLeft: `3px solid ${COLOR}`, background: i % 2 === 0 ? "var(--surface, #1e293b)" : "var(--surface-deep, #0f172a)" }}>
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px 10px" }}>
        <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>
          {word} → {comparative}
        </div>
        <span style={{
          color: COLOR, background: `${COLOR}22`, fontWeight: 700,
          padding: "2px 9px", borderRadius: "20px", fontSize: "11px", whiteSpace: "nowrap",
        }}>
          {RULE_LABELS[ruleKey]}
        </span>
      </div>
      <div style={translation}>🇲🇽 {esp}</div>
    </div>
  ));
}

export default function ComparativesSection() {
  const [filter, setFilter] = useState("");
  const q = normalize(filter.trim());
  const filtered = ADJECTIVE_BANK.filter(([word, comparative, esp]) =>
    normalize(word).includes(q) || normalize(comparative).includes(q) || normalize(esp).includes(q)
  );

  return (
    <div>
      <TopicHeading topicId="comparatives" />
      <div style={{ ...card, ...text }}>
        💡 Los comparativos (<span lang="en">comparatives</span>) comparan <strong>dos</strong> personas, animales o
        cosas. En español decimos «más … que»; en inglés la forma depende del largo del adjetivo: si es corto se
        agrega <strong>-er</strong> + <span lang="en">than</span> (<span lang="en">bigger than</span>) y si es largo
        se usa <strong>more</strong> + adjetivo + <span lang="en">than</span> (<span lang="en">more dangerous than</span>).
      </div>

      <Legend roles={["subject", "verb_be", "adj", "comp"]} />

      <RuleBox icon="🔑" rule="¿Corto o largo? Cuenta las sílabas" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>
            <strong>Corto:</strong> una sílaba (<span lang="en">fast, big, cute</span>) o dos sílabas que terminan
            en -y (<span lang="en">happy, sunny</span>) → adjetivo + <strong>-er</strong> + <span lang="en">than</span>.
          </li>
          <li>
            <strong>Largo:</strong> dos o más sílabas que no terminan en -y (<span lang="en">famous, dangerous, expensive</span>) →{" "}
            <strong>more</strong> + adjetivo + <span lang="en">than</span>.
          </li>
        </ul>
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y opuestos" />
      </RuleBox>

      <SectionTitle color={COLOR}>📏 Adjetivos cortos: -er + than</SectionTitle>
      <Formula
        label="Adjetivo corto"
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "am / is / are", r: "verb_be" },
          { t: "adjetivo corto", r: "adj" },
          { t: "-er", r: "comp" },
          { t: "than", r: "comp" },
          { t: "persona, animal o cosa", r: "subject" },
        ]}
        example={[
          { t: "A rabbit", r: "subject" },
          { t: "is", r: "verb_be" },
          { t: "bigger", r: "adj" },
          { t: "than", r: "comp" },
          { t: "a hamster.", color: "#94a3b8" },
        ]}
      />
      {SHORT_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>✍️ Cómo se escribe el comparativo corto</SectionTitle>
      {SPELLING_RULES.map(rule => (
        <div key={rule.title} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{rule.title}</div>
          <div style={text}>{rule.rule}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
            {rule.pairs.map(([base, comparative]) => (
              <span key={base} lang="en" style={{
                color: "#e2e8f0", background: "var(--surface-deep, #0f172a)",
                border: `1px solid ${COLOR}55`, borderRadius: "20px",
                padding: "3px 10px", fontSize: "13px", fontWeight: 700,
              }}>
                {base} → {comparative}
              </span>
            ))}
          </div>
          {rule.note && <div style={translation}>💡 {rule.note}</div>}
        </div>
      ))}

      <SectionTitle color={COLOR}>⭐ Comparativos irregulares</SectionTitle>
      {IRREGULARS.map(([base, comparative, esp]) => (
        <div key={base} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, color: "#f8fafc", fontWeight: 700 }}>{base} → {comparative}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}
      <RuleBox icon="📍" rule="Farther y further" color={COLOR}>
        <p style={text}>
          Los dos significan «más lejos»: <span lang="en">Mexico City is farther than Puebla.</span>{" "}
          <span lang="en">Further</span> también se usa en sentido figurado:{" "}
          <span lang="en">further information</span> = más información.
        </p>
      </RuleBox>

      <SectionTitle color={COLOR}>📐 Adjetivos largos: more + adjetivo + than</SectionTitle>
      <Formula
        label="Adjetivo largo"
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "am / is / are", r: "verb_be" },
          { t: "more", r: "comp" },
          { t: "adjetivo largo", r: "adj" },
          { t: "than", r: "comp" },
          { t: "persona, animal o cosa", r: "subject" },
        ]}
        example={[
          { t: "Crocodiles", r: "subject" },
          { t: "are", r: "verb_be" },
          { t: "more", r: "comp" },
          { t: "dangerous", r: "adj" },
          { t: "than", r: "comp" },
          { t: "panthers.", color: "#94a3b8" },
        ]}
      />
      {LONG_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>➕➖ More y less</SectionTitle>
      <RuleBox icon="⚖️" rule="More = más (+), less = menos (−)" color={COLOR}>
        <p style={text}>
          <strong>More</strong> sube la cualidad y <strong>less</strong> la baja:{" "}
          <strong>less</strong> + adjetivo + <span lang="en">than</span> = «menos … que».{" "}
          <span lang="en">Less</span> se usa sobre todo con adjetivos largos; con los cortos suena más natural{" "}
          <span lang="en">not as … as</span>: <span lang="en">A hamster isn't as big as a rabbit.</span>
        </p>
      </RuleBox>
      <Formula
        label="Menos que"
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "am / is / are", r: "verb_be" },
          { t: "less", r: "comp" },
          { t: "adjetivo", r: "adj" },
          { t: "than", r: "comp" },
          { t: "persona, animal o cosa", r: "subject" },
        ]}
      />
      {LESS_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>🟰 Tan … como: as … as</SectionTitle>
      <Formula
        label="Igualdad"
        parts={[
          { t: "Sujeto", r: "subject" },
          { t: "am / is / are (not)", r: "verb_be" },
          { t: "as", r: "comp" },
          { t: "adjetivo", r: "adj" },
          { t: "as", r: "comp" },
          { t: "persona, animal o cosa", r: "subject" },
        ]}
      />
      <p style={text}>
        Con <span lang="en">as … as</span> el adjetivo no cambia (✗ <span lang="en">as taller as</span>).
        En negativa significa «no tan … como».
      </p>
      {EQUAL_EXAMPLES.map((ex, i) => <ExampleCard key={i} pts={ex.pts} esp={ex.esp} />)}

      <SectionTitle color={COLOR}>❓ Preguntas con comparativos</SectionTitle>
      <RuleBox icon="💬" rule="Pregunta con am/is/are, which o who" color={COLOR}>
        <p style={text}>
          Coloca <strong>am/is/are</strong> antes del sujeto:{" "}
          <span lang="en">Is a rabbit bigger than a hamster?</span> Responde con to be:{" "}
          <span lang="en">Yes, it is.</span> / <span lang="en">No, they aren't.</span> Para elegir entre dos usa{" "}
          <strong>which</strong> con cosas y animales, y <strong>who</strong> con personas.
        </p>
        <RelatedTopic levelId="basico2" topicId="whQuestions" label="Repasar las preguntas con WH" />
      </RuleBox>
      {QUESTIONS.map(([q, a, esp]) => (
        <div key={q} style={card}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{q}</div>
          <div lang="en" style={text}>→ {a}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>⚠️ Errores comunes</SectionTitle>
      <RuleBox icon="🚫" rule="Evita estos errores" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li>
            No mezcles <span lang="en">more</span> con -er: ✗ <span lang="en">more bigger</span> → ✓{" "}
            <span lang="en">bigger</span>; ✗ <span lang="en">more better</span> → ✓ <span lang="en">better</span>.
          </li>
          <li>
            <span lang="en">Than</span>, no <span lang="en">that</span> ni <span lang="en">then</span>: ✗{" "}
            <span lang="en">bigger that</span> → ✓ <span lang="en">bigger than</span>.{" "}
            <span lang="en">Then</span> significa «entonces».
          </li>
          <li>
            El adjetivo no lleva -s en plural: ✗ <span lang="en">Rabbits are biggers</span> → ✓{" "}
            <span lang="en">Rabbits are bigger than hamsters.</span>
          </li>
          <li>
            Después de <span lang="en">than</span>, en el habla diaria se usa <span lang="en">me, him, her, us</span> o{" "}
            <span lang="en">them</span>: <span lang="en">Leslie is taller than me.</span> También es correcto:{" "}
            <span lang="en">Leslie is taller than I am.</span>
          </li>
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>📊 ¿Cuánto más? much, a lot, a little</SectionTitle>
      <p style={text}>
        Antes del comparativo puedes decir cuánta diferencia hay: <span lang="en">much</span> /{" "}
        <span lang="en">a lot</span> (mucho) y <span lang="en">a little</span> (un poco).
      </p>
      {INTENSIFIERS.map(([en, esp]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}

      <SectionTitle color={COLOR}>⏪ Comparativos en pasado</SectionTitle>
      <p style={text}>
        Cambia <span lang="en">am/is/are</span> por <span lang="en">was/were</span>; el comparativo no cambia.
      </p>
      {PAST_EXAMPLES.map(([en, esp]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: "#f8fafc", fontSize: "14px", fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {esp}</div>
        </div>
      ))}
      <RelatedTopic levelId="basico5" topicId="simplePast" label="Repasar was y were en Pasado simple" />

      <SectionTitle color={COLOR}>📋 Tabla de comparativos</SectionTitle>
      <FilterableList
        placeholder="🔍 Busca: big, happy, feliz, more..."
        value={filter}
        onChange={setFilter}
      >
        <BankTable rows={filtered} />
      </FilterableList>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>
        Compara a dos personas de tu familia, dos animales y dos cosas de tu casa: usa un adjetivo corto, uno largo
        y un irregular. Después pregúntale a otra persona:{" "}
        <span lang="en">Who is taller, you or your brother?</span> Usa el Quiz para repasar las reglas.
      </p>
    </div>
  );
}
