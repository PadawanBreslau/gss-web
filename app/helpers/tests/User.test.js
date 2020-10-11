import { isGuest, isRegistered, isCurrentUser } from '../User';

describe('isRegistered', () => {
  it('should return false when no user role in storage', () => {
    localStorage.removeItem('User-Role');
    expect(isRegistered()).toEqual(false);
  });

  it('should return true if user is registered', () => {
    localStorage.setItem('User-Role', 'registered');
    expect(isRegistered()).toEqual(true);
  });

  it('should return false if user is a guest', () => {
    localStorage.setItem('User-Role', 'guest');
    expect(isRegistered()).toEqual(false);
  });
});

describe('isGuest', () => {
  it('should return false when no user role in storage', () => {
    localStorage.removeItem('User-Role');
    expect(isGuest()).toEqual(false);
  });

  it('should return true if user is a guest', () => {
    localStorage.setItem('User-Role', 'guest');
    expect(isGuest()).toEqual(true);
  });

  it('should return false if user is a registered user', () => {
    localStorage.setItem('User-Role', 'registered');
    expect(isGuest()).toEqual(false);
  });
});

describe('isCurrentUser', () => {
  it('should return false when passed user is undefined', () => {
    localStorage.setItem('userId', '1');
    expect(isCurrentUser(undefined)).toEqual(false);
  });

  it('should return true when passed user is same as in localstorage', () => {
    localStorage.setItem('userId', '1');
    const rightUser = { id: '1' };
    expect(isCurrentUser(rightUser)).toEqual(true);
  });

  it('should return false if passed user is different than localstorage', () => {
    localStorage.setItem('userId', '1');
    const wrongUser = { id: '2' };
    expect(isCurrentUser(wrongUser)).toEqual(false);
  });
});
