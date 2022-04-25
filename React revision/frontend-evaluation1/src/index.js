import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { RegistrationContext } from './Context/RegistrationContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <RegistrationContext>

    <App />
    </RegistrationContext>
    </BrowserRouter>
  </React.StrictMode>
);

