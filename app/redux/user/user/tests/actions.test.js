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

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_REQUEST_SUCCESS,
  PASSWORD_RESET_REQUEST_ERROR,
  SET_PASSWORD_REQUEST,
  SET_PASSWORD_SUCCESS,
  SET_PASSWORD_ERROR,
  GOOGLE_LOGIN_REQUEST,
} from '../constants';

describe('User actions', () => {
  it('has a type of all actions', () => {
    expect(LogOut()).toEqual({
      type: LOGOUT_REQUEST,
    });
    expect(LogOutSuccess()).toEqual({
      type: LOGOUT_SUCCESS,
    });
    expect(LogOutError({ some: 'error' })).toEqual({
      type: LOGOUT_ERROR,
      error: { some: 'error' },
    });
    const exampleCallback = '/somewhere';
    const exampleCredentials = { username: 'hi' };
    expect(LogIn('/endpoint', exampleCredentials, exampleCallback)).toEqual({
      type: LOGIN_REQUEST,
      endpoint: '/endpoint',
      payload: { data: { attributes: { username: 'hi' } } },
      successCallback: exampleCallback,
    });
    expect(LogInSuccess()).toEqual({
      type: LOGIN_SUCCESS,
    });
    expect(LogInError({ some: 'error' })).toEqual({
      type: LOGIN_ERROR,
      error: { some: 'error' },
    });
    expect(SignUp('/endpoint', exampleCredentials, exampleCallback)).toEqual({
      type: SIGN_UP_REQUEST,
      endpoint: '/endpoint',
      payload: { data: { attributes: { username: 'hi' } } },
      successCallback: exampleCallback,
    });
    expect(SignUpSuccess()).toEqual({
      type: SIGN_UP_SUCCESS,
    });
    expect(SignUpError({ some: 'error' })).toEqual({
      type: SIGN_UP_ERROR,
      error: { some: 'error' },
    });
    expect(PasswordReset('/endpoint', { email: 'user@example.com' })).toEqual({
      type: PASSWORD_RESET_REQUEST,
      endpoint: '/endpoint',
      payload: { data: { attributes: { email: 'user@example.com' } } },
    });
    expect(PasswordResetRequestSuccess()).toEqual({
      type: PASSWORD_RESET_REQUEST_SUCCESS,
    });
    expect(PasswordResetRequestError({ some: 'error' })).toEqual({
      type: PASSWORD_RESET_REQUEST_ERROR,
      error: { some: 'error' },
    });
    expect(SetPassword('/endpoint', { email: 'user@example.com' })).toEqual({
      type: SET_PASSWORD_REQUEST,
      endpoint: '/endpoint',
      payload: { data: { attributes: { email: 'user@example.com' } } },
    });
    expect(SetPasswordSuccess()).toEqual({
      type: SET_PASSWORD_SUCCESS,
    });
    expect(SetPasswordError({ some: 'error' })).toEqual({
      type: SET_PASSWORD_ERROR,
      error: { some: 'error' },
    });
    expect(GoogleLogIn({}, exampleCallback)).toEqual({
      type: GOOGLE_LOGIN_REQUEST,
      googleUserObject: {},
      successCallback: exampleCallback,
    });
  });
});
