export const  addTodoItem = (data)=>({
    type : "ADD_TODO_ITEM",
    payload:data
})

export const removeTodoItem = (data)=>({
    type: "DELETE_TODO_ITEM",
    payload: data
})