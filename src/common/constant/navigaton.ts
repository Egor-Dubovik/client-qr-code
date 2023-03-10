export enum ROUTES {
  MAIN = '/',
  RETURNS = '/returns',
  WAYBILLS = '/waybills',
  SCANNER = '/scanner',
  LOGIN = '/auth/login',
  REGISTRATION = '/auth/registration',
  NOT_FOUND = '/404',
  BAD = '*',
  PROFILE = '/profile',
  ADMIN = '/admin',
}

export const pages = {
  main: { name: 'Главная', route: ROUTES.MAIN },
  return: { name: 'Возврат', route: ROUTES.RETURNS },
  // waybils: { name: 'Накладные', route: ROUTES.WAYBILLS },
  scaner: { name: 'Сканер', route: ROUTES.SCANNER },
};
