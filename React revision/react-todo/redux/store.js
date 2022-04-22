import { createStore } from "redux";
import { addTodoItem } from "./action.js";
import { reducer } from "./reducer.js";


export const store = createStore(reducer)
