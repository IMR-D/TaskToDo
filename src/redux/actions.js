import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./types.js";

export function addTodo(id, text) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      text,
      completed: false,
    },
  };
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
      completed: false,
    },
  };
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})