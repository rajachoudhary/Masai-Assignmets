import style from "../CSS/Todo.module.css";

const TodoList = ({ input, status, id, handleToggle, handleRemove }) => {
  if (status === true) {
    var line = {
      textDecoration: "line-through",
      color: "green"
    };
  }

  return (
    <div className={style.todoContainer}>
      <div>
        <h3 style={line}>{input}</h3>
      </div>
      <button onClick={() => handleToggle(id)}>
        {status ? "True" : "False"}
      </button>
      <button onClick={() => handleRemove(id)}>Delete Item</button>
    </div>
  );
};
export { TodoList };
