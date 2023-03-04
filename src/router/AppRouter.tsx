import React from 'react';
import Layout from 'modules/Layout/Layout';
import { IRoute } from 'common/interfaces/app.interface';
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
