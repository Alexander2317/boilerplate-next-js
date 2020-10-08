import { all } from 'redux-saga/effects'

import testSaga from './test-saga'

function* rootSaga() {
  yield all([testSaga()])
}

export default rootSaga
