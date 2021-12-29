import { proConstants } from "./ActionType";

export const fetchRequest = () => {
    return {
      type: proConstants.GET_TODO_REQUEST,
      payload: {
        isLoading: true
      }
    };
  };
  
  export const fetchSuccess = (data) => {
    return {
      type: proConstants.GET_TODO_SUCCESS,
      payload: {
        todos: data
      }
    };
  };
  
  export const fetchFailure = () => {
    return {
      type: proConstants.GET_TODO_FAILURE,
      payload: {
        isError: true
      }
    };
  };