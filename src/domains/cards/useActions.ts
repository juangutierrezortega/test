import { ICard, ICardActions, ICardList } from "./types";
import { v4 as uuidv4 } from "uuid";

export const useActions = ({
  cards,
  setCards,
}: {
  cards: ICardList;
  setCards: React.Dispatch<React.SetStateAction<ICardList>>;
}): ICardActions => {
  console.log({ cards });

  const getCardById = (cardId: string): ICard | undefined => {
    return (cards || []).find((card: ICard) => card.id === cardId);
  };

  const addCard = (card: ICard) =>
    setCards((prevCards) => [...prevCards, { ...card, id: uuidv4() }]);

  const updateCard = (card: ICard) =>
    setCards((prevCards) =>
      [...prevCards || []].map((myCard: ICard) => {
        if (myCard.id === card.id) {
          return card;
        }
        return myCard;
      })
    );

  const removeCard = (cardId: string) =>
    setCards((prevCards) =>
      [...prevCards || []].filter((myCard: ICard) => myCard.id !== cardId)
    );

  return {
    getCardById,
    addCard,
    updateCard,
    removeCard,
  };
};
