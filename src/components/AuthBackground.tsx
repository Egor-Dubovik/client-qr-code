import React from 'react';
import { Grid } from '@mui/material';

const AuthBackground = (): JSX.Element => {
  return (
    <Grid
      item
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  );
};

export default AuthBackground;
