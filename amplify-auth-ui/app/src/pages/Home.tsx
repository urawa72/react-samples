import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useAuth } from '../auth/AuthContext';

const Home = () => {
  const { isAuthenticted } = useAuth();
  console.log(isAuthenticted);

  return (
    <>
      <h1>Home</h1>
      <Grid container spacing={1}>
        <Grid item>
          <TextField label="hoge" variant="outlined" name="hoge" size="small" />
        </Grid>
        <Grid item>
          <TextField label="fuga" variant="outlined" name="fuga" size="small" />
        </Grid>
        <Grid item>
          <TextField label="piyo" variant="outlined" name="piyo" size="small" />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
