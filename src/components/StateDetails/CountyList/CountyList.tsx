import React from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import { ErrorView, ListEmpty } from '@/components';
import {
  EMPTY_STATE_DETAILS_LIST_MESSAGE,
  NO_STATE_DETAILS_FOUND_ERROR_MESSAGE,
} from '@/constants';

import { countyItemContainerStyle, styles } from './CountyList.styles';
import { CountyListProps } from '../types';
import { MainInfo } from './MainInfo';

export const CountyList = ({
  error,
  isLoading,
  counties,
  mainInfoItems,
  onRefresh,
}: CountyListProps) => {
  return error ? (
    <ErrorView errorMessage={NO_STATE_DETAILS_FOUND_ERROR_MESSAGE} />
  ) : isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      ListHeaderComponent={<MainInfo mainInfoItems={mainInfoItems} />}
      refreshing={isLoading}
      onRefresh={onRefresh}
      data={counties}
      keyExtractor={({ county }) => county}
      showsVerticalScrollIndicator={false}
      initialNumToRender={10}
      removeClippedSubviews={true}
      ListEmptyComponent={
        <ListEmpty message={EMPTY_STATE_DETAILS_LIST_MESSAGE} />
      }
      renderItem={({ item, index }) => (
        <View style={countyItemContainerStyle(index).container}>
          <Text style={styles.countyItemTextStyle}>{item.county}</Text>
          <Text style={styles.countyItemNumberStyle}>
            {item.population.toString()}
          </Text>
        </View>
      )}
    />
  );
};
