export const locales = [
  "en",
  "es",
  "ja",
  "zh-Hans",
  "pt",
  "de",
  "fr",
  "hi",
  "ru",
  "ko",
] as const;

export type Locale = (typeof locales)[number];
