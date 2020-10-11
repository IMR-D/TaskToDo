import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./types.js";

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
export function completedTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id,
    },
  };
}
