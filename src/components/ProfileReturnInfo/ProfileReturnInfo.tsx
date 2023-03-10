import React, { FC, useContext } from 'react';
import { Context } from 'index';
import { Box, Typography } from '@mui/material';
import { BASE_URL } from 'common/constant/api';
import useProfileReturnStyles from './ProfileReturnInfo.style';
import { observer } from 'mobx-react-lite';

const ProfileReturnInfo: FC = observer(() => {
  const { userReturn } = useContext(Context);
  const { BoxInfo, span } = useProfileReturnStyles();

  return (
    <Box className={BoxInfo}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 500,
          letterSpacing: '0.08rem',
        }}
      >
        Причина возврата:
        <span className={span}>{userReturn.currentReturn.reason}</span>
      </Typography>
      <Box>
        <Typography variant="h6">
          ФИО: <span className={span}>{userReturn.currentReturn.userName}</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          Страна: <span className={span}>{userReturn.currentReturn.country}</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          Адресс: <span className={span}>{userReturn.currentReturn.address}</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">
          Почтовый код: <span className={span}>{userReturn.currentReturn.postalCode}</span>
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">Фотография продукта:</Typography>
        <Box
          component="img"
          sx={{
            height: 500,
            width: 350,
            maxHeight: { xs: 300, md: 500 },
            maxWidth: { xs: 250, md: 350 },
          }}
          alt="returns product"
          src={BASE_URL + userReturn.currentReturn.image}
        ></Box>
      </Box>
    </Box>
  );
});

export default ProfileReturnInfo;
