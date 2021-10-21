import { useState } from "react";

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
  return (
    <div>
      <input
        placeholder="Write your job"
        type="text"
        name="todo"
        value={todo}
        onChange={getTodo}
      />
      <button onClick={addSubmit}>Add</button>
    </div>
  );
}

export default Form;
