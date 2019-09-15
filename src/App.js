import React, { Component } from "react";

import Alert from "react-s-alert";

import { compose } from "redux";
import { connect } from "react-redux";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "material-ui-next/styles";

import { withStyles } from "material-ui-next/styles";

import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "./App.css";

import Routes from "./routes/index";

import muiTheme from "./muiTheme";

const font = ["Open Sans", "sans-serif", "Roboto"];
const styles = () => ({
  app: {
    fontFamily: font,
    display: "flex",
    overflowX: "hidden"
  },
  "@global": {
    "*::-webkit-scrollbar": {
      width: "2px"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px #d3d3d3"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#f5c1c1"
    }
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className={classes.app}>
          <CssBaseline />
          <Alert
            stack={{ limit: 2 }}
            html={true}
            position="top"
            timeout={1500}
          />
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBookings: () => dispatch.bookings.fetchBookings()
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    null,
    mapDispatchToProps
  )
)(App);
