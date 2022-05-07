import {  ADD_TODO, GET_TODO } from "./action"
import { store } from "./store"
const initialState = {
    todos :[]
}
export const reducer = (state= initialState,action) =>{
    switch(action.type){
        case  GET_TODO :
            return{
               todos:action.payload
            }
        case  ADD_TODO :
            return{
               ...state,
               todos:[...state.todos,action.payload]
            }
        default :
        return state;
    }
}