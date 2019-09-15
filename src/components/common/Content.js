import React from "react";
import { withStyles } from "material-ui-next/styles";

const styles = ({ palette, spacing, breakpoints }) => ({
  content: {
    width: "100vw",
    height: "100%",
    backgroundColor: palette.background.content,
    [breakpoints.down("sm")]: {
      paddingLeft: 20 * spacing.unit,
      paddingRight: 20 * spacing.unit
    },
    [breakpoints.down("xs")]: {
      paddingLeft: 5 * spacing.unit,
      paddingRight: 5 * spacing.unit
    },
    [breakpoints.down("lg")]: {
      width: "100vw"
    },
    paddingTop: 35 * spacing.unit,
    paddingLeft: 50 * spacing.unit,
    paddingRight: 50 * spacing.unit,
    paddingBottom: 50 * spacing.unit
  }
});

const Content = ({ children, classes }) => (
  <div className={classes.content}>{children}</div>
);

export default withStyles(styles, { withTheme: true })(Content);
