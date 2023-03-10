import React, { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { ILogo } from 'common/interfaces/logo.inetface';
import { Display } from 'common/constant/css';

const Logo: FC<ILogo> = ({ isDesktop }) => {
  const [currentXs, setXs] = useState<Display>(Display.none);
  const [currentMd, setMd] = useState<Display>(Display.flex);

  const changeLogoDisplay = (isDesplay: boolean): void => {
    if (isDesplay) {
      setXs(Display.none);
      setMd(Display.flex);
      return;
    }
    setXs(Display.flex);
    setMd(Display.none);
  };

  useEffect(() => {
    changeLogoDisplay(isDesktop);
  }, [isDesktop]);

  return (
    <>
      <QrCodeScannerIcon sx={{ display: { xs: currentXs, md: currentMd }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: currentXs, md: currentMd },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 600,
          letterSpacing: '0.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        QR-code
      </Typography>
    </>
  );
};

export default Logo;
