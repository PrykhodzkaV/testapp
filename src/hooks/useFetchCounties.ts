import { useCallback, useContext, useState } from 'react';

import { County, fetchWrapper } from '@/api';
import { AppContext } from '@/context';
import { ActionType, StateItem } from '@/types';

export const useFetchCounties = ({
  selectedItem,
}: {
  selectedItem?: StateItem;
}) => {
  const { dispatch } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  const getCounties = useCallback(
    async (detail: string) => {
      {
        await fetchWrapper({
          url: detail,
          startLoading: () => setIsLoading(true),
          setData: data =>
            dispatch({
              type: ActionType.SET_STATE_DETAILS,
              payload: {
                detail: detail,
                counties: data as County[],
              },
            }),
          setError: error => setError(error as Error),
          finishLoading: () => setIsLoading(false),
        });
      }
    },
    [selectedItem],
  );

  return { isLoading, error, getCounties, setError };
};
