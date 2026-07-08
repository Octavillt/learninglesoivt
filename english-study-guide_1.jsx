import { useState } from "react";

// ── COLORES ───────────────────────────────────────────────────────────────────
const C = {
  subject: { fg: "#fbbf24", bg: "#3d2000" },
  verb_be: { fg: "#60a5fa", bg: "#0c2a50" },
  verb:    { fg: "#4ade80", bg: "#052e16" },
  ing:     { fg: "#f472b6", bg: "#3b0764" },
  prep:    { fg: "#fb923c", bg: "#3d1500" },
  demo:    { fg: "#c084fc", bg: "#2e1065" },
  neg:     { fg: "#f87171", bg: "#450a0a" },
  ending:  { fg: "#34d399", bg: "#022c22" },
};
const LABELS = {
  subject: "Sujeto", verb_be: "Verb To Be", verb: "Verbo",
  ing: "-ING", prep: "Preposición", demo: "Demostrativo",
  neg: "Negación", ending: "Terminación plural",
};

const su = t => ({ t, r: "subject" });
const vb = t => ({ t, r: "verb_be" });
const vv = t => ({ t, r: "verb" });
const ig = t => ({ t, r: "ing" });
const pp = t => ({ t, r: "prep" });
const dm = t => ({ t, r: "demo" });
const no = t => ({ t, r: "neg" });

// ── COMPONENTES ───────────────────────────────────────────────────────────────
const Tok = ({ t, r }) =>
  r ? (
    <span style={{ color: C[r].fg, background: C[r].bg, fontWeight: 800, padding: "2px 7px", borderRadius: "6px", margin: "0 1px", fontSize: "15px" }}>
      {t}
    </span>
  ) : <span style={{ fontSize: "15px" }}>{t}</span>;

const Sent = ({ pts }) => (
  <span>
    {pts.map((x, i) =>
      typeof x === "string" ? <span key={i} style={{ fontSize: "15px" }}>{x}</span> : <Tok key={i} t={x.t} r={x.r} />
    )}
  </span>
);

const Legend = ({ roles }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "14px", padding: "10px 14px", background: "#0f172a", borderRadius: "10px", border: "1px solid #1e293b" }}>
    <span style={{ color: "#475569", fontSize: "11px", fontWeight: 700, alignSelf: "center", marginRight: "4px" }}>COLORES</span>
    {roles.map(r => (
      <span key={r} style={{ display: "inline-flex", alignItems: "center", gap: "4px", background: C[r].bg, border: `1px solid ${C[r].fg}55`, borderRadius: "20px", padding: "3px 9px" }}>
        <span style={{ width: "9px", height: "9px", borderRadius: "2px", background: C[r].fg, flexShrink: 0 }} />
        <span style={{ color: C[r].fg, fontSize: "11px", fontWeight: 700 }}>{LABELS[r]}</span>
      </span>
    ))}
  </div>
);

// Tarjeta de ejemplo con traducción
const EC = ({ pts, esp }) => (
  <div style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
    <div style={{ lineHeight: 2 }}><Sent pts={pts} /></div>
    {esp && (
      <div style={{ color: "#64748b", fontSize: "13px", marginTop: "4px", paddingTop: "6px", borderTop: "1px solid #334155" }}>
        🇲🇽 <em>{esp}</em>
      </div>
    )}
  </div>
);

// Caja de fórmula con partes coloreadas
const Formula = ({ label, parts, color, example }) => (
  <div style={{ background: "#0f172a", border: `1px solid ${color || "#334155"}`, borderRadius: "10px", padding: "14px 16px", marginBottom: "10px" }}>
    {label && <div style={{ color: color || "#94a3b8", fontWeight: 700, fontSize: "12px", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>}
    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "6px", lineHeight: 2 }}>
      {parts.map((p, i) => (
        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          {i > 0 && <span style={{ color: "#475569", fontWeight: 700 }}>+</span>}
          {p.r ? <Tok t={p.t} r={p.r} /> : <span style={{ color: p.color || "#f8fafc", fontWeight: 700, fontSize: "15px" }}>{p.t}</span>}
        </span>
      ))}
    </div>
    {example && (
      <div style={{ marginTop: "8px", paddingTop: "8px", borderTop: "1px solid #1e293b", display: "flex", alignItems: "center", gap: "6px", flexWrap: "wrap", lineHeight: 2 }}>
        <span style={{ color: "#475569", fontSize: "12px", fontWeight: 700 }}>Ej:</span>
        {example.map((p, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
            {i > 0 && <span style={{ color: "#475569" }}>+</span>}
            {p.r ? <Tok t={p.t} r={p.r} /> : <span style={{ color: "#94a3b8", fontSize: "14px" }}>{p.t}</span>}
          </span>
        ))}
      </div>
    )}
  </div>
);

const ST = ({ color, children }) => (
  <h3 style={{ color: color || "#94a3b8", borderLeft: `3px solid ${color || "#475569"}`, paddingLeft: "10px", margin: "22px 0 10px", fontSize: "15px", fontWeight: 700 }}>
    {children}
  </h3>
);

// Caja de regla destacada
const RuleBox = ({ icon, rule, color, children }) => (
  <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "10px", borderLeft: `4px solid ${color || "#475569"}` }}>
    <div style={{ color: color || "#94a3b8", fontWeight: 800, fontSize: "14px", marginBottom: "8px" }}>{icon} {rule}</div>
    {children}
  </div>
);

// ── DATOS ─────────────────────────────────────────────────────────────────────
const VERBS = [
  ["Answer","Contestar"],["Ask","Preguntar"],["Be","Ser / Estar"],["Break","Romper"],
  ["Buy","Comprar"],["Carry","Cargar"],["Clean","Limpiar"],["Close","Cerrar"],
  ["Cook","Cocinar"],["Come","Venir"],["Cry","Llorar"],["Cut","Cortar"],
  ["Dance","Bailar"],["Do","Hacer"],["Draw","Dibujar"],["Drink","Beber"],
  ["Drive","Manejar"],["Eat","Comer"],["Erase","Borrar"],["Find","Encontrar"],
  ["Fly","Volar"],["Get up","Levantarse"],["Give","Dar"],["Go","Ir"],
  ["Have","Tener"],["Help","Ayudar"],["Jump","Saltar"],["Learn","Aprender"],
  ["Listen to","Escuchar"],["Live","Vivir"],["Look up","Buscar"],["Make","Hacer"],
  ["Open","Abrir"],["Paint","Pintar"],["Pay","Pagar"],["Push","Empujar"],
  ["Play","Jugar"],["Read","Leer"],["Run","Correr"],["See","Ver"],
  ["Sell","Vender"],["Sing","Cantar"],["Sit","Sentarse"],["Sleep","Dormir"],
  ["Speak","Hablar"],["Swim","Nadar"],["Study","Estudiar"],["Take","Tomar"],
  ["Teach","Enseñar"],["Think","Pensar"],["Visit","Visitar"],["Want","Querer"],
  ["Walk","Caminar"],["Wake up","Despertarse"],["Wash","Lavar"],["Watch","Ver / Mirar"],
  ["Work","Trabajar"],["Write","Escribir"],
];

