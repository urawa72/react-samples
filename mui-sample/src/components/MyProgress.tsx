import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyCard from './MyCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },
    circles: {
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const MyProgress = () => {
  const classes = useStyles();

  return (
    <MyCard>
      <div className={classes.root}>
        <div>Floationg Action Buttons</div>
        <div className={classes.circles}>
          <CircularProgress />
          <CircularProgress color="secondary" />
          <CircularProgress color="inherit" />
        </div>
      </div>
    </MyCard>
  );
};

export default MyProgress;
