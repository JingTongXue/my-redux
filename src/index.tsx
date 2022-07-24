import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
//@ts-ignore
store.subscribe(root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// 柯里化实现

function compose(funcs: []) {
  if(funcs.length === 0) {
    return (arg: any) => arg;
  }
  if(funcs.length === 1) {
    //@ts-ignore
    return funcs[0];
  }
  //@ts-ignore
  return funcs.reduce((a,b) => (...args) => a(b(...args)));
}