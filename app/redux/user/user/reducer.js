/* eslint-disable no-param-reassign */
import produce from 'immer';
import { getFromStorage, setToStorage, setAvatar } from 'helpers/Headers';

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

const initialState = {
  loading: false,
  error: null,
  data: {},
  name: getFromStorage('name'),
  userId: getFromStorage('userId'),
  avatar: getFromStorage('avatar'),
};

const userReducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, (draft) => {
    let name;
    let userId;
    let avatar;
    switch (action.type) {
      case LOGOUT_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case LOGOUT_SUCCESS:
        draft.loading = false;
        draft.redirect = true;
        draft.data = {};
        break;
      case LOGOUT_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case LOGIN_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case LOGIN_SUCCESS:
        ({ avatar, name } = action.data.data.attributes);
        userId = action.data.data.id;
        setToStorage('name', name);
        setToStorage('userId', userId);
        setAvatar(avatar);
        draft.loading = false;
        draft.redirect = true;
        draft.data = action.data.data;
        draft.name = name;
        draft.userId = userId;
        break;
      case LOGIN_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case SIGN_UP_SUCCESS:
        ({ name, avatar } = action.data.data.attributes);
        userId = action.data.data.id;
        setToStorage('name', name);
        setToStorage('userId', userId);
        setAvatar(avatar);
        draft.loading = false;
        draft.data = action.data.data;
        draft.name = name;
        draft.userId = userId;
        break;
      case SIGN_UP_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case PASSWORD_RESET_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case PASSWORD_RESET_REQUEST_SUCCESS:
        draft.loading = false;
        draft.data = action.data.data;
        break;
      case PASSWORD_RESET_REQUEST_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case SET_PASSWORD_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      case SET_PASSWORD_SUCCESS:
        draft.loading = false;
        draft.data = action.data.data;
        break;
      case SET_PASSWORD_ERROR:
        draft.loading = false;
        draft.error = action.error;
        break;
      case GOOGLE_LOGIN_REQUEST:
        draft.loading = true;
        draft.error = null;
        break;
      default:
        break;
    }
  });

export default userReducer;
