import React from 'react';
import { Route } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface BaseRouteProps {
  path: string;
  exact?: boolean;
  noLayout?: boolean;
  children: React.ReactNode;
}
/* eslint-enable */

const BaseRoute = ({
  path: path,
  exact: exact = true,
  noLayout: noLayout = false,
  children: children,
}: BaseRouteProps) => {
  return (
    <Route exact={exact} path={path}>
      {noLayout && children}
      {!noLayout && <BaseLayout>{children}</BaseLayout>}
    </Route>
  );
};

export default BaseRoute;
