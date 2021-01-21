import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

interface SecureRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
  noLayout?: boolean;
}

interface SecureRouteProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const SecureRoute: React.FC<SecureRouteProps> = ({
  component,
  exact,
  path,
}) => {
  return (
    <Route
      exact={exact}
      path={path}
      component={withAuthenticationRequired(component, {})}
    />
  );
};

export default SecureRoute;
