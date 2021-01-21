import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import BaseLayout from '../components/layout/BaseLayout';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      paddingBottom: theme.spacing(2),
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <BaseLayout>
      <Typography variant="h4" className={classes.title}>
        ホーム
      </Typography>
    </BaseLayout>
  );
};

export default Home;
