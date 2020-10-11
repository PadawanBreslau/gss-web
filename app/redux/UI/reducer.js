/* eslint-disable no-param-reassign */
/*
 *
 * Messages reducer
 *
 */

import produce from 'immer';
import { SHOW_MESSAGE, HIDE_MESSAGE, SHOW_LOADING, HIDE_LOADING } from './constants';

const initialState = {
  message: {
    isActive: false,
    title: null,
    text: null,
    type: null,
  },
  loading: false,
  error: null,
};

const uiReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    switch (action.type) {
      case SHOW_LOADING:
        draft.loading = true;
        draft.message = {
          title: null,
          text: null,
          type: null,
          isActive: false,
        };
        break;
      case HIDE_LOADING:
        draft.loading = false;
        break;
      case SHOW_MESSAGE:
        draft.loading = false;
        draft.message = {
          ...action.data,
          isActive: true,
        };
        break;
      case HIDE_MESSAGE:
        draft.message = {
          title: null,
          text: null,
          type: null,
          isActive: false,
        };
        break;
      default:
        break;
    }
  });

export default uiReducer;
