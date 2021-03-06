import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from '@App';
import FontStyles from '@styles/fonts/fonts';
import GlobalStyle from '@styles/globalStyle';
import theme from '@styles/theme';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <FontStyles />
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
