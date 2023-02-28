import { Container } from '@mui/material';
import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../header/Header';
import useLayoutStyles from './Layout.style';

const Layout: FC = () => {
  const classes = useLayoutStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
