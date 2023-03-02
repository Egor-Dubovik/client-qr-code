import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Grid, Typography } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import LoginForm from 'components/LoginForm/LoginForm';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import UserAvatar from 'components/UserAvatar/UserAvatar';

const AuthForm = () => {
  const { pathname } = useLocation();

  return (
    <Grid item xs={12} sm={8} md={5}>
      <Box
        sx={{
          my: 8,
          mx: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <UserAvatar />
        <Typography component="h1" variant="h5">
          {pathname === ROUTES.LOGIN ? 'Войдите' : 'Зарегистрируйтесь'}
        </Typography>
        {pathname === ROUTES.LOGIN ? <LoginForm /> : <RegistrationForm />}
      </Box>
    </Grid>
  );
};

export default AuthForm;
