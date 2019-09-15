import Api from "../utils/api";
import {
  updateModel,
  addModel,
  fetchModelList,
  deleteModel,
  removeItem
} from "./helper";

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
    async fetchEmployees(payload, rootState) {
      if (Object.keys(rootState.employees).length > 0) {
        return;
      }
      return fetchModelList(
        dispatch,
        Api.getEmployees,
        "Employees not fetched",
        dispatch.employees.getAll
      );
    },
    async filterEmployeeByName(query) {},
    async updateEmployeeServices(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateEmployeeServices,
        "Employee services have been updated",
        "Could not update employee services",
        dispatch.employees.update
      );
    },
    async updateEmployee(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateEmployee,
        "Employee successfully updated",
        "",
        dispatch.employees.update
      );
    },
    async updateEmployeeGroups(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateGroupsForEmployee,
        "Employee groups have been updated",
        "Could not update employee groups",
        dispatch.employees.update
      );
    },
    async addEmployee(payload) {
      return addModel(
        dispatch,
        payload,
        Api.createEmployee,
        "Employee successfully created",
        "Employee was not created",
        dispatch.employees.add
      );
    },
    async deleteEmployee(id) {
      return deleteModel(
        dispatch,
        id,
        Api.deleteEmployee,
        "Employee has been deleted",
        "Error while deleting employee",
        dispatch.employees.delete
      );
    }
  })
};
