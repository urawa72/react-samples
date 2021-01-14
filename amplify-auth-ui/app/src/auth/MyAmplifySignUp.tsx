import React from 'react';
import { AmplifySignUp } from '@aws-amplify/ui-react';

const MyAmplifySignUp = () => {
  return (
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
          required: false,
        },
      ]}
    />
  );
};

export default MyAmplifySignUp;
