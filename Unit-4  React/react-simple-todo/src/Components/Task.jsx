import React from "react";
import List from "./List";
import style from "../CSS/Todo.module.css";
export default function Tasks() {
  const [input, setinput] = React.useState("");
  const [todo, setTodo] = React.useState([]);
  let writeInput = (e) => {
    // console.log(e.target.value)
    let { value } = e.target;
    setinput(value);
  };
  let addButton = () => {
    const payload = {
      title: input
    };
    let newTask = [...todo, payload];
    setTodo(newTask);
  };

  return (
    <>
      <h1 className={style.tasks}>Tasks</h1>
      <input className={style.input} placeholder="Write Here" value={input} onChange={writeInput} />
      <button className={style.button} onClick={addButton}>+</button>
      {todo.map((items) => {
        return (
          <>
            <List title={items.title} />
          </>
        );
      })}
    </>
  );
}
