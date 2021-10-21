function List({ todos, removeItem }) {
  function doneItem(e) {
    if (e.target.style.textDecoration !== "line-through") {
      e.target.style.textDecoration = "line-through";
      e.target.style.opacity = ".2";
    } else {
      e.target.style.textDecoration = "";
      e.target.style.opacity = "1";
    }
    console.log("üstü çizildi");
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <p onClick={doneItem}>{todo}</p>
            <button onClick={removeItem}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
