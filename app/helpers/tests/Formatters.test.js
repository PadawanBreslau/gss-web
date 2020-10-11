/**
 * Test case
 */

import { camelize, snakize, regularCase } from 'helpers/Formatters';

describe('case', () => {
  it('should camelize', () => {
    expect(camelize([{ 'some-key': 'some-value' }])).toEqual([{ someKey: 'some-value' }]);
    expect(camelize({ some_key: 'some_value' })).toEqual({
      someKey: 'some_value',
    });
  });
  it('should snakeize', () => {
    expect(snakize({ someKey: 'someValue' })).toEqual({
      some_key: 'someValue',
    });
  });
  it('should regularCase', () => {
    expect(regularCase('some Weird CASING sentance')).toEqual('Some weird casing sentance');
  });
});
