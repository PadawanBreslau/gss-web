import Jsona from 'jsona';
const dataFormatter = new Jsona();

export function deserialize(json) {
  return dataFormatter.deserialize(json);
}
