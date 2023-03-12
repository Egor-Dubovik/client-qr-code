import React, { FC, useContext } from 'react';
import { Context } from 'index';
import { Box, Button, Typography } from '@mui/material';
import { BASE_URL } from 'common/constant/api';
import useProfileReturnStyles from './ProfileReturnInfo.style';
import { observer } from 'mobx-react-lite';
import QrModel from 'components/modals/QrModel/QrModal';
import useDeleteReturn from 'hooks/returns/useDeleteReturn';
import { Return } from 'common/models/Return';

const ProfileReturnInfo: FC = observer(() => {
  const { userReturn, modal } = useContext(Context);
  const { BoxInfo, span } = useProfileReturnStyles();
  const { deleteReturn, isLoading, isSuccess, err } = useDeleteReturn();

  const id = userReturn.currentReturn.id as number;
  const reason = userReturn.currentReturn.reason;
  const userName = userReturn.currentReturn.userName;
  const country = userReturn.currentReturn.country;
  const address = userReturn.currentReturn.address;
  const postalCode = userReturn.currentReturn.postalCode;

  const handleDeleteReturn = () => {
    userReturn.setReturn({} as Return);
    deleteReturn(id);
  };

  console.log(userReturn.currentReturn.address);

  if (err) {
    return <Typography>{err.message}</Typography>;
  }

  return (
    <>
      <QrModel id={Number(id)} />
      {isSuccess ? (
        <Box>возврат был удалён</Box>
      ) : (
        <>
          {userName ? (
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
                      maxHeight: { xs: 400, sm: 500 },
                      maxWidth: { xs: 290, sm: 350 },
                    }}
                    alt="returns product"
                    src={BASE_URL + userReturn.currentReturn.image}
                  ></Box>
                </Box>
              </Box>
              <Box sx={{ mt: 2 }}>
                <Button sx={{ mr: 3 }} variant="contained" onClick={() => modal.setIsOpen(true)}>
                  показать QR-код
                </Button>
                <Button variant="outlined" color="error" onClick={handleDeleteReturn}>
                  удалить
                </Button>
              </Box>
            </Box>
          ) : (
            <div>ничего не найдено</div>
          )}
        </>
      )}
    </>
  );
});

export default ProfileReturnInfo;
