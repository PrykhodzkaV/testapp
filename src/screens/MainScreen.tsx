import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import {
  DuplicateStateList,
  ErrorView,
  SearchField,
  StateList,
} from '@/components';
import { NO_STATE_FOUND_ERROR_MESSAGE } from '@/constants';

import { styles } from './MainScreen.styles';
import { useMainScreen } from './useMainScreen';

export const MainScreen = () => {
  const {
    filterText,
    setFilterText,
    filteredStates,
    isLoading,
    getStates,
    error,
  } = useMainScreen();
  return !error ? (
    isLoading ? (
      <ActivityIndicator style={styles.loadingIndicator} size="large" />
    ) : (
      <View style={styles.container}>
        <StateList onRefresh={getStates} />
        <SearchField filterText={filterText} setFilterText={setFilterText} />
        <DuplicateStateList states={filteredStates} />
      </View>
    )
  ) : (
    <ErrorView
      style={styles.errorStyle}
      errorMessage={NO_STATE_FOUND_ERROR_MESSAGE}
    />
  );
};
