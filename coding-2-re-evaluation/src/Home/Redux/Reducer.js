import { gitConstants } from "./Action";

const initState = {
    search : [],
    isLoading:true,
    isError:false

}

export const Reducer = (state=initState,action)=>{
    switch(action.type){
        case gitConstants.GET_TODO_REQUEST: {
            return {
              ...state,
              isLoading: true,
              isError: false
            };
          }
          case gitConstants.GET_TODO_SUCCESS: {
            return {
              ...state,
              search: action.payload.search,
              isLoading: false
            };
          }
          case gitConstants.GET_TODO_FAILURE: {
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