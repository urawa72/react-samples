import React from 'react';
import { Auth } from 'aws-amplify';
import { oauthConfig } from '../utils/aws-config';

Auth.configure(oauthConfig);

const AuthHostedUi = () => {
  Auth.currentAuthenticatedUser()
    .then((user) => {
      console.log('currentAuthenticatedUser', user);
    })
    .catch(() => console.log('Not signed in'));

  Auth.currentSession()
    .then((session) => {
      console.log('currentJwt', session.getIdToken().getJwtToken());
    })
    .catch(() => console.log('Jwt not found'));

  return (
    <>
      <h4>Auth with Cognito Hosted UI</h4>
      <button onClick={() => Auth.federatedSignIn()}>Login</button>
      <button onClick={() => Auth.signOut()}>Logout</button>
      {/* <button id="button" onClick={() => helloWorld()}> */}
      {/*   Click ! */}
      {/* </button> */}
    </>
  );
};

export default AuthHostedUi;
