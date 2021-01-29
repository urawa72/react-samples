import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN!;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID!;
const AUTH0_AUDIENCE = process.env.REACT_APP_AUTH0_AUDIENCE!;
/* eslint-enable */

ReactDOM.render(
  <Auth0Provider
    domain={AUTH0_DOMAIN}
    clientId={AUTH0_CLIENT_ID}
    audience={AUTH0_AUDIENCE}
    useRefreshTokens={true}
    cacheLocation="localstorage"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
