import { createSelector } from 'reselect'

const test = (state) => state.test
export const getTestCount = createSelector(test, (state) => state.count)
