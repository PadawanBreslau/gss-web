import generateActions from '../actions';

import {
  INITIALIZE_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
} from '../constants';

const {
  initializePageData,
  loadPageDataSuccess,
  loadPageDataError,
  submitPageData,
  submitPageDataSuccess,
  submitPageDataError,
} = generateActions('testStore');

describe('auth reducer actions', () => {
  it('has a type of all actions', () => {
    expect(initializePageData('endpoint', 'callback')).toEqual({
      type: INITIALIZE_PAGEDATA_REQUEST + '/testStore', // eslint-disable-line prefer-template
      endpoint: 'endpoint',
      callback: 'callback',
    });
    expect(loadPageDataSuccess('exampleData')).toEqual({
      type: LOAD_PAGEDATA_SUCCESS + '/testStore', // eslint-disable-line prefer-template
      payload: 'exampleData',
    });
    expect(loadPageDataError()).toEqual({
      type: LOAD_PAGEDATA_ERROR + '/testStore', // eslint-disable-line prefer-template
    });
    expect(submitPageData('endpoint', 'method', 'payload', 'callback')).toEqual({
      type: SUBMIT_PAGEDATA_REQUEST + '/testStore', // eslint-disable-line prefer-template
      endpoint: 'endpoint',
      method: 'method',
      successCallback: 'callback',
      payload: {
        data: {
          attributes: 'payload',
        },
      },
    });
    expect(submitPageDataSuccess()).toEqual({
      type: SUBMIT_PAGEDATA_SUCCESS + '/testStore', // eslint-disable-line prefer-template
    });
    expect(submitPageDataError()).toEqual({
      type: SUBMIT_PAGEDATA_ERROR + '/testStore', // eslint-disable-line prefer-template
    });
  });
});
