import React from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { CLOSE_BUTTON_TEXT } from '@/constants';

import { MainInfo, CountyList } from './components';
import { StateDetailModalProps } from './types';
import { useStateDetailModal } from './useStateDetailModal';

import { styles } from './StateDetailModal.styles';

export const StateDetailModal = React.memo<StateDetailModalProps>(
  ({ setModalVisible, stateItem }) => {
    const {
      mainInfoItems,
      error,
      isLoading,
      countyList,
      onClose,
      getCounties,
    } = useStateDetailModal({
      stateItem,
      setModalVisible,
    });

    return (
      <Modal
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
        statusBarTranslucent={true}
        presentationStyle="overFullScreen"
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <MainInfo mainInfoItems={mainInfoItems} />
            <CountyList
              error={error}
              isLoading={isLoading}
              counties={countyList}
              onRefresh={getCounties}
            />
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonTextStyle}>{CLOSE_BUTTON_TEXT}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  },
);
