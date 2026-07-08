export const CLOCK_PAST = [
  { min: 5,  label: "Five past" },
  { min: 10, label: "Ten past" },
  { min: 15, label: "a quarter past" },
  { min: 20, label: "twenty past" },
  { min: 25, label: "twenty-five past" },
  { min: 30, label: "Half past" },
];

export const CLOCK_TO = [
  { min: 5,  label: "Five to" },
  { min: 10, label: "Ten to" },
  { min: 15, label: "a quarter to" },
  { min: 20, label: "twenty to" },
  { min: 25, label: "twenty-five to" },
];

export const TIME_EXAMPLES = [
  { time: "03:25", phrase: ["it's ", "twenty-five past", " three"], esp: "3:25 → primero minutos, luego hora (PAST porque va menos de la mitad)" },
  { time: "02:15", phrase: ["it's ", "a quarter past", " two"], esp: "2:15 → un cuarto después de las 2" },
  { time: "05:30", phrase: ["it's ", "half past", " five"], esp: "5:30 → mitad de camino a las 6" },
  { time: "09:45", phrase: ["it's ", "a quarter to", " ten"], esp: "9:45 → falta un cuarto para las 10 (TO porque va más de la mitad)" },
  { time: "12:00", phrase: ["it's ", "twelve", " o'clock"], esp: "12:00 → hora en punto, se usa o'clock" },
];

export const TIME_DIGITAL = [
  { time: "09:45", phrase: "it's nine forty-five", esp: "Forma directa: hora + minutos, tal cual se leen los números" },
];
