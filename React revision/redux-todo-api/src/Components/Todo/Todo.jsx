import React from 'react'
import { Search } from './Search'
import { TodoInput } from './TodoInput'
import { TodoList } from './TodoList'

export const Todo = () => {
  return (
    <div>
      <h1>Todo</h1>
      <TodoInput/>
      <TodoList/>
      <Search/>
    </div>
  )
}
