/* eslint-disable no-param-reassign */
import generateSelectApi from '../selectors';

describe('generateSelectApi', () => {
  const apiSelector = generateSelectApi('testStore');
  it('should select the username', () => {
    const mockedState = {
      testStore: {
        loading: false,
        data: [],
        included: [],
        error: null,
      },
    };
    expect(apiSelector(mockedState)).toEqual({
      error: null,
      loading: false,
      meta: {},
      payload: [],
    });
  });

  it('should convert JSON api to tree', () => {
    const mockedState = {
      testStore: {
        loading: false,
        data: [
          {
            id: '1',
            type: 'test',
            attributes: { name: 'testName' },
            relationships: {
              answers: { data: [{ id: '2', type: 'answers' }] },
            },
          },
        ],
        included: [
          {
            id: '2',
            type: 'answers',
            attributes: { answer: 'testAnswer' },
          },
        ],
        error: null,
        meta: {},
      },
    };
    expect(apiSelector(mockedState)).toEqual({
      error: null,
      loading: false,
      meta: {},
      payload: [
        {
          id: '1',
          type: 'test',
          name: 'testName',
          answers: [
            {
              answer: 'testAnswer',
              id: '2',
              type: 'answers',
            },
          ],
          relationshipNames: ['answers'],
        },
      ],
    });
  });
});
