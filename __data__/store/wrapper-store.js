import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'

import rootSaga from '../sagas'
import reducers from '../reducers'
import { base } from '../constants'

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = composeWithDevTools({ name: base.NAME_PROJECT })
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
  )

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

const wrapperStore = createWrapper(makeStore)

export default wrapperStore
