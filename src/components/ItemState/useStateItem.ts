import { useContext } from 'react';
import { Gesture } from 'react-native-gesture-handler';

import { AppContext } from '@/context';
import { ActionType, StateItem } from '@/types';

export const useStateItem = ({
  stateItem,
  setSelectedItem,
}: {
  stateItem: StateItem;
  setSelectedItem?: (value: StateItem) => void;
}) => {
  const { dispatch } = useContext(AppContext);
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((_event, success) => {
      if (success) {
        dispatch({
          type: ActionType.TOGGLE_HIGHLIGHT,
          payload: { stateName: stateItem.state },
        });
      }
    });

  const singleTap = Gesture.Tap()
    .numberOfTaps(1)
    .requireExternalGestureToFail(doubleTap)
    .onEnd((_event, success) => {
      if (success) {
        setSelectedItem?.(stateItem);
      }
    });

  const composedGesture = Gesture.Race(doubleTap, singleTap);

  return { composedGesture };
};
