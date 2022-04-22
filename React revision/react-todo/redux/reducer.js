
const initialState = {
    todo:[]
}

export const reducer = (store=initialState,action)=>{
    switch(action.type){
        case  "ADD_TODO_ITEM" :
            return{
                ...store,
                todo:[...store.todo,action.payload]
            }
        case  "DELETE_TODO_ITEM" :
            return{
                ...store,
                
            }
    }
}