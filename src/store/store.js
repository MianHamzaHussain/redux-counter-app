import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/index";
const countFromLocalStorage = localStorage.getItem("countValue")
  ? JSON.parse(localStorage.getItem("countValue"))
  : 0;
const intialState = {};
const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
