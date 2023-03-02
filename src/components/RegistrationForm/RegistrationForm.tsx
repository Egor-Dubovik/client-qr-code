import { Box, Button, Grid, TextField } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errPassword, setErrPassword] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // const checkConfirmPassword = (): boolean => {
  //   if (password === confirmPassword) return true;
  //   setConfirmPassword('');
  //   return false;
  // };

  useEffect(() => {
    password !== confirmPassword ? setErrPassword(true) : setErrPassword(false);
  }, [password, confirmPassword]);

  return (
    <Box onSubmit={handleSubmit} component="form" sx={{ mt: 1 }}>
      <TextField
        error={false}
        value={name}
        onChange={(event) => setName(event.target.value)}
        margin="normal"
        required
        fullWidth
        label="Имя"
        autoFocus
      />
      <TextField
        error={false}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        margin="normal"
        required
        fullWidth
        label="Email адрес"
        autoComplete="email"
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
      />

      <TextField
        error={errPassword}
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        margin="normal"
        required
        fullWidth
        label="Подтвердите пароль"
        type="password"
      />

      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        отправить
      </Button>

      <Grid container>
        <Grid item>
          <NavLink to={ROUTES.LOGIN}>Уже зарегистрированы?</NavLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
