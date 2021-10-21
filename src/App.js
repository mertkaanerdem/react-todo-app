import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <h2>Todo App</h2>
      <List todos={todos} />
      <Form addTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
