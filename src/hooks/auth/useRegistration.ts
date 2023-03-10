import { IAuthResponse, IRegistrationParams } from 'common/interfaces/auth';
import { Context } from 'index';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import UserService from 'services/UserService';
import { IAxiosError } from './useCheckAuth';

const useRegistration = () => {
  const { user } = useContext(Context);
  const { mutate, isSuccess, isLoading, error } = useMutation(['registration'], {
    mutationFn: (data: IRegistrationParams) => UserService.registration(data),
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

  const registration = async (data: IRegistrationParams) => {
    await mutate(data);
  };

  return { registration, isSuccess, isLoading, error };
};

export default useRegistration;
