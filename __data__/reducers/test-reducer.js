import { Record } from 'immutable'

import { actionTypes } from '../constants'

const ReducerRecord = Record({
  version: 0,
})

export default function testReducer(state = new ReducerRecord(), action) {
  const { type, payload } = action
  switch (type) {
    case actionTypes.TEST:
      return state.set('version', payload.version)
    default:
      return state
  }
}
