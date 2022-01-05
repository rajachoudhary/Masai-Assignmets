
import { authConstants } from "./ActionType";

const initState = {
    isAuth :false
}
export const AuthReducer = (state=initState, action)=>{
    switch (action.type) {
        case authConstants.LOGIN_SUCCESS: {
         
          return {
            ...state,
            isAuth: true
          };
        }
        default:
          return state;
      }
}