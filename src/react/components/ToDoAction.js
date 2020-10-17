import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions.js";
import { useHttp } from "../../api/http.hook.js";

function ToDoAction() {
  const [textToDo, setTextToDo] = useState("");
  let [idToDo, setidToDo] = useState(0);
  const dispatch = useDispatch();
  const { state } = useHttp();
  const addTodoHandler = () => {
    dispatch(addTodo(++idToDo, textToDo));
    setidToDo(idToDo);
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
      <button onClick={downloadTodoHandler}>DOWNLOAD</button>
    </div>
  );
}

export default ToDoAction;
