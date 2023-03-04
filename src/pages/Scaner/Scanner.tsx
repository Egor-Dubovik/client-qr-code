/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import ScanerButtons from 'components/ScanerButtonBack/ScanerButtonBack';
import QrReader from 'react-qr-scanner';
import useScStyle from './Scaner.style';
import Spiner from 'components/Spiner/Spiner';
import ScannerFrame from 'components/ScannerFrame/ScannerFrame';
import ScanerData from 'modules/ScanerData/ScanerData';

const Scaner = observer(() => {
  const { scaner } = useContext(Context);
  const { Scaner, qrReader, spiner } = useScStyle();

  const handleScan = async (scanData: any) => {
    scaner.setLoadingScan(false);
    if (scanData && scanData !== null) {
      scaner.setData(scanData);
      scaner.setIsScan(false);
      scaner.setLoadingScan(true);
      scaner.setVisibility(true);
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div className={Scaner}>
      {scaner.isScan && (
        <>
          {scaner.loadingScan ? <Spiner className={spiner} /> : <ScannerFrame />}
          <QrReader
            facingmode={scaner.selectedCamera}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selectedCamera}
            className={qrReader}
          />
        </>
      )}
      <ScanerButtons />
      <ScanerData />
    </div>
  );
});

export default Scaner;
