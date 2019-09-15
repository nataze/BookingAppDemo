import React from "react";
import moment from "moment";

import { compose } from "redux";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";

import RightIcon from "@material-ui/icons/ChevronRight";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import AddIcon from "@material-ui/icons/Add";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class CalendarToolbar extends React.Component {
  state = { anchorEl: null };

  componentWillMount() {
    this.props.fetchEmployees();
  }
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleSelectEmployee = employeeId => {
    const selectedEmployee = this.props.employees[employeeId];

    if (employeeId === 0) {
      this.props.onSelectEmployee(0);
    } else {
      this.props.onSelectEmployee(
        selectedEmployee ? selectedEmployee.id : null
      );
    }

    this.handleClose();
  };

  goToBack = () => {
    this.props.onNavigate("PREV");
  };
  goToNext = () => {
    this.props.onNavigate("NEXT");
  };

  goToWeekView = () => {
    this.props.onViewChange("week");
  };
  goToMonthView = () => {
    this.props.onViewChange("month");
  };

  render() {
    const { classes, selectedEmployeeName, onClickNewBooking } = this.props;
    const props = this.props;

    const label = () => {
      const date = moment(props.date);
      return (
        <div className={classes.labelContainer}>
          <LeftIcon className={classes.leftArrow} onClick={this.goToBack} />
          <div>
            {date.format("MMMM")} {date.format("YYYY")}
          </div>
          <RightIcon className={classes.rightArrow} onClick={this.goToNext} />
        </div>
      );
    };

    const isMonthView = props.view === props.messages.month;
    const isWeekView = props.view === props.messages.week;

    const monthClass = isMonthView
      ? `${classes.button} rbc-active`
      : `${classes.button}`;
    const weekClass = isWeekView
      ? `${classes.button} rbc-active`
      : `${classes.button}`;

    return (
      <div className={`${classes.container} rbc-toolbar`}>
        <div>
          <Button
            classes={{
              root: classes.buttonRoot,
              label: classes.buttonLabel
            }}
            size="small"
            className={monthClass}
            onClick={this.goToMonthView}
            style={{ marginRight: 6 }}
          >
            Month
          </Button>
          <Button
            classes={{
              root: classes.buttonRoot,
              label: classes.buttonLabel
            }}
            className={weekClass}
            onClick={this.goToWeekView}
          >
            Week
          </Button>
        </div>

        <div className="rbc-toolbar-label">{label()}</div>

        <div className={classes.rightActions}>
          <Button
            classes={{
              root: classes.buttonRoot,
              label: classes.buttonLabelRight
            }}
            className={classes.button}
            style={{
              display: "flex",
              color: "#696969"
            }}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            <AccountCircleIcon className={classes.iconsEmployee} />
            <span className={classes.employeeName}>{selectedEmployeeName}</span>
            <ExpandMoreIcon className={classes.iconsEmployee} />
          </Button>

          <Button
            classes={{
              root: classes.buttonRoot,
              label: classes.buttonLabelRight
            }}
            style={{
              backgroundColor: "#fe999e",
              color: "#ffffff",
              marginLeft: 6,
              display: "flex"
            }}
            className={classes.button}
            onClick={onClickNewBooking}
          >
            <span style={{ marginBottom: 3 }}>New Booking</span>
            <AddIcon
              style={{
                fontWeight: "bold",
                marginBottom: 2
              }}
            />
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    employees: state.employees || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => dispatch.employees.fetchEmployees()
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CalendarToolbar);
