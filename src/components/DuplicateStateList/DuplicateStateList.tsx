import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { EMPTY_STATE_LIST_MESSAGE, SECOND_LIST } from '@/constants';

import { ItemState } from '../ItemState';
import { ListEmpty } from '../ListEmpty';

import { styles } from './DuplicateStateList.styles';
import { StateItem } from '@/types';

export const DuplicateStateList = ({ states }: { states: StateItem[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={<Text style={styles.header}>{SECOND_LIST}</Text>}
        stickyHeaderIndices={[0]}
        initialNumToRender={10}
        data={states}
        keyExtractor={({ state }) => state}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ItemState {...item} />}
        ListEmptyComponent={<ListEmpty message={EMPTY_STATE_LIST_MESSAGE} />}
      />
    </View>
  );
};
