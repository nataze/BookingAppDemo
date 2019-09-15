import React from "react";
import { withStyles } from "material-ui-next/styles";
import CircularProgress from "material-ui-next/CircularProgress";

const styles = theme => ({
  loader: {
    margin: "auto"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
    minHeight: "100%",
    minWidth: "100%"
  }
});

const Loading = props => {
  return (
    <div className={props.classes.container}>
      <div>
        <CircularProgress className={props.classes.loader} />
      </div>
    </div>
  );
};

export default withStyles(styles)(Loading);
