import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
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
  title: {
    backgroundColor: colors.background,
    paddingBottom: 16,
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: colors.background,
  },
});