const VERB_SENTENCES = [
  { pts: [su("I"), " ", vv("eat"), " an apple."], esp: "Yo como una manzana." },
  { pts: [su("She"), " ", vv("reads"), " a book."], esp: "Ella lee un libro." },
  { pts: [su("He"), " ", vv("sleeps"), " a lot."], esp: "Él duerme mucho." },
  { pts: [su("We"), " ", vv("play"), " soccer."], esp: "Nosotros jugamos fútbol." },
  { pts: [su("They"), " ", vv("study"), " English."], esp: "Ellos estudian inglés." },
  { pts: [su("I"), " ", vv("walk"), " to school."], esp: "Yo camino a la escuela." },
  { pts: [su("She"), " ", vv("sings"), " a song."], esp: "Ella canta una canción." },
  { pts: [su("He"), " ", vv("runs"), " fast."], esp: "Él corre rápido." },
];

const PLURAL_RULES = [
  { rule: "1. Consonante normal → + S", color: "#34d399", words: [["cat","s","gato"],["book","s","libro"],["car","s","carro"],["dog","s","perro"],["apple","s","manzana"]] },
  { rule: "2. Termina en s, sh, ch, x, z → + ES", color: "#60a5fa", words: [["box","es","caja"],["watch","es","reloj"],["bus","es","autobús"],["dish","es","plato"]] },
  { rule: "3. Consonante + Y → quita Y, pon IES", color: "#f472b6", words: [["cherr","ies","cherry → cereza"],["cit","ies","city → ciudad"],["bab","ies","baby → bebé"]] },
  { rule: "4. Vocal + Y → solo agrega S", color: "#fbbf24", words: [["boy","s","niño"],["toy","s","juguete"],["day","s","día"]] },
  { rule: "5. Consonante + O → + ES", color: "#fb923c", words: [["potato","es","papa"],["tomato","es","jitomate"]] },
  { rule: "6. Vocal + O → + S", color: "#c084fc", words: [["shampoo","s","shampoo"],["radio","s","radio"]] },
  { rule: "7. Termina en F / FE → cambia a VES", color: "#f87171", words: [["wol","ves","wolf → lobo"],["wi","ves","wife → esposa"],["lea","ves","leaf → hoja"]] },
  { rule: "8. Termina en FF → solo + S", color: "#94a3b8", words: [["cliff","s","acantilado"]] },
];

const IRREG_SAME = [["fish → fish","pez → peces"],["sheep → sheep","oveja → ovejas"],["deer → deer","venado → venados"]];
const IRREG_DIFF = [["man → men","hombre → hombres"],["woman → women","mujer → mujeres"],["child → children","niño → niños"],["tooth → teeth","diente → dientes"],["foot → feet","pie → pies"],["mouse → mice","ratón → ratones"]];

const TOBE_AFF = [
  { pts: [su("I"), " ", vb("am"), " a student."], esp: "Yo soy estudiante." },
  { pts: [su("I"), " ", vb("am"), " happy."], esp: "Yo estoy feliz." },
  { pts: [su("You"), " ", vb("are"), " my friend."], esp: "Tú eres mi amigo/a." },
  { pts: [su("He"), " ", vb("is"), " a teacher."], esp: "Él es maestro." },
  { pts: [su("She"), " ", vb("is"), " a student."], esp: "Ella es estudiante." },
  { pts: [su("It"), " ", vb("is"), " a big house."], esp: "Es una casa grande." },
  { pts: [su("We"), " ", vb("are"), " in school."], esp: "Nosotros estamos en la escuela." },
  { pts: [su("They"), " ", vb("are"), " my friends."], esp: "Ellos son mis amigos." },
];

const TOBE_NEG = [
  { pts: [su("I"), " ", vb("am"), " ", no("not"), " sad."], esp: "Yo no estoy triste." },
  { pts: [su("You"), " ", vb("are"), " ", no("not"), " late."], esp: "Tú no llegas tarde." },
  { pts: [su("He"), " is", no("n't"), " my teacher."], esp: "Él no es mi maestro." },
  { pts: [su("She"), " is", no("n't"), " happy."], esp: "Ella no está feliz." },
  { pts: [su("It"), " is", no("n't"), " a cat."], esp: "No es un gato." },
  { pts: [su("We"), " are", no("n't"), " in class."], esp: "Nosotros no estamos en clase." },
  { pts: [su("They"), " are", no("n't"), " my friends."], esp: "Ellos no son mis amigos." },
];

const TOBE_INT = [
  { q: [vb("Am"), " ", su("I"), " late?"], a: "Yes, you are. / No, you aren't.", esp: "¿Llego tarde?" },
  { q: [vb("Are"), " ", su("you"), " a student?"], a: "Yes, I am. / No, I'm not.", esp: "¿Eres estudiante?" },
  { q: [vb("Is"), " ", su("he"), " a teacher?"], a: "Yes, he is. / No, he isn't.", esp: "¿Él es maestro?" },
  { q: [vb("Is"), " ", su("she"), " happy?"], a: "Yes, she is. / No, she isn't.", esp: "¿Ella está feliz?" },
  { q: [vb("Are"), " ", su("they"), " your friends?"], a: "Yes, they are. / No, they aren't.", esp: "¿Son tus amigos?" },
  { q: [vb("Is"), " ", su("it"), " a big house?"], a: "Yes, it is. / No, it isn't.", esp: "¿Es una casa grande?" },
];

const DEMO_AFF = [
  { pts: [dm("This"), " ", vb("is"), " an apple."], esp: "Ésta es una manzana. (cerca, 1 cosa)" },
  { pts: [dm("This"), " ", vb("is"), " my book."], esp: "Éste es mi libro. (cerca, 1 cosa)" },
  { pts: [dm("That"), " ", vb("is"), " a car."], esp: "Ése es un carro. (lejos, 1 cosa)" },
  { pts: [dm("That"), " ", vb("is"), " my pencil."], esp: "Ése es mi lápiz. (lejos, 1 cosa)" },
  { pts: [dm("These"), " ", vb("are"), " apples."], esp: "Éstas son manzanas. (cerca, 2+ cosas)" },
  { pts: [dm("These"), " ", vb("are"), " my books."], esp: "Éstos son mis libros. (cerca, 2+ cosas)" },
  { pts: [dm("Those"), " ", vb("are"), " cars."], esp: "Ésos son carros. (lejos, 2+ cosas)" },
  { pts: [dm("Those"), " ", vb("are"), " my friends."], esp: "Ésos son mis amigos. (lejos, 2+ cosas)" },
];

