import { call, put, takeLatest } from 'redux-saga/effects';
import { Authenticator } from 'helpers/Authenticator';
import { showUiError, showLoading, showUiSuccess } from 'redux/UI/actions';
import {
  LOGOUT_REQUEST,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  PASSWORD_RESET_REQUEST,
  SET_PASSWORD_REQUEST,
} from './constants';
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
} from './actions';

export function* logOutSaga({ endpoint, successCallback }) {
  try {
    yield put(showLoading());
    yield call(Authenticator.logout, endpoint);
    yield put(LogOutSuccess());
    if (successCallback) yield put(successCallback);
  } catch (err) {
    yield put(showUiError(err));
    yield put(LogOutError(err));
  }
}
export function* logInSaga({ endpoint, payload, successCallback }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.authenticate, endpoint, payload);
    yield put(LogInSuccess(results));
    if (successCallback) yield put(successCallback);
  } catch (err) {
    yield put(showUiError(err));
    yield put(LogInError(err));
  }
}
export function* signUpSaga({ endpoint, payload, successCallback }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.authenticate, endpoint, payload);
    yield put(SignUpSuccess(results));
    if (successCallback) yield call(successCallback, payload);
    yield put(showUiSuccess(results.meta?.message));
  } catch (err) {
    yield put(showUiError(err));
    yield put(SignUpError(err));
  }
}
export function* resetPasswordSaga({ endpoint, payload }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.authenticate, endpoint, payload);
    yield put(PasswordResetRequestSuccess(results));
    yield put(showUiSuccess(results.meta?.message));
  } catch (err) {
    yield put(showUiError(err));
    yield put(PasswordResetRequestError(err));
  }
}
export function* setPasswordSaga({ endpoint, payload }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.authenticate, endpoint, payload);
    yield put(SetPasswordSuccess(results));
    yield put(showUiSuccess(results.meta?.message));
  } catch (err) {
    yield put(showUiError(err));
    yield put(SetPasswordError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  yield takeLatest(LOGOUT_REQUEST, logOutSaga);
  yield takeLatest(LOGIN_REQUEST, logInSaga);
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
  yield takeLatest(PASSWORD_RESET_REQUEST, resetPasswordSaga);
  yield takeLatest(SET_PASSWORD_REQUEST, setPasswordSaga);
}
