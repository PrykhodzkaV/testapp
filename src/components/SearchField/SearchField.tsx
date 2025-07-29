import React from 'react';
import { TextInput, View } from 'react-native';

import { SEARCH_PLACEHOLDER } from '@/constants';

import { styles } from './SearchField.styles';

interface SearchFieldProps {
  filterText: string;
  setFilterText?: (value: string) => void;
}

export const SearchField = ({
  filterText,
  setFilterText,
}: SearchFieldProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.filterInput}
        placeholder={SEARCH_PLACEHOLDER}
        value={filterText}
        onChangeText={setFilterText}
        clearButtonMode="while-editing"
      />
    </View>
  );
};
