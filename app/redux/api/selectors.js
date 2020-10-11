import { createSelector } from 'reselect';
import Jsona from 'jsona';

const dataFormatter = new Jsona();
const generateSelectApi = (storeName) =>
  createSelector(
    (state) => state[storeName],
    (substate) => {
      const payload = dataFormatter.deserialize(substate);
      return {
        loading: substate.loading,
        initialized: substate.initialized,
        error: substate.error,
        meta: substate.meta ? substate.meta : {},
        payload,
      };
    },
  );
export default generateSelectApi;
