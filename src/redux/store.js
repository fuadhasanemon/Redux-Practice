import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { testRedux } from "./middlewares/test";

const middlewares = [testRedux, thunk];

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

// export
export default store;
