import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MyCard from './MyCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subTitle: {
      paddingBottom: theme.spacing(2),
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
      <Typography variant="subtitle1" className={classes.subTitle}>
        Circular Progress
      </Typography>
      <div className={classes.circles}>
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress color="inherit" />
      </div>
    </MyCard>
  );
};

export default MyProgress;
