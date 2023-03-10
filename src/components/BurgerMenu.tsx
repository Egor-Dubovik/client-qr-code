import React, { useContext } from 'react';
import { Context } from 'index';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem } from '@mui/material';
import { pages } from 'common/constant/navigaton';
import AppNavLink from './AppNavLink/AppNavLink';

const BurgerMenu = () => {
  const { user } = useContext(Context);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        <MenuItem onClick={handleCloseNavMenu}>
          <AppNavLink page={pages.main} place={'BurgerLink'} />
        </MenuItem>
        <MenuItem onClick={handleCloseNavMenu}>
          <AppNavLink page={pages.scaner} place={'BurgerLink'} />
        </MenuItem>
        {user.isAuth && (
          <MenuItem onClick={handleCloseNavMenu}>
            <AppNavLink page={pages.return} place={'BurgerLink'} />
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
