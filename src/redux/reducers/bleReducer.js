import { GET_BLE, UPDATE_BLE, CLEAR_BLE } from "../actions/types";

const initialState = {
  log: "",
  // current: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_BLE:
      return {
        ...state,
        log: state.log.concat(action.payload),
      };

    case GET_BLE:
      return {
        ...state,
        log: state.log.substring(action.payload),
      };

    // case CLEAR_BLE:
    //   return {
    //     ...state,
    //     current: "",
    //   };

    default:
      return state;
  }
};
