import React from 'react';
import { ActivityIndicator, Button, View } from 'react-native';

import {
  DuplicateStateList,
  ErrorView,
  SearchField,
  StateDetails,
  StateList,
} from '@/components';
import { NO_STATE_FOUND_ERROR_MESSAGE, REFRESH } from '@/constants';

import { styles } from './MainScreen.styles';
import { useMainScreen } from './useMainScreen';

export const MainScreen = () => {
  const {
    filterText,
    setFilterText,
    filteredStates,
    isLoading,
    onRefresh,
    error,
    setSelectedItem,
    selectedItem,
  } = useMainScreen();
  return !error ? (
    isLoading ? (
      <ActivityIndicator style={styles.loadingIndicator} size="large" />
    ) : (
      <View style={styles.container}>
        <SearchField filterText={filterText} setFilterText={setFilterText} />
        <View style={styles.listContainer}>
          <StateList
            onRefresh={onRefresh}
            isLoading={isLoading}
            setSelectedItem={setSelectedItem}
          />
          <DuplicateStateList
            states={filteredStates}
            setSelectedItem={setSelectedItem}
          />
          <StateDetails selectedItem={selectedItem} />
        </View>
      </View>
    )
  ) : (
    <>
      <ErrorView
        style={styles.errorStyle}
        errorMessage={NO_STATE_FOUND_ERROR_MESSAGE}
      />
      <View style={styles.button}>
        <Button title={REFRESH} onPress={onRefresh} />
      </View>
    </>
  );
};
