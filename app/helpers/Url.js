import { push } from 'connected-react-router';

export function redirect(redirectTo, location) {
  let callback;
  if (location) {
    const { from } = location.state || { from: { pathname: redirectTo } };
    callback = push(from.pathname);
  } else {
    callback = push(redirectTo);
  }
  return callback;
}

export function prepareEndpoint(pattern, props) {
  const { match: params } = props || {};
  const propsWithParams = {
    ...props,
    ...params,
  };

  return pattern.replace(/:[^\s/]+/g, (arg) => propsWithParams[arg.replace(':', '')]);
}

export function getBaseUrl() {
  return `${window.location.protocol}//${window.location.host}`;
}
