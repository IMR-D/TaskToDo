import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../redux/actions.js";
import { toggleTodo } from "../../redux/actions.js";
import { useSelector } from "react-redux";
import { createStore } from "redux";
import reducer from "../../redux/rootReducer.js";

const ToDoItem = ({ storeTodo }) => {
  const dispatch = useDispatch();
  const valueStore = useSelector((state) => state.todoReducer.todos);

  const toggleHandler = () => {
    dispatch(toggleTodo(storeTodo.id));
  };
  const deleteHandler = () => {
    dispatch(deleteTodo(storeTodo.id));
  };

  return (
    <div className="row">
      <h1>{storeTodo.id}</h1>
      <h2>{storeTodo.text}</h2>
      <button onClick={toggleHandler}>Завершить</button>
      <button onClick={deleteHandler}>&times;</button>
    </div>
  );
};

export default ToDoItem;
