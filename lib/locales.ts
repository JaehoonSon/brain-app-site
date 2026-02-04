export const locales = [
  "en",
  "es",
  "ja",
  "zh-Hans",
  "pt",
  "pt-BR",
  "pt-PT",
  "de",
  "fr",
  "hi",
  "ru",
  "ko",
] as const;

export type Locale = (typeof locales)[number];
