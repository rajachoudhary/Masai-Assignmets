import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../Redux/action";

export const TodoItem = ({ status, title, onToggle, id, onDelete }) => {
  return (
    <div
      style={{
        width: "350px",
        display: "flex",
        gap: "2rem",
        margin: "auto",
        padding: "15px",
        fontSize: "20px"
      }}
    >
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onToggle(id)}>Handle Toggle</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export const TodoList = () => {
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos
    };
  }, shallowEqual);

  const dispatch = useDispatch();
  const handleToggle = (id) => {
    const action = toggleTodo(id);
    console.log(action);
    dispatch(action);
  };
  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};
