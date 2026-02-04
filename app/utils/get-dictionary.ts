import "server-only";
import type en from "../dictionaries/en.json";
import { Locale } from "@/lib/locales";

type Dictionary = typeof en;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
  ja: () => import("../dictionaries/ja.json").then((module) => module.default),
  "zh-Hans": () =>
    import("../dictionaries/zh-Hans.json").then((module) => module.default),
  pt: () => import("../dictionaries/pt.json").then((module) => module.default),
  de: () => import("../dictionaries/de.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  hi: () => import("../dictionaries/hi.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
  ko: () => import("../dictionaries/ko.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
