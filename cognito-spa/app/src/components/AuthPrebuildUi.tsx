import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import { authConfig } from '../utils/aws-config';
import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from '@aws-amplify/ui-react';

Amplify.configure(authConfig);

const AuthPrebuildUi = () => {
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
    <AmplifyAuthenticator>
      <AmplifySignIn
        headerText="My Custom Sign In Text"
        slot="sign-in"
        usernameAlias="email"
      />
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
      <h4>Auth with Amplify Prebuild UI</h4>
      {/* <button id="button" onClick={() => helloWorld()}> */}
      {/*   Click ! */}
      {/* </button> */}
      <AmplifySignOut />
    </AmplifyAuthenticator>
  );
};

export default AuthPrebuildUi;
