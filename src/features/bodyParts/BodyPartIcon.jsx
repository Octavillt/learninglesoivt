const SKIN = "#f0c5a9";
const SHADE = "#dba98c";
const INK = "#795c53";
const TEAL = "#269e99";
const LIGHT = "#a4dfd4";
const HAIR = "#59463f";

function Mark({ x, y, rx = 8, ry = rx }) {
  return <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={LIGHT} fillOpacity="0.9" stroke={TEAL} strokeWidth="1.8" />;
}

function Head({ part }) {
  return <>
    <path d="M19 108q3-15 24-20l2-16h30l2 16q21 5 24 20" fill={SKIN} />
    <path d="M44 82q16 12 32 0l1 7q-17 17-34 0Z" fill={SHADE} stroke="none" />
    <path d="M19 108q2-13 22-18 19 21 38 0 20 5 22 18" fill="#b8d6db" />
    <ellipse cx="33" cy="54" rx="6" ry="10" fill={SKIN} />
    <ellipse cx="87" cy="54" rx="6" ry="10" fill={SKIN} />
    <path d="M33 42q0-28 27-28t27 28v18c-2 17-15 27-27 27S35 77 33 60Z" fill={part === "face" ? LIGHT : SKIN} stroke={part === "face" ? TEAL : INK} />
    <path d="M32 50C21 28 32 11 52 10 77 4 95 21 88 49l-7-13q-20 1-29-13-4 17-18 16Z" fill={part === "hair" ? TEAL : HAIR} stroke={part === "hair" ? TEAL : HAIR} />
    <path d="M39 47q6-4 12 0m18 0q6-4 12 0" />
    <ellipse cx="46" cy="54" rx="2.2" ry="3" fill={HAIR} stroke="none" />
    <ellipse cx="74" cy="54" rx="2.2" ry="3" fill={HAIR} stroke="none" />
    <path d="m59 54-3 10q4 3 8 0m-14 9q10 7 20 0" />
    <path d="M38 64h7m30 0h7" stroke="#dc9a8d" strokeWidth="3" opacity="0.6" />
    {part === "head" && <path d="M24 22q-7 14-4 36m76-36q7 14 4 36" stroke={TEAL} strokeWidth="3" />}
  </>;
}

function Eye({ part }) {
  return <>
    <path d="M13 70Q4 36 27 25q33-14 66 0 20 15 14 45-42 28-94 0" fill={SKIN} stroke="none" />
    <path d="M20 36q33-20 77-3l-2 7q-42-14-73 2Z" fill={part === "eyebrow" ? TEAL : HAIR} stroke="none" />
    <path d="M20 65Q59 27 101 63 63 96 20 65Z" fill="#fffdf8" />
    <circle cx="61" cy="63" r="17" fill={part === "eye" ? TEAL : "#9aaf9a"} />
    <circle cx="61" cy="63" r="8" fill="#344c4b" stroke="none" />
    <circle cx="66" cy="58" r="4" fill="white" stroke="none" />
    <path d="M20 65Q59 27 101 63" stroke={part === "eyelash" ? TEAL : HAIR} strokeWidth="3" />
    <path d="M28 56q-7-1-9-8m23 0q-6-3-7-10m22 6q-3-5-2-11m18 13q2-5 2-10m13 16q5-4 6-9m4 18q7-2 9-8" stroke={part === "eyelash" ? TEAL : HAIR} strokeWidth={part === "eyelash" ? 3.5 : 2} />
    <path d="M33 82q29 15 57-2" stroke={SHADE} />
  </>;
}

function Mouth({ part }) {
  return <>
    <ellipse cx="60" cy="63" rx="51" ry="34" fill={SKIN} stroke="none" />
    <path d="M14 57C35 51 42 37 53 44q7 7 14 0c11-7 18 7 39 13-10 28-32 34-46 33S26 84 14 57Z" fill={part === "lip" ? LIGHT : "#dd8d8c"} stroke={part === "lip" ? TEAL : "#af686b"} />
    <path d="M19 58q41-8 82 0-15 20-41 20T19 58Z" fill="#693f48" stroke="none" />
    <path d="M27 58q33-5 66 0l-6 8q-27 5-54 0Z" fill="#fffdf8" stroke="none" />
    {part === "tongue" ? <>
      <path d="M42 73q18-10 36 0v14c-2 20-34 20-36 0Z" fill={LIGHT} stroke={TEAL} />
      <path d="M60 75v14" stroke={TEAL} />
    </> : <path d="M40 83q20 6 40-1" stroke={part === "lip" ? TEAL : "#edb0a7"} strokeWidth="3" />}
    {part === "mouth" && <path d="M9 48v-6h9m84 0h9v6M9 82v6h9m84 0h9v-6" stroke={TEAL} strokeWidth="2.5" />}
  </>;
}

