import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from '../Logo';
import BurgerMenu from './BurgerMenu';
import UserMenu from './UserMenu';
import NavBar from './NavBar';

const Header = () => {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo isDesktop={true} />
          <BurgerMenu />
          <Logo isDesktop={false} />
          <NavBar />
          <UserMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
