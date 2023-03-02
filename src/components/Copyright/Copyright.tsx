import { Link, Typography } from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" noWrap color="text.secondary" align="center">
      {'Copyright © '}
      <Link target="_blank" color="inherit" href="http://www.bsac.by/">
        БГАС
      </Link>
      {` ${new Date().getFullYear()}`}
    </Typography>
  );
};

export default Copyright;
