import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
    backgroundColor: colors.background,
  },
  filterInput: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.background,
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
