import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '@/context';
import { useFetchStates } from '@/hooks';
import { StateItem } from '@/types';

export const useMainScreen = () => {
  const { state } = useContext(AppContext);
  const { states } = state;
  const { getStates, isLoading, error } = useFetchStates();
  const [selectedItem, setSelectedItem] = useState<StateItem>();

  useEffect(() => {
    getStates();
  }, [getStates]);

  const [filteredStates, setFilteredStates] = useState<StateItem[]>(states);
  const [filterText, setFilterText] = useState('');

  const newFilteredStates = useMemo(() => {
    return filterText.trim()
      ? states.filter(state =>
          state.state.toLowerCase().includes(filterText.toLowerCase()),
        )
      : states;
  }, [filterText, states]);
  useEffect(() => {
    setFilteredStates(newFilteredStates);
  }, [newFilteredStates, setFilteredStates]);

  const onRefresh = useCallback(() => {
    getStates();
    setSelectedItem(undefined);
  }, []);

  return {
    filterText,
    setFilterText,
    filteredStates,
    isLoading,
    error,
    onRefresh,
    selectedItem,
    setSelectedItem,
  };
};
