import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  UNCOMPLETE_TODO,
  ALL_TODO,
  TOGGLE_TODO,
} from "./types.js";

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
export function allViewTodo(todos) {
  return {
    type: ALL_TODO,
    payload: todos,
  };
}
export function completedTodo(todos) {
  return {
    type: COMPLETE_TODO,
    payload: todos,
  };
}

export function unCompletedTodo(todos) {
  return {
    type: UNCOMPLETE_TODO,
    payload: todos,
  };
}
