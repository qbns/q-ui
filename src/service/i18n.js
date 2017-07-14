import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { pl, en } from '../translations';

export default i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    react: {
      wait: true,
    },

    ns: ['common'],
    defaultNS: 'common',
    debug: true,
    resources: { pl, en },
  });
