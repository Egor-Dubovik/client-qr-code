import { IAuthResponse, ILoginParams } from 'common/interfaces/auth';
import { Context } from 'index';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import UserService from 'services/UserService';
import { IAxiosError } from './useCheckAuth';

const useLogin = () => {
  const { user } = useContext(Context);
  const { mutate, isSuccess, isLoading, error } = useMutation(['login'], {
    mutationFn: (data: ILoginParams) => UserService.login(data),
    onSuccess: (data: IAuthResponse) => {
      localStorage.setItem('token', data.accessToken);
      user.setUser(data.user);
      user.setIsAuth(true);
    },
    onError: (error) => {
      const err = error as IAxiosError<{ message: string }>;
      console.log(err.response?.data?.message);
    },
  });

  const login = async (data: ILoginParams) => {
    await mutate(data);
  };

  return { login, isSuccess, isLoading, error };
};

export default useLogin;
