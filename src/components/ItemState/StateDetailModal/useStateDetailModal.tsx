import { useCallback, useContext, useMemo } from 'react';

import {
  COUNTIES_NUMBER,
  DOES_NOT_MATCH,
  MATCHES,
  POPULATION,
  STATE_NAME,
  SUMM_OF_ALL_COUNTY_POPULATIONS,
} from '@/constants';
import { AppContext } from '@/context';
import { useFetchCounties } from '@/hooks';
import { ActionType, StateItem } from '@/types';

import { MainInfoItem } from './types';

import { matchStyle } from './StateDetailModal.styles';

export const useStateDetailModal = ({
  stateItem,
  setModalVisible,
}: {
  stateItem: StateItem;
  setModalVisible: (visible: boolean) => void;
}) => {
  const { dispatch } = useContext(AppContext);
  const { counties, isLoading, error, getCounties } =
    useFetchCounties(stateItem);
  const summPopulation = useMemo(() => {
    return counties?.reduce((acc, curr) => acc + curr.population, 0);
  }, [counties]);

  const mainInfoItems = useMemo((): MainInfoItem[] => {
    const isMatched = summPopulation === stateItem.population;
    return [
      { label: STATE_NAME, value: stateItem.state },
      { label: POPULATION, value: stateItem.population },
      {
        label: COUNTIES_NUMBER,
        value: stateItem.counties,
      },
      {
        label: SUMM_OF_ALL_COUNTY_POPULATIONS,
        value: summPopulation,
      },
      {
        label: `${POPULATION} ${isMatched ? MATCHES : DOES_NOT_MATCH}`,
        style: matchStyle(summPopulation === stateItem.population).container,
      },
    ];
  }, [stateItem, summPopulation]);

  const onClose = useCallback(() => {
    dispatch({
      type: ActionType.SET_STATE_DETAILS,
      payload: { detail: stateItem.detail, counties },
    });
    setModalVisible(false);
  }, [dispatch, setModalVisible, stateItem.detail, counties]);

  return {
    isLoading,
    error,
    mainInfoItems,
    countyList: counties ?? [],
    onClose,
    getCounties,
  };
};
