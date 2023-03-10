import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import useLogout from 'hooks/auth/useLogout';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import useUserMenuStyles from './UserMenu.style';

const UserMenu = observer(() => {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const classes = useUserMenuStyles();
  const { user } = useContext(Context);
  const { logout } = useLogout();

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
        {user.isAuth ? (
          <MenuItem className={classes.MenuItem} onClick={handleCloseUserMenu}>
            <NavLink className={classes.MenuLink} to={ROUTES.PROFILE}>
              Профиль
            </NavLink>
            <NavLink
              className={classes.MenuLink}
              to={ROUTES.MAIN}
              onClick={() => {
                logout();
              }}
            >
              Выйти
            </NavLink>
          </MenuItem>
        ) : (
          <MenuItem onClick={handleCloseUserMenu}>
            <NavLink className={classes.MenuLink} to={ROUTES.LOGIN}>
              Авторизация
            </NavLink>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
});

export default UserMenu;
