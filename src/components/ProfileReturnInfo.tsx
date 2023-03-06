import React, { useContext } from 'react';
import { Context } from 'index';
import { observer } from 'mobx-react-lite';
import { Box, Typography } from '@mui/material';

const ProfileReturnInfo = observer(() => {
  const { userReturn } = useContext(Context);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          letterSpacing: '0.08rem',
        }}
      >
        Причина возврата:
      </Typography>
      <Box>
        <Typography variant="h6">ФИО: </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Страна: </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Адресс: </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Почтовый код: </Typography>
      </Box>
    </Box>
  );
});

export default ProfileReturnInfo;
