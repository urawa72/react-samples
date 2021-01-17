import React from 'react';
import { Route } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface BaseRouteProps {
  component: React.FC<any>;
  path: string;
  exact?: boolean;
  noLayout?: boolean;
}
/* eslint-enable */

const BaseRoute = ({
  component: Component,
  path: path,
  exact: exact = true,
  noLayout: noLayout = false,
}: BaseRouteProps) => {
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
};

export default BaseRoute;
