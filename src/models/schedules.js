import Api from "../utils/api";
import { fetchModelList, updateModel } from "./helper";

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
    }
  },
  effects: dispatch => ({
    async fetchSchedules(payload, rootState) {
      if (Object.keys(rootState.schedules).length > 0) {
        return;
      }
      return fetchModelList(
        dispatch,
        Api.getSchedules,
        "Schedules not fetched",
        dispatch.schedules.getAll,
        false
      );
    },
    async updateSchedule(payload) {
      return await updateModel(
        dispatch,
        payload,
        Api.updateSchedule,
        "Schedule successfully updated",
        "",
        dispatch.schedules.update
      );
    }
  })
};
