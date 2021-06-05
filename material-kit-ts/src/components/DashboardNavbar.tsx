import React from 'react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Badge, Box, IconButton, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined';
import InputIcon from '@material-ui/icons/Input';
import Logo from './Logo';

interface DashboardNavbarProps {
  onMobileNavOpen: () => void;
}

const DashboardNavbar: React.VFC<DashboardNavbarProps> = ({
  onMobileNavOpen,
}) => {
  const [notifications] = useState([]);

  return (
    <AppBar elevation={0}>
      <Toolbar>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { md: 'none', lg: 'flex' } }}>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <InputIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: { md: 'flex', lg: 'none' } }}>
          <IconButton color="inherit" onClick={onMobileNavOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;
