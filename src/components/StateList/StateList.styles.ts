import { StyleSheet } from 'react-native';

import { colors, DEFAULT_FONT_SIZE } from '@/constants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    backgroundColor: colors.background,
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: DEFAULT_FONT_SIZE,
  },
  header: {
    backgroundColor: colors.background,
    paddingBottom: 8,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'bold',
  },
});
