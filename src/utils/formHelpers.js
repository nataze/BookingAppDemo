/* eslint-disable */
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import isMobilePhone from "validator/lib/isMobilePhone";
import isLength from "validator/lib/isLength";
import isInt from "validator/lib/isInt";

import { camelToSentence } from "./helpers";

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

export const validateForm = (form, errors, fieldValidations, omitOpts = []) => {
  let isValid = true;
  let errMsg = null;

  try {
    Object.keys(form).forEach(field => {
      if (fieldValidations[field] && !omitOpts.includes(field)) {
        fieldValidations[field].forEach(validation => {
          switch (validation) {
            case "required":
              validateRequired(field, form[field]);
              break;
            case "boolRequired":
              validateBoolRequired(field, form[field]);
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

const validateRequired = (field, value) => {
  if (isEmpty("" + value) || value == null) {
    throw {
      name: field,
      message: `${camelToSentence(field)} cannot be empty`
    };
  }
  return true;
};

const validateBoolRequired = (field, values) => {
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

const validateMinLength = (field, value) => {
  // Assuming min length is 3
  if (value.length < 2) {
    throw {
      name: field,
      message: `${camelToSentence(field)} must have a min. length of 2`
    };
  }
  return true;
};

const validateEmail = (field, value) => {
  try {
    if (isEmail(value)) {
      return true;
    }
    throw { name: field, message: "Must be a valid email address" };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};

const validatePhoneNumber = (field, value) => {
  try {
    if (isMobilePhone(value.replace(/\D/g, ""), "en-CA")) {
      return true;
    }
    throw { name: field, message: "Must be a valid Canadian number" };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};

const validatePassword = (field, value) => {
  if (isLength(value, { min: 6, max: 25 })) {
    return true;
  }
  throw {
    name: field,
    message: `${camelToSentence(
      field
    )} must be between 6 and 25 characters long`
  };
};

const validateInteger = (field, value) => {
  try {
    if (isInt("" + value)) {
      return true;
    }
    throw {
      name: field,
      message: `${camelToSentence(field)} must be an integer`
    };
  } catch (e) {
    throw { name: field, message: `${e.message}` };
  }
};
