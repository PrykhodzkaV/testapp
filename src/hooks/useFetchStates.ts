import { useCallback, useContext, useEffect } from 'react';

import { fetchWrapper, State, URL_STATES } from '@/api';
import { AppContext } from '@/context';
import { ActionType } from '@/types';

export const useFetchStates = () => {
  const { dispatch } = useContext(AppContext);
  const getStates = useCallback(async () => {
    await fetchWrapper({
      url: URL_STATES,
      startLoading: () =>
        dispatch({
          type: ActionType.SET_LOADING,
          payload: { isLoading: true },
        }),
      setData: data =>
        dispatch({
          type: ActionType.SET_STATES,
          payload: { states: data as State[] },
        }),
      setError: error =>
        dispatch({ type: ActionType.SET_ERROR, payload: { error } }),
      finishLoading: () =>
        dispatch({
          type: ActionType.SET_LOADING,
          payload: { isLoading: false },
        }),
    });
  }, [dispatch]);

  useEffect(() => {
    getStates();
  }, [getStates]);

  return { getStates };
};