const DEMO_QA = [
  { q: ["What ", vb("is"), " ", dm("this"), "?"], a: ["It ", vb("is"), " a book."], esp: "¿Qué es esto? — Es un libro." },
  { q: ["What ", vb("is"), " ", dm("that"), "?"], a: ["It ", vb("is"), " a car."], esp: "¿Qué es eso? — Es un carro." },
  { q: ["What ", vb("are"), " ", dm("these"), "?"], a: ["They ", vb("are"), " apples."], esp: "¿Qué son éstos? — Son manzanas." },
  { q: ["What ", vb("are"), " ", dm("those"), "?"], a: ["They ", vb("are"), " books."], esp: "¿Qué son ésos? — Son libros." },
];

const DEMO_TRANSFORM = [
  { s: [dm("This"), " ", vb("is"), " a cat."], p: [dm("These"), " ", vb("are"), " cats."], esp: "Este gato → Estos gatos" },
  { s: [dm("That"), " ", vb("is"), " a book."], p: [dm("Those"), " ", vb("are"), " books."], esp: "Ese libro → Esos libros" },
  { s: [dm("This"), " ", vb("is"), " a box."], p: [dm("These"), " ", vb("are"), " boxes."], esp: "Esta caja → Estas cajas" },
  { s: [dm("That"), " ", vb("is"), " my friend."], p: [dm("Those"), " ", vb("are"), " my friends."], esp: "Ese amigo → Esos amigos" },
];

const PREP_EX = [
  { pts: [su("The cat"), " ", vb("is"), " ", pp("in"), " the box."], esp: "El gato está DENTRO DE la caja." },
  { pts: [su("The book"), " ", vb("is"), " ", pp("on"), " the table."], esp: "El libro está SOBRE la mesa." },
  { pts: [su("The ball"), " ", vb("is"), " ", pp("under"), " the chair."], esp: "La pelota está DEBAJO DE la silla." },
  { pts: [su("The dog"), " ", vb("is"), " ", pp("behind"), " the house."], esp: "El perro está DETRÁS DE la casa." },
  { pts: [su("The cat"), " ", vb("is"), " ", pp("in front of"), " the door."], esp: "El gato está ENFRENTE DE la puerta." },
  { pts: [su("The dog"), " ", vb("is"), " ", pp("next to"), " the bowl."], esp: "El perro está AL LADO DEL tazón." },
  { pts: [su("The ball"), " ", vb("is"), " ", pp("between"), " the boxes."], esp: "La pelota está ENTRE las cajas." },
  { pts: [su("The bird"), " ", vb("is"), " ", pp("above"), " the house."], esp: "El pájaro está POR ENCIMA DE la casa." },
];

const PROG_AFF = [
  { pts: [su("He"), " ", vb("is"), " ", vv("play"), ig("ing"), " now."], esp: "Él está jugando ahora." },
  { pts: [su("She"), " ", vb("is"), " ", vv("read"), ig("ing"), " now."], esp: "Ella está leyendo ahora." },
  { pts: [su("I"), " ", vb("am"), " ", vv("eat"), ig("ing"), " right now."], esp: "Yo estoy comiendo ahora mismo." },
  { pts: [su("They"), " ", vb("are"), " ", vv("study"), ig("ing"), " now."], esp: "Ellos están estudiando ahora." },
  { pts: [su("We"), " ", vb("are"), " ", vv("swimm"), ig("ing"), " now."], esp: "Nosotros estamos nadando ahora." },
  { pts: [su("The dog"), " ", vb("is"), " ", vv("runn"), ig("ing"), " now."], esp: "El perro está corriendo ahora." },
  { pts: [su("She"), " ", vb("is"), " ", vv("danc"), ig("ing"), " right now."], esp: "Ella está bailando ahora mismo." },
];

const PROG_NEG = [
  { pts: [su("He"), " ", vb("is"), " ", no("not"), " ", vv("play"), ig("ing"), "."], esp: "Él no está jugando." },
  { pts: [su("She"), " is", no("n't"), " ", vv("read"), ig("ing"), "."], esp: "Ella no está leyendo." },
  { pts: [su("I"), " ", vb("am"), " ", no("not"), " ", vv("eat"), ig("ing"), "."], esp: "Yo no estoy comiendo." },
  { pts: [su("They"), " are", no("n't"), " ", vv("study"), ig("ing"), "."], esp: "Ellos no están estudiando." },
  { pts: [su("We"), " are", no("n't"), " ", vv("swimm"), ig("ing"), "."], esp: "Nosotros no estamos nadando." },
];

const PROG_INT = [
  { q: [vb("Is"), " ", su("he"), " ", vv("play"), ig("ing"), "?"], a: "Yes, he is. / No, he isn't.", esp: "¿Está él jugando?" },
  { q: [vb("Is"), " ", su("she"), " ", vv("read"), ig("ing"), "?"], a: "Yes, she is. / No, she isn't.", esp: "¿Está ella leyendo?" },
  { q: [vb("Am"), " ", su("I"), " ", vv("eat"), ig("ing"), "?"], a: "Yes, you are. / No, you aren't.", esp: "¿Estoy comiendo?" },
  { q: [vb("Are"), " ", su("they"), " ", vv("study"), ig("ing"), "?"], a: "Yes, they are. / No, they aren't.", esp: "¿Están ellos estudiando?" },
];

const ING_RULES = [
  { rule: "Regla 1 — Solo agrega ING", color: "#4ade80", desc: "La mayoría de verbos: solo pones -ING al final 😊", words: [["play","ing"],["eat","ing"],["read","ing"],["sleep","ing"],["talk","ing"],["go","ing"]] },
  { rule: "Regla 2 — Termina en E: quita la E y pon ING", color: "#fbbf24", desc: "Si el verbo termina en E (que no se pronuncia), quítala y pon -ING", words: [["com","ing","come"],["hav","ing","have"],["tak","ing","take"],["danc","ing","dance"],["smil","ing","smile"],["writ","ing","write"]] },
  { rule: "Regla 3 — CVC: dobla la última letra y pon ING", color: "#f472b6", desc: "Verbos cortos con patrón consonante-vocal-consonante: duplica la última letra", words: [["runn","ing","run"],["cutt","ing","cut"],["swimm","ing","swim"],["sitt","ing","sit"],["stopp","ing","stop"]] },
];

const TOPICS = [
  { id: "verbs", label: "📝 Verbos", color: "#7C3AED" },
  { id: "plural", label: "🔢 Plural", color: "#059669" },
  { id: "tobe", label: "✅ Verb To Be", color: "#DC2626" },
  { id: "demonstratives", label: "👆 This / That", color: "#D97706" },
  { id: "prepositions", label: "📍 Preposiciones", color: "#2563EB" },
  { id: "progressive", label: "⚡ Progresivo", color: "#DB2777" },
  { id: "quiz", label: "🎯 Quiz IA", color: "#0f172a" },
];

