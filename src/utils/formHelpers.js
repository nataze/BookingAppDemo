/* eslint-disable */
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isMobilePhone from "validator/lib/isMobilePhone";
import isLength from "validator/lib/isLength";
import isInt from "validator/lib/isInt";

import { capitalize } from "./helpers";

export const createSelectOptions = list => {
  let result = [];
  let optionsArray = null;
  if (typeof list === "object") {
    optionsArray = Object.values(list);
  } else if (Array.isArray(list)) {
    optionsArray = list;
  }

  if (optionsArray) {
    optionsArray.forEach(item => {
      // check if itme is an object
      if (typeof item === "object") {
        let name = "";
        let fName = item.firstName || item.first_name;
        let lName = item.lastName || item.last_name;
        if (item.name) {
          name = item.name;
        } else if (fName) {
          name = `${fName} ${item.lastName || (lName ? lName : "")}`;
        }
        result.push({
          name: name,
          value: item.id || name
        });
      } else {
        result.push({
          name: item,
          value: item
        });
      }
    });
    return result;
  }
  return [];
};

export const autocompleteOptions = list => {
  let result = {};
  if (Array.isArray(list)) {
    // expecting item to have a name field
    list.forEach(item => {
      result[item.name] = item;
    });
    return result;
  }
  return result;
};

export const reactSelectOptions = list => {
  return Object.keys(list).map(item => {
    let value = item;
    if (typeof list[item] === "object" && list[item].id) {
      value = list[item].id;
    }
    return {
      value: value,
      label: item
    };
  });
};

export const updateField = (targetEl, form) => {
  form[targetEl.name] = targetEl.value;
  return form;
};

export const updateBooleanField = (event, name, form, currentStep = null) => {
  const t = event.target;
  if (currentStep) {
    form[currentStep][name][t.name] = t.checked;
  } else {
    form[name][t.name] = t.checked;
  }

  return form;
};

export const validateForm = (form, errors, fieldValidations) => {
  let isValid = true;
  let errMsg = null;

  try {
    Object.keys(form).forEach(field => {
      // go through each validation criteria for each field
      if (fieldValidations[field] && field !== "startTime") {
        fieldValidations[field].forEach(validation => {
          switch (validation) {
            case "required":
              validateRequired(field, form[field]);
              break;
            case "boolRequired":
              validateBoolRequired(field, form[field]);
              break;
            case "arrayRequired":
              validateArrayRequired(field, form[field]);
              break;
            case "minLen":
              validateMinLength(field, form[field]);
              break;
            case "phoneNumber":
              validatePhoneNumber(field, form[field]);
              break;
            case "email":
              validateEmail(field, form[field]);
              break;
            case "integer":
              validateInteger(field, form[field]);
              break;
            case "timeStr":
              validateTimeStr(field, form[field]);
              break;
            default:
              break;
          }
        });
      }
    });
  } catch (e) {
    // Add errors to field where validation failed
    errMsg = e.message;
    if (errors) {
      errors[e.name] = {
        isPresent: true,
        content: errMsg
      };
    }

    isValid = false;
  }

  return {
    isValid: isValid,
    errors: errors || errMsg
  };
};

export const validateRequired = (field, value) => {
  if (isEmpty("" + value) || value == null) {
    throw { name: field, message: `${capitalize(field)} cannot be empty` };
  }
  return true;
};

export const validateBoolRequired = (field, values) => {
  try {
    let isValid = false;
    const fieldOptions = Object.keys(values);
    fieldOptions.forEach(option => {
      if (values[option]) {
        isValid = true;
      }
    });
    if (isValid) {
      return true;
    }

    throw {
      name: field,
      message: "Please select one of the above options."
    };
  } catch (e) {
    throw {
      name: field,
      message: `${e.message}`
    };
  }
};

export const validateMinLength = (field, value) => {
  // Assuming min length is 3
  if (value.length < 2) {
    throw { name: field, message: field + " must have a min. length of 2" };
  }
  return true;
};

export const validateEmail = (field, value) => {
  try {
    if (isEmail(value)) {
      return true;
    }
    throw { name: field, message: "Invalid email address" };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};

export const validatePhoneNumber = (field, value) => {
  try {
    if (isMobilePhone(value, "any")) {
      return true;
    }
    throw { name: field, message: "Must be a valid mobile number" };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};

export const validatePassword = (field, value) => {
  if (isLength(value, { min: 6, max: 25 })) {
    return true;
  }
  throw {
    name: field,
    message: field + " must be between 6 and 25 characters long"
  };
};

export const validateInteger = (field, value) => {
  try {
    if (isInt("" + value)) {
      return true;
    }
    throw { name: field, message: field + " must be an integer" };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};

export const validateTimeStr = (field, value) => {};

export const validateTimeRangeField = (start, end) => {
  const startParts = start.split(/ |:/);
  const endParts = end.split(/ |:/);

  let startHr = Number(startParts[0]);
  let endHr = Number(endParts[0]);
  const startMin = Number(startParts[1]);
  const endMin = Number(endParts[1]);

  startHr = startParts[2] === "PM" && startHr !== 12 ? 12 + startHr : startHr;
  endHr = endParts[2] === "PM" && endHr !== 12 ? 12 + endHr : endHr;

  const msg = "End time must be after start time.";
  if (startHr > endHr) {
    // error
    return { isPresent: true, content: msg };
  } else if (startHr === endHr) {
    if (startMin > endMin) {
      // error
      return { isPresent: true, content: msg };
    }
  }
  return { isPresent: false };
};

const validateArrayRequired = (field, value) => {
  if (Array.isArray(value) && value.length > 0) {
    return true;
  }
  throw {
    name: field,
    message: `must have at least one item in ${field} `
  };
};

export const clearErrors = errorObject => {
  for (let key in errorObject) {
    errorObject[key].isPresent = false;
    errorObject[key].content = "";
  }
  return errorObject;
};
