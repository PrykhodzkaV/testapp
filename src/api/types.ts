import { StateItem } from '@/types';

export interface State {
  state: string;
  population: number;
  counties: number;
  detail: string;
}

export interface County {
  county: string;
  population: number;
}

export interface FetchWrapperParams {
  url: string;
  startLoading: () => void;
  finishLoading: () => void;
  setData: (data: unknown[]) => void;
  setError: (error?: Error) => void;
}
