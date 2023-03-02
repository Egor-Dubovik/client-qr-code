import { Link, Typography } from '@mui/material';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Copyright = (props: any): JSX.Element => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link target="_blank" color="inherit" href="http://www.bsac.by/">
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Copyright;
