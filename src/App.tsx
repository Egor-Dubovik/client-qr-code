import React, { useContext, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { observer } from 'mobx-react-lite';
import { Context } from 'index';
import { useRoutes } from 'react-router-dom';
import AppRouter from 'router/AppRouter';
import { publicRoutes } from 'router/routes';
// import { checkAuth } from 'services/UserService';
import useAppStyles from 'styles/app.styles';
import Spiner from 'components/Spiner/Spiner';
import { getRoutes } from 'helpers/routes';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App = observer(() => {
  const { user } = useContext(Context);
  const routes = useRoutes(AppRouter(getRoutes(user.isAuth)));
  const classes = useAppStyles();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      user.checkAuth();
    }
  }, []);

  if (user.isLoading) {
    return (
      <div className={classes.SpinerBox}>
        <Spiner className="Spiner" />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.App}>{routes}</div>
    </QueryClientProvider>
  );
});

export default App;
