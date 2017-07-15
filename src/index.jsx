import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import UIKit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import i18n from './service/i18n';
import App from './App';
import store from './store/createStore';
/* eslint-disable */
import style from './styles//* @echo BRAND *//global.scss';
/* eslint-enable */

UIKit.use(Icons);
render(<I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <App />
  </Provider>
</I18nextProvider>, document.getElementById('app'));
