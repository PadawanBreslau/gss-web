import { getBaseUrl } from 'helpers/Url';
jest.mock('helpers/Connection');

describe('Url helper', () => {
  beforeEach(() => {});
  it('should return baseUrl', () => {
    const expectedUrl = 'https://test-domain.com';
    expect(getBaseUrl()).toEqual(expectedUrl);
  });
});
