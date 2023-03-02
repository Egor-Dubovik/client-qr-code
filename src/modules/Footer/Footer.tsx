import React from 'react';
import { Box, Container } from '@mui/material';
import Copyright from 'components/Copyright/Copyright';
import FooterLinks from 'components/FooterLinks/FooterLinks';
import useFooterStyles from './Footer.style';

const Footer = (): JSX.Element => {
  const classes = useFooterStyles();

  return (
    <Container maxWidth="xl">
      <Box className={classes.container}>
        <FooterLinks />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
