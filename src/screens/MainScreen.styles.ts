import { Platform, StatusBar, StyleSheet } from 'react-native';
const statusBarHeight =
  Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    flexDirection: 'row',
  },
  loadingIndicator: {
    flex: 1,
  },

  errorStyle: { justifyContent: 'center', alignItems: 'center', flex: 1 },
});
