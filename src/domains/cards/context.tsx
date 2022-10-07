import React, { createContext, useContext, useMemo, useState } from 'react';
import { ICardList } from './types';

type CardsType = {
  cards: ICardList;
  setCards: any;
};

const CardsContext = createContext<CardsType>({} as CardsType);

export function ProvideCards({ children }: any) {
  const [cards, setCards] = useState<ICardList>([]);

  const value: CardsType = useMemo(
    () => ({ cards, setCards }),
    [cards, setCards]
  );
  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}

export const useCards = () => {
  return useContext(CardsContext);
};
