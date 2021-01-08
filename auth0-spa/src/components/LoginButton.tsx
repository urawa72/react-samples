import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return !isAuthenticated ? (
    <Button variant="contained" onClick={loginWithRedirect}>
      Login
    </Button>
  ) : null;
};

export default LoginButton;
