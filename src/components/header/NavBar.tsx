import { Box, Button } from '@mui/material';
import React from 'react';

const pages = ['Products', 'Pricing', 'Blog'];

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page}
          //   onClick={handleCloseNavMenu}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
};

export default NavBar;
