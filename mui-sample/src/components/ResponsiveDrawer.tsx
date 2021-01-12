import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import RouterIcon from '@material-ui/icons/Router';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    grow: {
      flexGrow: 1,
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        zIndex: theme.zIndex.drawer + 1,
        // width: `calc(100% - ${drawerWidth}px)`,
        // marginLeft: drawerWidth,
      },
      backgroundColor: '#263239',
      // color: '#000',
      // backgroundColor: '#fff',
      // boxShadow: 'none',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      // backgroundColor: '#263239',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    drawerText: {
      // color: '#cecfd2',
    },
    navLink: {
      '&.active': {
        color: '#263239',
        background: theme.palette.grey[200],
        '& .MuiListItemIcon-root': {
          color: '#263239',
        },
      },
    },
  })
);

const ResponsiveDrawer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem
          exact
          component={NavLink}
          to="/"
          button
          className={classes.navLink}>
          <ListItemIcon className={classes.drawerText}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText} primary="ホーム" />
        </ListItem>
        <ListItem
          exact
          component={NavLink}
          to="/test"
          button
          className={classes.navLink}>
          <ListItemIcon className={classes.drawerText}>
            <RouterIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText} primary="テスト" />
        </ListItem>
        <ListItem
          exact
          component={NavLink}
          to="/sample"
          button
          className={classes.navLink}>
          <ListItemIcon className={classes.drawerText}>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText} primary="サンプル" />
        </ListItem>
        <ListItem
          exact
          component={NavLink}
          to="/setting"
          button
          className={classes.navLink}>
          <ListItemIcon className={classes.drawerText}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText className={classes.drawerText} primary="設定" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Hidden xsDown implementation="js">
            <div className={classes.grow} />
            <div>piyopiyo</div>
          </Hidden>
        </Toolbar>
      </AppBar>
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
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="js">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      {children}
    </div>
  );
};

export default ResponsiveDrawer;
