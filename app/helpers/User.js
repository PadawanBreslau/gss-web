import { getFromStorage } from 'helpers/Headers';

export function isRegistered() {
  const userRole = getFromStorage('User-Role') || '';

  return userRole === 'registered';
}

export function isGuest() {
  const userRole = getFromStorage('User-Role') || '';

  return userRole === 'guest';
}

export function isCurrentUser(user) {
  return user?.id === getFromStorage('userId');
}
