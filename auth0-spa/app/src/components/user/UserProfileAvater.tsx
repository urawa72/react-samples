import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  })
);

const UserProfileAvater = () => {
  const { user } = useAuth0();
  const classes = useStyles();

  return user.picture ? (
    <Avatar
      alt={user.name}
      src={user.picture}
      className={classes.small}></Avatar>
  ) : (
    <AccountCircle className={classes.small} />
  );
};

export default UserProfileAvater;
