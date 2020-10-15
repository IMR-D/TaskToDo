import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
const ToDoList = () => {
  const valueStore = useSelector((state) => state.todoReducer.todos);
  console.log(valueStore);
  return (
    <div className="row">
      {valueStore.map((todo) => {
        return <ToDoItem key={todo.id} storeTodo={todo} />;
      })}
    </div>
  );
};
export default ToDoList;
