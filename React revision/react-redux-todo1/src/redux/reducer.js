import { ADD_TODO_ITEM } from "./action";

const initialState = {
    todos:[]
}

export const reducer = (state = initialState,action) =>{
    switch (action.type) {
        case  ADD_TODO_ITEM:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
          
        default:
            return state
    }
}