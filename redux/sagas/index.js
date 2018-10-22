/* eslint-disable import/prefer-default-export */

import { all } from 'redux-saga/effects';
import { saga as testSaga } from './test';

export function* rootSaga() {
  yield all([testSaga()]);
}
