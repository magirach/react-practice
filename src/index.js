import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import First from './First';
import Second from './Second';
import Doctor from './Doctor';
import Add from './Add';
import Average from './Average';
import Circle from './Circle';
import Cities from './Cities';
import Cities1 from './Cities1';

ReactDOM.render(
  <React.StrictMode>
    <Cities1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
