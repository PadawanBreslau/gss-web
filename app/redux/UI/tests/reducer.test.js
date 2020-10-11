/* eslint-disable no-param-reassign */
import produce from 'immer';
import uiReducer from '../reducer';
import { showLoading, hideLoading, showUiSuccess, showUiError, hideUiMessage } from '../actions';

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

describe('UI reducer', () => {
  it('returns the initial state', () => {
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SHOW_LOADING', () => {
    expect(uiReducer(undefined, showLoading())).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle HIDE_LOADING', () => {
    expect(uiReducer(undefined, hideLoading())).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
      }),
    );
  });
  it('should handle success SHOW_MESSAGE', () => {
    expect(uiReducer(undefined, showUiSuccess('successText'))).toEqual(
      produce(initialState, (draft) => {
        draft.message = {
          isActive: true,
          title: 'Success',
          text: 'successText',
          type: 'success',
        };
      }),
    );
  });
  it('should handle error SHOW_MESSAGE', () => {
    const expected = produce(initialState, (draft) => {
      draft.message = {
        isActive: true,
        type: 'error',
        error: { some: 'object' },
      };
    });
    expect(uiReducer(undefined, showUiError({ some: 'object' }))).toEqual(expected);
  });
  it('should handle HIDE_MESSAGE', () => {
    expect(uiReducer(undefined, hideUiMessage())).toEqual(
      produce(initialState, (draft) => {
        draft.message = {
          ...initialState.message,
          isActive: false,
        };
      }),
    );
  });
});
