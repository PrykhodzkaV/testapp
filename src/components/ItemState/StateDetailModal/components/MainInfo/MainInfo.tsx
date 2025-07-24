import React from 'react';
import { Text, View } from 'react-native';

import { MainInfoItem } from '../../types';

import { styles } from './MainInfo.styles';

export const MainInfo = React.memo(
  ({ mainInfoItems }: { mainInfoItems: MainInfoItem[] }) => {
    return (
      <View style={styles.info}>
        {mainInfoItems.map(({ value, label, style }) => {
          return (
            <Text key={`${label}${value}`} style={[styles.modalText, style]}>
              {label}
              {value ? `: ${value}` : ''}
            </Text>
          );
        })}
      </View>
    );
  },
);
