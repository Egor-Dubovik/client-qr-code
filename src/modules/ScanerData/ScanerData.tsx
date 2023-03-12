import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import { Box, Button, Link } from '@mui/material';
import CameraSelect from 'components/CameraSelect/CameraSelect';
import useScanerDataStyles from './ScanerData.style';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { getBlockProperty } from 'helpers/css';

const ScanerData = observer(() => {
  const { scaner } = useContext(Context);
  const { container, title, imageBox, image, fileLink } = useScanerDataStyles();

  const handleScan = () => {
    scaner.setIsScan(true);
    scaner.setVisibility(false);
    scaner.setData(null);
  };

  const validateURL = (url: string): boolean => {
    const pattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return pattern.test(url);
  };

  return (
    <>
      {scaner.visibility && (
        <>
          <div className={container}>
            <h4 className={title}>Здесь будут отображаться данные после сканирования</h4>
            <CameraSelect />
            {scaner.data !== null ? (
              <>
                {validateURL(scaner.data.text) ? (
                  <Link href={scaner.data.text} className={fileLink}>
                    открыть ссылку на файл
                  </Link>
                ) : (
                  <p>{scaner.data.text}</p>
                )}
              </>
            ) : (
              <Box className={imageBox}>
                <img
                  className={image}
                  src={process.env.PUBLIC_URL + './images/scaner/start_scan.svg'}
                  alt="imafe start scan"
                />
              </Box>
            )}
            <Button
              style={{ display: getBlockProperty(!scaner.isScan) }}
              onClick={handleScan}
              variant="outlined"
              startIcon={<DocumentScannerIcon />}
            >
              Cканировать
            </Button>
          </div>
        </>
      )}
    </>
  );
});

export default ScanerData;
