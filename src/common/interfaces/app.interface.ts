import ModalStore from 'store/ModalStore';
import ProfileStore from 'store/ProfileStore';
import ReturnsStore from 'store/ReturnsStore';
import ScanerStore from 'store/ScanerStore';
import UserStore from 'store/UserStore';

export interface IAppContext {
  user: UserStore;
  scaner: ScanerStore;
  userReturn: ReturnsStore;
  profile: ProfileStore;
  modal: ModalStore;
}

export interface IRoute {
  path: string;
  element: JSX.Element;
}
