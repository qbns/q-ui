import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',

    react: {
      wait: true,
    },

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: true,

    resources: {
      en: {
        common: {
          hello: 'Hello',
        },
      },
      pl: {
        common: {
          hello: 'Cześć',
        },
      },
    },

    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ',',
      format(value, format, lng) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      },
    },
  });

export default i18n;
