import React from "react";
import {
  countDecrement,
  countIncrement,
  countReset,
} from "../constants/countConstants";
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case countIncrement:
      return {
        ...state,
        count: state.count + 1,
      };
    case countDecrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case countReset:
      return { count: 0 };
    default:
      return state;
  }
};
export default countReducer;
