import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 16,
  },
  loadingIndicator: {
    flex: 1,
  },

  errorStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: { flex: 1 },
});
