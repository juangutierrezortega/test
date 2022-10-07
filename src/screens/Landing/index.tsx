import { useEffect } from "react";
import { useCards } from "../../domains/cards/context";
import { ICard } from "../../domains/cards/types";
import View from "./view";

const cardItem: ICard = {
  title: "Test tile",
  description: "Description test",
};

function LandingScren(props: any) {
  const { cards, setCards } = useCards();

  useEffect(() => {
    setCards([cardItem]);
  }, [setCards]);

  return <View {...props} cards={cards} />;
}

export default LandingScren;
