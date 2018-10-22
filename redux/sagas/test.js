import { put, spawn } from 'redux-saga/effects';
import { TEST } from '../constants';

export const init = function*() {
  yield put({
    type: TEST,
  });
};

export const saga = function*() {
  yield spawn(init);
};
