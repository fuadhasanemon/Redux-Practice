import { combineReducers } from "redux";
import colorReducer from "./color/colorReducer";
import counterReducer from "./counter/counterReducer";
import backgroundReducer from "./background/backgroundReducer";
import todoReducer from "./todo/todoReducer";

// Create root reducer
const rootReducer = combineReducers({
  counter: counterReducer,
  color: colorReducer,
  background: backgroundReducer,
  todo: todoReducer
});

// export
export default rootReducer;
