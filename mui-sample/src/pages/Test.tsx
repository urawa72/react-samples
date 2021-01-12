import React from 'react';
import ResponsiveDrawer from '../components/ResponsiveDrawer';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    container: {
      paddingBottom: theme.spacing(4),
    },
    title: {
      paddingBottom: theme.spacing(5),
    },
  })
);

const Test: React.FC = () => {
  const classes = useStyles();

  return (
    <ResponsiveDrawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="lg" className={classes.container}>
          <Typography variant="h4" className={classes.title}>
            テスト
          </Typography>
        </Container>
      </main>
    </ResponsiveDrawer>
  );
};

export default Test;
