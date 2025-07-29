import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    fontSize: 16,
    backgroundColor: colors.background,
  },
});