const digits = {
  thumb: "M33 69 22 53", finger: "M44 52V27",
  "index finger": "M44 52V27", "middle finger": "M57 51V17",
  "ring finger": "M70 53V25", pinky: "M83 59V40",
};

function Hand({ part }) {
  return <>
    <path d="M40 109v-15q-5-5-10-14L15 56c-5-9 3-15 9-7l13 16V29c0-12 13-12 13 0v23-34c0-12 14-12 14 0v34-26c0-12 13-12 13 0v33-18c0-12 13-12 13 0v36q0 12-15 21v11Z" fill={part === "hand" ? LIGHT : SKIN} stroke={part === "hand" ? TEAL : INK} />
    <path d="M45 76q15-10 31-6M40 68q14 9 10 22m7 7h14" stroke={part === "hand" ? TEAL : SHADE} strokeWidth="2" />
    {digits[part] && <path d={digits[part]} stroke={TEAL} strokeWidth="9" opacity="0.85" />}
    <path d="M41 30h6m7-10h6m7 8h6m7 15h6" stroke={part === "hand" ? "#e6f5e9" : "#fff0de"} strokeWidth="3" />
  </>;
}

const torsoParts = ["neck", "shoulder", "chest", "back", "waist"];
function Torso({ part }) {
  const back = part === "back";
  return <>
    <path d="M43 12h34l-2 19c1 7 19 8 25 17l13 39-14 5-14-32-4 27 5 22H34l5-22-4-27-14 32-14-5 13-39c6-9 24-10 25-17Z" fill={SKIN} />
    <path d="M44 26q16 10 32 0" stroke={SHADE} strokeWidth="3" />
    {back ? <>
      <path d="M60 42v50m-19-42q-1 12 11 16m27-16q1 12-11 16" stroke={SHADE} strokeWidth="2" />
      <path d="M39 46q21-8 42 0l-5 36q-16 10-32 0Z" fill={LIGHT} fillOpacity="0.75" stroke={TEAL} />
      <path d="M60 47v34m-17-29 10 8m24-8-10 8" stroke={TEAL} />
    </> : <>
      <path d="M40 46q9 0 17 5m23-5q-9 0-17 5M42 67q9 5 15 1m21-1q-9 5-15 1m-3 16v2" stroke={SHADE} strokeWidth="2" />
      {part === "neck" && <path d="M46 15h28l-2 18q-12 8-24 0Z" fill={LIGHT} stroke={TEAL} />}
      {part === "shoulder" && <Mark x="30" y="48" rx="11" ry="9" />}
      {part === "chest" && <path d="M39 51q21-6 42 0l-3 18q-18 5-36 0Z" fill={LIGHT} fillOpacity="0.9" stroke={TEAL} />}
      {part === "waist" && <path d="M39 85q21 6 42 0l1 8q-22 6-44 0Z" fill={LIGHT} stroke={TEAL} />}
    </>}
    <path d="M34 104q26 5 52 0v9H34Z" fill="#a9c4d1" stroke="none" />
  </>;
}

function Arm({ part }) {
  return <>
    <path d="M22 19q18-11 29 5c9 12 4 26 1 37l31 13 13-2 13 8q4 5-1 7l-9-3 9 8q3 5-2 6L89 91l-10-2-39-9q-14-3-14-17l5-29Z" fill={SKIN} />
    <path d="M22 19q19-12 29 5l3 11q-15 8-27-1Z" fill="#b8d6db" />
    <path d="M39 44 35 62q-1 7 7 9l31 11m-35-17 8 1m42 14-3 6" stroke={SHADE} />
    {part === "arm" && <path d="m41 43-3 21q-1 4 5 6l30 11" stroke={TEAL} strokeWidth="9" opacity="0.8" />}
    {part === "elbow" && <Mark x="39" y="68" rx="9" />}
    {part === "wrist" && <Mark x="83" y="82" rx="6" ry="8" />}
  </>;
}

function Leg({ part }) {
  return <>
    <path d="M40 12h33q6 21-3 43c-2 7 3 15-1 29l-3 13 16 6q6 5 0 8H50q-8-1-5-9l5-19-1-23q-12-20-9-48Z" fill={SKIN} />
    <path d="M40 12h33l2 16q-20 7-36 0Z" fill="#a9c4d1" />
    <path d="M57 35q5 11 2 17m-6 9q8 4 13-1m-9 11 1 15m-8 15q7-1 10 3" stroke={SHADE} strokeWidth="2" />
    {part === "leg" && <path d="M57 38q7 14 3 25l-4 29" stroke={TEAL} strokeWidth="11" opacity="0.8" />}
    {part === "thigh" && <Mark x="57" y="42" rx="11" ry="13" />}
    {part === "knee" && <Mark x="59" y="61" rx="9" ry="7" />}
    {part === "ankle" && <Mark x="57" y="96" rx="8" ry="5" />}
  </>;
}

