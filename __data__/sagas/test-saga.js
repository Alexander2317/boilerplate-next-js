import { put, takeEvery, select } from 'redux-saga/effects'
import { actionTypes } from '../constants'
import { getTestCount } from '../selectors'

export function* init() {
  const count = yield select(getTestCount)
  yield put({
    type: actionTypes.TEST,
    payload: { count: count + 1 },
  })
}

function* testSaga() {
  yield takeEvery(actionTypes.TEST_START, init)
}

export default testSaga
