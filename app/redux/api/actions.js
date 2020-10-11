import {
  RELOAD_PAGEDATA_REQUEST,
  INITIALIZE_PAGEDATA_REQUEST,
  LOAD_PAGEDATA_SUCCESS,
  LOAD_PAGEDATA_ERROR,
  SUBMIT_PAGEDATA_REQUEST,
  SUBMIT_PAGEDATA_SUCCESS,
  SUBMIT_PAGEDATA_ERROR,
} from './constants';

export function reloadStore(storeName) {
  return {
    type: `${RELOAD_PAGEDATA_REQUEST}/${storeName}`,
  };
}

export default function generateActions(storeName) {
  return {
    initializePageData: (endpoint, callback) => ({
      type: `${INITIALIZE_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      callback,
    }),
    reloadPageData: (endpoint, callback) => ({
      type: `${RELOAD_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      callback,
    }),
    loadPageDataSuccess: (payload) => ({
      type: `${LOAD_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
    }),
    loadPageDataError: (error) => ({
      type: `${LOAD_PAGEDATA_ERROR}/${storeName}`,
      error,
    }),

    submitPageData: (endpoint, method, payload, successCallback, id) => ({
      type: `${SUBMIT_PAGEDATA_REQUEST}/${storeName}`,
      endpoint,
      method,
      payload: {
        data: {
          attributes: payload,
        },
      },
      successCallback,
      id,
    }),
    submitPageDataSuccess: (payload, id) => ({
      type: `${SUBMIT_PAGEDATA_SUCCESS}/${storeName}`,
      payload,
      id,
    }),
    submitPageDataError: (error, id) => ({
      type: `${SUBMIT_PAGEDATA_ERROR}/${storeName}`,
      error,
      id,
    }),
  };
}
