import { useCards } from "../../domains/cards/context";
import View from "./view";

function LandingScren(props: any) {
  const { cards } = useCards();

  return <View {...props} cards={cards} />;
}

export default LandingScren;
