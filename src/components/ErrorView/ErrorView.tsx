import { Text, View } from 'react-native';

import { DEFAULT_ERROR_MESSAGE } from '@/constants';

import { ErrorViewProps } from './types';

import { styles } from './ErrorView.styles';

export const ErrorView = ({
  style,
  errorMessage = DEFAULT_ERROR_MESSAGE,
}: ErrorViewProps) => {
  return (
    <View style={style}>
      <Text style={styles.textStyle}>{errorMessage}</Text>
    </View>
  );
};
