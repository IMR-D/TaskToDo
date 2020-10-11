import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../../redux/types.js";
import { templateToDo } from "../../redux/templateToDo.js";
import { addTodo } from "../../redux/actions.js";
import thunk from "redux-thunk";

export const ToDoAction = () => {
  const [textToDo, setTextToDo] = useState("");
  let [idToDo, setidToDo] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="row">
      <input
        value={textToDo}
        type="text"
        placeholder="enter"
        onChange={(e) => setTextToDo(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(idToDo, textToDo));
          setidToDo(++idToDo);
        }}
      >
        Add
      </button>
    </div>
  );
};
