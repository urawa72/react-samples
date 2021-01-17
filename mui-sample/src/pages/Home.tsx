import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MyButton from '../components/MyButton';
import MyTypography from '../components/MyTypography';
import MyFab from '../components/MyFab';
import MyProgress from '../components/MyProgress';
import MyAlerts from '../components/MyAlerts';
import MyTable from '../components/MyTable';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingBottom: theme.spacing(4),
    },
    title: {
      paddingBottom: theme.spacing(2),
    },
  })
);

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        ホーム
      </Typography>
      <MyButton />
      <MyFab />
      <MyProgress />
      <MyAlerts />
      <MyTypography />
      <MyTable />
    </Container>
  );
};

export default Home;
