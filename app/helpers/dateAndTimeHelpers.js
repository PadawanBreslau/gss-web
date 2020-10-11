export const convertDurationInSecondsToText = (duration) => {
  const minutes = Math.floor(duration / 60);
  const minutesPrefix = minutes <= 9 ? '0' : '';
  const seconds = duration % 60;
  const secondsPrefix = seconds <= 9 ? '0' : '';
  return `${minutesPrefix}${minutes}:${secondsPrefix}${seconds}`;
};

export const getTimeLeft = (date) => new Date(date).getTime() - new Date().getTime();
