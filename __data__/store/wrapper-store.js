import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootSaga from '../sagas'
import reducers from '../reducers'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapperStore = createWrapper(makeStore)

export default wrapperStore
