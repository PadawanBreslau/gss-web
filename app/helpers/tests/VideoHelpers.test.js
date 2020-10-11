import {
  trackpubsToTracks,
  isMobile,
  isSystemVersionIosBelowStable,
  getIOsVersion,
} from '../VideoHelpers';

const publicationsMap = new Map();
publicationsMap.set(1, { track: 'audioTrack' });
publicationsMap.set(2, { track: 'videoTrack' });

describe('case', () => {
  it('should return null when given null as publications', () => {
    expect(trackpubsToTracks(null)).toEqual(null);
  });
  it('should return an array of tracks when given a map of publications', () => {
    expect(trackpubsToTracks(publicationsMap)).toEqual(['audioTrack', 'videoTrack']);
  });
  it('should classify iPhone as mobile', () => {
    Object.defineProperty(navigator, 'userAgent', { value: 'iPhone', configurable: true });
    expect(isMobile()).toBeTruthy();
    delete navigator.userAgent;
  });
  it('should classify Tablet as mobile', () => {
    Object.defineProperty(navigator, 'userAgent', { value: 'Tablet', configurable: true });
    expect(isMobile()).toBeTruthy();
    delete navigator.userAgent;
  });
  it('should classify Mobile userAgent as mobile device', () => {
    Object.defineProperty(navigator, 'userAgent', { value: 'Mobile', configurable: true });
    expect(isMobile()).toBeTruthy();
    delete navigator.userAgent;
  });
  it('should classify Macintosh without touchscreen as not mobile device', () => {
    Object.defineProperty(navigator, 'platform', { value: 'MacIntel', configurable: true });
    Object.defineProperty(navigator, 'maxTouchPoints', { value: undefined, configurable: true });
    expect(isMobile()).toBeFalsy();
    delete navigator.platform;
    delete navigator.maxTouchPoints;
  });
  it('should classify Macintosh with touchscreen as mobile device', () => {
    Object.defineProperty(navigator, 'platform', { value: 'MacIntel', configurable: true });
    Object.defineProperty(navigator, 'maxTouchPoints', { value: 3, configurable: true });
    expect(isMobile()).toBeTruthy();
    delete navigator.platform;
    delete navigator.maxTouchPoints;
  });
});
describe('getIOsVersion', () => {
  afterEach(() => {
    delete navigator.userAgent;
    delete navigator.appVersion;
  });

  it('should return an empty string if the device is not iPhone or iPad', () => {
    expect(getIOsVersion()).toEqual('');
  });
  it('should return string with iOs version with dot seperators', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      configurable: true,
    });
    Object.defineProperty(navigator, 'appVersion', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      configurable: true,
    });
    expect(getIOsVersion()).toEqual('10.3.1');
  });
});
describe('isSystemVersionIosBelowStable', () => {
  afterEach(() => {
    delete navigator.userAgent;
    delete navigator.appVersion;
  });
  it('should return false if system is not ios', () => {
    expect(isSystemVersionIosBelowStable()).toBeFalsy();
  });
  it('should return false if system is ios with higher version than stable', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        '5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1',
      configurable: true,
    });
    Object.defineProperty(navigator, 'appVersion', {
      value:
        '5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.2 Mobile/15E148 Safari/604.1',
      configurable: true,
    });
    expect(isSystemVersionIosBelowStable()).toBeFalsy();
  });
  it('should return true if system is ios with version below stable', () => {
    Object.defineProperty(navigator, 'userAgent', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      configurable: true,
    });
    Object.defineProperty(navigator, 'appVersion', {
      value:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
      configurable: true,
    });
    expect(isSystemVersionIosBelowStable()).toBeTruthy();
  });
});
