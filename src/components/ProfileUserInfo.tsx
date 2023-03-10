import { Box, Typography } from '@mui/material';
import { Context } from 'index';
import React, { useContext } from 'react';

const ProfileUserInfo = (): JSX.Element => {
  const { user } = useContext(Context);
  console.log(user.user.name);
  return (
    <Box>
      <Typography>{user.user.name}</Typography>
      <Typography>{user.user.email}</Typography>
    </Box>
  );
};

export default ProfileUserInfo;
