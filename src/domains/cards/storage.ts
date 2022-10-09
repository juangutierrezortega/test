import { getKeyValue, StorageKeys, setKeyValue } from "../../lib/storage";

import { ICardList } from "./types";

export const getMyCards = async () => getKeyValue(StorageKeys.Cards);
export const setMyCards = async (myCards: ICardList) =>
  setKeyValue(myCards, StorageKeys.Cards);
