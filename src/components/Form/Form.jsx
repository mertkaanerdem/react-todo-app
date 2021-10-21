import { useState } from "react";

import "./Form.css";

function Form({ addTodos, todos }) {
  const [todo, setTodo] = useState("");

  const getTodo = (e) => {
    setTodo(e.target.value);
  };

  const addSubmit = () => {
    if (todo == "") return false;

    addTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo.trim(),
      },
    ]);
    setTodo("");
  };

  const clearAll = () => {
    addTodos([]);
    console.log("temizleme");
  };
  return (
    <div className="listContainer">
      <div className="inputContainer">
        <input
          placeholder="Write your plans"
          type="text"
          name="todo"
          value={todo}
          onChange={getTodo}
        />
        <button className="addButton" onClick={addSubmit}>
          Add
        </button>
      </div>
      <button className="cancelButton" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
}

export default Form;
