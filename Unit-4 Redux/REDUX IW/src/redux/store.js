import { combineReducers, createStore, applyMiddleware,  } from "redux";

import authReducer from "./auth/reducer";
import appReducer from "./app/reducer";

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

const loggerMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    console.log("found an action which is a function")  ;
    const func = action;
    return func(store.dispatch, store.getState);
  } else {
    return next(action);
  }
};


export const store = createStore(rootReducer,
  applyMiddleware(loggerMiddleware));


console.log(store.getState());

