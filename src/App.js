import React from "react";
import ListForm from "./Components/ListForm";
import ToDoLists from "./Components/ToDoLists";
import './App.css'

const App = () => {
  return (
    <div className="app">
      <ListForm />
      <ToDoLists />
    </div>
  );
};
export default App;
