import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer';

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    toolbar: theme.mixins.toolbar,
  })
);

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header handleDrawerToggle={handleDrawerToggle} />
      <ResponsiveDrawer
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
