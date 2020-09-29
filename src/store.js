import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let storeConfig;
if (process.env.NODE_ENV === 'development') {
  storeConfig = createStore(reducers, composeEnhancers(applyMiddleware()));
} else {
  storeConfig = createStore(reducers);
}
export const store = storeConfig;

export const persistor = persistStore(store);
