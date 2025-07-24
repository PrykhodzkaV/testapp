import { useEffect, useMemo, useState } from 'react';

import { SearchFieldProps } from './types';

export const useSearchField = ({
  states,
  setFilteredStates,
}: SearchFieldProps) => {
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
  };
};
