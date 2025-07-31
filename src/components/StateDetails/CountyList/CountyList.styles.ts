import { StyleSheet } from 'react-native';

import { colors, DEFAULT_FONT_SIZE } from '@/constants';

export const styles = StyleSheet.create({
  countyItemTextStyle: {
    fontSize: DEFAULT_FONT_SIZE,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  countyItemNumberStyle: {
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});

export const countyItemContainerStyle = (index: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      gap: 8,
      paddingBottom: 8,
      backgroundColor:
        index % 2 !== 0 ? colors.highlightBackground : colors.background,
    },
  });
