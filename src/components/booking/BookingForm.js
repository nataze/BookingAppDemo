import React from "react";
import moment from "moment";

import Alert from "react-s-alert";

import { compose } from "redux";
import { connect } from "react-redux";

import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";

import Loading from "../../components/common/loading";
import FormField from "../../components/formElements/FormField";
import BookingUtil from "../../utils/bookingHelper";

import {
  buildMultiFormFields,
  newMutliFormState
} from "../../utils/formBuilders";
import { clone } from "../../utils/helpers";

import schema from "./schema";
import styles from "./styles";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);

    this.formFields = buildMultiFormFields(props.schema);

    const startTime = props.startTime ? moment(props.startTime) : moment();

    const formState = newMutliFormState(props.schema, { startTime });

    this.noErrors = clone(formState.errors);
    this.noErrorState = clone(formState.errors);

    this.stepHeaders = {
      1: "Step 1: Client Info",
      2: "Step 2: Date & Time"
    };

    props.setState({
      form: formState.form,
      errors: clone(formState.errors)
    });

    this.state = {
      stepHeader: this.stepHeaders[props.currentStep]
    };
  }

  componentWillUnmount() {
    this.props.update({ key: "currentStep", value: 1 });
  }

  updateForm = (event, name) => {
    const { form, currentStep, updateObject } = this.props;

    const updatedForm = BookingUtil.updateForm(event, name, form, currentStep);

    updateObject({ key: "form", value: updatedForm });
    updateObject({ key: "errors", value: clone(this.noErrors) });
  };

  handleNext = () => {
    const { currentStep, update, updateObject } = this.props;
    if (currentStep < 2) {
      const nextStep = currentStep + 1;
      update({ key: "currentStep", value: nextStep });
      updateObject({ key: "errors", value: clone(this.noErrors) });

      this.setState({ stepHeader: this.stepHeaders[nextStep] });
    } else {
      BookingUtil.submitForm(this.props.form).then(_ => {
        Alert.success("Booking successfully created.");
        this.props.closeModal();
      });
    }
  };

  validateCurrentStep = () => {
    const { form, errors, currentStep, updateObject } = this.props;

    updateObject({ key: "errors", value: clone(this.noErrors) });

    const validation = BookingUtil.validateForm(
      form[currentStep],
      errors[currentStep]
    );

    if (validation.isValid) {
      // proceed to next step
      this.handleNext();
    } else {
      errors[currentStep] = validation.errors;
      updateObject({ key: "errors", value: errors });
      this.setState({ errors });
    }
  };

  handleBack = () => {
    const state = this.props.currentStep;
    const currentStep = state > 0 ? state - 1 : state;

    this.props.update({ key: "currentStep", value: currentStep });
    this.setState({ stepHeader: this.stepHeaders[currentStep] });
  };

  render() {
    const { stepHeader } = this.state;

    const { classes, employees, currentStep, form, errors } = this.props;

    if (!form) return <Loading />;

    if (currentStep === 2 && !Object.keys(employees).length) return <Loading />;

    return (
      <div className={classes.container}>
        <div>
          {currentStep === 1 ? (
            <div className={classes.header}>NEW BOOKING</div>
          ) : (
            <div onClick={this.handleBack} className={classes.navigation}>
              <ArrowBackIcon />
              BACK
            </div>
          )}
        </div>
        <div className={classes.content}>
          <div className={classes.step}>{stepHeader}</div>
          <div className={classes.form}>
            {this.formFields[currentStep].map(field => {
              const value = form[currentStep][field.name];
              const checkboxValues = value
                ? Object.keys(value).map(innerField => value[innerField])
                : [];

              return (
                <FormField
                  key={field.name}
                  fieldType={field.fieldType}
                  required={field.isRequired}
                  value={value}
                  name={field.name}
                  labelName={field.labelName}
                  error={errors[currentStep][field.name]}
                  onChange={this.updateForm}
                  checkboxValues={checkboxValues}
                  checkboxOptions={field.checkboxOptions}
                  checkboxLabel={field.checkboxLabel}
                  checkboxLabels={field.checkboxLabels}
                  placeholder={field.placeholder}
                />
              );
            })}
          </div>
        </div>
        <div onClick={this.validateCurrentStep} className={classes.navigation}>
          {currentStep === 2 ? "CREATE BOOKING" : "NEXT"}
          {currentStep < 2 && <ArrowForwardIcon />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ bookingForm, employees }) => ({
  clients: [],
  employees,
  form: bookingForm.form,
  errors: bookingForm.errors,
  date: bookingForm.date,
  currentStep: bookingForm.currentStep,
  schema
});

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployees: () => dispatch.employees.fetchEmployees(),
    update: payload => dispatch.bookingForm.update(payload),
    updateObject: payload => dispatch.bookingForm.updateObject(payload),
    setState: payload => dispatch.bookingForm.add(payload)
  };
};

export default compose(
  withStyles(styles, { withTheme: true }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BookingForm);
