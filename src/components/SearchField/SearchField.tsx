import React from 'react';
import { TextInput } from 'react-native';

import { SEARCH_PLACEHOLDER } from '@/constants';

import { SearchFieldProps } from './types';
import { useSearchField } from './useSearchField';

import { styles } from './SearchField.styles';

export const SearchField = ({
  states,
  setFilteredStates,
}: SearchFieldProps) => {
  const { filterText, setFilterText } = useSearchField({
    states,
    setFilteredStates,
  });
  return (
    <TextInput
      style={styles.filterInput}
      placeholder={SEARCH_PLACEHOLDER}
      value={filterText}
      onChangeText={setFilterText}
      clearButtonMode="while-editing"
    />
  );
};
