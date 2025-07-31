import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './MainInfo.styles';
import { MainInfoItem } from '../../types';

export const MainInfo = React.memo(
  ({ mainInfoItems }: { mainInfoItems?: MainInfoItem[] }) => {
    if (!mainInfoItems) return null;
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
