import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constants";

export const setTodo = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};
export const AddTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
export const DeleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};
