import React, { useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { EMPTY_STATE_LIST_MESSAGE, SECOND_LIST } from '@/constants';
import { AppContext } from '@/context';
import { StateItem } from '@/types';

import { ItemState } from '../ItemState';
import { ListEmpty } from '../ListEmpty';
import { SearchField } from '../SearchField';

import { styles } from './DuplicateStateList.styles';

export const DuplicateStateList = () => {
  const { state: contextState } = useContext(AppContext);
  const { states } = contextState;

  const [filteredStates, setFilteredStates] = useState<StateItem[]>(states);

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>{SECOND_LIST}</Text>
            <SearchField
              states={states}
              setFilteredStates={setFilteredStates}
            />
          </View>
        }
        stickyHeaderIndices={[0]}
        initialNumToRender={10}
        data={filteredStates}
        keyExtractor={({ state }) => state}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ItemState {...item} />}
        ListEmptyComponent={<ListEmpty message={EMPTY_STATE_LIST_MESSAGE} />}
      />
    </View>
  );
};
