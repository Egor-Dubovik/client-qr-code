import React, { FC } from 'react';
import SuccessSpiner from 'components/SuccessSpiner/SuccessSpiner';
import { IDisplay } from 'common/interfaces/css.interface';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { ROUTES } from 'common/constant/navigaton';

interface IReturnsReview {
  spinerDisplay: IDisplay;
}

const ReturnsReview: FC<IReturnsReview> = ({ spinerDisplay }) => {
  return (
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
  );
};

export default ReturnsReview;
