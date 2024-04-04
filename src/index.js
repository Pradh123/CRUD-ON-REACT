import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import RouterProvider from './component/RouterProvider';
import ContextProvider from './context/UserContext';
import StateContextProvider from './context/StateContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
  <ContextProvider>
  <RouterProvider/>
  </ContextProvider>
  </StateContextProvider>
    
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
