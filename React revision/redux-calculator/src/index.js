import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from './redux/store';
import {
  Provider
} from 'react-redux';
import { Calculator } from './Components/Calculator/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <Calculator/>
    </Provider>
      
  </React.StrictMode>
);

