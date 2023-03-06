import React, { useContext } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';

const UserReturns = observer(() => {
  const { userReturn } = useContext(Context);

  return (
    <>
      {userReturn.allReturns.map((currentReturn) => {
        return currentReturn.reason;
      })}
      <QRCodeSVG value="https://reactjs.org/" level="H" />
    </>
  );
});

export default UserReturns;
