import React from "react";
import {
  countDecrement,
  countIncrement,
  countReset,
} from "../constants/countConstants";
const increment = () => async (dispatch, getState) => {
  dispatch({
    type: countIncrement,
  });
};
const decrement = () => async (dispatch, getState) => {
  dispatch({
    type: countDecrement,
  });
};
const reset = () => async (dispatch) => {
  dispatch({
    type: countReset,
  });
};
export { increment, decrement, reset };
