import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';

import rootSaga from './sagas';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
  }) || compose;

const sagaMiddleware = createSagaMiddleware();

let storeConfig;
if (process.env.NODE_ENV === 'development') {
  storeConfig = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
} else {
  storeConfig = createStore(reducers, applyMiddleware(sagaMiddleware));
}

sagaMiddleware.run(rootSaga);

export const store = storeConfig;

export const persistor = persistStore(store);
