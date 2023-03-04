import React, { FC, useContext } from 'react';
import useScanerButtonBackStyle from './ScanerButtonBack.style';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import { getBlockProperty } from 'utils/css';

const ScanerButtons: FC = observer(() => {
  const { scaner } = useContext(Context);
  const { ScanerButtonBack } = useScanerButtonBackStyle();

  const handleBack = () => {
    scaner.setIsScan(false);
    scaner.setVisibility(true);
    scaner.setLoadingScan(true);
  };

  return (
    <>
      <Button
        className={ScanerButtonBack}
        style={{ position: 'absolute', display: getBlockProperty(scaner.isScan) }}
        onClick={handleBack}
        variant="contained"
      >
        <KeyboardBackspaceIcon />
      </Button>
    </>
  );
});

export default ScanerButtons;
