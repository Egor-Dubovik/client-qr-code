import React from 'react';
import MainPage from 'pages/MainPage';
import Profile from 'pages/Profile';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'types/enums';

export const publicRoutes = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />,
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

//   export const authRoutes = [
//     {
//       path: ADMIN_ROUTE,
//       element: <Admin />,
//     },
//     {
//       path: BASKET_ROUTE + '/:basketId',
//       element: <Basket />,
//     },
//   ];

//   {
//     path: LOGIN_ROUTE,
//     element: <Auth />,
//   },
//   {
//     path: REGISTRATION_ROUTE,
//     element: <Auth />,
//   },

//   {
//     path: PRODUCT_ROUTE + '/:id',
//     element: <ProductPage />,
//   },