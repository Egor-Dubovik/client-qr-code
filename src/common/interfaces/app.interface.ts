import ScanerStore from 'store/ScanerStore';

export interface IAppContext {
  // user: UserStore;
  scaner: ScanerStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
