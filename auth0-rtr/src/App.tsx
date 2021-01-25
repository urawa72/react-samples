import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const App: React.FC = () => {
  const {
    isLoading,
    isAuthenticated,
    error,
    user,
    loginWithRedirect,
    logout,
    getIdTokenClaims,
    getAccessTokenSilently,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    (async () => {
      const claims = await getIdTokenClaims();
      const token = await getAccessTokenSilently();
      console.log(claims);
      console.log(token);
    })();
    return (
      <div>
        <img src={user.picture} />
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return <button onClick={loginWithRedirect}>Log in</button>;
  }
};

export default App;
