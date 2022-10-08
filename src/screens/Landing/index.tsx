import { useModal } from "../../components/Modal";
import { useCards } from "../../domains/cards/context";
import View from "./view";

function LandingScren(props: any) {
  const { cards, ...actions } = useCards();
  const modal = useModal();

  return <View {...props} cards={cards} {...actions} {...modal} />;
}

export default LandingScren;
