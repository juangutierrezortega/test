export interface ICard {
    title: string;
    description: string;
    imageUrl?: string;
};

export type ICardList = Array<ICard>;
