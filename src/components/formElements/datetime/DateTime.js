import React from "react";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { compose } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import * as isEqual from "lodash/isEqual";

import getMuiTheme from "material-ui/styles/getMuiTheme";

import Paper from "@material-ui/core/Paper";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

import { withStyles } from "@material-ui/core/styles";

import Calendar from "material-ui/DatePicker/Calendar";

import styles from "./styles";

// using old material ui for booking form calendar component
const oldMuiTheme = getMuiTheme({
  fontFamily: ["Open Sans", "sans-serif", "Roboto"],
  palette: {
    canvasColor: "#ffffff",
    primary1Color: "#6dc7c6",
    primary2Color: "#fe999e"
  }
});

class DateTimeField extends React.Component {
  state = {
    value: moment(),
    selectedTimeSlot: {
      name: "02:45 PM",
      value: 1568583900
    }
  };

  componentWillMount() {
    this.props.getTimeSlots(this.state.value);
  }

  componentDidUpdate(prevProps) {}

  handleCalendarClick = (date, name) => {
    const newValue = moment(new Date(date));

    this.setState({ value: newValue }, () => {
      this.props.getTimeSlots(this.state.value);
    });
    this.props.onChange({ value: date }, name);
  };

  handleSelectTimeSlot = selectedTimeSlot => {
    if (isEqual(selectedTimeSlot, this.state.selectedTimeSlot)) {
      this.setState({ selectedTimeSlot: null });
    } else {
      this.setState({ selectedTimeSlot }, () => {
        this.props.onChange(
          { value: moment.unix(Number(this.state.selectedTimeSlot.value)) },
          this.props.name
        );
      });
    }
  };

  render() {
    const { classes, timeSlots, error } = this.props;

    const { value, selectedTimeSlot } = this.state;
    return (
      <MuiThemeProvider muiTheme={oldMuiTheme}>
        <FormControl error={error.isPresent} className={classes.container}>
          <div
            className={`${classes.calendarContainer} CalendarOld CalendarBooking`}
          >
            <Calendar
              firstDayOfWeek={0}
              initialDate={value.toDate()}
              onClickDay={(_, date) => {
                this.handleCalendarClick(date, "startTime");
              }}
            />
          </div>
          <div className={classes.showTimeSlots}>
            <div className={classes.label}>Available Times</div>
            <div className={classes.timeSlotsContainer}>
              <div className={classes.timeSlotsInnerContainer}>
                {timeSlots.map(timeSlot => {
                  const className = isEqual(timeSlot, selectedTimeSlot)
                    ? `${classes.timeSlot} ${classes.selectedTimeSlot}`
                    : classes.timeSlot;

                  return (
                    <Paper
                      key={timeSlot.name}
                      onClick={() => this.handleSelectTimeSlot(timeSlot)}
                      className={className}
                    >
                      {timeSlot.name}
                    </Paper>
                  );
                })}
                {!timeSlots.length && (
                  <div className={classes.noTimeSlot}>
                    No time slot available at this date
                  </div>
                )}
              </div>
            </div>
          </div>
          <FormHelperText>{error && error.content}</FormHelperText>
        </FormControl>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ bookingForm: { timeSlots } }) => {
  return {
    timeSlots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTimeSlots: payload => dispatch.bookingForm.getAvailableTimeSlots(payload)
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DateTimeField);
