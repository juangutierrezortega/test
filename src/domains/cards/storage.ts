import { getKeyValue, StorageKeys, setKeyValue } from '../../lib/storage';

export const getMyCards = async () => getKeyValue(StorageKeys.Cards);
export const setMyCards = async (myCards: any) =>
  setKeyValue(myCards, StorageKeys.Cards);
