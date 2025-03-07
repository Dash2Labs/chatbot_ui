import en from "./en.json";
import es from "./es.json";
import vi from "./vi.json";
import nv from "./nv.json";
import zh from "./zh.json";
import { useTheme } from "../themeContext/themeProvider";
type TranslationKeys = keyof typeof en;

const translations = { en, es, vi, nv, zh };

export const useTranslation = () => {
  const { language } = useTheme();
  const t = (key: TranslationKeys) => {
    return translations[language]?.[key] || key;
  };
  return { t };
};
