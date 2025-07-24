import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';

import { DuplicateStateList, ErrorView, StateList } from '@/components';
import { NO_STATE_FOUND_ERROR_MESSAGE } from '@/constants';
import { AppContext } from '@/context';
import { useFetchStates } from '@/hooks';

import { styles } from './MainScreen.styles';

export const MainScreen = () => {
  const { state } = useContext(AppContext);
  const { getStates } = useFetchStates();
  const { isLoading, error } = state;
  return !error ? (
    isLoading ? (
      <ActivityIndicator style={styles.loadingIndicator} size="large" />
    ) : (
      <>
        <StateList onRefresh={getStates} />
        <DuplicateStateList />
      </>
    )
  ) : (
    <ErrorView
      style={styles.errorStyle}
      errorMessage={NO_STATE_FOUND_ERROR_MESSAGE}
    />
  );
};
