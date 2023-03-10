import UserService from 'services/UserService';
import { User } from 'common/models/User';
import { Context } from 'index';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import { IAxiosError } from './useCheckAuth';

const useLogout = () => {
  const { user } = useContext(Context);
  const { mutate, isSuccess, isLoading, error } = useMutation(['logout'], {
    mutationFn: () => UserService.logout(),
    onSuccess: (data: number) => {
      localStorage.removeItem('token');
      user.setUser({} as User);
      user.setIsAuth(false);
      console.log(data);
    },
    onError: (error) => {
      const err = error as IAxiosError<{ message: string }>;
      console.log(err.response?.data?.message);
    },
  });

  const logout = async (): Promise<void> => {
    await mutate();
  };

  return { logout, isSuccess, isLoading, error };
};

export default useLogout;
