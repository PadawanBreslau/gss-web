import { call, put, takeLatest } from 'redux-saga/effects';
import { Authenticator } from 'helpers/Authenticator';
import { Gtm } from 'utils/googleTagManager';
import { configUserIdForRollbar } from 'utils/initRollbar';
import { showUiError, showLoading, showUiSuccess } from 'redux/UI/actions';
import {
  LOGOUT_REQUEST,
  LOGIN_REQUEST,
  SIGN_UP_REQUEST,
  PASSWORD_RESET_REQUEST,
  SET_PASSWORD_REQUEST,
  GOOGLE_LOGIN_REQUEST,
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
    yield call(configUserIdForRollbar);
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
    yield call(Gtm.login);
    yield call(configUserIdForRollbar);
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
    yield call(Gtm.resetPassword, payload);
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
export function* googleLoginSaga({ googleUserObject, successCallback }) {
  try {
    yield put(showLoading());
    const results = yield call(Authenticator.googleLogin, googleUserObject);
    yield put(LogInSuccess(results));
    yield call(Gtm.login, 'google');
    if (successCallback) yield put(successCallback);
  } catch (err) {
    yield put(showUiError(err));
    yield put(LogInError(err));
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
  yield takeLatest(GOOGLE_LOGIN_REQUEST, googleLoginSaga);
}
