import React from "react";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles";

const Icon = ({ classes, name }) => {
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

export default withStyles(styles, { withTheme: true })(Icon);
