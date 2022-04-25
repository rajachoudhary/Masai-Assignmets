import React, { useState } from 'react'
import { ADD_TODO_ITEM } from '../redux/action'
import { store } from '../redux/store'
import { TodoList } from './TodoList'
// import { useDispatch } from 'react-redux'

// const dispatch = useDispatch()
export const TodoInput = () => {
    const [query, setQuery] = useState("")
    const handleAdd = ()=>{
        store.dispatch({
            type : ADD_TODO_ITEM,
            payload:query
        })
        setQuery("")
    }
  return (
      <>
    <div style={{textAlign:"center"}}>
        <input type="text" placeholder='add item' value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={handleAdd}>Add Item</button>
    </div>
    <TodoList/>
    </>
  )
}
