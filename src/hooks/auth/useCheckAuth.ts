import { IAuthResponse } from 'common/interfaces/auth';
import { Context } from 'index';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import UserService from 'services/UserService';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IAxiosError<T> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: unknown;
  response: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}

const useCheckAuth = () => {
  const { user } = useContext(Context);
  const { data, isLoading } = useQuery('check auth', {
    queryFn: () => UserService.checkAuth(),
    onSuccess: (data: IAuthResponse) => {
      localStorage.setItem('token', data.accessToken);
      user.setIsAuth(true);
      user.setUser(data.user);
    },
    onError: (err) => {
      const error = err as IAxiosError<{ message: string }>;
      console.log(error.response?.data?.message);
    },
  });

  return { isLoading };
};

export default useCheckAuth;
