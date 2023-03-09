import { User } from '../models/User';

export interface IToken {
  id: number;
  userId: number;
  refreshToken: string;
}

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}

export interface ILoginParams {
  email: string;
  password: string;
}

export interface IRegistrationParams extends ILoginParams {
  name: string;
}
