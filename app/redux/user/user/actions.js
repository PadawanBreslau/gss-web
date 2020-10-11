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
} from './constants';

export function LogOut(endpoint, successCallback) {
  return {
    type: LOGOUT_REQUEST,
    endpoint,
    successCallback,
  };
}
export function LogOutSuccess() {
  return {
    type: LOGOUT_SUCCESS,
  };
}
export function LogOutError(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}
export function LogIn(endpoint, payload, successCallback) {
  return {
    type: LOGIN_REQUEST,
    endpoint,
    payload: {
      data: {
        attributes: payload,
      },
    },
    successCallback,
  };
}
export function LogInSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
export function LogInError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
export function SignUp(endpoint, payload, successCallback) {
  return {
    type: SIGN_UP_REQUEST,
    endpoint,
    payload: {
      data: {
        attributes: payload,
      },
    },
    successCallback,
  };
}
export function SignUpSuccess(data) {
  return {
    type: SIGN_UP_SUCCESS,
    data,
  };
}
export function SignUpError(error) {
  return {
    type: SIGN_UP_ERROR,
    error,
  };
}
export function PasswordReset(endpoint, payload) {
  return {
    type: PASSWORD_RESET_REQUEST,
    endpoint,
    payload: {
      data: {
        attributes: payload,
      },
    },
  };
}
export function PasswordResetRequestSuccess(data) {
  return {
    type: PASSWORD_RESET_REQUEST_SUCCESS,
    data,
  };
}
export function PasswordResetRequestError(error) {
  return {
    type: PASSWORD_RESET_REQUEST_ERROR,
    error,
  };
}
export function SetPassword(endpoint, payload) {
  return {
    type: SET_PASSWORD_REQUEST,
    endpoint,
    payload: {
      data: {
        attributes: payload,
      },
    },
  };
}
export function SetPasswordSuccess(data) {
  return {
    type: SET_PASSWORD_SUCCESS,
    data,
  };
}
export function SetPasswordError(error) {
  return {
    type: SET_PASSWORD_ERROR,
    error,
  };
}
export function GoogleLogIn(googleUserObject, successCallback) {
  return {
    type: GOOGLE_LOGIN_REQUEST,
    googleUserObject,
    successCallback,
  };
}
