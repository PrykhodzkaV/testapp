import { Action, ActionType, AppState } from './types';

export const initialState: AppState = {
  states: [],
  error: undefined,
  isLoading: false,
};

export const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case ActionType.SET_STATES:
      return { ...state, states: action.payload.states };
    case ActionType.SET_ERROR:
      return { ...state, error: action.payload.error };
    case ActionType.SET_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case ActionType.SET_STATE_DETAILS:
      return {
        ...state,
        states: state.states.map(item =>
          item.detail === action.payload.detail
            ? { ...item, stateDetails: action.payload.counties }
            : item,
        ),
      };
    case ActionType.TOGGLE_HIGHLIGHT:
      return {
        ...state,
        states: state.states.map(item =>
          item.state === action.payload.stateName
            ? { ...item, isHighlighted: !item.isHighlighted }
            : item,
        ),
      };
    default:
      return state;
  }
};
