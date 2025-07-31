import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';

import { EMPTY_STATE_LIST_MESSAGE, FIRST_LIST } from '@/constants';
import { AppContext } from '@/context';

import { ItemState } from '../ItemState';
import { ListEmpty } from '../ListEmpty';

import { styles } from './StateList.styles';
import { StateItem } from '@/types';

export const StateList = React.memo(
  ({
    onRefresh,
    isLoading,
    setSelectedItem,
  }: {
    onRefresh: () => void;
    isLoading: boolean;
    setSelectedItem: (value: StateItem) => void;
  }) => {
    const { state: contextState } = useContext(AppContext);
    const { states } = contextState;
    return (
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<Text style={styles.header}>{FIRST_LIST}</Text>}
          stickyHeaderIndices={[0]}
          initialNumToRender={10}
          refreshing={isLoading}
          onRefresh={onRefresh}
          data={states}
          keyExtractor={({ state }) => state}
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic"
          renderItem={({ item }) => {
            return (
              <ItemState stateItem={item} setSelectedItem={setSelectedItem} />
            );
          }}
          ListEmptyComponent={<ListEmpty message={EMPTY_STATE_LIST_MESSAGE} />}
        />
      </View>
    );
  },
);
