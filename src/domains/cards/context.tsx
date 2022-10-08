import React, { createContext, useContext, useMemo, useState } from "react";
import { ICardsContext, ICardActions, ICardList } from "./types";
import { useActions } from "./useActions";

const CardsContext = createContext<ICardsContext>({} as ICardsContext);

export function ProvideCards({ children }: any) {
  const [cards, setCards] = useState<ICardList>([]);

  const { getCardById, addCard, updateCard, removeCard }: ICardActions =
    useActions({ cards, setCards });

  const value: ICardsContext = useMemo(
    () => ({ cards, setCards, getCardById, addCard, updateCard, removeCard }),
    [cards, setCards, getCardById, addCard, updateCard, removeCard]
  );

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}

export const useCards = () => {
  return useContext(CardsContext);
};
