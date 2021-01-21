import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import SecureRoute from './components/route/SecureRoute';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const { isLoading, getAccessTokenSilently, getIdTokenClaims } = useAuth0();

  (async () => {
    const token = await getAccessTokenSilently();
    const claims = await getIdTokenClaims();
    console.log(token);
    console.log(claims);
  })();

  if (isLoading) {
    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ minHeight: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <SecureRoute exact path="/" component={Home} />
        <SecureRoute path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
