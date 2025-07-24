import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = (isHighlighted: boolean) =>
  StyleSheet.create({
    container: {
      marginVertical: 8,
      paddingVertical: 12,
      borderWidth: 1,
      borderColor: isHighlighted ? colors.primary : colors.border,
      backgroundColor: isHighlighted
        ? colors.highlightBackgroundItem
        : colors.background,
      padding: 8,
      flex: 1,
      borderRadius: 16,
    },
    textStyle: {
      fontSize: 16,
    },
  });
