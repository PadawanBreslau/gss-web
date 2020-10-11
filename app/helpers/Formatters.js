import _ from 'lodash';

export function camelize(obj) {
  return recurentTransform(obj, _.camelCase);
}

export function snakize(obj) {
  return recurentTransform(obj, _.snakeCase);
}

export function regularCase(string) {
  return _.capitalize(_.lowerCase(string));
}

function recurentTransform(obj, transformer) {
  if (_.isArray(obj)) {
    return _.map(obj, (value) => recurentTransform(value, transformer));
    // eslint-disable-next-line no-else-return
  } else if (_.isObject(obj)) {
    return _.transform(
      obj,
      (result, value, key) => {
        result[transformer(key)] = recurentTransform(value, transformer); // eslint-disable-line no-param-reassign
      },
      {},
    );
  }

  return obj;
}

export function secondsToDisplayTime(timeInSeconds) {
  const time = Math.max(timeInSeconds, 0);

  const hours = Math.floor(time / 3600);
  let minutes = Math.floor(time % (3600 / 60));
  const seconds = Math.floor((time % 3600) % 60);
  minutes += seconds > 0 ? 1 : 0;

  let displayTime = '';
  displayTime += hours >= 0 ? `${hours}h ` : '';
  displayTime += minutes > 0 ? `${minutes}m ` : '';

  return displayTime;
}

export function capitalize(str) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
