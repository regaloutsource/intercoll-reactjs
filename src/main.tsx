import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store/index.ts';
import theme from './persentation/muiTheme.ts';
import { ThemeProvider } from '@emotion/react';

import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
   
  </React.StrictMode>,
)
