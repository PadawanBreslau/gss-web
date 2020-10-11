import config from '../config';

const authHeaderKeys = [
  'Access-Token',
  'token-type',
  'client',
  'expiry',
  'uid',
  'name',
  'userId',
  'User-Role',
  'avatar',
];

export function getDefaultHeaders() {
  return {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
  };
}
export function getHeadersFromStorage() {
  return {
    client: localStorage.getItem('client'),
    uid: localStorage.getItem('uid'),
    'Access-Token': localStorage.getItem('Access-Token'),
  };
}
export function getFromStorage(key) {
  return localStorage.getItem(key);
}
export function setToStorage(key, value) {
  localStorage.setItem(key, value);
}
export function setAvatar(value) {
  if (value !== null && value !== undefined) {
    localStorage.setItem('avatar', config.api.url + value);
  }
}
function parseQuery(queryString) {
  const query = {};
  const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
  pairs.map((pairItem) => {
    const pair = pairItem.split('=');
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    return null;
  });
  return query;
}
export function setHeadersFromQuery(search) {
  const queryParams = parseQuery(search);
  authHeaderKeys.forEach((key) => {
    const value = queryParams[key];
    if (value) localStorage.setItem(key, value);
  });
}
export function setHeadersToStorage(response) {
  authHeaderKeys.forEach((key) => {
    const value = response.headers.get(key);
    if (value) localStorage.setItem(key, value);
  });
  return response;
}
export function removeHeadersFromStorage() {
  authHeaderKeys.forEach((key) => {
    localStorage.removeItem(key);
  });
}
export function isUserInStorage() {
  return localStorage.getItem('Access-Token') != null && localStorage.getItem('uid') != null;
}
