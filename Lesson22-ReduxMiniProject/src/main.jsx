import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Passing the store we have created.
import appStore from './Redux/appStore.jsx'
import { Provider } from 'react-redux'

let x = document.getElementById('root');

ReactDOM.createRoot(x).render(
<Provider store={appStore}> 
<App />  {/* Passing The Store By Wrapping our App Component under Provider*/}
</Provider>
)

// Now our App Component has the access of Redux Store.


