import { selectUserDomain } from '../selectors';

describe('User selectors', () => {
  it('Selects user domain', () => {
    const uiState = {
      example: 'something',
    };
    const mockedState = {
      user: uiState,
    };
    expect(selectUserDomain(mockedState)).toEqual(uiState);
  });
});
