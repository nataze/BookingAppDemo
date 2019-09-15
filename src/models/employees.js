import Api from "../utils/api";
import { fetchModelList, removeItem } from "./helper";

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
    }
  })
};
