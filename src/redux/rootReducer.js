import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  TOGGLE_TODO,
  UNCOMPLETE_TODO,
  ALL_TODO,
} from "./types.js";

const initialState = {
  todos: [],
};

export function rootReducer(state = initialState, action) {
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
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              completed: !state.todos.completed,
            };
          } else
            return {
              ...todo,
            };
        }),
      };
    case ALL_TODO:
      console.log("ALL STATE", state, " ACTION", action);
      return { todos: action.payload };
    case UNCOMPLETE_TODO:
      console.log("UNCOMPLETE STATE", state, " ACTION", action);
      return { todos: action.payload };
    case COMPLETE_TODO:
      console.log("COMPLETE STATE", state, " ACTION", action);
      return { todos: action.payload };

    default:
      return state;
  }
}
