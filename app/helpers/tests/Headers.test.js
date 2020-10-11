import { setHeadersFromQuery } from 'helpers/Headers';

// const headers = {
//   Accept: 'application/vnd.api+json',
//   'Content-Type': 'application/vnd.api+json',
//   'Access-Token': null,
//   Client: null,
//   Uid: null,
// };

describe('Headers', () => {
  beforeEach(() => {});
  it('should check if authenticated', () => {
    setHeadersFromQuery('Access-Token=something&uid=something-else&weird-header=other');
    expect(localStorage.setItem).toHaveBeenCalled();
    // eslint-disable-next-line no-underscore-dangle
    expect(localStorage.__STORE__).toEqual({
      'Access-Token': 'something',
      uid: 'something-else',
    });
  });
});
