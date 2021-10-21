import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <h2>To Do App</h2>
      <Form addTodos={setTodos} todos={todos} />
      <div className="container">
        <List todos={todos} />
      </div>
    </div>
  );
}

export default App;
