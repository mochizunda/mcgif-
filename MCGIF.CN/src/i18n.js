import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zh from './locales/zh.json';
import en from './locales/en.json';
import ja from './locales/ja.json';
import ko from './locales/ko.json';
import de from './locales/de.json';
import ru from './locales/ru.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      zh: { translation: zh },
	  en: { translation: en },
	  ja: { translation: ja },
	  ko: { translation: ko },
	  de: { translation: de },
	  ru: { translation: ru }
    },

    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false
    },

    detection: {
      order: [
        'querystring',
        'localStorage',
        'navigator'
      ],

      caches: ['localStorage'],
      lookupQuerystring: 'lng'
    }
  });

export default i18n;
