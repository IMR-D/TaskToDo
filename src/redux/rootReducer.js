import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  TOGGLE_TODO,
  UNCOMPLETE_TODO,
  ALL_TODO,
} from "./types.js";
import { combineReducers } from "redux";

const initialState = {
  todos: [],
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: action.payload.completed,
          },
        ],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          [action.payload.id],
          {
            id: action.payload.id,
            completed: !action.payload.completed,
          },
        ],
      };

    default:
      return state;
  }
}

function visabilityReducer(state = initialState, action) {
  switch (action.type) {
    case COMPLETE_TODO:
      return {
        ...state,
        todos: action.payload.list,
      };
    case UNCOMPLETE_TODO:
      return {
        ...state,
        todos: action.payload.list,
      };
    case ALL_TODO:
      return {
        ...state,
        todos: action.payload.list,
      };
    default:
      return state;
  }
}

export default combineReducers({
  todoReducer,
  visabilityReducer,
});
