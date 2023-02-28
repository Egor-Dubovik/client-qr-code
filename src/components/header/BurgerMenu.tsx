import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { pages } from 'constant/navigaton';
import { NavLink } from 'react-router-dom';
import useLinkStyles from './style/Link.style';

const BurgerMenu = () => {
  const classes = useLinkStyles();
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
        {pages.map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <NavLink className={`${classes.Link} ${classes.BurgerLink}`} to={page.route}>
              {page.name}
            </NavLink>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default BurgerMenu;
