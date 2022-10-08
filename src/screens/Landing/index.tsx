import { useEffect } from "react";
import { useCards } from "../../domains/cards/context";
import { ICard, ICardList } from "../../domains/cards/types";
import { v4 as uuidv4 } from "uuid";
import View from "./view";

const cardsList: ICardList = [
  {
    id: uuidv4(),
    title: "Test tile",
    description: "Description test",
  },
  {
    id: uuidv4(),
    title: "Test tile",
    description: "Description test",
  },
  {
    id: uuidv4(),
    title: "Test tile",
    description: "Description test",
  },
  {
    id: uuidv4(),
    title: "Test tile",
    description: "Description test",
  },
  {
    id: uuidv4(),
    title: "Test tile",
    description: "Description test",
  },
];

function LandingScren(props: any) {
  const { cards, setCards } = useCards();

  useEffect(() => {
    setCards(cardsList);
  }, [setCards]);

  return <View {...props} cards={cards} />;
}

export default LandingScren;
