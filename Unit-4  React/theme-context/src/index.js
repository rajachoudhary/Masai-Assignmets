import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Body from "./Components/Body";
import Header from "./Components/Header";
import AppContextProvider from "./Context/AppContextProvider";
import ThemeContestProvider from "./Context/ThemeContestProvider";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeContestProvider>
      <AppContextProvider>
        <App />
        <Body />
        <Header />
      </AppContextProvider>
    </ThemeContestProvider>
  </StrictMode>,
  rootElement
);