// ── SECCIONES ─────────────────────────────────────────────────────────────────

function VerbsSection() {
  const [filter, setFilter] = useState("");
  const filtered = VERBS.filter(([en, es]) =>
    en.toLowerCase().includes(filter.toLowerCase()) || es.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h2 style={{ color: "#a78bfa", marginTop: 0 }}>📝 Verbos</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Un <Tok t="verbo" r="verb" /> describe la <strong style={{ color: "#f8fafc" }}>acción</strong> que realiza el <Tok t="sujeto" r="subject" />.
      </div>
      <Legend roles={["subject", "verb"]} />

      <RuleBox icon="📐" rule="Fórmula básica de una oración" color="#a78bfa">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "Verbo", r: "verb" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "reads", r: "verb" }, { t: "a book.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "6px" }}>
          💬 El <strong style={{ color: "#fbbf24" }}>sujeto</strong> es quien hace la acción. El <strong style={{ color: "#4ade80" }}>verbo</strong> es la acción. El complemento es el resto.
        </div>
      </RuleBox>

      <ST color="#a78bfa">🔍 Verbos en oraciones simples</ST>
      {VERB_SENTENCES.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <ST color="#a78bfa">📋 Lista de todos los verbos</ST>
      <input placeholder="🔍 Busca: eat, comer, run..."
        value={filter} onChange={e => setFilter(e.target.value)}
        style={{ width: "100%", padding: "11px 15px", borderRadius: "10px", border: "none", background: "#1e293b", color: "#fff", fontSize: "15px", marginBottom: "10px", boxSizing: "border-box" }}
      />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "5px" }}>
        {filtered.map(([en, es]) => (
          <div key={en} style={{ background: "#1e293b", borderRadius: "7px", padding: "9px 13px", borderLeft: "3px solid #7c3aed", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ color: "#4ade80", fontWeight: 700 }}>{en}</span>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>{es}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PluralSection() {
  return (
    <div>
      <h2 style={{ color: "#34d399", marginTop: 0 }}>🔢 Plural y Singular</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 <strong style={{ color: "#f8fafc" }}>Singular</strong> = 1 cosa &nbsp;|&nbsp; <strong style={{ color: "#f8fafc" }}>Plural</strong> = 2 o más cosas.<br />
        La <Tok t="terminación" r="ending" /> en verde muestra lo que se agrega o cambia.
      </div>
      <Legend roles={["ending"]} />

      <RuleBox icon="🔤" rule="Primero: ¿qué es vocal y qué es consonante?" color="#fbbf24">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "6px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#34d399", fontWeight: 900, fontSize: "22px", letterSpacing: "6px", marginBottom: "6px" }}>A E I O U</div>
            <div style={{ color: "#34d399", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>VOCALES (Vowels)</div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>Solo hay 5. Son las que "suenan solas".</div>
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#f87171", fontWeight: 900, fontSize: "12px", letterSpacing: "1px", marginBottom: "6px", lineHeight: 1.6 }}>B C D F G H J K L M<br/>N P Q R S T V W X Y Z</div>
            <div style={{ color: "#f87171", fontWeight: 700, fontSize: "13px", marginBottom: "4px" }}>CONSONANTES (Consonants)</div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>Son todas las demás letras.</div>
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 14px", marginTop: "8px", color: "#94a3b8", fontSize: "13px" }}>
          💡 Truco fácil: si la letra <strong style={{ color: "#f8fafc" }}>NO</strong> es A, E, I, O ni U → entonces es <strong style={{ color: "#f87171" }}>consonante</strong>.
        </div>
      </RuleBox>

      <RuleBox icon="📐" rule="¿Cómo saber qué regla usar? — Mira la última letra" color="#34d399">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", marginTop: "4px" }}>
          {[
            { cond: "Consonante normal", result: "+ S", ex: "cat → cats", color: "#34d399" },
            { cond: "s, sh, ch, x, z", result: "+ ES", ex: "box → boxes", color: "#60a5fa" },
            { cond: "Consonante + Y", result: "- Y + IES", ex: "baby → babies", color: "#f472b6" },
            { cond: "Vocal + Y", result: "+ S", ex: "boy → boys", color: "#fbbf24" },
            { cond: "Consonante + O", result: "+ ES", ex: "potato → potatoes", color: "#fb923c" },
            { cond: "Vocal + O", result: "+ S", ex: "shampoo → shampoos", color: "#c084fc" },
            { cond: "f / fe", result: "→ VES", ex: "wolf → wolves", color: "#f87171" },
            { cond: "ff", result: "+ S", ex: "cliff → cliffs", color: "#94a3b8" },
          ].map((r, i) => (
            <div key={i} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 12px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
              <span style={{ color: "#94a3b8", fontSize: "12px" }}>Termina en <strong style={{ color: "#e2e8f0" }}>{r.cond}</strong></span>
              <span style={{ color: r.color, fontWeight: 800, fontSize: "13px", whiteSpace: "nowrap" }}>{r.result}</span>
            </div>
          ))}
        </div>
      </RuleBox>

      <ST color="#34d399">📋 Reglas con ejemplos</ST>
      {PLURAL_RULES.map((r, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "9px", borderLeft: `4px solid ${r.color}` }}>
          <div style={{ fontWeight: 700, color: r.color, marginBottom: "10px", fontSize: "14px" }}>{r.rule}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {r.words.map(([base, suf, label], j) => (
              <div key={j} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {label && <div style={{ color: "#475569", fontSize: "11px", marginBottom: "3px" }}>{label}</div>}
                <span style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "16px" }}>{base}</span>
                <span style={{ color: "#34d399", fontWeight: 800, background: "#022c22", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }}>{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ST color="#34d399">⚠️ Irregulares — hay que memorizarlos</ST>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#fbbf24", fontWeight: 700, marginBottom: "10px", fontSize: "13px" }}>✅ No cambian</div>
          {IRREG_SAME.map(([en, es]) => (
            <div key={en} style={{ padding: "6px 0", borderBottom: "1px solid #334155" }}>
              <div style={{ color: "#e2e8f0", fontWeight: 700, fontSize: "14px" }}>{en}</div>
              <div style={{ color: "#64748b", fontSize: "12px" }}>{es}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px" }}>
          <div style={{ color: "#f87171", fontWeight: 700, marginBottom: "10px", fontSize: "13px" }}>⚠️ Cambian completamente</div>
          {IRREG_DIFF.map(([en, es]) => (
            <div key={en} style={{ padding: "6px 0", borderBottom: "1px solid #334155" }}>
              <div style={{ color: "#f87171", fontWeight: 700, fontSize: "13px" }}>{en}</div>
              <div style={{ color: "#64748b", fontSize: "12px" }}>{es}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ToBeSection() {
  return (
    <div>
      <h2 style={{ color: "#f87171", marginTop: 0 }}>✅ Verb To Be — Ser / Estar</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 En español usamos <strong style={{ color: "#f8fafc" }}>ser</strong> y <strong style={{ color: "#f8fafc" }}>estar</strong>. En inglés ambos se dicen con <Tok t="am" r="verb_be" /> / <Tok t="is" r="verb_be" /> / <Tok t="are" r="verb_be" />
      </div>
      <Legend roles={["subject", "verb_be", "neg"]} />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "18px" }}>
        {[
          { subj: "I (yo)", form: "am", esp: "soy / estoy", color: "#f87171" },
          { subj: "He / She / It", form: "is", esp: "es / está", color: "#60a5fa" },
          { subj: "You / We / They", form: "are", esp: "eres / somos / son", color: "#34d399" },
        ].map((r, i) => (
          <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontWeight: 800, fontSize: "13px" }}>{r.subj}</div>
            <div style={{ fontSize: "28px", fontWeight: 900, color: r.color, margin: "6px 0" }}>{r.form}</div>
            <div style={{ color: "#64748b", fontSize: "12px" }}>{r.esp}</div>
          </div>
        ))}
      </div>

      <RuleBox icon="✅" rule="Afirmativo — cómo decir que algo ES o ESTÁ" color="#34d399">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "a student.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 Ella <strong>es</strong> estudiante.</div>
      </RuleBox>
      {TOBE_AFF.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="📖" rule={`¿Por qué se usa "a" o "an"? — El artículo (un / una)`} color="#fbbf24">
        <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px", lineHeight: 1.7 }}>
          En español decimos <strong style={{ color: "#f8fafc" }}>"un"</strong> o <strong style={{ color: "#f8fafc" }}>"una"</strong> antes de una cosa. En inglés se usa <strong style={{ color: "#fbbf24" }}>a</strong> o <strong style={{ color: "#34d399" }}>an</strong>, pero depende de qué letra sigue:
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#fbbf24", fontWeight: 900, fontSize: "28px", marginBottom: "2px" }}>A</div>
            <div style={{ color: "#fbbf24", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de CONSONANTE</div>
            <div style={{ color: "#64748b", fontSize: "11px", marginBottom: "8px" }}>b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z</div>
            {["a student → (s = consonante)", "a teacher → (t = consonante)", "a book → (b = consonante)", "a car → (c = consonante)", "a house → (h = consonante)"].map((ex, i) => (
              <div key={i} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "12px" }}>
            <div style={{ color: "#34d399", fontWeight: 900, fontSize: "28px", marginBottom: "2px" }}>AN</div>
            <div style={{ color: "#34d399", fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>Antes de VOCAL</div>
            <div style={{ color: "#64748b", fontSize: "11px", marginBottom: "8px" }}>A, E, I, O, U</div>
            {["an apple → (a = vocal)", "an orange → (o = vocal)", "an umbrella → (u = vocal)", "an egg → (e = vocal)", "an ice cream → (i = vocal)"].map((ex, i) => (
              <div key={i} style={{ color: "#e2e8f0", fontSize: "13px", padding: "2px 0" }}>✅ {ex}</div>
            ))}
          </div>
        </div>
        <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px 14px", marginTop: "10px", color: "#94a3b8", fontSize: "13px", lineHeight: 1.6 }}>
          🇲🇽 <strong style={{ color: "#f8fafc" }}>a / an</strong> = "un" o "una". Se usa para hablar de <strong style={{ color: "#f8fafc" }}>una sola cosa en general</strong>.<br />
          💡 Truco: escucha el <strong style={{ color: "#f8fafc" }}>primer SONIDO</strong> de la siguiente palabra → consonante = <strong style={{ color: "#fbbf24" }}>a</strong>, vocal = <strong style={{ color: "#34d399" }}>an</strong>.
        </div>
      </RuleBox>

      <RuleBox icon="❌" rule="Negativo — agrega NOT después de am/is/are" color="#f87171">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "not", r: "neg" }, { t: "Complemento", color: "#e2e8f0" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "not", r: "neg" }, { t: "happy.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>is not = isn't</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>are not = aren't</strong>
        </div>
      </RuleBox>
      {TOBE_NEG.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Interrogativo — el verbo va AL INICIO de la pregunta" color="#60a5fa">
        <Formula
          parts={[{ t: "am / is / are", r: "verb_be" }, { t: "Sujeto", r: "subject" }, { t: "Complemento", color: "#e2e8f0" }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Is", r: "verb_be" }, { t: "she", r: "subject" }, { t: "happy?", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Respuesta corta: <strong style={{ color: "#34d399" }}>Yes, she is.</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>No, she isn't.</strong>
        </div>
      </RuleBox>
      {TOBE_INT.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sent pts={q} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}
    </div>
  );
}

function DemosSection() {
  return (
    <div>
      <h2 style={{ color: "#fbbf24", marginTop: 0 }}>👆 Demonstratives — This / That / These / Those</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Se usan para <strong style={{ color: "#f8fafc" }}>señalar cosas</strong>. Dependen de dos preguntas:<br />
        1️⃣ ¿<strong style={{ color: "#f8fafc" }}>Cuántas</strong> cosas? (1 o 2+) &nbsp;&nbsp; 2️⃣ ¿<strong style={{ color: "#f8fafc" }}>Dónde</strong> está? (cerca o lejos)
      </div>
      <Legend roles={["demo", "verb_be"]} />

      <RuleBox icon="📐" rule="Tabla de referencia rápida — ¿cuál usar?" color="#c084fc">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px", marginTop: "6px" }}>
          <div style={{ background: "#0f172a", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#475569", fontSize: "11px", marginBottom: "4px", fontWeight: 700 }}>SITUACIÓN</div>
          </div>
          <div style={{ background: "#3d2000", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#fbbf24", fontSize: "12px", fontWeight: 800 }}>👇 CERCA (near)</div>
          </div>
          <div style={{ background: "#0c2a50", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
            <div style={{ color: "#60a5fa", fontSize: "12px", fontWeight: 800 }}>👉 LEJOS (far)</div>
          </div>
          {[
            { label: "1 cosa", near: "THIS + is", far: "THAT + is" },
            { label: "2+ cosas", near: "THESE + are", far: "THOSE + are" },
          ].map((row, i) => (
            <>
              <div key={`l${i}`} style={{ background: "#0f172a", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#94a3b8", fontSize: "13px", fontWeight: 700 }}>{row.label}</div>
              </div>
              <div key={`n${i}`} style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.near}</div>
              </div>
              <div key={`f${i}`} style={{ background: "#2e1065", borderRadius: "8px", padding: "10px", textAlign: "center" }}>
                <div style={{ color: "#c084fc", fontSize: "14px", fontWeight: 800 }}>{row.far}</div>
              </div>
            </>
          ))}
        </div>
        <div style={{ marginTop: "10px" }}>
          <Formula
            label="Fórmula singular"
            parts={[{ t: "This / That", r: "demo" }, { t: "is", r: "verb_be" }, { t: "Cosa", color: "#e2e8f0" }]}
            example={[{ t: "This", r: "demo" }, { t: "is", r: "verb_be" }, { t: "my apple.", color: "#94a3b8" }]}
          />
          <Formula
            label="Fórmula plural"
            parts={[{ t: "These / Those", r: "demo" }, { t: "are", r: "verb_be" }, { t: "Cosas", color: "#e2e8f0" }]}
            example={[{ t: "These", r: "demo" }, { t: "are", r: "verb_be" }, { t: "my apples.", color: "#94a3b8" }]}
          />
        </div>
      </RuleBox>

      <ST color="#c084fc">📝 Ejemplos</ST>
      {DEMO_AFF.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <ST color="#fbbf24">❓ Preguntas con demonstratives</ST>
      {DEMO_QA.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sent pts={q} /> <span style={{ color: "#475569" }}>→</span> <Sent pts={a} />
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <ST color="#fbbf24">🔄 Singular → Plural (transformaciones)</ST>
      {DEMO_TRANSFORM.map((t, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", lineHeight: 2 }}>
            <Sent pts={t.s} /> <span style={{ color: "#475569", fontSize: "18px" }}>→</span> <Sent pts={t.p} />
          </div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {t.esp}</div>
        </div>
      ))}
    </div>
  );
}

function PrepSection() {
  return (
    <div>
      <h2 style={{ color: "#60a5fa", marginTop: 0 }}>📍 Preposiciones de lugar</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Las preposiciones de lugar nos dicen <strong style={{ color: "#f8fafc" }}>DÓNDE está algo</strong>.
      </div>
      <Legend roles={["subject", "verb_be", "prep"]} />

      <RuleBox icon="📐" rule="Fórmula — siempre la misma estructura" color="#fb923c">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "is / are", r: "verb_be" }, { t: "preposición", r: "prep" }, { t: "Lugar", color: "#e2e8f0" }]}
          example={[{ t: "The cat", r: "subject" }, { t: "is", r: "verb_be" }, { t: "in", r: "prep" }, { t: "the box.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 El gato está <strong>dentro de</strong> la caja.</div>
      </RuleBox>

      <ST color="#fb923c">📋 Lista de preposiciones</ST>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "7px", marginBottom: "16px" }}>
        {[
          { prep: "IN", esp: "Dentro de", icon: "📦" },
          { prep: "ON", esp: "Encima / sobre", icon: "⬆️" },
          { prep: "UNDER", esp: "Debajo de", icon: "⬇️" },
          { prep: "BEHIND", esp: "Detrás de", icon: "🔙" },
          { prep: "IN FRONT OF", esp: "Enfrente de", icon: "👀" },
          { prep: "NEXT TO", esp: "Al lado de", icon: "↔️" },
          { prep: "BETWEEN", esp: "Entre (dos cosas)", icon: "↕️" },
          { prep: "ABOVE", esp: "Por encima (sin tocar)", icon: "🔼" },
        ].map((p, i) => (
          <div key={i} style={{ background: "#1e293b", borderRadius: "8px", padding: "10px 13px", borderLeft: "3px solid #fb923c" }}>
            <div style={{ color: "#fb923c", fontWeight: 800, fontSize: "14px" }}>{p.icon} {p.prep}</div>
            <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "3px" }}>{p.esp}</div>
          </div>
        ))}
      </div>

      <ST color="#fb923c">📖 Ejemplos con traducción</ST>
      {PREP_EX.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}
    </div>
  );
}

function ProgressiveSection() {
  return (
    <div>
      <h2 style={{ color: "#f472b6", marginTop: 0 }}>⚡ Present Progressive — Estar + haciendo</h2>
      <div style={{ background: "#1e293b", borderRadius: "10px", padding: "14px 16px", marginBottom: "14px", fontSize: "14px", color: "#94a3b8", lineHeight: 1.8 }}>
        💡 Se usa para decir lo que <strong style={{ color: "#f8fafc" }}>estás haciendo AHORA MISMO</strong>.<br />
        🇲🇽 <em>Ella está comiendo.</em> → 🇺🇸 <em>She is eating.</em>
      </div>
      <Legend roles={["subject", "verb_be", "verb", "ing", "neg"]} />

      <RuleBox icon="✅" rule="Afirmativo — lo que estás haciendo AHORA" color="#34d399">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "now / right now", color: "#fbbf24" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: "right now.", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>🇲🇽 Ella está <strong>comiendo</strong> ahora mismo.</div>
      </RuleBox>
      {PROG_AFF.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❌" rule="Negativo — agrega NOT después de am/is/are" color="#f87171">
        <Formula
          parts={[{ t: "Sujeto", r: "subject" }, { t: "am / is / are", r: "verb_be" }, { t: "not", r: "neg" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }]}
          example={[{ t: "She", r: "subject" }, { t: "is", r: "verb_be" }, { t: "not", r: "neg" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: ".", color: "#94a3b8" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Atajo: <strong style={{ color: "#f87171" }}>is not = isn't</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>are not = aren't</strong>
        </div>
      </RuleBox>
      {PROG_NEG.map((ex, i) => <EC key={i} pts={ex.pts} esp={ex.esp} />)}

      <RuleBox icon="❓" rule="Interrogativo — am/is/are va AL INICIO" color="#60a5fa">
        <Formula
          parts={[{ t: "am / is / are", r: "verb_be" }, { t: "Sujeto", r: "subject" }, { t: "verbo", r: "verb" }, { t: "ING", r: "ing" }, { t: "?", color: "#60a5fa" }]}
          example={[{ t: "Is", r: "verb_be" }, { t: "she", r: "subject" }, { t: "eat", r: "verb" }, { t: "ing", r: "ing" }, { t: "?", color: "#60a5fa" }]}
        />
        <div style={{ color: "#64748b", fontSize: "13px" }}>
          💡 Respuesta: <strong style={{ color: "#34d399" }}>Yes, she is.</strong> &nbsp;|&nbsp; <strong style={{ color: "#f87171" }}>No, she isn't.</strong>
        </div>
      </RuleBox>
      {PROG_INT.map(({ q, a, esp }, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "10px", padding: "12px 16px", marginBottom: "8px" }}>
          <div style={{ lineHeight: 2 }}><Sent pts={q} /></div>
          <div style={{ color: "#64748b", fontSize: "13px", marginTop: "2px" }}>→ {a}</div>
          <div style={{ color: "#64748b", fontSize: "13px", paddingTop: "4px", borderTop: "1px solid #334155", marginTop: "4px" }}>🇲🇽 {esp}</div>
        </div>
      ))}

      <ST color="#f472b6">📐 Reglas del -ING</ST>
      <RuleBox icon="🔤" rule="Recordatorio: vocal vs consonante (lo necesitas para la Regla 3)" color="#94a3b8">
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginTop: "4px" }}>
          <div>
            <span style={{ color: "#34d399", fontWeight: 800 }}>VOCALES: </span>
            <span style={{ color: "#34d399", fontWeight: 700, letterSpacing: "3px" }}>A · E · I · O · U</span>
          </div>
          <div>
            <span style={{ color: "#f87171", fontWeight: 800 }}>CONSONANTES: </span>
            <span style={{ color: "#f87171" }}>todo lo demás (b, c, d, f, g, r, n...)</span>
          </div>
        </div>
        <div style={{ color: "#64748b", fontSize: "13px", marginTop: "8px" }}>
          Ejemplo de patrón <strong style={{ color: "#f8fafc" }}>C-V-C</strong> (Consonante·Vocal·Consonante):
          &nbsp;<strong style={{ color: "#f87171" }}>r</strong><strong style={{ color: "#34d399" }}>u</strong><strong style={{ color: "#f87171" }}>n</strong> → run,
          &nbsp;<strong style={{ color: "#f87171" }}>c</strong><strong style={{ color: "#34d399" }}>u</strong><strong style={{ color: "#f87171" }}>t</strong> → cut,
          &nbsp;<strong style={{ color: "#f87171" }}>s</strong><strong style={{ color: "#34d399" }}>i</strong><strong style={{ color: "#f87171" }}>t</strong> → sit
        </div>
      </RuleBox>
      {ING_RULES.map((rule, i) => (
        <div key={i} style={{ background: "#1e293b", borderRadius: "12px", padding: "14px", marginBottom: "10px", borderLeft: `4px solid ${rule.color}` }}>
          <div style={{ fontWeight: 700, color: rule.color, marginBottom: "4px", fontSize: "14px" }}>{rule.rule}</div>
          <div style={{ color: "#64748b", fontSize: "13px", marginBottom: "10px" }}>{rule.desc}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {rule.words.map(([base, suf, orig], j) => (
              <div key={j} style={{ background: "#0f172a", borderRadius: "8px", padding: "8px 14px", textAlign: "center" }}>
                {orig && <div style={{ color: "#475569", fontSize: "11px", marginBottom: "2px" }}>{orig} →</div>}
                <span style={{ color: "#4ade80", fontWeight: 700, fontSize: "16px" }}>{base}</span>
                <span style={{ color: "#f472b6", fontWeight: 800, background: "#3b0764", borderRadius: "4px", padding: "1px 5px", fontSize: "16px" }}>{suf}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function QuizSection() {
  const [topic, setTopic] = useState("mixed");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loadingQ, setLoadingQ] = useState(false); // cargando pregunta
  const [loadingC, setLoadingC] = useState(false); // verificando respuesta
  const [score, setScore] = useState({ c: 0, t: 0 });
  const [started, setStarted] = useState(false);

  const topicMap = {
    verbs: "common English verbs for beginners. Example: 'What does COOK mean in Spanish?' or 'Translate: Nadar'. Only simple verbs like eat, run, play, swim, read, sleep.",
    plural: "very basic plural rules. Only ask to write the plural of ONE simple word like cat, box, baby, toy, wolf.",
    tobe: "Verb To Be basics. Only fill in am/is/are in a short sentence like 'She ___ a student.'",
    demonstratives: "basic this/that/these/those. Only choose between them for a simple sentence like '___ is my apple. (near, 1 thing)'",
    prepositions: "basic prepositions: in, on, under, behind, next to. Fill in one preposition. Example: 'The cat is ___ the box. (inside)'",
    progressive: "only ask to write the -ing form of a simple verb. Example: 'Write the -ing form of: run'",
    mixed: "pick ONE simple question from: verb to be (fill in am/is/are), simple plurals, this/that/these/those choice, one preposition fill in, or -ing form of a verb.",
  };

  // Genera una nueva pregunta — NO borra la pantalla, muestra loading dentro de la tarjeta
  const generate = async () => {
    setLoadingQ(true);
    setFeedback(null);
    setAnswer("");

    // Número aleatorio para forzar variedad en cada llamada
    const seed = Math.floor(Math.random() * 9999);
    const num = score.t + 1;

    // Sujetos y palabras variadas para que el modelo no repita
    const subjects = ["I", "you", "he", "she", "we", "they", "the cat", "the teacher", "my friend", "the students", "Maria", "John"];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6", max_tokens: 400,
          messages: [{ role: "user", content:
            `You are an English teacher. This is question #${num} (variation code: ${seed}).
Create ONE new and DIFFERENT question for a complete beginner Spanish-speaking student about: ${topicMap[topic]}.

CRITICAL RULES FOR VARIETY:
- Try using the subject "${randomSubject}" this time
- NEVER repeat a question about "The dog ___ happy"
- Each question must use a DIFFERENT subject, verb, or word than previous ones
- Rotate through: I/you/he/she/we/they + different adjectives/nouns each time
- For plurals: use different words each time (not always "dog" or "cat")
- For -ing: use different verbs each time (not always "play" or "run")

Basic vocabulary allowed: cat, dog, book, apple, house, friend, school, teacher, student, happy, sad, big, small, red.
Answer must be ONE word or very short phrase.
Return ONLY valid JSON (no markdown): {"question":"...","answer":"...","hint":"pista corta en español"}`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "{}";
      const parsed = JSON.parse(text.replace(/```json|```/g, "").trim());
      setQuestion(parsed);
      setStarted(true);
    } catch {
      setQuestion({ question: "⚠️ Error de conexión. Intenta de nuevo.", answer: "", hint: "" });
    }
    setLoadingQ(false);
  };

  // Verifica la respuesta del usuario
  const check = async () => {
    if (!answer.trim() || !question) return;
    setLoadingC(true);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6", max_tokens: 200,
          messages: [{ role: "user", content:
            `Question: "${question.question}". Correct answer: "${question.answer}". Student answered: "${answer}".
Correct? Ignore capitalization and minor spelling. Be kind.
Return ONLY valid JSON: {"correct":true or false,"explanation":"explicación corta en español (1 oración)"}`
          }]
        })
      });
      const data = await res.json();
      const text = data.content?.find(b => b.type === "text")?.text || "{}";
      const fb = JSON.parse(text.replace(/```json|```/g, "").trim());
      setFeedback(fb);
      setScore(prev => ({ c: prev.c + (fb.correct ? 1 : 0), t: prev.t + 1 }));
    } catch {
      setFeedback({ correct: false, explanation: "Error al verificar. Intenta de nuevo." });
    }
    setLoadingC(false);
  };

  const pct = score.t > 0 ? Math.round((score.c / score.t) * 100) : null;

  return (
    <div>
      <h2 style={{ color: "#fff", marginTop: 0 }}>🎯 Quiz con IA</h2>

      {/* Puntuación */}
      <div style={{ background: "#1e293b", borderRadius: "12px", padding: "14px 18px", marginBottom: "14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ color: "#94a3b8" }}>
          Puntuación: <strong style={{ color: "#34d399", fontSize: "20px" }}>{score.c}</strong>
          <span style={{ color: "#475569" }}> / {score.t}</span>
        </span>
        {pct !== null && (
          <span style={{ color: pct >= 70 ? "#34d399" : pct >= 40 ? "#fbbf24" : "#f87171", fontWeight: 700 }}>
            {pct}% {pct >= 70 ? "🌟" : pct >= 40 ? "💪" : "📚"}
          </span>
        )}
      </div>

      {/* Selector de tema — solo disponible antes de empezar o entre preguntas */}
      <select value={topic} onChange={e => setTopic(e.target.value)}
        disabled={loadingQ || loadingC}
        style={{ width: "100%", padding: "11px", borderRadius: "10px", border: "none", background: "#1e293b", color: "#fff", fontSize: "14px", marginBottom: "12px", opacity: (loadingQ || loadingC) ? 0.5 : 1 }}>
        <option value="mixed">🎲 Mezcla de todos los temas</option>
        <option value="verbs">📝 Verbos</option>
        <option value="plural">🔢 Plurales</option>
        <option value="tobe">✅ Verb To Be</option>
        <option value="demonstratives">👆 This / That / These / Those</option>
        <option value="prepositions">📍 Preposiciones</option>
        <option value="progressive">⚡ Forma -ING</option>
      </select>

      {/* ── ESTADO: sin empezar ── */}
      {!started && !loadingQ && (
        <button onClick={generate}
          style={{ width: "100%", padding: "16px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "#fff", fontSize: "18px", fontWeight: 700, cursor: "pointer" }}>
          🚀 ¡Empezar Quiz!
        </button>
      )}

      {/* ── TARJETA PRINCIPAL — visible desde que empieza ── */}
      {(started || loadingQ) && (
        <div style={{ background: "#1e293b", borderRadius: "14px", padding: "22px", minHeight: "180px" }}>

          {/* Cargando pregunta */}
          {loadingQ && (
            <div style={{ textAlign: "center", padding: "24px 0" }}>
              <div style={{ fontSize: "36px", marginBottom: "12px" }}>⏳</div>
              <div style={{ color: "#94a3b8", fontSize: "15px" }}>Preparando tu pregunta...</div>
            </div>
          )}

          {/* Pregunta activa */}
          {!loadingQ && question && (
            <>
              {/* Texto de la pregunta */}
              <div style={{ fontSize: "19px", fontWeight: 700, color: "#f8fafc", lineHeight: 1.6, marginBottom: "10px" }}>
                {question.question}
              </div>

              {/* Pista */}
              {question.hint && (
                <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "14px", padding: "8px 12px", background: "#0f172a", borderRadius: "8px" }}>
                  💡 {question.hint}
                </div>
              )}

              {/* Input — solo si no hay feedback todavía */}
              {!feedback && (
                <>
                  <input
                    placeholder="Escribe tu respuesta aquí..."
                    value={answer}
                    onChange={e => setAnswer(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && !loadingC && answer.trim() && check()}
                    disabled={loadingC}
                    autoFocus
                    style={{ width: "100%", padding: "13px 16px", borderRadius: "10px", border: "2px solid #334155", background: "#0f172a", color: "#fff", fontSize: "16px", boxSizing: "border-box", marginBottom: "10px", outline: "none" }}
                  />
                  <button onClick={check} disabled={loadingC || !answer.trim()}
                    style={{ width: "100%", padding: "13px", borderRadius: "10px", border: "none", background: (answer.trim() && !loadingC) ? "#2563eb" : "#334155", color: "#fff", fontSize: "15px", fontWeight: 700, cursor: (answer.trim() && !loadingC) ? "pointer" : "not-allowed", transition: "background 0.2s" }}>
                    {loadingC ? "⏳ Revisando tu respuesta..." : "✔️ Verificar respuesta"}
                  </button>
                </>
              )}

              {/* Feedback */}
              {feedback && !loadingC && (
                <>
                  <div style={{ background: feedback.correct ? "#052e16" : "#450a0a", border: `1px solid ${feedback.correct ? "#34d399" : "#f87171"}33`, borderRadius: "10px", padding: "16px", textAlign: "center", marginBottom: "14px" }}>
                    <div style={{ fontWeight: 800, fontSize: "24px", color: feedback.correct ? "#4ade80" : "#f87171", marginBottom: "8px" }}>
                      {feedback.correct ? "✅ ¡Muy bien!" : "❌ ¡Casi!"}
                    </div>
                    <div style={{ color: "#e2e8f0", fontSize: "15px", lineHeight: 1.6 }}>
                      {feedback.explanation}
                    </div>
                  </div>

                  {/* Botón siguiente — único botón para continuar */}
                  <button onClick={generate}
                    style={{ width: "100%", padding: "14px", borderRadius: "10px", border: "none", background: "linear-gradient(135deg,#7c3aed,#2563eb)", color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer" }}>
                    ➡️ Siguiente pregunta
                  </button>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState("verbs");
  const sections = { verbs: VerbsSection, plural: PluralSection, tobe: ToBeSection, demonstratives: DemosSection, prepositions: PrepSection, progressive: ProgressiveSection, quiz: QuizSection };
  const Section = sections[active];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: "100vh", background: "#0f172a", color: "#f8fafc" }}>
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#7c3aed)", padding: "18px 20px", textAlign: "center" }}>
        <h1 style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>🎓 English — Básico I</h1>
        <p style={{ margin: "5px 0 0", opacity: 0.75, fontSize: "13px" }}>Cada ejemplo tiene su 🇲🇽 traducción y su 📐 fórmula</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", padding: "10px 12px", background: "#1e293b", position: "sticky", top: 0, zIndex: 10, borderBottom: "1px solid #334155" }}>
        {TOPICS.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            style={{ padding: "7px 12px", borderRadius: "20px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 600, background: active === t.id ? t.color : "#334155", color: "#fff", boxShadow: active === t.id ? `0 0 12px ${t.color}55` : "none", transform: active === t.id ? "scale(1.04)" : "scale(1)", transition: "all 0.15s" }}>
            {t.label}
          </button>
        ))}
      </div>
      <div style={{ padding: "20px", maxWidth: "860px", margin: "0 auto" }}>
        <Section />
      </div>
    </div>
  );
}
