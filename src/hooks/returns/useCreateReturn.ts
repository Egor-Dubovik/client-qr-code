import { IAxiosError } from 'common/interfaces/axios';
import { Context } from 'index';
import { useContext } from 'react';
import { useMutation } from 'react-query';
import ReturnService from 'services/ReturnService';

const useCreateReturn = () => {
  const { userReturn } = useContext(Context);

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationKey: ['return'],
    mutationFn: (data: FormData) => ReturnService.create(data),
    onSuccess: () => {
      userReturn.setSuccess(true);
    },
    onError: (error) => {
      const err = error as IAxiosError<{ message: string }>;
      userReturn.setServerError(err);
    },
  });

  const createReturn = async (data: FormData) => {
    await mutate(data);
  };

  const err = error as IAxiosError<{ message: string }>;

  return { createReturn, isLoading, isSuccess, err };
};

export default useCreateReturn;
