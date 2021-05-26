import React from "react";
import { combineReducers } from "redux";
import countReducer from "./countReducer";
const reducer = combineReducers({
  counter: countReducer,
});
export default reducer;
