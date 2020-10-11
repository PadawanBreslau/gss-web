/**
 * Date and time converters
 */

import { convertDurationInSecondsToText } from '../dateAndTimeHelpers';

describe('case', () => {
  it('should convert duration in seconds to text format', () => {
    expect(convertDurationInSecondsToText(120)).toEqual('02:00');
    expect(convertDurationInSecondsToText(609)).toEqual('10:09');
    expect(convertDurationInSecondsToText(0)).toEqual('00:00');
  });
});
