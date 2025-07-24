import { Platform, StatusBar, StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

const statusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight + 8,
    paddingHorizontal: 24,
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 16,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  header: {
    backgroundColor: colors.background,
    paddingBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
