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
export function allViewTodo(list) {
  return {
    type: ALL_TODO,
    payload: {
      list,
    },
  };
}
export function completedTodo(list) {
  return {
    type: COMPLETE_TODO,
    payload: {
      list,
    },
  };
}

export function unCompletedTodo(list) {
  return {
    type: UNCOMPLETE_TODO,
    payload: {
      list,
    },
  };
}
