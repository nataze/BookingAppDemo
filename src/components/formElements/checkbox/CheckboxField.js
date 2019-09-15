import React from "react";

import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

export const CheckboxField = ({
  labelName,
  name,
  value,
  onChange,
  error,
  checkboxOptions,
  checkboxValues,
  checkboxLabels,
  classes
}) => {
  return (
    <div className={classes.container}>
      <FormControl
        error={error && error.isPresent}
        className={classes.formControl}
      >
        <div className={classes.label}>{labelName}</div>
        <FormGroup classes={{ root: classes.formGroup }}>
          {checkboxOptions.map((n, i) => {
            return (
              <FormControlLabel
                key={n}
                classes={{
                  label: classes.formLabel
                }}
                control={
                  <Checkbox
                    className={classes.checkbox}
                    data-parent={name}
                    type="checkbox"
                    name={n}
                    checked={checkboxValues[i]}
                    onChange={e => onChange(e, name)}
                    classes={{
                      root: classes.root,
                      checked: classes.checked
                    }}
                  />
                }
                label={checkboxLabels[i]}
              />
            );
          })}
          {name === "reminderPreferences" && (
            <div className={classes.noReminder}>
              <div className={classes.or}>OR</div>
              <FormControlLabel
                classes={{
                  label: classes.formLabel
                }}
                control={
                  <Checkbox
                    className={classes.checkbox}
                    data-parent={name}
                    type="checkbox"
                    name="noReminder"
                    value=""
                    classes={{
                      root: classes.root,
                      checked: classes.checked
                    }}
                    onChange={onChange}
                  />
                }
                label="No Reminder"
              />
            </div>
          )}
        </FormGroup>
        {error && (
          <FormHelperText className={classes.error}>
            {error.content}
          </FormHelperText>
        )}
      </FormControl>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(CheckboxField);
