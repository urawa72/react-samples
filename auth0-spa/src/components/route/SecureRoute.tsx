import React from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import BaseLayout from '../layout/BaseLayout';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface SecureRouteProps {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
  noLayout?: boolean;
}
/* eslint-enable */

const SecureRoute = ({
  component: Component,
  path: path,
  exact: exact,
  noLayout: noLayout,
}: SecureRouteProps) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (isAuthenticated) {
    return (
      <Route
        exact={exact}
        path={path}
        render={(props) => {
          if (noLayout) return <Component {...props} />;
          return (
            <BaseLayout>
              <Component {...props} />
            </BaseLayout>
          );
        }}
      />
    );
  } else {
    loginWithRedirect();
    return <></>;
  }
};

export default SecureRoute;
