import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import th from './th.json';
import en from './en.json';

const resources = {
  en: {
    translation: en,
  },
  th: {
    translation: th,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: 'th',
  fallbackLng: 'th',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
