import { useCallback, useContext, useState } from 'react';

import { fetchWrapper, State, URL_STATES } from '@/api';
import { AppContext } from '@/context';
import { ActionType } from '@/types';

export const useFetchStates = () => {
  const { dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const getStates = useCallback(async () => {
    await fetchWrapper({
      url: URL_STATES,
      startLoading: () => setIsLoading(true),
      setData: data =>
        dispatch({
          type: ActionType.SET_STATES,
          payload: { states: data as State[] },
        }),
      setError: error => setError(error as Error),
      finishLoading: () => setIsLoading(false),
    });
  }, [dispatch]);

  return { getStates, isLoading, error };
};
