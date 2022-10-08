import { ICard, ICardActions, ICardList } from "./types";
import { v4 as uuidv4 } from "uuid";
import { setMyCards } from "./storage";

const addCardAction = (prevCards: ICardList, card: ICard) => [
  ...prevCards,
  { ...card, id: uuidv4() },
];

const updateCardAction = (prevCards: ICardList, card: ICard) =>
  [...(prevCards || [])].map((myCard: ICard) => {
    if (myCard.id === card.id) {
      return card;
    }
    return myCard;
  });

const removeCardAction = (prevCards: ICardList, cardId: string) =>
  [...(prevCards || [])].filter((myCard: ICard) => myCard.id !== cardId);

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
