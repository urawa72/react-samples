import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import SecureRoute from './components/route/SecureRoute';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const { isLoading } = useAuth0();

  return isLoading ? null : (
    <BrowserRouter>
      <Switch>
        <SecureRoute exact path="/" component={Home} />
        <SecureRoute path="*" component={NotFound} noLayout={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
