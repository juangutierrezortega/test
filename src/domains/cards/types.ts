export interface ICard {
  id?: string;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt?: number;
}

export type ICardList = Array<ICard>;

export interface ICardActions {
  getCardById: (cardId: string) => ICard | undefined;
  addCard: (card: ICard) => void;
  updateCard: (card: ICard) => void;
  removeCard: (cardId: string) => void;
}

export interface ICardsContext extends ICardActions {
  cards: ICardList;
  setCards: React.Dispatch<React.SetStateAction<ICardList>>;
}
