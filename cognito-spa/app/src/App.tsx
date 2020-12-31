import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Auth } from 'aws-amplify';
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT!;

const helloWorld = async () => {
  const res = await fetch(`${API_ENDPOINT}/hello`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  });
  console.log(res.text());
};

const App: React.FC = () => {
  return (
    <div className="App">
      <AmplifyAuthenticator>
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              type: 'email',
              required: true,
            },
            {
              type: 'password',
              required: true,
            },
          ]}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <button id="button" onClick={() => helloWorld()}>
            Click !
          </button>
          <AmplifySignOut />
        </header>
      </AmplifyAuthenticator>
    </div>
  );
};

export default App;
