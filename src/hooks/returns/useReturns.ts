import { Context } from 'index';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import ReturnService from 'services/ReturnService';

const useReturns = () => {
  const { user } = useContext(Context);
  const {
    data: userReturns,
    isLoading,
    error,
  } = useQuery(['returns list'], {
    queryFn: () => ReturnService.getAll(user.user.id),
  });
  console.log(userReturns);
  return { userReturns, isLoading, error };
};

export default useReturns;
