import { createSelector } from 'reselect';

const selectUserDomain = (state) => state.user;

const makeSelectUser = () =>
  createSelector(
    selectUserDomain,
    (substate) => substate,
  );

export default makeSelectUser;
export { selectUserDomain };
