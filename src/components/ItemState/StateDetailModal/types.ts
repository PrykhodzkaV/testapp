import { StyleProp, TextStyle } from 'react-native';

import { County } from '@/api';
import { StateItem } from '@/types';

export interface StateDetailModalProps {
  setModalVisible: (visible: boolean) => void;
  stateItem: StateItem;
}
export interface MainInfoItem {
  label: string;
  value?: string | number;
  style?: StyleProp<TextStyle>;
}

export interface CountyListProps {
  counties: County[];
  error?: Error;
  isLoading: boolean;
  onRefresh: () => void;
}
