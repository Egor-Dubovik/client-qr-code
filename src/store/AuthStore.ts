import { User } from 'common/models/User';
import { makeAutoObservable } from 'mobx';

class AuthStore {
  _isAuth: boolean;
  _user: User | Record<string, never>;

  constructor() {
    this._isAuth = false;
    this._user = {};
    makeAutoObservable(this);
  }

  setIsAuth(value: boolean): void {
    this._isAuth = value;
  }

  setUser(user: User): void {
    this._user = user;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): User | Record<string, never> {
    return this._user;
  }
}

export default AuthStore;
