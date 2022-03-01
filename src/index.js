import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from "aos";
import "aos/dist/aos.css";
import "devices.css";
import {ScrollToTop} from './App'

AOS.init(); 


ReactDOM.render(
  <React.StrictMode>
    {/* <ScrollToTop /> */}
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
