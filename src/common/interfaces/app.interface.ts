import ReturnsStore from 'store/ReturnsStore';
import ScanerStore from 'store/ScanerStore';
import UserStore from 'store/UserStore';

export interface IAppContext {
  user: UserStore;
  scaner: ScanerStore;
  userReturn: ReturnsStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
