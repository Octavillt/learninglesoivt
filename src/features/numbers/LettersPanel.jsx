import RuleBox from "../../components/RuleBox";
import SectionTitle from "../../components/SectionTitle";
import SpellingBox from "./SpellingBox";
import { ALPHABET, VOWELS, CONSONANTS, VOWEL_SOUNDS, SPELLING_EXAMPLES } from "./data";

const VOWEL_COLOR = "#fbbf24";
const CONSONANT_COLOR = "#38bdf8";

const LetterChip = ({ letter, ipa, say, word, color }) => (
  <div style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "8px 10px", borderLeft: `3px solid ${color}` }}>
    <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
      <span style={{ color, fontWeight: 800, fontSize: "16px" }}>{letter}</span>
      <span style={{ color: "#e2e8f0", fontSize: "13px", fontWeight: 600 }}>{say}</span>
    </div>
    <div style={{ color: "#94a3b8", fontSize: "11px", marginTop: "2px" }}>
      {ipa}{word && ` · ${word}`}
    </div>
  </div>
);

export default function LettersPanel() {
  return (
    <div>
      <SectionTitle color="#a78bfa">🔤 The Alphabet — el abecedario (26 letras)</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        Mismas letras que en español <strong style={{ color: "#e2e8f0" }}>menos la Ñ</strong>. Cada letra tiene un{" "}
        <strong style={{ color: "#e2e8f0" }}>nombre</strong> (con el que se deletrea) distinto del sonido que hace dentro de la palabra.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "6px", marginBottom: "16px" }}>
        {ALPHABET.map(l => (
          <LetterChip
            key={l.letter}
            letter={l.letter}
            ipa={l.ipa}
            say={l.say}
            word={l.word}
            color={l.vowel ? VOWEL_COLOR : CONSONANT_COLOR}
          />
        ))}
      </div>

      <SectionTitle color={VOWEL_COLOR}>🅰️ Vowels — las 5 vocales</SectionTitle>
      <div style={{ color: "#94a3b8", fontSize: "13px", marginBottom: "10px" }}>
        <strong style={{ color: VOWEL_COLOR }}>A · E · I · O · U</strong> son las vocales; las otras{" "}
        {CONSONANTS.length} letras son <strong style={{ color: CONSONANT_COLOR }}>consonants</strong>. La{" "}
        <strong style={{ color: "#e2e8f0" }}>Y</strong> funciona como vocal en palabras como <em>my</em> o <em>happy</em>.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(132px, 1fr))", gap: "6px", marginBottom: "12px" }}>
        {VOWELS.map(v => (
          <LetterChip key={v.letter} letter={v.letter} ipa={v.ipa} say={v.say} word={v.word} color={VOWEL_COLOR} />
        ))}
      </div>

      <RuleBox icon="🔊" rule="Sonidos frecuentes: vocal larga y corta" color={VOWEL_COLOR}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {VOWEL_SOUNDS.map(({ letter, long, short }) => (
            <div key={letter} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "9px 12px", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <span style={{ color: VOWEL_COLOR, fontWeight: 800, fontSize: "16px", minWidth: "18px" }}>{letter}</span>
              <span style={{ color: "#e2e8f0", fontSize: "13px" }}>
                <strong style={{ color: "#4ade80" }}>largo</strong> {long.ipa} — {long.word}
                <span style={{ color: "#94a3b8" }}> ({long.esp})</span>
              </span>
              <span style={{ color: "#e2e8f0", fontSize: "13px" }}>
                <strong style={{ color: "#f472b6" }}>corto</strong> {short.ipa} — {short.word}
                <span style={{ color: "#94a3b8" }}> ({short.esp})</span>
              </span>
            </div>
          ))}
        </div>
        <div style={{ color: "#94a3b8", fontSize: "13px", marginTop: "8px" }}>
          💬 Esta tabla muestra dos sonidos frecuentes, no todos los posibles. La pronunciación escrita es aproximada. El sonido largo suena igual que el nombre de la letra: <strong style={{ color: "#e2e8f0" }}>cake</strong> lleva la A de "ei".
        </div>
      </RuleBox>

      <RuleBox icon="✍️" rule="Spelling — deletrear en voz alta" color={CONSONANT_COLOR}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "6px" }}>
          {SPELLING_EXAMPLES.map(ex => (
            <div key={ex.q} style={{ background: "var(--surface-deep, #0f172a)", borderRadius: "8px", padding: "9px 12px" }}>
              <div style={{ color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{ex.q}</div>
              <div style={{ color: CONSONANT_COLOR, fontSize: "14px", fontWeight: 700, letterSpacing: "1px", marginTop: "3px" }}>{ex.a}</div>
              <div style={{ color: "#94a3b8", fontSize: "12px", marginTop: "2px" }}>🇲🇽 {ex.esp}</div>
            </div>
          ))}
        </div>
      </RuleBox>

      <SectionTitle color="#a78bfa">🕹️ Práctica de deletreo</SectionTitle>
      <SpellingBox />
    </div>
  );
}
