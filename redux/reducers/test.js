import { Record } from 'immutable'
import { TEST } from 'redux/constants'

const ReducerRecord = Record({
  version: 0,
})

export default function test(state = new ReducerRecord(), action) {
  const { type, payload } = action
  switch (type) {
    case TEST:
      return state.set('version', payload.version)
    default:
      return state
  }
}
