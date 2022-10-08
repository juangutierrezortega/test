import { ICard, ICardList } from "../../domains/cards/types";

export interface CardListProps {
  items: ICardList;
  handleSelect: (card: ICard) => void;
  handleRemove: (cardId: string) => void;
}