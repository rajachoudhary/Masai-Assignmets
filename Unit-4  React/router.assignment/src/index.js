import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { AllRoute } from './Route/AllRote';
import { ProductNavbar } from './React Route Dynamic Route/Components/Navbar';
import { ProductRoutes } from './React Route Dynamic Route/All Routes/AllRoutes';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* First assignment
    <Navbar/>
    <AllRoute/>
    First assignment */}
    <ProductNavbar/>
    <ProductRoutes/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
