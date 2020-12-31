import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID!;
const WEB_CLIENT_ID = process.env.REACT_APP_WEB_CLIENT_ID!;
/* eslint-enable */

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: CLIENT_ID,
    userPoolWebClientId: WEB_CLIENT_ID,
    cookieStorage: {
      domain: 'localhost',
      expires: 1,
      sameSite: 'lax',
      secure: false, // if https, set true
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
