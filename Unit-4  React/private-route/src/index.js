import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { AuthContextProvider } from "./Context/AuthContext";
import { AllRoutes } from "./Routes/routes";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  </StrictMode>,
  rootElement
);
