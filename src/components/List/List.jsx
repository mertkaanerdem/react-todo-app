import "./List.css";

function List({ todos }) {
  function doneItem(e) {
    if (e.target.style.textDecoration !== "line-through") {
      e.target.style.textDecoration = "line-through";
      e.target.style.opacity = ".2";
      console.log("üstü çizildi");
    } else {
      e.target.style.textDecoration = "";
      e.target.style.opacity = "1";
      console.log("üstü çizili değil artık");
    }
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li onClick={doneItem} key={todo.id}>
            <p>{todo.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
