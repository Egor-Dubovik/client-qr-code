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

export const pages = [
  { name: 'Главная', route: ROUTES.MAIN },
  { name: 'Возврат', route: ROUTES.RETURNS },
  { name: 'Накладные', route: ROUTES.WAYBILLS },
  { name: 'Сканер', route: ROUTES.SCANNER },
];
