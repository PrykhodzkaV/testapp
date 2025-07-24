import { ReactNode } from 'react';

import { County, State } from '@/api';

export type StateItem = {
  isHighlighted?: boolean;
  stateDetails?: County[];
} & State;

export interface AppState {
  states: StateItem[];
  error: Error | undefined;
  isLoading: boolean;
}
export enum ActionType {
  SET_STATES = 'SET_STATES',
  SET_ERROR = 'SET_ERROR',
  SET_LOADING = 'SET_LOADING',
  TOGGLE_HIGHLIGHT = 'TOGGLE_HIGHLIGHT',
  SET_STATE_DETAILS = 'SET_STATE_DETAILS',
}

export type Action =
  | {
      type: ActionType.SET_STATES;
      payload: Pick<AppState, 'states'>;
    }
  | {
      type: ActionType.SET_ERROR;
      payload: Pick<AppState, 'error'>;
    }
  | {
      type: ActionType.SET_LOADING;
      payload: {
        isLoading: boolean;
      };
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
