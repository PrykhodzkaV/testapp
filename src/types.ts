import { ReactNode } from 'react';

import { County, State } from '@/api';

export type StateItem = {
  isHighlighted?: boolean;
  stateDetails?: County[];
} & State;

export interface AppState {
  states: StateItem[];
  stateItem?: StateItem;
}
export enum ActionType {
  SET_STATES = 'SET_STATES',
  TOGGLE_HIGHLIGHT = 'TOGGLE_HIGHLIGHT',
  SET_STATE_DETAILS = 'SET_STATE_DETAILS',
}

export type Action =
  | {
      type: ActionType.SET_STATES;
      payload: Pick<AppState, 'states'>;
    }
  | {
      type: ActionType.TOGGLE_HIGHLIGHT;
      payload: { stateName: string };
    }
  | {
      type: ActionType.SET_STATE_DETAILS;
      payload: { detail: string; counties: County[] };
    };

export interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<Action>;
}

export interface AppProviderProps {
  children: ReactNode;
}
