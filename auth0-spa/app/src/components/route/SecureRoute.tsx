import React from 'react';
import { Route } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';
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
  const SecureComponent = withAuthenticationRequired(Component, {});
  return (
    <Route exact={exact} path={path}>
      {noLayout && <SecureComponent />}
      {!noLayout && (
        <BaseLayout>
          <SecureComponent />
        </BaseLayout>
      )}
    </Route>
  );
};

export default SecureRoute;
