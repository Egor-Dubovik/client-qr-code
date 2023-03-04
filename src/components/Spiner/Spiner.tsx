import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

interface ISpiner {
  className: string;
}

const Spiner: FC<ISpiner> = ({ className }) => {
  return (
    <Box className={className}>
      <CircularProgress />
    </Box>
  );
};

export default Spiner;
