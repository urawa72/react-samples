import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Header from './Header';
import ResponsiveDrawer from './ResponsiveDrawer';

const drawerWidth = 240;
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
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
      {children}
    </div>
  );
};

export default BaseLayout;
