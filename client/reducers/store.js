import { createStore, applyMiddleware } from "redux";
import basicReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  basicReducer,
  applyMiddleware(thunkMiddleware, createLogger())
);
export default store;
