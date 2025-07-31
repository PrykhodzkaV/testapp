import { ActivityIndicator, Text, View } from 'react-native';

import { STATE_DETAILS } from '@/constants';
import { StateItem } from '@/types';

import { useStateDetails } from './useStateDetails';
import { CountyList } from './CountyList';

import { styles } from './StateDetails.styles';

export const StateDetails = ({
  selectedItem,
}: {
  selectedItem?: StateItem;
}) => {
  const { isLoading, error, counties, mainInfoItems, onRefresh } =
    useStateDetails({
      selectedItem,
    });
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <>
          <Text style={styles.header}>{STATE_DETAILS}</Text>
          <CountyList
            error={error}
            isLoading={isLoading}
            counties={counties}
            mainInfoItems={mainInfoItems}
            onRefresh={onRefresh}
          />
        </>
      )}
    </View>
  );
};
