import React from "react";

import { withStyles } from "@material-ui/core/styles";

const styles = ({ palette, spacing }) => ({
  monthEvents: {
    backgroundColor: palette.primary.main
  }
});

class MonthEventCardComponent extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.monthEvents}>
        <span>8</span>
        <small>appointments</small>
      </div>
    );
  }
}
const MonthlyEventCard = withStyles(styles, { withTheme: true })(
  MonthEventCardComponent
);

export { MonthlyEventCard };

export class EventCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusColor: "#03A9F4"
    };
  }

  componentDidMount() {
    this.setStatusColor();
  }

  setStatusColor = () => {
    const booking = this.props.event.data;
    switch (booking.status) {
      case "confirmed":
        this.setState({ statusColor: "#689F38" });
        break;
      case "cancelled":
        this.setState({ statusColor: "#E91E63" });
        break;
      case "rescheduled":
        this.setState({ statusColor: "#5E35B1" });
        break;
      case "late":
        break;
      case "reminded":
        this.setState({ statusColor: "#FFA000" });
        break;
      case "completed":
        this.setState({ statusColor: "#4CAF50" });
        break;
      case "no-show":
        this.setState({ statusColor: "#F44336" });
        break;
      case "scheduled":
        this.setState({ statusColor: "#03A9F4" });
        break;
      default:
        // when "scheduled"
        this.setState({ statusColor: "#03A9F4" });
        break;
    }
  };

  render() {
    const { event } = this.props;
    const color = this.state.statusColor;
    const styles = {
      event: {
        backgroundColor: "#f6f6f6",
        height: "100%",
        width: "100%",
        color: "black",
        border: `1px solid ${color}`,
        textAlign: "center",
        paddingTop: 10,
        borderTop: `5px solid ${color}`,
        overflow: "auto"
      }
    };
    if (!event) return null;

    return (
      <div style={styles.event}>
        <small>{event.data.service_name}</small>
      </div>
    );
  }
}
