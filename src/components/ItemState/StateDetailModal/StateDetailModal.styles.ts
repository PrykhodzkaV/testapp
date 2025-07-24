import { StyleSheet } from 'react-native';

import { colors } from '@/constants/colors';

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    paddingTop: 0,
    paddingBottom: 0,
  },

  modalView: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    fontSize: 16,
    flexWrap: 'wrap',
  },
});

export const matchStyle = (matched: boolean) =>
  StyleSheet.create({
    container: {
      color: matched ? colors.success : colors.error,
    },
  });
