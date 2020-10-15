import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/actions.js";
import { completedTodo } from "../../redux/actions.js";
import { allViewTodo } from "../../redux/actions.js";
import { unCompletedTodo } from "../../redux/actions.js";
import { useHttp } from "../../api/http.hook.js";

function ToDoAction() {
  const allStore = useSelector((state) => state.todos);

  const completeStore = useSelector((state) =>
    state.todos.filter((todo) => todo.completed)
  );

  const uncompleteStore = useSelector((state) =>
    state.todos.filter((todo) => !todo.completed)
  );

  const [textToDo, setTextToDo] = useState("");
  let [idToDo, setidToDo] = useState(0);
  const dispatch = useDispatch();
  const { state } = useHttp();
  const addTodoHandler = () => {
    dispatch(addTodo(++idToDo, textToDo));
    setidToDo(idToDo);
  };

  const allViewTodoHandler = () => {
    dispatch(allViewTodo(allStore));
  };

  const completedHandler = () => {
    dispatch(completedTodo(completeStore));
  };

  const uncompletedHandler = () => {
    dispatch(unCompletedTodo(uncompleteStore));
  };

  const downloadTodoHandler = () => {
    state.forEach((e, index) =>
      dispatch(addTodo(++idToDo, state[index].title))
    );
    setidToDo(idToDo);
  };

  return (
    <div className="row">
      <input
        value={textToDo}
        type="text"
        placeholder="enter"
        onChange={(e) => setTextToDo(e.target.value)}
      />
      <button onClick={addTodoHandler}>Add</button>
      <button onClick={uncompletedHandler}>UNCOMPLETE</button>
      <button onClick={completedHandler}>COMPLETE</button>
      <button onClick={allViewTodoHandler}>ALL</button>
      <button onClick={downloadTodoHandler}>DOWNLOAD</button>
    </div>
  );
}

export default ToDoAction;
