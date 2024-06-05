import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {store} from './redux/store/index.ts';
import theme from './persentation/muiTheme.ts';
import { ThemeProvider } from '@emotion/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

import App from './App.tsx'

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <ApolloProvider client={client}>
     <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </Provider>
     </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
)
