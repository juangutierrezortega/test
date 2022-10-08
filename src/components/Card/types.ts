import { ICard } from "../../domains/cards/types";

export interface CardProps {
  item: ICard;
  handleEdit: () => void;
  handleRemove: () => void;
}