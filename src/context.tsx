import React, { createContext, useReducer } from 'react';

import { appReducer, initialState } from './state';
import { Action, AppContextType, AppProviderProps, AppState } from './types';

export const AppContext = createContext<AppContextType>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(
    appReducer as React.Reducer<AppState, Action>,
    initialState,
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
