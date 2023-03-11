import React, { FC, useContext } from 'react';
import { Context } from 'index';
import { Box, Button, Typography } from '@mui/material';
import { BASE_URL, API_URL } from 'common/constant/api';
import useProfileReturnStyles from './ProfileReturnInfo.style';
import { observer } from 'mobx-react-lite';
import { QRCodeSVG } from 'qrcode.react';
import QrModel from 'components/modals/QrModel/QrModal';

const ProfileReturnInfo: FC = observer(() => {
  const { userReturn, modal } = useContext(Context);
  const { BoxInfo, span } = useProfileReturnStyles();

  const id = userReturn.currentReturn.id;
  const reason = userReturn.currentReturn.reason;
  const userName = userReturn.currentReturn.userName;
  const country = userReturn.currentReturn.country;
  const address = userReturn.currentReturn.address;
  const postalCode = userReturn.currentReturn.postalCode;

  return (
    <Box>
      <Box className={BoxInfo}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: 500,
            letterSpacing: '0.08rem',
          }}
        >
          Причина возврата:
          <span className={span}>{reason}</span>
        </Typography>
        <Box>
          <Typography variant="h6">
            ФИО: <span className={span}>{userName}</span>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            Страна: <span className={span}>{country}</span>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            Адресс: <span className={span}>{address}</span>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">
            Почтовый код: <span className={span}>{postalCode}</span>
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
      <Box>
        {/* <Button variant="outlined">QR-code</Button> */}
        {/* <QRCodeSVG value={`${API_URL}/pdf?id=${id}`} /> */}
        <Button variant="contained" onClick={() => modal.setIsOpen(true)}>
          показать QR-код
        </Button>
        <QrModel id={Number(id)} />
      </Box>
    </Box>
  );
});

export default ProfileReturnInfo;
