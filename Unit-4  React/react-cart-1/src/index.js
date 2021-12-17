import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Components/Footer';
import { Navbar } from './Components/Navbar';
import reportWebVitals from './reportWebVitals';
import { AllRoute } from './Routes/AllRoute';
import { FooterRoute } from './Routes/FooterRoute';

ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
  <Navbar/>
  <AllRoute/>
  <FooterRoute/>
  <Footer/>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
