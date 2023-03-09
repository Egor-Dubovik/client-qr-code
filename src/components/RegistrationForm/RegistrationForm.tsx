import { Box, Button, Grid, TextField } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import useRegistration from 'hooks/auth/useRegistration';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Spiner from '../../components/Spiner/Spiner';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordError, setPasswordError] = useState<boolean>(false);
  const [isEmailError, setEmailError] = useState<boolean>(false);

  const navigate = useNavigate();
  const { registration, isLoading, isSuccess, error } = useRegistration();

  const checkEmail = (): void => {
    const isValidate = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!!isValidate) {
      setEmailError(false);
      return;
    }
    setEmailError(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isPasswordError && !isEmailError) registration({ name, email, password });
  };

  useEffect(() => {
    password !== confirmPassword ? setPasswordError(true) : setPasswordError(false);
  }, [password, confirmPassword]);

  useEffect(() => {
    checkEmail();
  }, [email]);

  return (
    <>
      {isSuccess && navigate(ROUTES.PROFILE)}
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
                value={name}
                onChange={(event) => setName(event.target.value)}
                margin="normal"
                required
                fullWidth
                label="Имя"
                autoFocus
              />
              <TextField
                error={isEmailError}
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
                error={isPasswordError}
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
            </>
          )}
        </Box>
      )}
    </>
  );
};

export default RegistrationForm;
