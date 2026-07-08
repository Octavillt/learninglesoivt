import { NUMBERS_0_20, NUMBERS_21_29, TENS } from "../numbers/data";

const ONES = Object.fromEntries(NUMBERS_0_20);
const TWENTIES = Object.fromEntries(NUMBERS_21_29);
const TENS_MAP = Object.fromEntries(TENS);

function numberToWords(n) {
  if (n <= 20) return ONES[n];
  if (n < 30) return TWENTIES[n];
  const tens = Math.floor(n / 10) * 10;
  const ones = n % 10;
  return ones === 0 ? TENS_MAP[tens] : `${TENS_MAP[tens]}-${ONES[ones]}`;
}

function hourWord(h) {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return numberToWords(h12);
}

const MINUTE_WORDS = {
  5: "five", 10: "ten", 15: "a quarter", 20: "twenty", 25: "twenty-five",
};

export function timeToDigital(h, m) {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  if (m === 0) return `it's ${hourWord(h12)} o'clock`;
  const minutesWord = m < 10 ? `oh ${numberToWords(m)}` : numberToWords(m).replace("-", " ");
  return `it's ${hourWord(h12)} ${minutesWord}`;
}

export function timeToWords(h, m) {
  const nextHour = (h + 1) % 24;

  if (m === 0) return `it's ${hourWord(h)} o'clock`;
  if (m === 30) return `it's half past ${hourWord(h)}`;
  if (m < 30) {
    const label = MINUTE_WORDS[m] || `${numberToWords(m)}`;
    return `it's ${label} past ${hourWord(h)}`;
  }
  const remaining = 60 - m;
  const label = MINUTE_WORDS[remaining] || `${numberToWords(remaining)}`;
  return `it's ${label} to ${hourWord(nextHour)}`;
}

export function formatDigitalClock(h, m) {
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
