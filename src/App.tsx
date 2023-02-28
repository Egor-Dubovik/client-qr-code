import { ThemeProvider } from '@mui/styles';
import React from 'react';
import { useRoutes } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { publicRoutes } from 'router/routes';
import useAppStyles from 'styles/app.styles';

function App() {
  const routes = useRoutes(AppRouter(publicRoutes));
  const classes = useAppStyles();

  return <div className={classes.App}>{routes}</div>;
}

export default App;
