export const newFormState = fieldsObject => {
  // fields = [{ field: "reminderPreferences", fieldType: "multipleCheckbox", checkBoxOptions: [sms,], isRequired: true }]
  return generateFormState(fieldsObject);
};

export const newMutliFormState = (schema, options = {}) => {
  const result = {
    form: {},
    errors: {}
  };

  Object.keys(schema).forEach(step => {
    const stepResult = generateFormState(schema[step]);
    result["form"][step] = stepResult["form"];
    result["errors"][step] = stepResult["errors"];

    // add default start time for booking form
    if (options.startTime && Number(step) === 3) {
      result["form"][step]["startTime"] = options.startTime;
    }
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
    const fieldNames = obj.names;
    if (fieldName) {
      switch (fieldType) {
        case "multipleCheckbox":
          result["form"][fieldName] = boolField(obj, []);
          break;
        case "select":
          result["form"][fieldName] = "";
          break;
        case "number":
          result["form"][fieldName] = 0;
          break;
        default:
          // default field type is text
          result["form"][fieldName] = "";
          break;
      }
    } else if (fieldNames) {
      // right now only timeRange has this
      // might change in the future
      switch (fieldType) {
        case "timeRange":
          fieldNames.forEach(name => {
            result["form"][name] = "";
          });
          break;
        default:
        // nothing for now
      }
    }
  });

  // also add default error state
  result["errors"] = addDefaultErrorFields(result["form"]);
  return result;
};

export const buildMultiFormFields = fieldsObject => {
  const result = {};

  Object.keys(fieldsObject).forEach(step => {
    result[step] = generateFormFields(fieldsObject[step]);
  });

  return result;
};

export const buildFormFields = fieldsObject => {
  return generateFormFields(fieldsObject);
};

const generateFormFields = fieldsObject => {
  // mainly to remove dynamic fields
  const result = [];
  fieldsObject.forEach(obj => {
    if (!obj.isDynamic && !obj.isHidden && !(obj.name === "serviceType")) {
      result.push(obj);
    }
  });
  return result;
};

const boolField = obj => {
  let result = {};
  obj.checkboxOptions.forEach((option, i) => {
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
