import counterReducer from "./counter";
import userReducer from "./users";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export default rootReducer;
