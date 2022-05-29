import { GET_CIRCLE, GET_COLOR, REMOVE_CIRCLE } from "./action"

const initialData  =  {
    randomColor:[],
    movingShapes:[],
    restoreData:[],
    
}

export const reducer = (state = initialData,{type,payload})=>{
   
    switch(type){
        case GET_COLOR:{
            return{
                ...state,
                randomColor:payload,
            }
        }
        case GET_CIRCLE:{
            return{
                ...state,
                movingShapes:[...state.movingShapes,payload]
            }
        }
        case REMOVE_CIRCLE:{
            return{
                ...state,
                movingShapes:payload
            }
        }
        default :
        return  state
    }
}
