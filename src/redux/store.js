import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bleReducer from "./reducers/bleReducer";

const rootReducer = combineReducers({
  ble: bleReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
