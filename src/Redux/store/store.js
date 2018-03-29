import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import devTools from 'remote-redux-devtools';
import storage from 'redux-persist/lib/storage';

import reducers from '../reducers/reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

/* const composeEnhancers=compose(
  window.devToolsExtension ? window.devToolsExtension() : f=>f
); */

const enhancers = compose(
  applyMiddleware(thunk, createLogger()),
  devTools({
    hostname: 'localhost',
    port: 5678,
  }),
);

const store = createStore(persistedReducer, enhancers);
export default store;
