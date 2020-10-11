/* eslint-disable no-param-reassign */
import produce from 'immer';
import userReducer from '../reducer';
import {
  LogOut,
  LogOutSuccess,
  LogOutError,
  LogIn,
  LogInSuccess,
  LogInError,
  SignUp,
  SignUpSuccess,
  SignUpError,
  PasswordReset,
  PasswordResetRequestSuccess,
  PasswordResetRequestError,
  SetPassword,
  SetPasswordSuccess,
  SetPasswordError,
  GoogleLogIn,
} from '../actions';

const initialState = {
  loading: false,
  error: null,
  data: {},
  name: null,
  userId: null,
  avatar: null,
};

describe('User reducer', () => {
  it('returns the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle LOGOUT_REQUEST', () => {
    expect(userReducer(undefined, LogOut({ example: 'data' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle LOGOUT_SUCCESS', () => {
    expect(userReducer(undefined, LogOutSuccess())).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.redirect = true;
      }),
    );
  });
  it('should handle LOGOUT_ERROR', () => {
    expect(userReducer(undefined, LogOutError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
      }),
    );
  });
  it('should handle LOGIN_REQUEST', () => {
    expect(userReducer(undefined, LogIn({ example: 'data' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle LOGIN_SUCCESS', () => {
    expect(
      userReducer(
        undefined,
        LogInSuccess({
          data: {
            example: 'data',
            attributes: { name: 'Adam' },
            id: '1',
          },
        }),
      ),
    ).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.redirect = true;
        draft.data = {
          example: 'data',
          attributes: { name: 'Adam' },
          id: '1',
        };
        draft.name = 'Adam';
        draft.userId = '1';
      }),
    );
  });
  it('should handle LOGIN_ERROR', () => {
    expect(userReducer(undefined, LogInError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
      }),
    );
  });
  it('should handle SIGN_UP_REQUEST', () => {
    expect(userReducer(undefined, SignUp({ example: 'data' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle SIGN_UP_SUCCESS', () => {
    expect(
      userReducer(
        undefined,
        SignUpSuccess({
          data: { example: 'data', attributes: { name: 'Adam' }, id: '1' },
        }),
      ),
    ).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.data = {
          example: 'data',
          attributes: { name: 'Adam' },
          id: '1',
        };
        draft.name = 'Adam';
        draft.userId = '1';
      }),
    );
  });
  it('should handle SIGN_UP_ERROR', () => {
    expect(userReducer(undefined, SignUpError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
      }),
    );
  });
  it('should handle PASSWORD_RESET_REQUEST', () => {
    expect(userReducer(undefined, PasswordReset({ email: 'user@example.com' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle PASSWORD_RESET_REQUEST_SUCCESS', () => {
    expect(
      userReducer(
        undefined,
        PasswordResetRequestSuccess({
          data: { example: 'data' },
        }),
      ),
    ).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.data = {
          example: 'data',
        };
      }),
    );
  });
  it('should handle PASSWORD_RESET_REQUEST_ERROR', () => {
    expect(userReducer(undefined, PasswordResetRequestError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
      }),
    );
  });
  it('should handle SET_PASSWORD_REQUEST', () => {
    expect(userReducer(undefined, SetPassword({ email: 'user@example.com' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
      }),
    );
  });
  it('should handle SET_PASSWORD_SUCCESS', () => {
    expect(
      userReducer(
        undefined,
        SetPasswordSuccess({
          data: { example: 'data' },
        }),
      ),
    ).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.data = {
          example: 'data',
        };
      }),
    );
  });
  it('should handle SET_PASSWORD_ERROR', () => {
    expect(userReducer(undefined, SetPasswordError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
      }),
    );
  });
  it('should handle GOOGLE_LOGIN_REQUEST', () => {
    expect(userReducer(undefined, GoogleLogIn({ example: 'data' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
        draft.error = null;
      }),
    );
  });
});
