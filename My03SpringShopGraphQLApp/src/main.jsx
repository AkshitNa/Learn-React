import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from '@apollo/client';
import App from './App';
import client from './Service/ApolloClient';
import 'bootstrap/dist/css/bootstrap.min.css'

let x = document.getElementById('root');

ReactDOM.createRoot(x).render( 
<ApolloProvider client={client}>
  <App />
</ApolloProvider>);
