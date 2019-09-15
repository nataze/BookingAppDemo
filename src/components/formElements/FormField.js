import React from "react";
import TextField from "./textfield";
import DateTimeField from "./datetime";
import SelectField from "./select";
import CheckboxField from "./checkbox";

export const FormField = props => {
  switch (props.fieldType) {
    case "text":
      return <TextField {...props} />;
    case "datetime":
      return <DateTimeField {...props} />;
    case "select":
      return <SelectField {...props} />;
    case "checkbox":
      return <CheckboxField {...props} />;
    case "multipleCheckbox":
      return <CheckboxField {...props} />;
    default:
      return <TextField {...props} />;
  }
};

export default FormField;
