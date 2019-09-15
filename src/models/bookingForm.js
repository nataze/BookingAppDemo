import Api from "../utils/api";
import { addModel } from "./helper";

export default {
  state: {
    form: null, // {1: { key: value }, 2: {}, ...}
    errors: null, // { 1: { key: value }, 2: { }, ... }
    currentStep: 1,
    isNewClient: true,
    timeSlots: []
  },
  reducers: {
    add(state, payload) {
      return { ...state, ...payload };
    },
    update(state, payload) {
      return {
        ...state,
        [payload.key]: payload.value
      };
    },
    updateObject(state, payload) {
      return {
        ...state,
        [payload.key]: Object.assign({}, payload.value)
      };
    },
    addTimeSlots(state, payload) {
      return {
        ...state,
        timeSlots: payload.value
      };
    }
  },
  effects: dispatch => ({
    async getAvailableTimeSlots(
      _,
      {
        bookingForm: { form }
      }
    ) {
      const dateStep = 2;

      return addModel(
        dispatch,
        {
          startTime: form[dateStep].startTime
        },
        Api.fetchFreeSlots,
        "",
        "Could not get available time slots",
        dispatch.bookingForm.addTimeSlots,
        false
      );
    }
  })
};
