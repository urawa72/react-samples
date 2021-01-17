import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import SideBar from './SideBar';

interface StyleProps {
  drawerWidth: number;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    drawer: (props: StyleProps) => ({
      [theme.breakpoints.up('sm')]: {
        width: props.drawerWidth,
        flexShrink: 0,
      },
    }),
    drawerPaper: (props: StyleProps) => ({
      width: props.drawerWidth,
      // backgroundColor: '#263239',
    }),
  })
);

interface DrawerProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
}

const ResponsiveDrawer: React.FC<DrawerProps> = (props) => {
  const { drawerWidth, mobileOpen, handleDrawerToggle } = props;
  const classes = useStyles({ drawerWidth });
  const theme = useTheme();

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}>
          <SideBar />
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="js">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open>
          <SideBar />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default ResponsiveDrawer;
