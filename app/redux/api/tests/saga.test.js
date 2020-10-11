import { put, call, takeLatest } from 'redux-saga/effects';
import { showUiError } from 'redux/UI/actions';
import {
  RELOAD_PAGEDATA_REQUEST,
  INITIALIZE_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_REQUEST,
} from '../constants';
import generateActions from '../actions';
import generateSaga, { fetchApiDataSaga, sendApiDataSaga } from '../saga';

/* eslint-disable redux-saga/yield-effects */
describe('API: fetchApiDataSaga', () => {
  let fetchRequestGenerator;
  const exampleResponse = {
    data: {
      attributes: { some: 'attribute' },
    },
  };
  const { loadPageDataSuccess, loadPageDataError } = generateActions('testStore');
  beforeEach(() => {
    fetchRequestGenerator = fetchApiDataSaga('testStore', {
      endpoint: '/test',
    });
    const putLoadingDescriptor = fetchRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = fetchRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the loadPageDataSuccess action if it requests the data successfully', () => {
    const putDescriptor = fetchRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(loadPageDataSuccess(exampleResponse)));
  });
  it('should initialize form with the fetched data', () => {
    const initializeFormCallback = (data) => ({
      type: 'someAction',
      data,
    });
    const callbackRequestGenerator = fetchApiDataSaga('testStore', {
      endpoint: '/test',
      method: 'post',
      payload: {},
      callback: initializeFormCallback,
    });
    const putLoadingDescriptor = callbackRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = callbackRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
    const putDescriptor = callbackRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(loadPageDataSuccess(exampleResponse)));
    const putLoaderDescriptor = callbackRequestGenerator.next().value;
    expect(putLoaderDescriptor).toMatchSnapshot();
    const putCallbackDescriptor = callbackRequestGenerator.next(exampleResponse).value;
    expect(putCallbackDescriptor).toEqual(
      call(initializeFormCallback, {
        data: { attributes: { some: 'attribute' } },
      }),
    );
  });
  it('should call the loadPageDataError action if the response errors', () => {
    const error = {
      title: 'some api error',
    };
    const putShowErrorDescriptor = fetchRequestGenerator.throw(error).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(error)));
    const putErrorDescriptor = fetchRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(loadPageDataError(error)));
  });
});

describe('API: sendApiDataSaga', () => {
  let sendRequestGenerator;
  const exampleResponse = {};
  const { submitPageDataSuccess, submitPageDataError } = generateActions('testStore');
  beforeEach(() => {
    sendRequestGenerator = sendApiDataSaga('testStore', {
      endpoint: '/test',
      method: 'post',
      payload: {},
    });
    const putLoadingDescriptor = sendRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = sendRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });
  it('should dispatch the submitPageDataSuccess action if it requests the data successfully', () => {
    const putDescriptor = sendRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(submitPageDataSuccess(exampleResponse)));
  });
  it('should do the callback after success', () => {
    const successCallback = (data) => ({
      type: 'someAction',
      data,
    });
    sendRequestGenerator = sendApiDataSaga('testStore', {
      endpoint: '/test',
      method: 'post',
      payload: {},
      successCallback,
    });
    const putLoadingDescriptor = sendRequestGenerator.next().value;
    expect(putLoadingDescriptor).toMatchSnapshot();
    const callDescriptor = sendRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
    const putDescriptor = sendRequestGenerator.next(exampleResponse).value;
    expect(putDescriptor).toEqual(put(submitPageDataSuccess(exampleResponse)));
    const putCallbackDescriptor = sendRequestGenerator.next(exampleResponse).value;
    expect(putCallbackDescriptor).toEqual(put(successCallback));
  });

  it('should call the submitPageDataError action if the response errors', () => {
    const error = {
      title: 'some api error',
    };
    const putShowErrorDescriptor = sendRequestGenerator.throw(error).value;
    expect(putShowErrorDescriptor).toEqual(put(showUiError(error)));
    const putErrorDescriptor = sendRequestGenerator.next().value;
    expect(putErrorDescriptor).toEqual(put(submitPageDataError(error)));
  });
});

describe('API: defaultSaga watcher', () => {
  const saga = generateSaga('testStore');
  const watcher = saga();
  it('should start task to watch for RELOAD_PAGEDATA_REQUEST/testStore action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(`${RELOAD_PAGEDATA_REQUEST}/testStore`, fetchApiDataSaga, 'testStore'),
    );
  });
  it('should start task to watch for INITIALIZE_PAGEDATA_REQUEST/testStore action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(`${INITIALIZE_PAGEDATA_REQUEST}/testStore`, fetchApiDataSaga, 'testStore'),
    );
  });
  it('should start task to watch for SUBMIT_PAGEDATA_REQUEST/testStore action', () => {
    const takeLatestDescriptor = watcher.next().value;
    expect(takeLatestDescriptor).toEqual(
      takeLatest(`${SUBMIT_PAGEDATA_REQUEST}/testStore`, sendApiDataSaga, 'testStore'),
    );
  });
});
