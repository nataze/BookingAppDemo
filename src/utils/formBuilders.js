export const newMutliStepFormState = (schema, options = {}) => {
  const result = {
    form: {},
    errors: {}
  };

  Object.keys(schema).forEach(step => {
    const stepResult = generateFormState(schema[step]);
    result["form"][step] = stepResult["form"];
    result["errors"][step] = stepResult["errors"];

    // add default start time for booking form
    if (options.startTime && Number(step) === 2) {
      result["form"][step]["startTime"] = options.startTime;
    }
  });

  return result;
};

export const buildMultiStepFormFields = fieldsObject => {
  const result = {};

  Object.keys(fieldsObject).forEach(step => {
    result[step] = generateFormFields(fieldsObject[step]);
  });

  return result;
};

const generateFormState = fieldsObject => {
  const result = {
    form: {},
    errors: {}
  };

  fieldsObject.forEach(obj => {
    const fieldType = obj.fieldType;
    const fieldName = obj.name;

    switch (fieldType) {
      case "multipleCheckbox":
        result["form"][fieldName] = generateReminderField(obj);
        break;
      case "number":
        result["form"][fieldName] = 0;
        break;
      default:
        result["form"][fieldName] = "";
        break;
    }
  });

  // also add default error state
  result["errors"] = addDefaultErrorFields(result["form"]);
  return result;
};

const generateFormFields = fieldsObject => {
  // mainly to remove dynamic fields
  const result = [];
  fieldsObject.forEach(obj => {
    if (!obj.isHidden) {
      result.push(obj);
    }
  });
  return result;
};

const generateReminderField = obj => {
  const result = {};
  obj.checkboxOptions.forEach(option => {
    if (option === "sms") {
      return (result[option] = true);
    }
    return (result[option] = false);
  });
  return result;
};

const addDefaultErrorFields = form => {
  const result = {};
  Object.keys(form).forEach(field => {
    result[field] = { isPresent: false, content: "" };
  });
  return result;
};
