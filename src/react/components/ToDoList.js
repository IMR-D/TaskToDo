import React from "react";
import { ToDoItem } from "./ToDoItem";
import { useSelector } from "react-redux";
import { v1 as uuid } from "uuid";
export const ToDoList = () => {
  const valueStore = useSelector((state) => state);
  console.log("value", valueStore);
  return (
    <div className="row">
      {valueStore.map((todo) => {
        return <ToDoItem key={uuid()} storeTodo={todo} />;
      })}
    </div>
  );
};
