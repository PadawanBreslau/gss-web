import { selectUiDomain } from '../selectors';

describe('UI selectors', () => {
  it('Selects ui domain', () => {
    const uiState = {
      example: 'something',
    };
    const mockedState = {
      ui: uiState,
    };
    expect(selectUiDomain(mockedState)).toEqual(uiState);
  });
});
