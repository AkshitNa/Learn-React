import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Passing the store we have created.
import appStore from './Redux/Appstore.jsx'
import { Provider } from 'react-redux'

let x = document.getElementById('root');

ReactDOM.createRoot(x).render(
<Provider store={appStore}> 
<App />
</Provider>
// Passing The Store By Wrapping our
//App Component under Provider
);

/*

const store = configureStore({
  reducer: {
    CounterReducer: counterSlice, // Now, we will call counterSlice as "CounterReducer". 
    TodosReducer: todoSlice, // Now, we will call todoSlice as "TodosReducer". 
    TextReducer: textSlice, // Now, we will call textSlice as "TextReducer"
  },
});

*/ 

// Now our App Component has the access of Redux Store.


