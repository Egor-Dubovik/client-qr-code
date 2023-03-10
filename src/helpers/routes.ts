import { IRoute } from 'common/interfaces/app.interface';
import { privateRoutes, publicRoutes } from 'router/routes';

export const getRoutes = (isAuth: boolean): IRoute[] => {
  return isAuth ? [...privateRoutes, ...publicRoutes] : publicRoutes;
};
