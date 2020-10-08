import { put, takeEvery, select } from 'redux-saga/effects'
import { actionTypes } from '../constants'
import { getTestVersion } from '../selectors'

export function* init() {
  const version = yield select(getTestVersion)
  yield put({
    type: actionTypes.TEST,
    payload: { version: version + 1 },
  })
}

function* testSaga() {
  yield takeEvery(actionTypes.TEST_START, init)
}

export default testSaga
