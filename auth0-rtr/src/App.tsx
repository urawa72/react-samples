import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Users from './Users';

const App: React.FC = () => {
  const { isLoading, isAuthenticated, error, loginWithRedirect } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
};

export default App;
