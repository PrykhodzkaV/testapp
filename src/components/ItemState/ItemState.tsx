import React from 'react';
import { Text, View } from 'react-native';
import { GestureDetector } from 'react-native-gesture-handler';

import { StateItem } from '@/types';

import { useStateItem } from './useStateItem';

import { styles } from './ItemState.styles';

export const ItemState = React.memo(
  ({
    stateItem,
    setSelectedItem,
  }: {
    stateItem: StateItem;
    setSelectedItem: (value: StateItem) => void;
  }) => {
    const { composedGesture } = useStateItem({ stateItem, setSelectedItem });
    const style = styles(Boolean(stateItem.isHighlighted));

    return (
      <>
        <GestureDetector gesture={composedGesture}>
          <View style={style.container}>
            <Text style={style.textStyle}>{stateItem.state}</Text>
          </View>
        </GestureDetector>
      </>
    );
  },
);
