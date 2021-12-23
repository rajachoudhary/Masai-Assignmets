import { TodoInput } from "./TodoInput";
import { v4 as uuid } from "uuid";
import { addTodo } from "../Redux/action";
import { useDispatch } from "react-redux";
import { TodoList } from "./TodoList";
export const Todo = () => {
  const dispatch = useDispatch();
  const handleAdd = (text) => {
    const action = addTodo({
      title: text,
      status: false,
      id: uuid()
    });
    dispatch(action);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Todo List</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList />
    </div>
  );
};
