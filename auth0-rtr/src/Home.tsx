import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { user, logout } = useAuth0();
  return (
    <>
      <h1>Home</h1>
      <img src={user.picture} />
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log out
      </button>
      <Link to="/users">Users</Link>
    </>
  );
};

export default Home;
