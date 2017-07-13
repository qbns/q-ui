import i18next from 'i18next';

export const SET_LOCALE = 'locale/set-locale';

const initialState = {
  language: APP_DEFAULT_LOCALE || 'pl',
};

export function setLocale(locale) {
  i18next.setLng(locale);
  return { type: SET_LOCALE, locale };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCALE:
      console.log(action);
      return { language: action.locale };
    default:
      return state;
  }
}
