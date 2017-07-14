import i18n from '../../service/i18n';

export const SET_LOCALE = 'locale/set-locale';

const initialState = {
  language: APP_DEFAULT_LOCALE || 'pl',
};

export function setLocale(locale) {
  i18n.changeLanguage(locale);
  return { type: SET_LOCALE, locale };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      return { language: action.locale };
    default:
      return state;
  }
}
