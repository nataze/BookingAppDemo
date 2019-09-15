import Api from "../utils/api";
import {
  updateModel,
  fetchModelList,
  addModel,
  deleteModel,
  removeItem,
  arrayToObject
} from "./helper";

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
    },
    async addServiceCategory(payload) {
      return addModel(
        dispatch,
        payload,
        Api.createServiceCategory,
        "Service category successfully created",
        "Service category was not created",
        dispatch.serviceCategories.add
      );
    },
    async updateServiceCategory(payload) {
      return updateModel(
        dispatch,
        payload,
        Api.updateServiceCategory,
        "Service category has been updated",
        "Could not update employee group",
        dispatch.serviceCategories.update
      );
    },
    async deleteServiceCategory(id) {
      return deleteModel(
        dispatch,
        id,
        Api.deleteServiceCategory,
        "Service category has been deleted",
        "Error while deleting employee group",
        dispatch.serviceCategories.delete
      );
    }
  })
};
