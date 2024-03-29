import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import applyMiddleware from 'redux';
// import createStore from 'redux';
// import promiseMiddleware from 'redux';
// import reduxThunk from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const createStoreWidthMiddleware = applyMiddleware(
//   promiseMiddleware,
//   reduxThunk,
// )(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
