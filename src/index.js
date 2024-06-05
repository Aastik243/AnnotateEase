import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import {Annotator} from './Annotator.js';
import reportWebVitals from './reportWebVitals.js';
=======
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> 1989ed0e309457e477e533823d3bd5296eede1fe

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Annotator />
=======
    <App />
>>>>>>> 1989ed0e309457e477e533823d3bd5296eede1fe
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
