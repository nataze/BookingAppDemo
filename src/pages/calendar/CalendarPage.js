import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

import { compose } from "redux";
import { connect } from "react-redux";

import "react-big-calendar/lib/css/react-big-calendar.css";

import BookingFormModal from "../../components/booking/modal";
import Content from "../../components/common/Content";

import { companySetting } from "../../siteData";

import { withStyles } from "@material-ui/core/styles";

import { EventCard } from "./Components";
import CalendarToolbar from "./calendarToolbar";

import "./calendar.css";

const styles = () => ({
  container: {
    width: "100%"
  }
});

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.actions = Object.freeze({
      add: "add",
      edit: "edit"
    });

    this.state = {
      openModal: true,
      action: this.actions.add,
      eventsForCal: [],
      setting: null,
      selectedEmployeeName: "All Employees"
    };

    // Setup the localizer by providing the moment
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

    this.views = { month: true, week: true };
  }

  async componentWillMount() {
    const setting = companySetting;
    this.setState({ setting });
  }

  addBooking = e => {
    this.setState({
      selectedTime: e.start,
      action: this.actions.add,
      openModal: true,
      selectedEvent: null,
      modalTitle: "Online Booking"
    });
  };

  closeModal = () => {
    this.setState({
      openModal: false,
      selectedEvent: null,
      selectedTime: null
    });
  };

  render() {
    const {
      openModal,
      selectedTime,
      eventsForCal,
      selectedEvent,
      action,
      setting,
      selectedEmployeeName
    } = this.state;

    const dateHeader = ({ label }) => {
      const day =
        label[0] === "0" && label.length > 1 ? label.substr(1) : label;
      return <span style={{ cursor: "pointer" }}>{day}</span>;
    };

    const CalendarToolbarWithProps = props => (
      <CalendarToolbar
        {...props}
        onSelectEmployee={() => {}}
        selectedEmployeeName={selectedEmployeeName}
        onClickNewBooking={this.addBooking}
      />
    );

    const components = {
      event: EventCard,
      toolbar: CalendarToolbarWithProps,
      month: {
        dateHeader: dateHeader
      }
    };

    if (!setting) return null;

    const minTime = moment(setting.dailyStartTime, "h:mma").toDate();
    const maxTime = moment(setting.dailyEndTime, "h:mma").toDate();
    const timeInterval = Number(setting.appointmentDuration);

    const bookingProps = {
      startTime: selectedTime,
      onSubmit: () => {},
      selectedBooking: selectedEvent
    };
    return (
      <Content>
        {action === this.actions.add && (
          <BookingFormModal
            bookingProps={bookingProps}
            open={openModal}
            onCloseModal={this.closeModal}
          />
        )}

        <div className={this.props.classes.container}>
          <BigCalendar
            style={{ height: "85vh" }}
            events={eventsForCal}
            views={this.views}
            defaultView={BigCalendar.Views.MONTH}
            step={timeInterval}
            timeslots={1}
            selectable
            popup
            onSelectSlot={this.addBooking}
            onSelectEvent={() => {}}
            min={minTime}
            max={maxTime}
            components={components}
            formats={{ eventTimeRangeFormat: () => "" }}
            onEventDrop={this.moveBooking}
          />
        </div>
      </Content>
    );
  }
}

const mapStateToProps = ({ schedules, employees }) => ({
  schedules,
  employees
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSchedules: () => dispatch.schedules.fetchSchedules()
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CalendarPage);
