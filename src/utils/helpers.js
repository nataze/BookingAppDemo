import * as cloneDeep from "lodash/cloneDeep";
import * as mapKeys from "lodash/mapKeys";
import * as map from "lodash/map";
import * as isArray from "lodash/isArray";
import * as camelCase from "lodash/camelCase";
import * as snakeCase from "lodash/snakeCase";
import * as startCase from "lodash/startCase";
import * as isPlainObject from "lodash/isPlainObject";
import * as mapValues from "lodash/mapValues";

export const camelToUnderscore = original => {
  return mapKeys(original, function(_, key) {
    return camelCase(key);
  });
};

export const underscoreToCamel = object => {
  let camelCaseObject = cloneDeep(object);

  if (isArray(camelCaseObject)) {
    return map(camelCaseObject, underscoreToCamel);
  } else {
    camelCaseObject = mapKeys(camelCaseObject, (value, key) => {
      return camelCase(key);
    });

    return mapValues(camelCaseObject, value => {
      if (isPlainObject(value)) {
        return underscoreToCamel(value);
      } else if (isArray(value)) {
        return map(value, underscoreToCamel);
      } else {
        return value;
      }
    });
  }
};

export const removeElements = (object, keysToDelete) => {
  let result = {};
  Object.keys(object).forEach(key => {
    if (!keysToDelete.includes(key)) {
      result[key] = object[key];
    }
  });
  return result;
};

export const camelToUnderscoreKey = key => {
  return key ? snakeCase(key) : "";
};

export const underscoreToCamelKey = key => {
  return key ? camelCase(key) : "";
};

export const capitalize = word => {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
};

export const camelToSentence = word => {
  return word ? startCase(word) : "";
};

export const clone = obj => {
  const copy = cloneDeep(obj);
  return copy;
};
