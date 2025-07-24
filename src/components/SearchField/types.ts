import { State } from '@/api';

export interface SearchFieldProps {
  states: State[];
  setFilteredStates: (states: State[]) => void;
}
