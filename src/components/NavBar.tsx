import React from 'react';
import { Box } from '@mui/material';
import { pages } from 'common/constant/navigaton';
import AppNavLink from './AppNavLink/AppNavLink';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <AppNavLink key={page.name} page={page} place={'NavLink'} />
      ))}
    </Box>
  );
};

export default NavBar;
