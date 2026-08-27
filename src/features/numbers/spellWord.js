import { ALPHABET } from "./data";

const BY_LETTER = Object.fromEntries(ALPHABET.map(l => [l.letter, l]));

// Convierte una palabra en la lista de letras a decir al deletrearla. Solo
// sobreviven las 26 letras del abecedario inglés (fuera espacios, signos,
// números y letras acentuadas o la Ñ, que no existen ahí). Las letras
// repetidas seguidas se agrupan porque se dicen con "double": Hello →
// H-E-double L-O.
export function spellWord(word) {
  const letters = word.toUpperCase().split("").filter(ch => BY_LETTER[ch]);
  const grouped = [];
  for (const ch of letters) {
    const last = grouped[grouped.length - 1];
    if (last && last.letter === ch && last.count === 1) {
      last.count = 2;
      continue;
    }
    grouped.push({ letter: ch, count: 1 });
  }
  return grouped.map(({ letter, count }) => ({
    letter: count === 2 ? `${letter}${letter}` : letter,
    say: count === 2 ? `double ${BY_LETTER[letter].say}` : BY_LETTER[letter].say,
  }));
}
