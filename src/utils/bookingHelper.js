import { validateForm, updateBooleanField } from "./formHelpers";
import Api from "./api";

import { bookingFormValidations } from "../siteFormValidations";

class BookingUtil {
  static validateForm(form, errors) {
    return validateForm(form, errors, bookingFormValidations);
  }

  static updateForm(event, name, form, currentStep) {
    switch (name) {
      case "name":
        const fieldName = name ? name : event.target.name;
        const fieldValue = event.label ? event.label : event.target.value;
        form[currentStep]["clientId"] = event.value;

        form[currentStep][fieldName] = fieldValue;

        if (form[currentStep]["clientId"]) {
          this.fillClientDetails(form, currentStep);
        }
        break;
      case "reminderPreferences":
        form = updateBooleanField(event, name, form, currentStep);

        const checkboxOption = event.target.name;

        if (checkboxOption === "noReminder") {
          for (let option in form[currentStep][name]) {
            if (option !== "noReminder") {
              form[currentStep][name][option] = false;
            }
          }
        } else {
          for (let option in form[currentStep][name]) {
            if (option === "noReminder") {
              form[currentStep][name][option] = false;
            }
          }
        }
        break;
      case "startTime":
        form[currentStep][name] = event.value;
        break;
      default:
        form[currentStep][event.target.name] = event.target.value;
        break;
    }

    return form;
  }

  static submitForm = form => {
    return Api.createBooking(form);
  };
}

export default BookingUtil;
