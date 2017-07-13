import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './store/reducers';
import App from './App';

const store = createStore(
  reducers,
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