function Foot({ part }) {
  return <>
    <path d="M40 101c-17-11-11-27-5-43l2-14c-8-3-9-21-2-27 8-7 17 0 15 16 0-21 16-24 17-4 5-18 18-13 14 5 9-14 20-5 12 9 12-7 17 4 7 14L79 76c-10 12-7 32-23 32q-9 0-16-7Z" fill={part === "foot" ? LIGHT : SKIN} stroke={part === "foot" ? TEAL : INK} />
    <path d="M42 54q22 10 43-4M46 72q-8 20 5 26m-1-65-1 9m18-13-4 13m18-8-7 11m19-2-8 9" stroke={part === "foot" ? TEAL : SHADE} />
    {part === "toe" && <ellipse cx="40" cy="30" rx="10" ry="15" fill={LIGHT} stroke={TEAL} />}
    <path d="M36 24q5-4 9 0v7h-9Z" fill="#fff0de" stroke="none" />
  </>;
}

function Body() {
  return <>
    <circle cx="60" cy="17" r="9" fill={SKIN} />
    <path d="M52 12q8-9 16 0" stroke={HAIR} strokeWidth="5" />
    <path d="M55 25v6l-15 5-15 33q-2 6 4 7l16-28-3 22 5 34q1 6 7 3l6-32 6 32q6 3 7-3l5-34-3-22 16 28q6-1 4-7L80 36l-15-5v-6" fill={SKIN} />
    <path d="m40 36 15-5q5 6 10 0l15 5-5 19H45Z" fill={LIGHT} stroke={TEAL} />
    <path d="M45 55h30l3 17-15 2-3-8-3 8-15-2Z" fill="#a9c4d1" />
    <path d="M49 107h-7m29 0h7" stroke={INK} strokeWidth="4" />
  </>;
}

export default function BodyPartIcon({ part }) {
  let drawing;
  if (torsoParts.includes(part)) drawing = <Torso part={part} />;
  else if (["arm", "elbow", "wrist"].includes(part)) drawing = <Arm part={part} />;
  else if (["leg", "thigh", "knee", "ankle"].includes(part)) drawing = <Leg part={part} />;
  else if (part in digits || part === "hand") drawing = <Hand part={part} />;
  else if (["eye", "eyebrow", "eyelash"].includes(part)) drawing = <Eye part={part} />;
  else if (["mouth", "lip", "tongue"].includes(part)) drawing = <Mouth part={part} />;
  else if (["head", "face", "hair"].includes(part)) drawing = <Head part={part} />;
  else if (["foot", "toe"].includes(part)) drawing = <Foot part={part} />;
  else if (part === "body") drawing = <Body />;
  else if (part === "ear") drawing = <>
    <path d="M38 79C11 45 32 14 58 14c32-2 38 34 20 52-10 10-7 33-25 35-13 1-19-12-15-22Z" fill={SKIN} />
    <path d="M38 59C23 33 58 16 73 34c15 21-13 24-14 40-1 12-13 12-12 1" fill={LIGHT} stroke={TEAL} strokeWidth="2" />
    <path d="M43 44q14-14 20 0l-13 13 1 10m-13 0q12-10 17 1" />
  </>;
  else if (part === "tooth") drawing = <>
    <path d="M60 26C18 3 20 44 30 61c6 10 4 40 16 42 10 0 5-35 14-35s4 35 14 35c12-2 10-32 16-42C100 44 102 3 60 26Z" fill="#fffefa" stroke={TEAL} strokeWidth="2" />
    <path d="m60 26 12 4M37 34q-4 12 2 20" stroke="#c5e5df" strokeWidth="5" />
    <path d="M91 15v10m-5-5h10" stroke={TEAL} />
  </>;

  return <svg viewBox="0 0 120 120" width="132" height="132" aria-hidden="true" focusable="false"
    fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ display: "block", maxWidth: "100%", height: "132px", flexShrink: 0 }}>
    <circle cx="60" cy="60" r="54" fill="#e4efeb" stroke="none" />
    <ellipse cx="60" cy="112" rx="32" ry="3" fill="#cdded8" stroke="none" />
    {drawing}
  </svg>;
}
