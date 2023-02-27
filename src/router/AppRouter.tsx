import React from 'react';
import Layout from 'components/Layout/Layout';
import { IRoute } from 'types/app.interface';
import { RouteObject } from 'react-router-dom';

const AppRouter = (routes: IRoute[]): RouteObject[] => {
  return [
    {
      element: <Layout />,
      children: routes,
    },
  ];
};

export default AppRouter;
