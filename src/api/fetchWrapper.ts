import { FetchWrapperParams } from './types';

export const fetchWrapper = async ({
  url,
  startLoading,
  finishLoading,
  setData,
  setError,
}: FetchWrapperParams) => {
  try {
    startLoading();
    setError(undefined);
    const response = await fetch(url);
    const json = await response.json();
    setData(json.data);
  } catch (err) {
    setError(err as Error);
  } finally {
    finishLoading();
  }
};
