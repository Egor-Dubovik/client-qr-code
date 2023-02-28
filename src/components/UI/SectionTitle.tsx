import React, { FC } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme();

theme.typography.h3 = {
  marginBottom: 18,
  fontSize: '1.5rem',
  letterSpacing: '0.03rem',
  color: '#1B294B',
  textAlign: 'center',
  lineHeight: '110%',

  [theme.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
    marginBottom: 24,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.1rem',
    marginBottom: 32,
  },
};

interface ISectionTitle {
  content: string;
}

const SectionTitle: FC<ISectionTitle> = ({ content }) => {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h3">{content}</Typography>
    </ThemeProvider>
  );
};

export default SectionTitle;
