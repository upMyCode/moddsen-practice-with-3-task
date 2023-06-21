import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import store from './store';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #root {
    height: 100vh;
  }
`;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <>
        <GlobalStyle />
        <App />
      </>
    </Provider>
  </React.StrictMode>,
);
