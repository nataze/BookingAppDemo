import React from "react";
import styled from "styled-components";
import moment from "moment";
import InputMoment from "input-moment";
import "input-moment/dist/input-moment.css";
import { TextInput } from "components/common/TextInput";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      moment: this.props.value || moment(),
      isOpen: false
    };

    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleDatePicker = this.toggleDatePicker.bind(this);
  }

  handleChange(moment) {
    this.props.onChange(moment);
    this.setState({ moment });
  }

  toggleDatePicker() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  handleSave() {
    console.log("saved", this.state.moment.format("llll"));
    this.toggleDatePicker();
  }

  render() {
    const cssProps = {
      fontSize: 2,
      pl: 4,
      style: { width: "100%", cursor: "pointer" }
    };

    return (
      <DatePickerContainer>
        <TextInput
          {...cssProps}
          type="text"
          value={this.state.moment.format("llll")}
          onClick={this.toggleDatePicker}
          readOnly
        />
        {this.state.isOpen && (
          <InputMoment
            name={this.props.name}
            type={"datetime"}
            moment={this.state.moment}
            onChange={this.handleChange}
            minStep={1}
            onSave={this.handleSave}
          />
        )}
      </DatePickerContainer>
    );
  }
}

export default DatePicker;

const DatePickerContainer = styled.div``;
