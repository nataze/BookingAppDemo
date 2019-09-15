import Api from "../utils/api";
import { fetchModelList, removeItem, arrayToObject } from "./helper";

import { underscoreToCamel } from "../utils/helpers";

export default {
  state: {},
  reducers: {
    getAll(_, payload) {
      return payload;
    },
    update(state, payload) {
      return {
        ...state,
        ...Object.assign({}, payload)
      };
    },
    add(state, payload) {
      return { ...payload, ...state };
    },
    delete(state, payload) {
      const updatedState = removeItem(payload, state);
      return updatedState;
    }
  },
  effects: dispatch => ({
    async fetchServices(_, rootState) {
      if (Object.keys(rootState.services).length > 0) {
        return;
      }
      return fetchModelList(
        dispatch,
        Api.getServices,
        "Services not fetched",
        dispatch.services.getAll
      );
    },
    async fetchServicesForEmployee(payload) {
      let data = await Api.getServicesForEmployee(
        payload.selectedEmployeeId,
        payload.categories
      );

      let formattedData = underscoreToCamel(data);
      formattedData = arrayToObject(data);

      return formattedData;
    }
  })
};
