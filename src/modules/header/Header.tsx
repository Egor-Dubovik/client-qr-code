import React from 'react';
import { AppBar, Container, Toolbar } from '@mui/material';
import Logo from '../../components/Logo';
import BurgerMenu from '../../components/BurgerMenu';
import UserMenu from '../../components/UserMenu';
import NavBar from '../../components/NavBar';

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
