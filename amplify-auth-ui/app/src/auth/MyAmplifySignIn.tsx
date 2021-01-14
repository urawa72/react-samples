import React from 'react';
import { AmplifySignIn } from '@aws-amplify/ui-react';

const MyAmplifySignIn = () => {
  return (
    <AmplifySignIn
      slot="sign-in"
      usernameAlias="email"
      formFields={[
        {
          type: 'email',
          required: true,
        },
        {
          type: 'password',
          required: false,
        },
      ]}
    />
  );
};

export default MyAmplifySignIn;
