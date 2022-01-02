import { proConstants } from "./ActionType";

export const fetchRequest = () => {
    return {
      type: proConstants.GET_FETCH_REQUEST,
      payload: {
        isLoading: true
      }
    };
  };
  
  export const fetchSuccess = (pro) => {
    return {
      type: proConstants.GET_FETCH_SUCCESS,
      payload: {
        pro:pro
      }
    };
  };
  
  export const fetchFailure = () => {
    return {
      type: proConstants.GET_FETCH_FAILURE,
      payload: {
        isError: true
      }
    };
  };

  export const getData = (dispatch) => {
    
    const requestAction = fetchRequest();
    dispatch(requestAction);
    return fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((res) => {
        //success
        console.log(res);
        const successAction = fetchSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = fetchFailure();
        dispatch(failureAction);
      });
  };