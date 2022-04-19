import React from 'react'
import style from "../todo.module.css"
export const TodoList = ({title}) => {
  return (
    <ul className={style.todoList}>
      <li>{title}</li>
    </ul>
  )
}
