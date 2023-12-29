import {
  TODO_ADD_FAILED,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_DELETE,
  TODO_REQUEST,
  TODO_REQUEST_FAILED,
  TODO_REQUEST_SUCCESS
} from "./actionType";
import { initialState } from "./initialState";

// create counter reducer

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_REQUEST:
      return {
        ...state,
        loading: true
      };

    case TODO_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: payload
      };

    case TODO_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case TODO_ADD_REQUEST:
      return {
        ...state,
        loading: true
      };

    case TODO_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: [...state.todos, payload]
      };

    case TODO_ADD_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      };

    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter(data => data.id !== payload)
      };

    default:
      return state;
  }
};

// export

export default todoReducer;
