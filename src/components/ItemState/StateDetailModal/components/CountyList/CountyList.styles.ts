import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  countyItemTextStyle: {
    fontSize: 16,
    flexWrap: 'wrap',
  },
  countyItemNumberStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});

export const countyItemContainerStyle = (index: number) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 8,
      backgroundColor:
        index % 2 === 0 ? colors.highlightBackground : colors.background,
      flexWrap: 'wrap',
    },
  });
