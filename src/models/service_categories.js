import Api from "../utils/api";
import { fetchModelList, removeItem, arrayToObject } from "./helper";

import { underscoreToCamel } from "../utils/helpers";

export default {
  state: {},
  reducers: {
    getAll(state, payload) {
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
    async fetchServiceCategories(payload, rootState) {
      if (Object.keys(rootState.serviceCategories).length > 0) {
        return rootState.serviceCategories;
      }
      return fetchModelList(
        dispatch,
        Api.getServiceCategories,
        "Service categories not fetched",
        dispatch.serviceCategories.getAll
      );
    },
    async fetchServiceCategoriesForEmployee(employeeId) {
      let data = await Api.getServiceCategoriesForEmployee(employeeId);

      let formattedData = underscoreToCamel(data);
      formattedData = arrayToObject(data);

      return formattedData;
    }
  })
};
