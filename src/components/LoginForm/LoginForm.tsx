import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import { ROUTES } from 'common/constant/navigaton';
import useLogin from 'hooks/auth/useLogin';
import Spiner from 'components/Spiner/Spiner';

export const LoginForm: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isSuccess, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <>
      {isLoading ? (
        <Spiner className={'Spiner'} />
      ) : (
        <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
          {isSuccess ? (
            <Button variant="outlined" onClick={() => navigate(ROUTES.PROFILE)}>
              перейти в профиль
            </Button>
          ) : (
            <>
              <TextField
                error={false}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Email адрес"
                autoComplete="email"
                autoFocus
              />
              <TextField
                error={false}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Пароль"
                type="password"
                autoComplete="current-password"
              />

              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                отправить
              </Button>

              <Grid container>
                <Grid item>
                  <NavLink to={ROUTES.REGISTRATION}>{'Ещё не зарегистрированы?'}</NavLink>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default LoginForm;
