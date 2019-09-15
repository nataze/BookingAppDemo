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
    async fetchServices(payload, rootState) {
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
    },
    async updateService(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateService,
        "Service successfully updated",
        "",
        dispatch.services.update
      );
    },
    async updateServiceEmployees(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateServiceEmployees,
        "Employees for service have been updated",
        "Could not update employees for service",
        dispatch.services.update
      );
    },
    async addService(payload) {
      return addModel(
        dispatch,
        payload,
        Api.createService,
        "Service successfully created",
        "Service was not created",
        dispatch.services.add
      );
    },
    async deleteService(id) {
      return deleteModel(
        dispatch,
        id,
        Api.deleteService,
        "Service has been deleted",
        "Error while deleting service",
        dispatch.services.delete
      );
    }
  })
};
