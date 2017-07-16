import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';
import UIKit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import createHistory from 'history/createBrowserHistory';
import i18n from './service/i18n';
import store from './store/createStore';
import getRoutes from './routes';
/* eslint-disable */
import style from './styles//* @echo BRAND *//global.scss';
/* eslint-enable */

UIKit.use(Icons);

const APP_TARGET_NODE_ID = 'app';
const history = createHistory();

render(<I18nextProvider i18n={i18n}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      { getRoutes() }
    </ConnectedRouter>
  </Provider>
</I18nextProvider>, document.getElementById(APP_TARGET_NODE_ID));
