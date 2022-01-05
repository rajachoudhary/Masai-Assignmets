import { combineReducers, createStore } from "redux";

import { Reducer } from "../../Home/Redux/Reducer";
import { AuthReducer} from "./Reducer";

const rootReducer = combineReducers({auth:AuthReducer,git:Reducer})
export const Store = createStore(rootReducer)