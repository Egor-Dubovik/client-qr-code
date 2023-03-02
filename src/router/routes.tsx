import React from 'react';
import MainPage from 'pages/MainPage/MainPage';
import Profile from 'pages/Profile';
import { Navigate } from 'react-router-dom';
import Returns from 'pages/Returns';
import Waybills from 'pages/Waybills';
import Scanner from 'pages/Scanner';
import { ROUTES } from 'common/constant/navigaton';
import Auth from 'pages/Auth';

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
    path: ROUTES.RETURNS,
    element: <Returns />,
  },
  {
    path: ROUTES.WAYBILLS,
    element: <Waybills />,
  },
  {
    path: ROUTES.SCANNER,
    element: <Scanner />,
  },
  {
    path: ROUTES.PROFILE,
    element: <Profile />,
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

// export const authRoutes = [
//   {
//     path: ADMIN_ROUTE,
//     element: <Admin />,
//   },
//   {
//     path: BASKET_ROUTE + '/:basketId',
//     element: <Basket />,
//   },
// ];

// {
//   path: PRODUCT_ROUTE + '/:id',
//   element: <ProductPage />,
// },
