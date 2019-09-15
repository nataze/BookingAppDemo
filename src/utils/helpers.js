import * as cloneDeep from "lodash/cloneDeep";

export const camelToUnderscore = original => {
  // converts and object keys from camel to underscore
  let result = {};
  for (let camelKey in original) {
    result[camelToUnderscoreKey(camelKey)] = original[camelKey];
  }
  return result;
};

export const underscoreToCamel = original => {
  let result = {};
  for (let underscoreKey in original) {
    result[underscoreToCamelKey(underscoreKey)] = original[underscoreKey];

    // also camelcase inner objects or array of objects
    const value = result[underscoreToCamelKey(underscoreKey)];
    if (Array.isArray(value)) {
      value.forEach((item, index) => {
        if (typeof item === "object") {
          for (let innerUnderscoreKey in item) {
            result[underscoreToCamelKey(underscoreKey)][index][
              underscoreToCamelKey(innerUnderscoreKey)
            ] = original[underscoreKey][index][innerUnderscoreKey];

            if (innerUnderscoreKey.includes("_")) {
              delete result[underscoreToCamelKey(underscoreKey)][index][
                innerUnderscoreKey
              ];
            }
          }
        }
      });
    } else if (typeof value === "object") {
      for (let innerUnderscoreKey in value) {
        result[underscoreToCamelKey(underscoreKey)][
          underscoreToCamelKey(innerUnderscoreKey)
        ] = original[underscoreKey][innerUnderscoreKey];

        if (innerUnderscoreKey.includes("_")) {
          delete result[underscoreToCamelKey(underscoreKey)][
            innerUnderscoreKey
          ];
        }
      }
    }
  }
  return result;
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
  // converts a single key/string from camel to underscore
  return key.replace(/([A-Z])/g, "_$1").toLowerCase();
};

export const underscoreToCamelKey = key => {
  // converts a single key from underscore to camel
  return key.replace(/(_\w)/g, m => m[1].toUpperCase());
};

export const capitalize = word => {
  return word ? word.charAt(0).toUpperCase() + word.slice(1) : "";
};

export const clone = obj => {
  const copy = cloneDeep(obj);
  return copy;
};
