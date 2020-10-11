/* eslint-disable no-param-reassign */
import produce from 'immer';

import {
  RELOAD_PAGEDATA_REQUEST,
  INITIALIZE_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
} from './constants';

const initialState = {
  loading: false,
  initialized: false,
  error: null,
  data: [],
  endpoint: null,
};
export default function generateReducer(storeName) {
  const apiReducer = (state = initialState, action) =>
    // eslint-disable-next-line consistent-return
    produce(state, (draft) => {
      switch (action.type) {
        case `${INITIALIZE_PAGEDATA_REQUEST}/${storeName}`:
          draft.loading = true;
          draft.initialized = false;
          draft.error = null;
          draft.endpoint = action.endpoint;
          draft.data = [];
          break;
        case `${RELOAD_PAGEDATA_REQUEST}/${storeName}`:
          draft.loading = true;
          draft.error = null;
          draft.endpoint = action.endpoint;
          break;
        case `${LOAD_PAGEDATA_SUCCESS}/${storeName}`:
          draft.loading = false;
          draft.initialized = true;
          Object.assign(draft, action.payload);
          break;
        case `${LOAD_PAGEDATA_ERROR}/${storeName}`:
          draft.loading = false;
          draft.error = action.error;
          draft.data = [];
          break;
        case `${SUBMIT_PAGEDATA_REQUEST}/${storeName}`:
          draft.loading = true;
          draft.error = null;
          draft.data = [];
          break;
        case `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`:
          draft.loading = false;
          Object.assign(draft, action.payload);
          break;
        case `${SUBMIT_PAGEDATA_ERROR}/${storeName}`:
          draft.loading = false;
          draft.error = action.error;
          draft.data = [];
          break;
        default:
          break;
      }
    });

  return apiReducer;
}
