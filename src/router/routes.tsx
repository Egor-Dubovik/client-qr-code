import React from 'react';
import MainPage from 'pages/MainPage/MainPage';
import Profile from 'pages/Profile';
import { Navigate } from 'react-router-dom';
import Returns from 'pages/Returns';
import Waybills from 'pages/Waybills';
import { ROUTES } from 'common/constant/navigaton';
import Auth from 'pages/Auth';
import Scanner from 'pages/Scaner/Scanner';

export const publicRoutes = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Auth />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <Auth />,
  },
  {
    path: ROUTES.SCANNER,
    element: <Scanner />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <div>not found page</div>,
  },
  {
    path: ROUTES.BAD,
    element: <Navigate to={ROUTES.NOT_FOUND} replace />,
  },
];

export const privateRoutes = [
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES.RETURNS,
    element: <Returns />,
  },
  // {
  //   path: ROUTES.WAYBILLS,
  //   element: <Waybills />,
  // },
];

// {
//   path: PRODUCT_ROUTE + '/:id',
//   element: <ProductPage />,
// },
