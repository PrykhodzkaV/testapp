import { Text, View } from 'react-native';

import { styles } from './ListEmpty.styles';

export const ListEmpty = ({ message }: { message: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{message}</Text>
    </View>
  );
};
