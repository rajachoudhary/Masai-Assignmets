import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { AuthContextApp } from "./Components/AuthContextApp";
import { AuthContextProvider } from "./Components/AuthContextProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <App />
      
      <AuthContextApp/>
     

    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
