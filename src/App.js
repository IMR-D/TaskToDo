import React from "react";
import "./App.css";
import ToDoList from "./react/components/ToDoList.js";
import ToDoAction from "./react/components/ToDoAction.js";
import FilterButtons from "./react/components/FilterButtons.js";

function App() {
  return (
    <div className="App">
      <ToDoAction />
      <FilterButtons/>
      <ToDoList />
    </div>
  );
}

export default App;
