import { SHOW_MESSAGE, HIDE_MESSAGE, SHOW_LOADING, HIDE_LOADING } from './constants';

export function showLoading() {
  return {
    type: SHOW_LOADING,
  };
}
export function hideLoading() {
  return {
    type: HIDE_LOADING,
  };
}
export function showError(title, text) {
  return {
    type: SHOW_MESSAGE,
    data: {
      type: 'error',
      title,
      text,
    },
  };
}
export function showUiError(error) {
  return {
    type: SHOW_MESSAGE,
    data: {
      type: 'error',
      error,
    },
  };
}
export function showUiSuccess(text) {
  return {
    type: SHOW_MESSAGE,
    data: {
      type: 'success',
      title: 'Success',
      text,
    },
  };
}
export function hideUiMessage() {
  return {
    type: HIDE_MESSAGE,
  };
}
