import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers';

export default createStore(
  reducers,
  compose(
    applyMiddleware(routerMiddleware),
    window.devToolsExtension && APP_DEV ? window.devToolsExtension() : f => f,
  ),
);
