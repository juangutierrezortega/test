export interface ICard {
    id: string;
    title: string;
    description: string;
    imageUrl?: string;
};

export type ICardList = Array<ICard>;
