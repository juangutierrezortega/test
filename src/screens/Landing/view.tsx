import FloatingActionButton from "../../components/FloatingActionButton";
import Card from "../../components/Card";
import { Container } from "./styles";
import { ICard } from "../../domains/cards/types";

const LandingScreen = ({ cards = [] }) => {
  console.log({cards})
  return (
    <Container>
      {
        cards.map((card: ICard) => <Card item={card}/>)
      }
      <FloatingActionButton aria-label="add" id="addButton"/>
    </Container>
  );
}

export default LandingScreen;
