export const trackpubsToTracks = (trackMap) =>
  trackMap &&
  Array.from(trackMap.values())
    .map((publication) => publication.track)
    .filter((track) => track !== null);

export const isMobile = () => {
  if (typeof navigator === 'undefined' || typeof navigator.userAgent !== 'string') {
    return false;
  }

  return /Tablet|Mobile/.test(navigator.userAgent) || isIOs();
};

// this will work until Apple introduces Macbooks with Touchscreen
const isIOs = () => {
  if (/iPhone/.test(navigator.userAgent)) {
    return true;
  }
  if (
    /MacIntel/.test(navigator.platform) &&
    navigator.maxTouchPoints &&
    navigator.maxTouchPoints > 2
  ) {
    return true;
  }
  return false;
};

export const getIOsVersion = () => {
  const agent = window.navigator.userAgent;
  const start = agent.indexOf('OS ');
  if ((agent.includes('iPhone') || agent.includes('iPad')) && start > -1) {
    const v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    return `${v[1]}.${v[2]}.${v[3] || 0}`;
  }
  return '';
};

export const isSystemVersionIosBelowStable = () => {
  const stableVersion = 13.6;
  return parseFloat(getIOsVersion()) < stableVersion;
};
