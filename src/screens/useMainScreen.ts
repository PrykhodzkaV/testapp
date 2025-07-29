import { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '@/context';
import { useFetchStates } from '@/hooks';
import { StateItem } from '@/types';

export const useMainScreen = () => {
  const { state } = useContext(AppContext);
  const { getStates } = useFetchStates();
  const { isLoading, error, states } = state;
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

  return {
    filterText,
    setFilterText,
    filteredStates,
    isLoading,
    error,
    getStates,
  };
};
