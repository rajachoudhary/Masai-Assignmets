import { proConstants } from "./ActionType";


const initState = {
    pro:[],
    isLoading:true,
    isError:false
}

export const Reducer = (state=initState,action)=>{
    switch (action.type) {
    
        case proConstants.GET_FETCH_REQUEST: {
          return {
            ...state,
            isLoading: true,
            isError: false
          };
        }
        case proConstants.GET_FETCH_SUCCESS: {
          return {
            ...state,
            todos: action.payload.pro,
            isLoading: false
          };
        }
        case proConstants.GET_FETCH_FAILURE: {
          return {
            ...state,
            isLoading: false,
            isError: true
          };
        }
        
        default:
        return state;
  }
}