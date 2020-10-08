import { createSelector } from 'reselect'

const test = (state) => state.test
export const getTestVersion = createSelector(test, (state) => state.version)
