import { Box, Button } from '@mui/material';
import { pages, ROUTES } from 'constant/navigaton';
import React from 'react';
import { NavLink } from 'react-router-dom';
import useLinkStyles from './style/Link.style';

const NavBar = () => {
  const classes = useLinkStyles();

  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <NavLink key={page.name} className={`${classes.Link} ${classes.NavLink}`} to={page.route}>
          {page.name}
        </NavLink>
      ))}
    </Box>
  );
};

export default NavBar;
