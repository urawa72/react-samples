import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import Home from './pages/Home';

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <>
      <ResponsiveDrawer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
