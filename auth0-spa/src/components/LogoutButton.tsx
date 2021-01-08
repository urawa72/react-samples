import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-ui/core';

const LogoutButton = (props: any) => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <Button
      variant="outlined"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
      {...props}>
      Logout
    </Button>
  ) : null;
};

export default LogoutButton;
