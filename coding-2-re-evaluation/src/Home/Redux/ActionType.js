import { gitConstants } from "./Action";

export const gitRequest = ()=>{
    return {
        type: gitConstants.GIT_SEARCH_REQUEST,
        payload:{
            isLoading:true
        }
        
    };
}
export const gitSuccess = (search)=>{
    return {
        type: gitConstants.GIT_SEARCH_SUCCESS,
        payload:{
            search:search,
        }
        
    };
}
export const gitFailure = ()=>{
    return {
        type: gitConstants.GIT_SEARCH_FAILURE,
        payload:{
            isError:true,
        }
        
    };
}

export const gitSearch = (text,dispatch) => {
    
    const requestAction = gitFailure();
    dispatch(requestAction);
    return fetch(`https://api.github.com/search/repositories?q=${text}`)
      .then((res) => res.json())
      .then((res) => {
        //success
        console.log(res);
        const successAction = gitSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        // failure
        const failureAction = gitFailure();
        dispatch(failureAction);
      });
  };