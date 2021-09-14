import { TYPE_ID_KEY } from "../constants";

export function resolveType(item, config) {
  if (Object.prototype.hasOwnProperty.call(item, TYPE_ID_KEY)) {
      return item[TYPE_ID_KEY];
  }

  return config.type;
}
