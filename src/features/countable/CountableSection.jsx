import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { NOUN_GROUPS, QUESTIONS, QUANTIFIERS, UNITS } from "./data";

const COLOR = "#F59E0B";
const card = { background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function CountableSection() {
  return (
    <div>
      <TopicHeading topicId="countable" />
      <p style={{ ...card, ...text }}>💡 Un <strong>noun</strong> es un sustantivo: nombra personas, animales, cosas o ideas. Para expresar cantidades en inglés, primero identifica si lo usas como <strong>countable</strong> (contable) o <strong>uncountable</strong> (incontable).</p>

      <SectionTitle color={COLOR}>🧺 ¿Se puede contar directamente?</SectionTitle>
      {NOUN_GROUPS.map(group => (
        <RuleBox key={group.title} icon="📖" rule={group.title} color={COLOR}>
          <p style={text}>{group.rule}</p>
          {group.examples.map(([en, es]) => (
            <div key={en} style={{ marginBottom: "10px" }}>
              <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
              <div style={translation}>🇲🇽 {es}</div>
            </div>
          ))}
        </RuleBox>
      ))}

      <RuleBox icon="🔤" rule="A / an y el plural" color={COLOR}>
        <p style={text}>Usa <strong>a</strong> antes de un sonido consonántico: a taco, a guava. Usa <strong>an</strong> antes de un sonido vocálico: an egg, an apple. Importa el sonido, no solo la letra: <span lang="en">a university, an hour</span>.</p>
        <p style={text}>Un contable singular normalmente necesita un determinante: <span lang="en">I want a taco</span>, no «I want taco». En plural: taco → tacos, egg → eggs, guava → guavas, slice → slices. No uses a/an con plurales ni directamente con incontables: <strong>some water</strong>, no «a water» para referirte al agua en general.</p>
        <RelatedTopic levelId="basico2" topicId="articles" label="Repasar a, an, the y la ausencia de artículo" />
      </RuleBox>

      <SectionTitle color={COLOR}>❓ How many vs. how much</SectionTitle>
      <p style={text}><strong>How many</strong> pregunta «¿cuántos/as?» con un contable plural. <strong>How much</strong> pregunta «¿cuánto/a?» con un incontable. Con he/she/it usa <strong>does</strong> y conserva el verbo base: <span lang="en">does she need</span>, no «does she needs».</p>
      {QUESTIONS.map(([q, a, es]) => (
        <div key={q} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div lang="en" style={{ color: COLOR, fontSize: "14px", fontWeight: 700 }}>{q}</div>
          <div lang="en" style={text}>→ {a}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <RuleBox icon="💬" rule="Con to be no necesitas do/does" color={COLOR}>
        <p style={text}><span lang="en">How many apples are there?</span> = ¿Cuántas manzanas hay? <span lang="en">How much water is there?</span> = ¿Cuánta agua hay? Usa <strong>are</strong> con plurales e <strong>is</strong> con incontables.</p>
        <p style={text}>Para preguntar un precio también usamos <strong>how much</strong>, aunque el objeto sea contable: <span lang="en">How much is this taco?</span> = ¿Cuánto cuesta este taco?</p>
      </RuleBox>

      <SectionTitle color={COLOR}>🥛 Cuantificadores: cantidades sin un número exacto</SectionTitle>
      {QUANTIFIERS.map(([name, rule, en, es]) => (
        <RuleBox key={name} icon="⚖️" rule={name} color={COLOR}>
          <p style={text}>{rule}</p>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </RuleBox>
      ))}
      <p style={text}>También usamos <strong>some</strong> en ofrecimientos y peticiones: <span lang="en">Would you like some water?</span> (¿Quieres un poco de agua?) y <span lang="en">Can I have some juice?</span> (¿Me das un poco de jugo?).</p>

      <SectionTitle color={COLOR}>📏 Cómo medir lo incontable</SectionTitle>
      <p style={text}>Cuenta el recipiente, la porción o la unidad: <strong>número + unidad + of + incontable</strong>. La unidad lleva el plural; el incontable conserva su forma.</p>
      {UNITS.map(([en, es]) => (
        <div key={en} style={card}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}

      <RuleBox icon="🔎" rule="Aclaraciones de los apuntes y errores frecuentes" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><strong>Lentils y noodles sí son contables:</strong> one lentil / two lentils; one noodle / two noodles. En cambio, rice y spaghetti son incontables. Puedes contar <span lang="en">two grains of rice</span> (dos granos de arroz).</li>
          <li><strong>Money es incontable:</strong> some money, no «three moneys». Para unidades usa three coins, three bills o three dollars.</li>
          <li><strong>No basta con pensar en líquidos, granos o ideas:</strong> la clasificación depende de cada palabra y de su uso en inglés. Aprende el sustantivo con un ejemplo.</li>
          <li><strong>Cake puede tener ambos usos:</strong> <span lang="en">some cake</span> = un poco de pastel (cantidad); <span lang="en">a cake / two cakes</span> = un pastel / dos pasteles completos; <span lang="en">two slices of cake</span> = dos rebanadas.</li>
          <li><strong>Concordancia:</strong> <span lang="en">The water is cold. The eggs are fresh.</span> (El agua está fría. Los huevos están frescos.)</li>
        </ul>
      </RuleBox>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Haz una lista para preparar el desayuno: incluye dos alimentos contables, dos incontables y dos unidades de medida. Después formula una pregunta con how many y otra con how much. Comprueba lo aprendido abajo o abre el Quiz para practicar con retroalimentación.</p>
    </div>
  );
}
