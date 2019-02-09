import { put, spawn } from 'redux-saga/effects';
import { TEST } from '../constants';

export function* init() {
  yield put({
    type: TEST,
    payload: { version: 3 },
  });
}

export function* saga() {
  yield spawn(init);
}
