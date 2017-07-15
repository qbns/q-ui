import { createStore } from 'redux';
import reducers from './reducers';

export default createStore(
  reducers,
  {},
  window.devToolsExtension && APP_DEV ? window.devToolsExtension() : f => f,
);
