import "server-only";
import { Locale } from "@/i18n-config";

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ja: () => import("./dictionaries/ja.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();
export const getDictionary = async (locale: Locale) => {
  if (locale) {
    return locale == "ja" ? dictionaries.ja() : dictionaries.en();
  } else {
    return dictionaries.en();
  }
};
