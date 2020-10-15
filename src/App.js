import React from "react";
import "./App.css";
import ToDoList from "./react/components/ToDoList.js";
import ToDoAction from "./react/components/ToDoAction.js";

function App() {
  return (
    <div className="App">
      <ToDoAction />
      <ToDoList />
    </div>
  );
}

export default App;
