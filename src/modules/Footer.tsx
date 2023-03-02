import React from 'react';
import { Box, Button, Container, Link, Typography } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex', gap: '30px', padding: '15px 0' }}>
        <Box sx={{ display: 'flex' }}>
          <Typography sx={{ mr: 1 }}>Разработчик:</Typography>
          <Link target="_blank" href="https://t.me/ego_dubovik">
            <TelegramIcon />
          </Link>
        </Box>
        <Box>
          <Link target="_blank" href="http://www.bsac.by/">
            БГАС
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
