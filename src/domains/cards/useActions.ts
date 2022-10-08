import { ICard, ICardActions, ICardList } from "./types";
import { setMyCards } from "./storage";
import { addCardAction, removeCardAction, updateCardAction } from "./utils";

export const useActions = ({
  cards,
  setCards,
}: {
  cards: ICardList;
  setCards: React.Dispatch<React.SetStateAction<ICardList>>;
}): ICardActions => {
  const getCardById = (cardId: string): ICard | undefined => {
    return (cards || []).find((card: ICard) => card.id === cardId);
  };

  const addCard = (card: ICard) =>
    setCards((prevCards: ICardList) => {
      const newCards = addCardAction(prevCards, card);
      setMyCards(newCards);
      return newCards;
    });

  const updateCard = (card: ICard) =>
    setCards((prevCards: ICardList) => {
      const newCards = updateCardAction(prevCards, card);
      setMyCards(newCards);
      return newCards;
    });

  const removeCard = (cardId: string) =>
    setCards((prevCards: ICardList) => {
      const newCards = removeCardAction(prevCards, cardId);
      setMyCards(newCards);
      return newCards;
    });

  return {
    getCardById,
    addCard,
    updateCard,
    removeCard,
  };
};
