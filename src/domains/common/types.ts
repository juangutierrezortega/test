import { ICard } from "../cards/types";

export enum OrderFieldTypeEnum {
  TEXT = "TEXT",
  NUMBER = "NUMBER",
}

export enum OrderTypeEnum {
  ASCENDING = "asc",
  DESCENDING = "desc",
  NONE = "",
}

export type FieldNames = keyof ICard

export type OrderBy = {
  fieldName: FieldNames,
  fieldType: OrderFieldTypeEnum,
  orderType: OrderTypeEnum,
}
