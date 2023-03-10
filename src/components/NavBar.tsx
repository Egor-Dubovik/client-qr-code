import React, { useContext } from 'react';
import { Box } from '@mui/material';
import { pages } from 'common/constant/navigaton';
import AppNavLink from './AppNavLink/AppNavLink';
import { Context } from 'index';

const NavBar = () => {
  const { user } = useContext(Context);

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <AppNavLink page={pages.main} place={'NavLink'} />
      <AppNavLink page={pages.scaner} place={'NavLink'} />
      {user.isAuth && <AppNavLink page={pages.return} place={'NavLink'} />}
    </Box>
  );
};

export default NavBar;
