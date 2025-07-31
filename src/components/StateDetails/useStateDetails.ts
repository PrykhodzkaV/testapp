import { useCallback, useContext, useEffect, useMemo } from 'react';
import {
  COUNTIES_NUMBER,
  DOES_NOT_MATCH,
  MATCHES,
  POPULATION,
  STATE_NAME,
  SUMM_OF_ALL_COUNTY_POPULATIONS,
} from '@/constants';
import { useFetchCounties } from '@/hooks';
import { AppContext } from '@/context';
import { StateItem } from '@/types';

import { matchStyle } from './StateDetails.styles';
import { MainInfoItem } from './types';

export const useStateDetails = ({
  selectedItem,
}: {
  selectedItem?: StateItem;
}) => {
  const { state } = useContext(AppContext);
  const { states } = state;
  const { isLoading, error, getCounties, setError } = useFetchCounties({
    selectedItem,
  });

  useEffect(() => {
    if (selectedItem?.detail) {
      setError(undefined);
      getCounties(selectedItem.detail);
    }
  }, [getCounties, selectedItem]);

  const onRefresh = useCallback(() => {
    selectedItem?.detail && getCounties(selectedItem?.detail);
  }, [selectedItem]);

  const counties = useMemo(() => {
    return states.find(
      el =>
        el.state.toLowerCase() === selectedItem?.state.toLowerCase() &&
        el.stateDetails,
    )?.stateDetails;
  }, [states, selectedItem]);

  const summPopulation = useMemo(() => {
    return counties?.reduce((acc, curr) => acc + curr.population, 0);
  }, [counties]);

  const mainInfoItems = useMemo((): MainInfoItem[] | undefined => {
    if (!selectedItem) return undefined;
    const isMatched = summPopulation === selectedItem?.population;
    return [
      { label: STATE_NAME, value: selectedItem?.state },
      { label: POPULATION, value: selectedItem?.population },
      {
        label: COUNTIES_NUMBER,
        value: selectedItem?.counties,
      },
      {
        label: SUMM_OF_ALL_COUNTY_POPULATIONS,
        value: summPopulation,
      },
      {
        label: `${POPULATION} ${isMatched ? MATCHES : DOES_NOT_MATCH}`,
        style: matchStyle(summPopulation === selectedItem?.population)
          .container,
      },
    ];
  }, [selectedItem, summPopulation]);

  return { isLoading, error, counties, mainInfoItems, onRefresh };
};
