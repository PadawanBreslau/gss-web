import { showLoading, hideLoading, showUiError, showUiSuccess, hideUiMessage } from '../actions';

import { SHOW_MESSAGE, HIDE_MESSAGE, SHOW_LOADING, HIDE_LOADING } from '../constants';

describe('UI actions', () => {
  it('has a type of all actions', () => {
    expect(showLoading()).toEqual({
      type: SHOW_LOADING,
    });
    expect(hideLoading()).toEqual({
      type: HIDE_LOADING,
    });
    const exampleError = {
      body: {
        errors: [
          {
            title: 'Some error',
            detail: 'Some details',
          },
        ],
      },
    };
    expect(showUiError(exampleError)).toEqual({
      type: SHOW_MESSAGE,
      data: {
        type: 'error',
        error: exampleError,
      },
    });
    expect(showUiSuccess('msg')).toEqual({
      type: SHOW_MESSAGE,
      data: {
        type: 'success',
        title: 'Success',
        text: 'msg',
      },
    });
    expect(hideUiMessage()).toEqual({
      type: HIDE_MESSAGE,
    });
  });
});
