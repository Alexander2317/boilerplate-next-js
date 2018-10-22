import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import { rootSaga as saga } from '../sagas';
import reducers from '../reducers';

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === 'development',
});

const makeStore = (initialState, options) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware, loggerMiddleware)),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(saga);
  };
  store.runSagaTask();

  return store;
};

export default makeStore;
