import { DEFAULT_FONT_SIZE } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalText: {
    marginBottom: 16,
    textAlign: 'left',
    fontSize: DEFAULT_FONT_SIZE,
    flexWrap: 'wrap',
  },
  info: {
    alignItems: 'flex-start',
  },
});
