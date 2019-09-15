import React from "react";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";

import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";

import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

class TextField extends React.Component {
  render() {
    const {
      labelName,
      name,
      value,
      onChange,
      error,
      fieldType,
      fullWidth,
      classes,
      noContainer
    } = this.props;

    const Icon = () => {
      if (name === "phoneNumber") {
        return <PhoneIcon className={classes.placeholderIcon} />;
      } else if (name === "email") {
        return <EmailIcon className={classes.placeholderIcon} />;
      } else if (["firstName", "lastName", "name"].includes(name)) {
        return <PersonIcon className={classes.placeholderIcon} />;
      } else {
        return null;
      }
    };

    return (
      <div className={noContainer ? "" : classes.container}>
        {labelName && <div className={classes.label}>{labelName}</div>}
        <FormControl fullWidth error={error && error.isPresent}>
          <Paper className={classes.root}>
            {Icon()}
            <InputBase
              style={{ color: "#478181" }}
              className={classes.inputBase}
              id={name}
              classes={{
                root: classes.inputRoot,
                input: `${classes.input} text-fields`
              }}
              type={fieldType}
              fullWidth={fullWidth}
              name={name}
              value={value}
              onChange={onChange}
            />
          </Paper>

          {error && error.isPresent && (
            <FormHelperText>{error.content}</FormHelperText>
          )}
        </FormControl>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(TextField);
