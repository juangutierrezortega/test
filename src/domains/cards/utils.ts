import { ICard, ICardList } from "./types";
import { v4 as uuidv4 } from "uuid";
import { OrderBy, OrderFieldTypeEnum, OrderTypeEnum } from "../common/types";

export const addCardAction = (prevCards: ICardList, card: ICard) => [
  ...prevCards,
  { ...card, id: uuidv4(), createdAt: new Date().getTime() },
];

export const updateCardAction = (prevCards: ICardList, card: ICard) =>
  [...(prevCards || [])].map((myCard: ICard) => {
    if (myCard.id === card.id) {
      return card;
    }
    return myCard;
  });

export const removeCardAction = (prevCards: ICardList, cardId: string) =>
  [...(prevCards || [])].filter((myCard: ICard) => myCard.id !== cardId);

const getNumber = (number: any): number => parseInt(number, 10) || 0;
const getText = (text: any): string => text || "";

const orderByNumberAsc = (prevCards: ICardList, fieldName: keyof ICard) =>
  [...(prevCards || [])].sort(
    (a: ICard, b: ICard) => getNumber(a[fieldName]) - getNumber(b[fieldName])
  );

const orderByNumberDesc = (prevCards: ICardList, fieldName: keyof ICard) =>
  [...(prevCards || [])].sort(
    (a: ICard, b: ICard) => getNumber(b[fieldName]) - getNumber(a[fieldName])
  );

const orderByTextAsc = (prevCards: ICardList, fieldName: keyof ICard) =>
  [...(prevCards || [])].sort((a: ICard, b: ICard) =>
    getText(a[fieldName]) > getText(b[fieldName]) ? 1 : -1
  );

const orderByTextDesc = (prevCards: ICardList, fieldName: keyof ICard) =>
  [...(prevCards || [])].sort((a: ICard, b: ICard) =>
    getText(a[fieldName]) > getText(b[fieldName]) ? -1 : 1
  );

const noOrder = (prevCards: ICardList) => prevCards 

const ORDERS_BY = {
    [OrderFieldTypeEnum.TEXT]: {
        [OrderTypeEnum.ASCENDING]: orderByTextAsc,
        [OrderTypeEnum.DESCENDING]: orderByTextDesc,
        [OrderTypeEnum.NONE]: noOrder,
    },
    [OrderFieldTypeEnum.NUMBER]: {
        [OrderTypeEnum.ASCENDING]: orderByNumberAsc,
        [OrderTypeEnum.DESCENDING]: orderByNumberDesc,
        [OrderTypeEnum.NONE]: noOrder,
    },
}

export const orderData = (cards: ICardList, orderBy: OrderBy) => {
    const orderFieldType = ORDERS_BY[orderBy?.fieldType];
    const orderAction = orderFieldType ? orderFieldType[orderBy?.orderType] : null;

    if (orderAction) {
      return orderAction(cards, orderBy.fieldName)
    }
    return cards;
}
