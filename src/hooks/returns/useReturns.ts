import { Context } from 'index';
import { useContext } from 'react';
import { useQuery } from 'react-query';
import ReturnService from 'services/ReturnService';

const useReturns = () => {
  const { user } = useContext(Context);
  console.log('useReturns');
  const {
    data: userReturns,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['return list', 'return'],
    queryFn: () => ReturnService.getAll(user.user.id),
  });
  return { userReturns, isLoading, error };
};

export default useReturns;
