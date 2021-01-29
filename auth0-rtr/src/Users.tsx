import React from 'react';
import { Link } from 'react-router-dom';
import { useApi } from './useApi';

const Users = () => {
  const { loading, error, data } = useApi();

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    console.log(error);
    return <div>Error</div>;
  }

  console.log(data);

  return (
    <>
      <h1>Users</h1>
      <Link to="/">Home</Link>
    </>
  );
};

export default Users;
