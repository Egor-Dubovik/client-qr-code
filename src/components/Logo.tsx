import React, { FC, useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import { ILogo } from 'common/interfaces/logo.inetface';
import { LogoDisplay } from 'common/constant/logo';

const Logo: FC<ILogo> = ({ isDesktop }) => {
  const [currentXs, setXs] = useState<LogoDisplay>(LogoDisplay.none);
  const [currentMd, setMd] = useState<LogoDisplay>(LogoDisplay.flex);

  const changeLogoDisplay = (isDesplay: boolean): void => {
    if (isDesplay) {
      setXs(LogoDisplay.none);
      setMd(LogoDisplay.flex);
      return;
    }
    setXs(LogoDisplay.flex);
    setMd(LogoDisplay.none);
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
