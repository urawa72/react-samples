import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import MyCard from './MyCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    circleColor: {
      color: '#26323A',
    },
  })
);

const MyProgress = () => {
  const classes = useStyles();

  return (
    <MyCard>
      <div className={classes.root}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress className={classes.circleColor} />
      </div>
    </MyCard>
  );
};

export default MyProgress;
