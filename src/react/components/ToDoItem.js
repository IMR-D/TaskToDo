import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions.js";
import { completedTodo } from "../../redux/actions.js";

export const ToDoItem = ({ storeTodo }) => {
  const dispatch = useDispatch();
  return (
    <div className="row">
      <h2>{storeTodo.payload.id}</h2>
      <h3>{storeTodo.payload.text}</h3>
      <button onClick={() => dispatch(completedTodo(storeTodo.payload.id))}>
        Завершить
      </button>
      <button onClick={() => dispatch(deleteTodo(storeTodo.payload.id))}>
        &times;
      </button>
    </div>
  );
};
