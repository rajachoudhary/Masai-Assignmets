import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { Body } from "./Components/Body";
import { ThemeContextProvider } from "./ContextApi/ThemeContestProvider";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContextProvider>
    <App />
    <Body/>
    </ThemeContextProvider>
   
  </StrictMode>,
  rootElement
);
