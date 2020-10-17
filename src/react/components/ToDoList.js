import React from "react";
import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../../redux/types.js";

const ToDoList = () => {
  const showAll = useSelector((state) => state.todoReducer.todos);
  const showComplete = useSelector((state) => state.todoReducer.todos.filter((todo) => !todo.completed));
  const showActive = useSelector((state) => state.todoReducer.todos.filter((todo) => todo.completed));
  const getFilter = useSelector((state) => state.visibilityFilterReducer);
  let setFilter;
 
  
  switch(getFilter){
    case SHOW_ALL:{
     setFilter = showAll;
     break;
    }
    case SHOW_COMPLETED:{
       setFilter = showComplete;
      break;
    }
    case SHOW_ACTIVE:{
       setFilter = showActive;
      break;
    }
    default: setFilter = showAll;
  }
  
  return (
    <div className="row">
      {setFilter.map((todo) => {
        return <ToDoItem key={todo.id} storeTodo={todo} />;
      })}
    </div>
  );
};
export default ToDoList;
