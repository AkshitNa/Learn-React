import React from 'react' //Must
import ReactDOM from 'react-dom/client'
import App from './App.jsx' //Parent Componet
import './index.css' //CSS File

let x = document.getElementById('root');

ReactDOM.createRoot(x).render(<App />);