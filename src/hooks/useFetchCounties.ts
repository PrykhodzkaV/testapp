import { useCallback, useEffect, useState } from 'react';

import { fetchWrapper } from '@/api';
import { StateItem } from '@/types';

import { County } from '../api/types';

export const useFetchCounties = (stateItem: StateItem) => {
  const [counties, setCounties] = useState<County[]>(
    stateItem.stateDetails || [],
  );
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const getCounties = useCallback(async () => {
    await fetchWrapper({
      url: stateItem.detail,
      startLoading: () => setIsLoading(true),
      setData: data => setCounties(data as County[]),
      setError: error => setError(error as Error),
      finishLoading: () => setIsLoading(false),
    });
  }, [stateItem]);

  useEffect(() => {
    if (!stateItem.stateDetails) {
      getCounties();
    }
  }, [getCounties, stateItem.stateDetails]);

  return { counties, isLoading, error, getCounties };
};
