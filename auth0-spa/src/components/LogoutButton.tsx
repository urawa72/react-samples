import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const LogoutButton = () => {
  const { isAuthenticated, logout } = useAuth0();

  return isAuthenticated ? (
    <Typography
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}>
      Logout
    </Typography>
  ) : null;
};

export default LogoutButton;
