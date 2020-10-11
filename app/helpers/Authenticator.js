import Connection from 'helpers/Connection';
import { isUserInStorage, removeHeadersFromStorage } from 'helpers/Headers';

export const Authenticator = {
  authenticate: (endpoint, credentials) => Connection.post(endpoint, credentials),
  logout: (endpoint) => Connection.delete(endpoint, {}).then(removeHeadersFromStorage),
  isAuthenticated: () => isUserInStorage(),
};
