/* eslint-disable no-param-reassign */
import produce from 'immer';
import generateReducer from '../reducer';
import generateActions from '../actions';

const {
  initializePageData,
  loadPageDataSuccess,
  loadPageDataError,
  submitPageData,
  submitPageDataSuccess,
  submitPageDataError,
} = generateActions('testStore');
const apiReducer = generateReducer('testStore');

const initialState = {
  loading: false,
  initialized: false,
  error: null,
  data: [],
  endpoint: null,
};

describe('apiReducer', () => {
  it('returns the initial state', () => {
    expect(apiReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle INITIALIZE_PAGEDATA_REQUEST', () => {
    expect(
      apiReducer(undefined, initializePageData('exampleEndpoint', { example: 'data' })),
    ).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
        draft.data = [];
        draft.endpoint = 'exampleEndpoint';
      }),
    );
  });
  it('should handle LOAD_PAGEDATA_SUCCESS', () => {
    expect(apiReducer(undefined, loadPageDataSuccess())).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.initialized = true;
        draft.data = [];
      }),
    );
  });
  it('should handle LOAD_PAGEDATA_ERROR', () => {
    expect(apiReducer(undefined, loadPageDataError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
        draft.data = [];
      }),
    );
  });
  it('should handle SUBMIT_PAGEDATA_REQUEST', () => {
    expect(apiReducer(undefined, submitPageData({ example: 'data' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = true;
        draft.error = null;
        draft.data = [];
      }),
    );
  });
  it('should handle SUBMIT_PAGEDATA_SUCCESS', () => {
    expect(apiReducer(undefined, submitPageDataSuccess())).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.data = [];
      }),
    );
  });
  it('should handle SUBMIT_PAGEDATA_ERROR', () => {
    expect(apiReducer(undefined, submitPageDataError({ some: 'error' }))).toEqual(
      produce(initialState, (draft) => {
        draft.loading = false;
        draft.error = { some: 'error' };
        draft.data = [];
      }),
    );
  });
});
