import React from 'react';
import { Grid, TextField } from '@material-ui/core';

const Setting = () => {
  return (
    <>
      <h1>Setting</h1>
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

export default Setting;
