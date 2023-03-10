import React from 'react';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const UserAvatar = () => {
  return (
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
  );
};

export default UserAvatar;
