import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { OrderBy } from "../common/types";
import { ICardsContext, ICardActions, ICardList } from "./types";
import { useActions } from "./useActions";
import { orderData } from "./utils";

const CardsContext = createContext<ICardsContext>({} as ICardsContext);

export function ProvideCards({ children }: { children: React.ReactNode }) {
  const [cards, setCards] = useState<ICardList>([]);

  const { getCardById, addCard, updateCard, removeCard }: ICardActions =
    useActions({ cards, setCards });

  const fetchCards = useCallback(
    (orderBy: OrderBy): ICardList => orderData(cards, orderBy),
    [cards]
  );

  const value: ICardsContext = useMemo(
    () => ({
      fetchCards,
      setCards,
      getCardById,
      addCard,
      updateCard,
      removeCard,
    }),
    [fetchCards, setCards, getCardById, addCard, updateCard, removeCard]
  );

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}

export const useCards = () => {
  return useContext(CardsContext);
};
