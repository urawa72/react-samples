import React from 'react';
import { AmplifyForgotPassword } from '@aws-amplify/ui-react';

const MyAmplifyForgotPassword = () => {
  return (
    <AmplifyForgotPassword
      slot="forgot-password"
      usernameAlias="email"
      formFields={[
        {
          type: 'email',
          required: true,
        },
      ]}
    />
  );
};

export default MyAmplifyForgotPassword;
