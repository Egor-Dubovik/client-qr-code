import React, { useContext } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import ProfileList from 'modules/ProfileList/ProfileList';
import Container from '@mui/material/Container';

const UserReturns = observer(() => {
  const { userReturn } = useContext(Context);

  return (
    <Container maxWidth="xl">
      {userReturn.allReturns.map((currentReturn) => {
        return currentReturn.reason;
      })}
      <ProfileList />
      <QRCodeSVG value="https://reactjs.org/" level="H" />
    </Container>
  );
});

export default UserReturns;
