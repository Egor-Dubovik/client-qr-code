import React, { FC, useContext } from 'react';
import SuccessSpiner from 'components/SuccessSpiner/SuccessSpiner';
import { IDisplay } from 'common/interfaces/css.interface';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';

interface IReturnsReview {
  spinerDisplay: IDisplay;
}

const ReturnsReview: FC<IReturnsReview> = observer(({ spinerDisplay }) => {
  const { userReturn } = useContext(Context);

  return (
    <>
      {userReturn.success ? (
        <>
          <Typography variant="h5" gutterBottom>
            Данные о возврате успешно сохранены
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 4, lineHeight: 1.6 }}>
            Вы можете проверить их в личном {<NavLink to={ROUTES.PROFILE}>профиле</NavLink>}, там же
            можно сгенерировать QR-код и распечатать его
          </Typography>
          <SuccessSpiner display={spinerDisplay} />
        </>
      ) : (
        <>
          <Typography variant="h5" gutterBottom>
            Возврат не был создан
          </Typography>
          <Typography gutterBottom>Ошибка: {userReturn.serverError?.message}</Typography>
        </>
      )}
    </>
  );
});

export default ReturnsReview;
