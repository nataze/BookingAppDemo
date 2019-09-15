import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { compose } from "redux";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const NoReminder = ({ onChange, name, classes, checked }) => {
  return (
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
            checked={checked}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
            onChange={e => onChange(e, name)}
          />
        }
        label="No Reminder"
      />
    </div>
  );
};

const mapStateToProps = ({
  bookingForm: {
    form: {
      1: { reminderPreferences }
    }
  }
}) => ({
  checked: reminderPreferences["noReminder"] || false
});

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    null
  )
)(NoReminder);
