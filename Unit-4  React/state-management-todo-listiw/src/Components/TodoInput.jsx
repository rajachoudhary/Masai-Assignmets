import style from "../CSS/Todo.module.css";
import React from "react";
const TodoInput = ({ handleAdd }) => {
  const [input, setInput] = React.useState("");

  return (
    <>
      <input
        className={style.input}
        value={input}
        placeholder="PRODUCT NAME"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className={style.addButton} onClick={() => handleAdd(input)}>
        ADD
      </button>
    </>
  );
};
export default TodoInput;
