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