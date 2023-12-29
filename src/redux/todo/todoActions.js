// get all todos

import axios from "axios";
import {
  TODO_ADD_FAILED,
  TODO_ADD_REQUEST,
  TODO_ADD_SUCCESS,
  TODO_DELETE,
  TODO_REQUEST,
  TODO_REQUEST_FAILED,
  TODO_REQUEST_SUCCESS
} from "./actionType";

// Get all todos
export const getTodos = () => async dispatch => {
  try {
    dispatch({
      type: TODO_REQUEST
    });
    await axios
      .get("http://localhost:5050/todos")
      .then(res => {
        dispatch({
          type: TODO_REQUEST_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: TODO_REQUEST_FAILED,
          payload: "Sorry data failed"
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// Add all todos
export const addTodos = todo => async dispatch => {
  try {
    dispatch({
      type: TODO_ADD_REQUEST
    });
    await axios
      .post("http://localhost:5050/todos", { name: todo })
      .then(res => {
        dispatch({
          type: TODO_ADD_SUCCESS,
          payload: res.data
        });
      })
      .catch(error => {
        dispatch({
          type: TODO_ADD_FAILED,
          payload: "Sorry data add failed"
        });
      });
  } catch (error) {
    console.log(error.message);
  }
};

// Delete todos
export const deleteTodo = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5050/todos/${id}`).then(res => {
      dispatch({
        type: TODO_DELETE,
        payload: id
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
