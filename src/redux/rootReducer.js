import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from "./types.js";
import { templateToDo } from "./templateToDo.js";

export function rootReducer(state = templateToDo, action) {
  let newState = [];
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      newState = [...state];
      console.log(newState);
      newState.push(action);
      return newState;
    case DELETE_TODO:
      return state.filter((todo) => todo.payload.id !== action.payload.id);
    case COMPLETE_TODO:
      console.log("COMPLETED", state);
      console.log("ACTION", action);
      return state.map((todo) =>
        todo.payload.id === action.payload.id
          ? { todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

/*


*/
