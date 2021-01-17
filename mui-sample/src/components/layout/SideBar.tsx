import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import RouterIcon from '@material-ui/icons/Router';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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

const SideBar = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem
          exact
          component={NavLink}
          to="/"
          button
          className={classes.navLink}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="ホーム" />
        </ListItem>
        <ListItem
          exact
          component={NavLink}
          to="/sample"
          button
          className={classes.navLink}>
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="サンプル" />
        </ListItem>
        <ListItem
          exact
          component={NavLink}
          to="/setting"
          button
          className={classes.navLink}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="設定" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideBar;
