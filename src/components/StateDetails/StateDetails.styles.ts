import { StyleSheet } from 'react-native';

import { colors, DEFAULT_FONT_SIZE } from '@/constants';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingTop: 0,
    paddingBottom: 0,
  },

  container: {
    paddingTop: 12,
    flex: 1,
  },
  header: {
    backgroundColor: colors.background,
    paddingBottom: 8,
    fontSize: DEFAULT_FONT_SIZE,
    fontWeight: 'bold',
  },

  button: {
    marginTop: 16,
    width: '100%',
    padding: 10,
    elevation: 2,
    backgroundColor: colors.primary,
    borderRadius: 16,
  },

  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    flexWrap: 'wrap',
  },

  modalText: {
    marginBottom: 16,
    textAlign: 'left',
    fontSize: DEFAULT_FONT_SIZE,
    flexWrap: 'wrap',
  },
});

export const matchStyle = (matched: boolean) =>
  StyleSheet.create({
    container: {
      color: matched ? colors.success : colors.error,
    },
  });
