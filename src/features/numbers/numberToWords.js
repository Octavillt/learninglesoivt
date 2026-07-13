import { NUMBERS_0_20, NUMBERS_21_29, TENS } from "./data";

const ONES = Object.fromEntries(NUMBERS_0_20);
const TWENTIES = Object.fromEntries(NUMBERS_21_29);
const TENS_MAP = Object.fromEntries(TENS);

export const MAX_NUMBER = 1_000_000_000;

const SCALES = [
  [1_000_000_000, "billion"],
  [1_000_000, "million"],
  [1_000, "thousand"],
];

function belowThousand(n) {
  if (n <= 20) return ONES[n];
  if (n < 30) return TWENTIES[n];
  if (n < 100) {
    const tens = Math.floor(n / 10) * 10;
    const ones = n % 10;
    return ones === 0 ? TENS_MAP[tens] : `${TENS_MAP[tens]}-${ONES[ones]}`;
  }

  const hundreds = Math.floor(n / 100);
  const rest = n % 100;
  const hundredsWord = `${ONES[hundreds]} hundred`;
  return rest === 0 ? hundredsWord : `${hundredsWord} ${belowThousand(rest)}`;
}

export function numberToWords(n) {
  if (n === 0) return ONES[0];
  if (n < 0) return `minus ${numberToWords(-n)}`;
  if (n === MAX_NUMBER) return "one billion";

  for (const [value, word] of SCALES) {
    if (n >= value) {
      const count = Math.floor(n / value);
      const rest = n % value;
      const scaleWord = `${belowThousand(count)} ${word}`;
      return rest === 0 ? scaleWord : `${scaleWord} ${numberToWords(rest)}`;
    }
  }

  return belowThousand(n);
}
