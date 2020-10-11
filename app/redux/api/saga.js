import { call, put, select, takeLatest } from 'redux-saga/effects';
import Connection from 'helpers/Connection';
import { showUiError, showLoading, hideLoading } from 'redux/UI/actions';
import {
  INITIALIZE_PAGEDATA_REQUEST,
  RELOAD_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_REQUEST,
} from './constants';
import generateActions from './actions';

export function* fetchApiDataSaga(storeName, { endpoint, callback }) {
  const { loadPageDataSuccess, loadPageDataError } = generateActions(storeName);
  try {
    yield put(showLoading());
    let getEndpoint = endpoint;
    if (!getEndpoint) {
      getEndpoint = yield select((state) => state.get(storeName).get('endpoint'));
    }
    const results = yield call(Connection.get, getEndpoint);
    yield put(loadPageDataSuccess(results));
    yield put(hideLoading());
    if (callback) {
      yield call(callback, results);
    }
  } catch (err) {
    yield put(showUiError(err));
    yield put(loadPageDataError(err));
  }
}
export function* sendApiDataSaga(storeName, { endpoint, method, payload, successCallback, id }) {
  const { submitPageDataSuccess, submitPageDataError } = generateActions(storeName);
  try {
    yield put(showLoading());
    const results = yield call(Connection[method], endpoint, payload);
    yield put(submitPageDataSuccess(results, id));
    if (successCallback) yield put(successCallback);
  } catch (err) {
    yield put(showUiError(err));
    yield put(submitPageDataError(err, id));
  }
}

export default function generateSaga(storeName) {
  return function* defaultSaga() {
    yield takeLatest(`${RELOAD_PAGEDATA_REQUEST}/${storeName}`, fetchApiDataSaga, storeName);
    yield takeLatest(`${INITIALIZE_PAGEDATA_REQUEST}/${storeName}`, fetchApiDataSaga, storeName);
    yield takeLatest(`${SUBMIT_PAGEDATA_REQUEST}/${storeName}`, sendApiDataSaga, storeName);
  };
}
