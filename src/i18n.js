import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./i18n/es/translation.json";
import ca from "./i18n/ca/translation.json";
import en from "./i18n/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    ca: { translation: ca },
  },
  lng: "es",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
