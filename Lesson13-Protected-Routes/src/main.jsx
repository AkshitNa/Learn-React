import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './App.css';
import Provider from './Utils/Provider';

let x = document.getElementById('root');

ReactDOM.createRoot(x).render(<Provider> <App /> </Provider>);


