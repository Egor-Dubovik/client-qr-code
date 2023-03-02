import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useUserMenuStyles from './UserMenu.style';

const UserMenu = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const classes = useUserMenuStyles();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="user image" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Профиль</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <NavLink className={classes.MenuLink} to={ROUTES.MAIN}>
            Выйти
          </NavLink>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <NavLink className={classes.MenuLink} to={ROUTES.LOGIN}>
            Авторизация
          </NavLink>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
