 export const ADD_TODO_ITEM = "ADD_TODO_ITEM"

export const addTodo = (newItem)=>({
    type : ADD_TODO_ITEM,
    payload : newItem
})