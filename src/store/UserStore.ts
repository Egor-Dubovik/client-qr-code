import axios from 'axios';
import { API, API_URL } from 'common/constant/api';
import { IAuthResponse } from 'common/interfaces/auth';
import { IAxiosError } from 'common/interfaces/axios';
import { User } from 'common/models/User';
import { makeAutoObservable } from 'mobx';

class UserStore {
  private _isLoading: boolean;
  private _isAuth: boolean;
  private _user: User | Record<string, never>;

  constructor() {
    this._isLoading = false;
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

  setLoading(loading: boolean) {
    this._isLoading = loading;
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get isAuth(): boolean {
    return this._isAuth;
  }

  get user(): User | Record<string, never> {
    return this._user;
  }

  async checkAuth() {
    this.setLoading(true);
    try {
      const response = await axios.get<IAuthResponse>(`${API_URL}${API.refresh}`, {
        withCredentials: true, // куки автоматически
      });
      localStorage.setItem('token', response.data.accessToken);
      this.setIsAuth(true);
      this.setUser(response.data.user);
    } catch (err) {
      const error = err as IAxiosError<{ message: string }>;
      console.log(error.response?.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default UserStore;
