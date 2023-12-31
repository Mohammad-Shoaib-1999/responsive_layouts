import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import Store from './redux/store';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
// ;




const root = document.getElementById('root');
const rootElement = (
  <Provider store={Store}>
    {console.count("Index.js rendered!")}
    <App />
  </Provider>
);
const rootContainer = ReactDOM.createRoot(root);
rootContainer.render(rootElement);
