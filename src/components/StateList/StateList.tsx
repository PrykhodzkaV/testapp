import React, { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';

import { EMPTY_STATE_LIST_MESSAGE, FIRST_LIST } from '@/constants';
import { AppContext } from '@/context';

import { ItemState } from '../ItemState';
import { ListEmpty } from '../ListEmpty';

import { styles } from './StateList.styles';

export const StateList = React.memo(
  ({ onRefresh }: { onRefresh: () => void }) => {
    const { state: contextState } = useContext(AppContext);
    const { states, isLoading } = contextState;

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
            return <ItemState {...item} />;
          }}
          ListEmptyComponent={<ListEmpty message={EMPTY_STATE_LIST_MESSAGE} />}
        />
      </View>
    );
  },
);
