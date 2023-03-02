import React from 'react';
import Grid from '@mui/material/Grid';
import AuthBackground from 'components/AuthBackground';
import AuthForm from 'modules/Auth/AuthForm';

const Auth = () => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <AuthBackground />
      <AuthForm />
    </Grid>
  );
};

export default Auth;
