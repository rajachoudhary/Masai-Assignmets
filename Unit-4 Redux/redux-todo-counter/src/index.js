import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import App from "./App";
// import { AppContextProvider } from "./Redux/AppContextProvider";
// import { store } from "./Redux/store";
import { store } from "../src/TodoApp/Redux/store";
import { Todo } from "./TodoApp/Todo/Todo";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <AppContextProvider store={store}>
      <App />
    </AppContextProvider> */}
    <Provider store={store}>
      <Todo />
    </Provider>
  </StrictMode>,
  rootElement
);
