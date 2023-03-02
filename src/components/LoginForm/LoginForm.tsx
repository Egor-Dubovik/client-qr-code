import React, { FC, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'common/constant/navigaton';

export const LoginForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
      <TextField
        error={false}
        value={name}
        onChange={(event) => setName(event.target.value)}
        margin="normal"
        required
        fullWidth
        label="Email адрес"
        autoComplete="email"
        autoFocus
      />
      <TextField
        error={false}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
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
    </Box>
  );
};

export default LoginForm;
