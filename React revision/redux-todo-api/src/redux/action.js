export const GET_TODO = "GET_TODO"
export const ADD_TODO = "ADD_TODO"
export const REMOVE_TODO = "REMOVE_TODO"

export const getTodo = (data)=>({
    type:GET_TODO,
    payload:data
})
export const addTodo = (data)=>({
    type:ADD_TODO,
    payload:data
})