import { createSelector } from 'reselect';

/**
 * Direct selector to the messages state domain
 */
const selectUiDomain = (state) => state.ui;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Messages
 */

const makeSelectUi = () =>
  createSelector(
    selectUiDomain,
    (substate) => substate,
  );

export default makeSelectUi;
export { selectUiDomain };
