import TopicHeading from "../../components/TopicHeading";
import RelatedTopic from "../../components/RelatedTopic";
import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import { FOOD_GROUPS, FOOD_ADJECTIVES, EXTRA_WORDS, CONVERSATION } from "./data";

const COLOR = "#22C55E";
const card = { background: "var(--surface, #1e293b)", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" };
const text = { color: "#cbd5e1", fontSize: "14px", lineHeight: 1.8 };
const translation = { color: "#94a3b8", fontSize: "13px", marginTop: "4px" };

export default function FoodGroupsSection() {
  return (
    <div>
      <TopicHeading topicId="foodGroups" />
      <p style={{ ...card, ...text }}>🍽️ <strong>Food groups</strong> significa «grupos de alimentos». Aprende los cinco grupos del pizarrón y usa el vocabulario para hablar de lo que comes, lo que te gusta y cómo sabe la comida.</p>

      <SectionTitle color={COLOR}>🛒 Los cinco grupos del pizarrón</SectionTitle>
      <p style={text}>Esta es la clasificación de la actividad de clase. Los alimentos pueden aportar varios nutrientes y aparecer en otras categorías según el sistema: la mantequilla es de origen lácteo, pero aquí se agrupa con las grasas; las papas y el maíz también aportan carbohidratos, y los frijoles son legumbres que aportan proteína.</p>
      {FOOD_GROUPS.map(group => (
        <RuleBox key={group.name} icon={group.icon} rule={`${group.name} — ${group.translation}`} color={COLOR}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "8px", margin: "12px 0" }}>
            {group.foods.map(([en, es]) => (
              <div key={en} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "10px" }}>
                <div lang="en" style={{ ...text, fontWeight: 700 }}>{en}</div>
                <div style={translation}>🇲🇽 {es}</div>
              </div>
            ))}
          </div>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{group.example}</div>
          <div style={translation}>🇲🇽 {group.meaning}</div>
        </RuleBox>
      ))}
      <RelatedTopic levelId="basico1" topicId="fruits" label="Ampliar el vocabulario de frutas y verduras" />

      <SectionTitle color={COLOR}>😋 Adjetivos para describir la comida</SectionTitle>
      {FOOD_ADJECTIVES.map(([en, es, example, meaning]) => (
        <div key={en} style={{ ...card, borderLeft: `3px solid ${COLOR}` }}>
          <div style={{ ...text, fontWeight: 700 }}><span lang="en">{en}</span> — {es}</div>
          <div lang="en" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {meaning}</div>
        </div>
      ))}
      <RuleBox icon="💬" rule="Describe sabores y expresa opiniones con amabilidad" color={COLOR}>
        <p style={text}><strong>Disgusting</strong> expresa un rechazo fuerte. Para decir que algo no te gusta de forma más amable: <span lang="en">It's not my favorite</span> (No es mi favorito) o <span lang="en">I don't really like it</span> (No me gusta mucho).</p>
        <p style={text}><strong>Sweet</strong> y <strong>spicy</strong> describen sabores, no grupos alimenticios. <strong>Healthy</strong> y <strong>unhealthy</strong> hablan de salud: la cantidad, la preparación y el conjunto de la alimentación importan. Que algo sea dulce no lo vuelve automáticamente poco saludable.</p>
        <p style={text}>El adjetivo puede ir antes del sustantivo o después de to be: <span lang="en">sweet food → This food is sweet</span>. No cambia en plural: <span lang="en">sweet apples</span>, no «sweets apples». Usa <strong>spicy</strong> para picante; <strong>hot</strong> también puede significar caliente.</p>
        <RelatedTopic levelId="basico2" topicId="adjectives" label="Repasar adjetivos y su posición" />
      </RuleBox>

      <SectionTitle color={COLOR}>🥪 Más palabras útiles</SectionTitle>
      {EXTRA_WORDS.map(([en, es, example, meaning]) => (
        <div key={en} style={card}>
          <div style={{ ...text, fontWeight: 700 }}><span lang="en">{en}</span> — {es}</div>
          <div lang="en" style={text}>{example}</div>
          <div style={translation}>🇲🇽 {meaning}</div>
        </div>
      ))}
      <p style={text}><strong>Snack</strong> es un sustantivo, no un sabor ni un grupo de alimentos: puede ser una fruta, yogur u otra comida pequeña entre comidas. <strong>Try</strong> es el verbo «probar»: <span lang="en">Try this food</span> (Prueba esta comida).</p>

      <SectionTitle color={COLOR}>🧺 Conecta con contables e incontables</SectionTitle>
      <RuleBox icon="🔢" rule="Cuenta unidades o expresa una cantidad" color={COLOR}>
        <ul style={{ ...text, paddingLeft: "20px" }}>
          <li><strong>Contables:</strong> an apple → two apples; a banana → three bananas; a potato → four potatoes; an egg → two eggs; a bean → some beans.</li>
          <li><strong>Incontables en su uso como alimentos o sustancias:</strong> milk, cheese, yogurt, ice cream, butter, chocolate, soda, oil, corn, bread, pasta, cereal y rice. Usa some o a little: <span lang="en">some pasta, a little oil</span>.</li>
          <li><strong>Porciones:</strong> a slice of bread (una rebanada de pan), a bowl of cereal (un tazón de cereal), a piece of cheese (un trozo de queso), a scoop of ice cream (una bola de helado).</li>
          <li><strong>Chicken y fish:</strong> <span lang="en">some chicken / some fish</span> para la carne; <span lang="en">a chicken / two chickens</span> para los animales. Para peces individuales: <span lang="en">one fish / two fish</span>.</li>
          <li><strong>El contexto cambia el uso:</strong> <span lang="en">some chocolate</span> es una cantidad de chocolate; <span lang="en">two chocolates</span> son dos bombones. <span lang="en">Two sodas</span> puede significar dos porciones o envases de refresco al pedir.</li>
        </ul>
        <RelatedTopic levelId="basico4" topicId="countable" label="Repasar how many, how much y las unidades de medida" />
      </RuleBox>

      <SectionTitle color={COLOR}>🗣️ Conversación: gustos y desayuno</SectionTitle>
      {CONVERSATION.map(([en, es], index) => (
        <div key={en} style={card}>
          <div lang="en" style={{ ...text, fontWeight: 700 }}>{index % 2 === 0 ? "A" : "B"}: {en}</div>
          <div style={translation}>🇲🇽 {es}</div>
        </div>
      ))}
      <p style={text}>Para responder a <span lang="en">Do you like…?</span> usa <span lang="en">Yes, I do / No, I don't</span>. Aquí <strong>have</strong> puede significar comer o tomar: <span lang="en">have breakfast</span> = desayunar. En <span lang="en">Can I have…?</span>, can se usa para hacer una petición.</p>

      <SectionTitle color={COLOR}>🎯 Practica lo aprendido</SectionTitle>
      <p style={text}>Elige un alimento de cada grupo, escribe su nombre en inglés y describe dos con un adjetivo. Luego crea un desayuno usando un alimento contable y uno incontable; pregunta a otra persona si le gusta. Usa la autoevaluación de abajo y el Quiz para practicar vocabulario y oraciones.</p>
    </div>
  );
}
