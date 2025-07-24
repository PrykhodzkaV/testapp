import React from 'react';
import { Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

import { StateItem } from '@/types';

import { StateDetailModal } from './StateDetailModal';
import { useStateItem } from './useStateItem';

import { styles } from './ItemState.styles';

export const ItemState = React.memo<StateItem>((stateItem: StateItem) => {
  const { composedGesture, modalVisible, setModalVisible } =
    useStateItem(stateItem);
  const style = styles(Boolean(stateItem.isHighlighted));

  return (
    <>
      <GestureDetector gesture={composedGesture}>
        <View style={style.container}>
          <Text style={style.textStyle}>{stateItem.state}</Text>
        </View>
      </GestureDetector>
      {modalVisible && (
        <StateDetailModal
          setModalVisible={setModalVisible}
          stateItem={stateItem}
        />
      )}
    </>
  );
});
