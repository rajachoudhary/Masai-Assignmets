import { addTodoItem } from "./redux/action.js";
import { store } from "./redux/store.js";

console.log(store.getState());
store.dispatch(addTodoItem("A"))
store.dispatch(addTodoItem("B"))
store.dispatch(addTodoItem("C"))
store.dispatch(addTodoItem("D"))
store.dispatch(addTodoItem("E"))
store.dispatch(addTodoItem("F"))
store.dispatch(addTodoItem("G"))
console.log(store.getState());