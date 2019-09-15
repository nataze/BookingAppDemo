export default {
  state: { loading: false },
  reducers: {
    beginRequest(state) {
      return { ...state, loading: true };
    },
    requestError(state) {
      return { ...state, loading: false };
    },
    endRequest(state) {
      return { ...state, loading: false };
    },
    accessDenied(state) {
      return { ...state, loading: false };
    }
  }
};
