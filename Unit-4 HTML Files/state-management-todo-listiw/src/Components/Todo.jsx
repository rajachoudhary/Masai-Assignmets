import TodoInput from "./TodoInput";
import React from "react";
import { v4 as uuid } from "uuid";
import style from "../CSS/Todo.module.css";
import { TodoList } from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = React.useState([]);
  const [completed, setCompleted] = React.useState(false);
  const handleAddButton = (input) => {
    const payload = {
      input: input,
      status: false,
      id: uuid()
    };
    setTodo([...todo, payload]);
  };
  const handleStatus = (id) => {
    const updateStatus = todo.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodo(updateStatus);
  };

  const handleDelete = (id) => {
    const updateDelete = todo.filter((item) => item.id !== id);
    setTodo(updateDelete);
  };

  return (
    <div>
      <TodoInput handleAdd={handleAddButton} />
      {todo
        .filter((item) => !item.status)
        .map((item) => (
          <TodoList
            {...item}
            key={item.id}
            handleToggle={handleStatus}
            handleRemove={handleDelete}
          />
        ))}
      <div>
        <button
          className(={style.completed}
          onClick={() => setCompleted(!completed)}
        >
          Show Completed
        </button>
        {completed ? (
          todo
            .filter((item) => item.status)
            .map((item) => (
              <TodoList
                {...item}
                key={item.id}
                handleToggle={handleStatus}
                handleRemove={handleDelete}
              />
            ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default Todo;
