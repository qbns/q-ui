import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(
  reducers,
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);
