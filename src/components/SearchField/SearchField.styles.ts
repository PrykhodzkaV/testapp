import { Platform, StatusBar, StyleSheet } from 'react-native';

import { colors, DEFAULT_FONT_SIZE } from '@/constants';

const statusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;
export const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingTop: statusBarHeight,
    width: '100%',
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    fontSize: DEFAULT_FONT_SIZE,
    paddingHorizontal: 8,
    backgroundColor: colors.background,
  },
});
