import { put, takeLatest } from 'redux-saga/effects';
import { showUiError, showUiSuccess } from 'redux/UI/actions';
import {
  LOGOUT_REQUEST,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  PASSWORD_RESET_REQUEST,
  SET_PASSWORD_REQUEST,
  GOOGLE_LOGIN_REQUEST,
} from '../constants';
import {
  LogOutSuccess,
  LogOutError,
  LogInSuccess,
  LogInError,
  SignUpSuccess,
  SignUpError,
  PasswordResetRequestSuccess,
  PasswordResetRequestError,
  SetPasswordSuccess,
  SetPasswordError,
} from '../actions';

import defaultSaga, {
  logOutSaga,
  logInSaga,
  signUpSaga,
  resetPasswordSaga,
  setPasswordSaga,
  googleLoginSaga,
} from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('User: Logout Saga', () => {
  let logoutRequestGenerator;
  const exampleResponse = {};
  beforeEach(() => {
    logoutRequestGenerator = logOutSaga({ endpoint: '/endpoint' });
    const putLoadingDescriptor = logoutRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = logoutRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the LogOutSuccess action if it requests the data successfully', () => {
    const putDescriptor = logoutRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogOutSuccess(exampleResponse)));
  });
  it('should call the LogOutError action if the response errors', () => {
    const response = { some: 'Logout error' };
    const putShowErrorDescriptor = logoutRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = logoutRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(LogOutError(response)));
  });
});
describe('User: Login Saga', () => {
  let loginRequestGenerator;
  const exampleResponse = {};
  const callback = jest.fn();
  beforeEach(() => {
    loginRequestGenerator = logInSaga({
      endpoint: '/endpoint',
      payload: {},
      successCallback: callback,
    });
    const putLoadingDescriptor = loginRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = loginRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the LogInSuccess action if it requests the data successfully', () => {
    const putDescriptor = loginRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogInSuccess(exampleResponse)));
  });
  it('should do the callback', () => {
    const putDescriptor = loginRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogInSuccess(exampleResponse)));
    // skip GTM tracking and Rollbar config
    loginRequestGenerator.next(exampleResponse);
    loginRequestGenerator.next(exampleResponse);
    const putCallbackDescriptor = loginRequestGenerator.next(exampleResponse).value;
    expect(putCallbackDescriptor).toEqual(put(callback));
  });
  it('should call the LogInError action if the response errors', () => {
    const response = { some: 'Logout error' };
    const putShowErrorDescriptor = loginRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = loginRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(LogInError(response)));
  });
});
describe('User: Sign Up Saga', () => {
  let signUpRequestGenerator;
  const exampleResponse = { data: {}, meta: { message: 'example message' } };
  beforeEach(() => {
    signUpRequestGenerator = signUpSaga({
      endpoint: '/endpoint',
      payload: {},
    });
    const putLoadingDescriptor = signUpRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = signUpRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the SignUpSuccess action if the sign up was successfull', () => {
    const putDescriptor = signUpRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(SignUpSuccess(exampleResponse)));
  });
  it('should display the success message', () => {
    const message = 'example message';
    const putDescriptor = signUpRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(SignUpSuccess(exampleResponse)));
    const putShowSuccessDescriptor = signUpRequestGenerator.next(exampleResponse).value;
    expect(putShowSuccessDescriptor).toEqual(put(showUiSuccess(message)));
  });
  it('should call the SignUpError action if the response errors', () => {
    const response = { some: 'Sign Up error' };
    const putShowErrorDescriptor = signUpRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = signUpRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(SignUpError(response)));
  });
});
describe('User: Reset Password Saga', () => {
  let resetPasswordRequestGenerator;
  const exampleResponse = { data: {}, meta: { message: 'example message' } };
  beforeEach(() => {
    resetPasswordRequestGenerator = resetPasswordSaga({
      endpoint: '/endpoint',
      payload: {},
    });
    const putLoadingDescriptor = resetPasswordRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = resetPasswordRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the PasswordResetRequestSuccess action if the request was successfully received by a server', () => {
    const putDescriptor = resetPasswordRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(PasswordResetRequestSuccess(exampleResponse)));
  });
  it('should display the success message', () => {
    const message = 'example message';
    const putDescriptor = resetPasswordRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(PasswordResetRequestSuccess(exampleResponse)));
    // skip GTM tracking
    resetPasswordRequestGenerator.next(exampleResponse);
    const putShowSuccessDescriptor = resetPasswordRequestGenerator.next(exampleResponse).value;
    expect(putShowSuccessDescriptor).toEqual(put(showUiSuccess(message)));
  });
  it('should call the PasswordResetRequestError action if the response errors', () => {
    const response = { some: 'Password Reset Request error' };
    const putShowErrorDescriptor = resetPasswordRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = resetPasswordRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(PasswordResetRequestError(response)));
  });
});
describe('User: Set Password Saga', () => {
  let setPasswordRequestGenerator;
  const exampleResponse = { data: {}, meta: { message: 'example message' } };
  beforeEach(() => {
    setPasswordRequestGenerator = setPasswordSaga({
      endpoint: '/endpoint',
      payload: {},
    });
    const putLoadingDescriptor = setPasswordRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = setPasswordRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the SetPasswordSuccess action if the password was successfully changed by server', () => {
    const putDescriptor = setPasswordRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(SetPasswordSuccess(exampleResponse)));
  });
  it('should display the success message', () => {
    const message = 'example message';
    const putDescriptor = setPasswordRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(SetPasswordSuccess(exampleResponse)));
    const putShowSuccessDescriptor = setPasswordRequestGenerator.next(exampleResponse).value;
    expect(putShowSuccessDescriptor).toEqual(put(showUiSuccess(message)));
  });
  it('should call the SetPasswordError action if the response errors', () => {
    const response = { some: 'Error when setting a password' };
    const putShowErrorDescriptor = setPasswordRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = setPasswordRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(SetPasswordError(response)));
  });
});
describe('User: Google Login Saga', () => {
  let googleLoginRequestGenerator;
  const exampleResponse = {};
  const callback = jest.fn();
  beforeEach(() => {
    googleLoginRequestGenerator = googleLoginSaga({
      googleUserObject: {},
      successCallback: callback,
    });
    const putLoadingDescriptor = googleLoginRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = googleLoginRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the LogInSuccess action if it requests the data successfully', () => {
    const putDescriptor = googleLoginRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogInSuccess(exampleResponse)));
  });
  it('should do the callback', () => {
    const putDescriptor = googleLoginRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(LogInSuccess(exampleResponse)));
    // skip the GTM action
    googleLoginRequestGenerator.next(exampleResponse);
    const putCallbackDescriptor = googleLoginRequestGenerator.next(exampleResponse).value;
    expect(putCallbackDescriptor).toEqual(put(callback));
  });
  it('should call the LogInError action if the response errors', () => {
    const response = { some: 'Logout error' };
    const putShowErrorDescriptor = googleLoginRequestGenerator.throw(response).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(response)));
    const putErrorDescriptor = googleLoginRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(LogInError(response)));
  });
});

describe('User: defaultSaga watcher', () => {
  const watcher = defaultSaga();
  it('should start task to watch for LOGOUT_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGOUT_REQUEST, logOutSaga));
  });
  it('should start task to watch for LOGIN_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOGIN_REQUEST, logInSaga));
  });
  it('should start task to watch for SIGN_UP_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SIGN_UP_REQUEST, signUpSaga));
  });
  it('should start task to watch for PASSWORD_RESET_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(PASSWORD_RESET_REQUEST, resetPasswordSaga));
  });
  it('should start task to watch for SET_PASSWORD_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(SET_PASSWORD_REQUEST, setPasswordSaga));
  });
  it('should start task to watch for GOOGLE_LOGIN_REQUEST action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(GOOGLE_LOGIN_REQUEST, googleLoginSaga));
  });
});
