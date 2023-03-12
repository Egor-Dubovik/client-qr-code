import { IAxiosError } from 'common/interfaces/axios';
import { useMutation, useQueryClient } from 'react-query';
import ReturnService from 'services/ReturnService';
import useReturns from './useReturns';

const useDeleteReturn = () => {
  const client = useQueryClient();

  const { mutate, isLoading, isSuccess, error } = useMutation({
    mutationKey: ['return'],
    mutationFn: (id: number) => ReturnService.delete(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['return list', 'return'] });
    },
  });

  const deleteReturn = async (id: number) => {
    await mutate(id);
  };

  const err = error as IAxiosError<{ message: string }>;

  return { deleteReturn, isLoading, isSuccess, err };
};

export default useDeleteReturn;
