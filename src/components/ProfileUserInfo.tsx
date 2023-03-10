import { Box, Typography } from '@mui/material';
import { Context } from 'index';
import React, { useContext } from 'react';

const ProfileUserInfo = (): JSX.Element => {
  const { user } = useContext(Context);

  return (
    <Box>
      <Typography variant="h6">
        ФИО: <span>{user.user.name}</span>
      </Typography>
      <Typography variant="h6">
        Email: <span>{user.user.email}</span>
      </Typography>
    </Box>
  );
};

export default ProfileUserInfo;
