import Alert from "react-s-alert";
import { underscoreToCamel } from "../utils/helpers";

/*****************************
    Helper functions for models
*****************************/

export const arrayToObject = arr => {
  // assumes id is present
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].id] = arr[i];
  }
  return result;
};

export const removeItem = (item, rawObj) => {
  // assumes key for item and obj is id
  const result = {};
  const itemKey = Object.keys(item)[0];
  Object.keys(rawObj).forEach(key => {
    if (key.toString() !== itemKey.toString()) {
      result[key] = rawObj[key];
    }
  });
  return result;
};

export const fetchModelList = async (
  dispatch,
  apiCall,
  error,
  reducer,
  formatData = true
) => {
  try {
    dispatch.api.beginRequest();
    const data = await apiCall();

    let formattedData = Object.assign({}, data);
    if (formatData) {
      formattedData = arrayToObject(data.map(underscoreToCamel));
    }

    dispatch.api.endRequest();
    reducer(formattedData);
    return Promise.resolve(true);
  } catch (e) {
    Alert.error(`${error} : ${e}`);
    dispatch.api.requestError();
    return Promise.resolve(false);
  }
};

export const addModel = async (
  dispatch,
  payload,
  apiCall,
  success,
  error,
  reducer,
  shouldFormatData = true
) => {
  try {
    dispatch.api.beginRequest();
    const { data } = await apiCall(payload);
    dispatch.api.endRequest();

    if (shouldFormatData) {
      const formattedData = underscoreToCamel(data);
      reducer({ [formattedData.id]: formattedData });
    } else {
      reducer({ value: data });
    }

    if (success) Alert.success(success);
    return Promise.resolve(true);
  } catch (e) {
    Alert.error(`${error} : ${e}`);
    dispatch.api.endRequest();
    return Promise.resolve(false);
  }
};

export const updateModel = async (
  dispatch,
  payload,
  apiCall,
  success,
  error,
  reducer
) => {
  try {
    dispatch.api.beginRequest();
    const { data } = await apiCall(payload);

    const formattedData = underscoreToCamel(data);
    dispatch.api.endRequest();
    reducer({ [formattedData.id]: formattedData });
    Alert.success(success);
    return Promise.resolve(true);
  } catch (e) {
    Alert.error(`${error} : ${e}`);
    dispatch.api.endRequest();
    return Promise.resolve(false);
  }
};

export const deleteModel = async (
  dispatch,
  id,
  apiCall,
  success,
  error,
  reducer
) => {
  try {
    dispatch.api.beginRequest();
    const { data } = await apiCall(id);
    dispatch.api.endRequest();

    const formattedData = underscoreToCamel(data);
    dispatch.api.endRequest();
    reducer({ [formattedData.id]: formattedData });
    Alert.success(success);
    return Promise.resolve(true);
  } catch (e) {
    Alert.error(`${error} : ${e}`);
    dispatch.api.endRequest();
    return Promise.resolve(false);
  }
};
